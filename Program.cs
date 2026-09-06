using System;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

namespace VanHoc10
{
    class Program
    {
        private static DateTime lastHeartbeat = DateTime.UtcNow;
        private static readonly object lockObj = new object();
        private const int AppPort = 5178;

        [STAThread]
        static void Main(string[] args)
        {
            string baseDir = AppDomain.CurrentDomain.BaseDirectory;
            string logFile = Path.Combine(baseDir, "app.log");
            try
            {
                File.AppendAllText(logFile, "\n[" + DateTime.Now.ToString("HH:mm:ss") + "] Main started\n");
                RealMain(args, baseDir, logFile);
            }
            catch (Exception ex)
            {
                File.AppendAllText(logFile, "FATAL CRASH: " + ex.ToString() + "\n");
            }
        }

        static void RealMain(string[] args, string baseDir, string logFile)
        {
            const string mutexName = "Global\\VanHoc10_SingleInstance_Mutex_v3";
            bool isFirstInstance = false;
            Mutex mutex = null;

            try
            {
                mutex = new Mutex(true, mutexName, out isFirstInstance);
                File.AppendAllText(logFile, "Mutex acquired. isFirstInstance: " + isFirstInstance + "\n");
            }
            catch (Exception ex)
            {
                File.AppendAllText(logFile, "Mutex exception: " + ex.Message + "\n");
                isFirstInstance = false;
            }

            string appUrl = "http://localhost:" + AppPort + "/";

            // If an instance is already running, just bring up or launch the browser window and exit
            if (!isFirstInstance)
            {
                File.AppendAllText(logFile, "Not first instance, launching browser and exiting\n");
                LaunchBrowser(appUrl);
                return;
            }

            string distDir = Path.Combine(baseDir, "dist");
            if (!Directory.Exists(distDir))
            {
                distDir = baseDir;
            }

            File.AppendAllText(logFile, "Dist dir: " + distDir + "\n");

            // Start HTTP Server
            HttpListener listener = new HttpListener();
            try
            {
                listener.Prefixes.Add("http://localhost:" + AppPort + "/");
                listener.Start();
                File.AppendAllText(logFile, "HttpListener started on http://localhost:" + AppPort + "/\n");
            }
            catch (Exception ex)
            {
                File.AppendAllText(logFile, "HttpListener error on " + AppPort + ": " + ex.Message + "\n");
                int dynamicPort = GetFreePort();
                appUrl = "http://localhost:" + dynamicPort + "/";
                listener.Prefixes.Clear();
                listener.Prefixes.Add(appUrl);
                listener.Start();
                File.AppendAllText(logFile, "HttpListener fallback started on " + appUrl + "\n");
            }

            Thread serverThread = new Thread(() =>
            {
                while (listener.IsListening)
                {
                    try
                    {
                        HttpListenerContext context = listener.GetContext();
                        ThreadPool.QueueUserWorkItem((_) => ProcessRequest(context, distDir));
                    }
                    catch
                    {
                        break;
                    }
                }
            });
            serverThread.IsBackground = true;
            serverThread.Start();

            // Launch Browser Window in dedicated desktop app mode
            LaunchBrowser(appUrl);

            DateTime startTime = DateTime.UtcNow;
            lock (lockObj)
            {
                lastHeartbeat = DateTime.UtcNow;
            }

            // Keep the server running as long as the window is open
            while (true)
            {
                Thread.Sleep(2500);

                DateTime currentHeartbeat;
                lock (lockObj)
                {
                    currentHeartbeat = lastHeartbeat;
                }

                double secondsSinceLastHeartbeat = (DateTime.UtcNow - currentHeartbeat).TotalSeconds;
                double secondsSinceStart = (DateTime.UtcNow - startTime).TotalSeconds;

                // 90 seconds grace period on initial launch
                if (secondsSinceStart > 90 && secondsSinceLastHeartbeat > 15)
                {
                    // Student closed all app windows -> exit cleanly
                    break;
                }
            }

            try
            {
                listener.Stop();
                listener.Close();
            }
            catch { }

            if (mutex != null)
            {
                try { mutex.ReleaseMutex(); } catch { }
                mutex.Close();
            }
        }

        static void LaunchBrowser(string url)
        {
            string browserPath = FindBrowser();
            string appDataDir = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "VanHoc10_Profile");

            if (!Directory.Exists(appDataDir))
            {
                try { Directory.CreateDirectory(appDataDir); } catch { }
            }

            if (!string.IsNullOrEmpty(browserPath) && File.Exists(browserPath))
            {
                string arguments = string.Format("--app=\"{0}\" --user-data-dir=\"{1}\" --window-size=1300,850 --no-first-run --no-default-browser-check --disable-features=TranslateUI --app-id=VanHoc10", url, appDataDir);
                ProcessStartInfo psi = new ProcessStartInfo
                {
                    FileName = browserPath,
                    Arguments = arguments,
                    UseShellExecute = true
                };
                Process.Start(psi);
            }
            else
            {
                ProcessStartInfo psi = new ProcessStartInfo
                {
                    FileName = url,
                    UseShellExecute = true
                };
                Process.Start(psi);
            }
        }

        static int GetFreePort()
        {
            TcpListener l = new TcpListener(IPAddress.Loopback, 0);
            l.Start();
            int p = ((IPEndPoint)l.LocalEndpoint).Port;
            l.Stop();
            return p;
        }

