import React, { useState } from 'react';
import {
  Menu,
  Flame,
  Search,
  Settings,
  Sparkles,
  BookMarked
} from 'lucide-react';
import { NavTabId } from './Sidebar';
import { worksData } from '../../data/worksData';
import { vocabularyData } from '../../data/vocabularyData';

interface HeaderProps {
  onOpenMobileSidebar: () => void;
  streakDays: number;
  onNavigate: (tab: NavTabId) => void;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileSidebar,
  streakDays,
  onNavigate,
  onOpenSettings
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredWorks = searchQuery.trim()
    ? worksData.filter(w =>
        w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredVocab = searchQuery.trim()
    ? vocabularyData.filter(v =>
        v.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Mở menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search Bar */}
        <div className="relative">
          <div className="relative w-56 sm:w-72 md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Tìm tác phẩm, tác giả, vốn từ..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Quick search popup results */}
          {isSearchOpen && searchQuery.trim() && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setIsSearchOpen(false)}
              />
              <div className="absolute top-full left-0 right-0 mt-2 z-30 p-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 max-h-80 overflow-y-auto">
                <div className="px-2 py-1 text-[11px] font-bold uppercase text-slate-400">
                  Tác phẩm ({filteredWorks.length})
                </div>
                {filteredWorks.map((work) => (
                  <div
                    key={work.id}
                    onClick={() => {
                      onNavigate('works');
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100">{work.title}</div>
                      <div className="text-[11px] text-slate-500">{work.author} ({work.genre})</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                      Xem
                    </span>
                  </div>
                ))}

                <div className="mt-2 px-2 py-1 text-[11px] font-bold uppercase text-slate-400 border-t border-slate-100 dark:border-slate-800">
                  Vốn từ ({filteredVocab.length})
                </div>
                {filteredVocab.map((vocab) => (
                  <div
                    key={vocab.id}
                    onClick={() => {
                      onNavigate('vocab');
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-indigo-600 dark:text-indigo-400">{vocab.word}</span>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{vocab.meaning}</p>
                    </div>
                    <span className="text-[10px] text-slate-400">{vocab.level}</span>
                  </div>
                ))}

                {filteredWorks.length === 0 && filteredVocab.length === 0 && (
                  <div className="p-4 text-center text-xs text-slate-400">
                    Không tìm thấy kết quả phù hợp cho "{searchQuery}"
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Action Badges */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Streak badge */}
        <div
          title={`Chuỗi học liên tiếp ${streakDays} ngày! Hãy tiếp tục duy trì nhé`}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold cursor-default"
        >
          <Flame className="w-4 h-4 text-orange-500 animate-pulse fill-orange-500" />
          <span>{streakDays} ngày</span>
        </div>

        {/* Notebook Quick Shortcut */}
        <button
          onClick={() => onNavigate('notebook')}
          title="Mở Sổ tay cá nhân"
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
        >
          <BookMarked className="w-4 h-4 text-indigo-500" />
          <span className="hidden sm:inline text-xs font-medium">Sổ tay</span>
        </button>

        {/* AI Tutor Quick Shortcut */}
        <button
          onClick={() => onNavigate('ai-tutor')}
          title="Hỏi Cô giáo Văn AI"
          className="px-2.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors flex items-center gap-1.5 text-xs font-medium"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span className="hidden sm:inline">Hỏi Cô Văn AI</span>
        </button>

        {/* Settings button */}
        <button
          onClick={onOpenSettings}
          title="Cài đặt hệ thống"
          className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
