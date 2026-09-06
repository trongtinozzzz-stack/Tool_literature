[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Get-ChildItem ([Environment]::GetFolderPath('Desktop')) -Filter "*10*.lnk" | Remove-Item -Force

$desktop = [Environment]::GetFolderPath('Desktop')
$shortcutName = "Van Hoc 10+.lnk"
$desktopPath = [System.IO.Path]::Combine($desktop, $shortcutName)
$targetExe = 'D:\Code_Tino_01_09\Tool_literature\VanHoc10.exe'
$workingDir = 'D:\Code_Tino_01_09\Tool_literature'
$iconPath = 'D:\Code_Tino_01_09\Tool_literature\app.ico'

$wshShell = New-Object -ComObject WScript.Shell
$shortcut = $wshShell.CreateShortcut($desktopPath)
$shortcut.TargetPath = $targetExe
$shortcut.WorkingDirectory = $workingDir
$shortcut.Description = 'Van Hoc 10+ - On Thi Ngu Van Vao Lop 10'

if (Test-Path $iconPath) {
    $shortcut.IconLocation = "$iconPath,0"
}

$shortcut.Save()
Write-Host "Created Desktop shortcut: $desktopPath"