        static string FindBrowser()
        {
            string[] paths = new string[]
            {
                @"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
                @"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
                @"C:\Program Files\Google\Chrome\Application\chrome.exe",
                @"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
            };

            foreach (string p in paths)
            {
                if (File.Exists(p)) return p;
            }

            return null;
        }

        static void ProcessRequest(HttpListenerContext context, string distDir)
        {
            try
            {
                string rawUrl = context.Request.Url.AbsolutePath;

                // Handle heartbeat
                if (rawUrl.Equals("/api/heartbeat", StringComparison.OrdinalIgnoreCase))
                {
                    lock (lockObj)
                    {
                        lastHeartbeat = DateTime.UtcNow;
                    }
                    byte[] okBytes = Encoding.UTF8.GetBytes("{\"status\":\"ok\"}");
                    context.Response.StatusCode = 200;
                    context.Response.ContentType = "application/json";
                    context.Response.ContentLength64 = okBytes.Length;
                    if (context.Request.HttpMethod != "HEAD")
                    {
                        context.Response.OutputStream.Write(okBytes, 0, okBytes.Length);
                    }
                    context.Response.OutputStream.Close();
                    return;
                }

                if (rawUrl == "/" || string.IsNullOrEmpty(rawUrl))
                {
                    rawUrl = "/index.html";
                }

                string relativePath = rawUrl.TrimStart('/').Replace('/', Path.DirectorySeparatorChar);
                string filePath = Path.Combine(distDir, relativePath);

                // SPA Fallback: If requested asset doesn't exist, serve index.html
                if (!File.Exists(filePath))
                {
                    filePath = Path.Combine(distDir, "index.html");
                }

                byte[] buffer = File.ReadAllBytes(filePath);
                string ext = Path.GetExtension(filePath).ToLowerInvariant();
                string contentType = GetContentType(ext);

                context.Response.StatusCode = 200;
                context.Response.ContentType = contentType;
                context.Response.ContentLength64 = buffer.Length;
                context.Response.AddHeader("Cache-Control", "no-cache");

                // Only write body if not a HEAD request
                if (context.Request.HttpMethod != "HEAD")
                {
                    context.Response.OutputStream.Write(buffer, 0, buffer.Length);
                }
                context.Response.OutputStream.Close();
            }
            catch
            {
                try
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.OutputStream.Close();
                }
                catch { }
            }
        }

        static string GetContentType(string ext)
        {
            switch (ext)
            {
                case ".html": return "text/html; charset=utf-8";
                case ".css": return "text/css; charset=utf-8";
                case ".js": return "application/javascript; charset=utf-8";
                case ".json": return "application/json; charset=utf-8";
                case ".png": return "image/png";
                case ".jpg":
                case ".jpeg": return "image/jpeg";
                case ".svg": return "image/svg+xml";
                case ".ico": return "image/x-icon";
                case ".woff": return "font/woff";
                case ".woff2": return "font/woff2";
                case ".ttf": return "font/ttf";
                default: return "application/octet-stream";
            }
        }

        static void CreateAppIcon(string iconPath)
        {
            try
            {
                int size = 64;
                using (Bitmap bmp = new Bitmap(size, size, PixelFormat.Format32bppArgb))
                using (Graphics g = Graphics.FromImage(bmp))
                {
                    g.SmoothingMode = SmoothingMode.AntiAlias;
                    g.Clear(Color.FromArgb(79, 70, 229));

                    using (SolidBrush whiteBrush = new SolidBrush(Color.White))
                    using (SolidBrush goldBrush = new SolidBrush(Color.FromArgb(251, 191, 36)))
                    {
                        Point[] leftPage = new Point[]
                        {
                            new Point(14, 20),
                            new Point(30, 24),
                            new Point(30, 46),
                            new Point(14, 42)
                        };
                        g.FillPolygon(whiteBrush, leftPage);

                        Point[] rightPage = new Point[]
                        {
                            new Point(34, 24),
                            new Point(50, 20),
                            new Point(50, 42),
                            new Point(34, 46)
                        };
                        g.FillPolygon(whiteBrush, rightPage);

                        Point[] ribbon = new Point[]
                        {
                            new Point(30, 16),
                            new Point(34, 16),
                            new Point(34, 34),
                            new Point(32, 31),
                            new Point(30, 34)
                        };
                        g.FillPolygon(goldBrush, ribbon);
                    }

                    IntPtr hIcon = bmp.GetHicon();
                    using (Icon icon = Icon.FromHandle(hIcon))
                    using (FileStream fs = new FileStream(iconPath, FileMode.Create))
                    {
                        icon.Save(fs);
                    }
                }
            }
            catch { }
        }

        static void CreateShortcut(string shortcutPath, string targetExePath, string workingDir, string iconPath)
        {
            try
            {
                Type shellType = Type.GetTypeFromProgID("WScript.Shell");
                if (shellType == null) return;
                dynamic shell = Activator.CreateInstance(shellType);
                dynamic shortcut = shell.CreateShortcut(shortcutPath);
                shortcut.TargetPath = targetExePath;
                shortcut.WorkingDirectory = workingDir;
                shortcut.Description = "Văn Học 10+ - Ôn Thi Ngữ Văn Vào Lớp 10";
                if (File.Exists(iconPath))
                {
                    shortcut.IconLocation = iconPath + ",0";
                }
                shortcut.Save();
            }
            catch { }
        }
    }
}
