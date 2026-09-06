import React from 'react';
import {
  Home,
  BookOpen,
  Search,
  BookMarked,
  PenTool,
  FileText,
  Bot,
  NotebookTabs,
  BarChart3,
  Moon,
  Sun,
  X
} from 'lucide-react';

export type NavTabId = 
  | 'dashboard'
  | 'works'
  | 'dissect'
  | 'vocab'
  | 'essay'
  | 'exam'
  | 'ai-tutor'
  | 'notebook'
  | 'progress';

interface SidebarProps {
  currentTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  isDarkMode,
  onToggleDarkMode,
  isOpenMobile,
  onCloseMobile
}) => {
  const navItems: { id: NavTabId; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string }[] = [
    { id: 'dashboard', label: 'Trang chủ', icon: Home },
    { id: 'works', label: 'Tác phẩm', icon: BookOpen, badge: 'Lớp 9' },
    { id: 'dissect', label: 'Mổ xẻ tác phẩm', icon: Search, badge: '5 Tầng' },
    { id: 'vocab', label: 'Vốn từ vựng', icon: BookMarked },
    { id: 'essay', label: 'Luyện viết & Sửa bài', icon: PenTool, badge: 'AI Chấm' },
    { id: 'exam', label: 'Luyện đề vào 10', icon: FileText, badge: 'Hot' },
    { id: 'ai-tutor', label: 'Cô giáo Văn AI', icon: Bot },
    { id: 'notebook', label: 'Sổ tay cá nhân', icon: NotebookTabs },
    { id: 'progress', label: 'Tiến độ & Ôn tập', icon: BarChart3 }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo Section */}
        <div className="h-18 px-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">Văn Học 10+</span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">THCS</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Luyện thi vào lớp 10</p>
            </div>
          </div>
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Học tập & Ôn luyện
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom profile / Theme bar */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                2K
              </div>
              <div className="truncate">
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Sĩ tử 2K10</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Mục tiêu 8.5+ Vào 10</div>
              </div>
            </div>
            <button
              onClick={onToggleDarkMode}
              title={isDarkMode ? 'Chuyển sang Chế độ sáng' : 'Chuyển sang Chế độ tối'}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-400 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
