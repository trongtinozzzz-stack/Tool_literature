import React, { useState } from 'react';
import {
  NotebookTabs,
  Search,
  Plus,
  Trash2,
  Tag,
  Star,
  Sparkles,
  Quote,
  AlertCircle,
  Lightbulb,
  Check,
  X
} from 'lucide-react';
import { NotebookEntry } from '../../types';
import { addNotebookEntry, getStoredUserState, saveUserState } from '../../services/storage/storageService';

interface NotebookViewProps {
  entries: NotebookEntry[];
  onRefreshEntries: () => void;
  onAddSuccessToast: (msg: string) => void;
}

export const NotebookView: React.FC<NotebookViewProps> = ({
  entries,
  onRefreshEntries,
  onAddSuccessToast
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Note Form
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newType, setNewType] = useState<NotebookEntry['type']>('detail');
  const [newTags, setNewTags] = useState('Chi tiết hay, Lớp 9');
  const [newSource, setNewSource] = useState('');

  const typeConfig: Record<NotebookEntry['type'], { label: string; color: string; icon: React.ComponentType<{ className?: string }> }> = {
    detail: { label: 'Chi tiết hay', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300', icon: Sparkles },
    sentence: { label: 'Câu văn hay', color: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300', icon: Star },
    vocab: { label: 'Từ vựng', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300', icon: Tag },
    evidence: { label: 'Dẫn chứng đắt', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300', icon: Quote },
    idea: { label: 'Ý tưởng phân tích', color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300', icon: Lightbulb },
    mistake: { label: 'Lỗi thường mắc', color: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300', icon: AlertCircle }
  };

  const allTags = ['Tất cả', ...Array.from(new Set(entries.flatMap(e => e.tags)))];

  const filteredEntries = entries.filter(e => {
    const matchesTag = selectedTag === 'Tất cả' || e.tags.includes(selectedTag);
    const matchesSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.sourceWork && e.sourceWork.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  const handleCreateEntry = () => {
    if (!newTitle.trim() || !newContent.trim()) return;

    const tagsArray = newTags.split(/[,;]+/).map(t => t.trim()).filter(Boolean);
    addNotebookEntry({
      type: newType,
      title: newTitle,
      content: newContent,
      sourceWork: newSource || undefined,
      tags: tagsArray
    });

    onRefreshEntries();
    setIsAddModalOpen(false);
    setNewTitle('');
    setNewContent('');
    setNewSource('');
    onAddSuccessToast('Đã thêm ghi chú mới vào Sổ tay!');
  };

  const handleDeleteEntry = (id: string) => {
    const state = getStoredUserState();
    state.savedNotebookEntries = state.savedNotebookEntries.filter(e => e.id !== id);
    saveUserState(state);
    onRefreshEntries();
    onAddSuccessToast('Đã xóa ghi chú');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <NotebookTabs className="w-7 h-7 text-indigo-600" />
            <span>Sổ Tay Văn Học Cá Nhân</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Nơi lưu trữ chi tiết đắc giá, câu văn hay, dẫn chứng vàng và những lỗi thường mắc để ôn tập
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm ghi chú mới</span>
        </button>
      </div>

      {/* Search & Tag Filter Pills */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm ghi chú trong sổ tay..."
            className="w-full px-3.5 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Entries Grid */}
      {filteredEntries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEntries.map((entry) => {
            const conf = typeConfig[entry.type] || typeConfig.detail;
            const Icon = conf.icon;
            return (
              <div
                key={entry.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${conf.color}`}>
                      <Icon className="w-3 h-3" />
                      <span>{conf.label}</span>
                    </span>
                    <span className="text-[10px] text-slate-400">{entry.createdAt}</span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                    {entry.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-serif-literary whitespace-pre-line">
                    {entry.content}
                  </p>

                  {entry.sourceWork && (
                    <div className="text-[11px] text-slate-400 italic">
                      Nguồn: {entry.sourceWork}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 pt-1">
                    {entry.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
                  <button
                    onClick={() => handleDeleteEntry(entry.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                    title="Xóa ghi chú"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
          Chưa có ghi chú nào phù hợp. Hãy nhấn <strong>"Thêm ghi chú mới"</strong> hoặc lưu chi tiết từ bài học!
        </div>
      )}

      {/* Add New Note Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Thêm Ghi Chú Vào Sổ Tay
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Loại mục lưu trữ:</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as NotebookEntry['type'])}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-xs"
                >
                  <option value="detail">⭐ Chi tiết hay</option>
                  <option value="sentence">⭐ Câu văn hay</option>
                  <option value="vocab">⭐ Từ vựng</option>
                  <option value="evidence">⭐ Dẫn chứng đắt</option>
                  <option value="idea">⭐ Ý tưởng phân tích</option>
                  <option value="mistake">⭐ Lỗi thường mắc</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Tiêu đề ghi chú:</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ví dụ: Cái nắm tay trong Đồng chí"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Nội dung ghi nhớ:</label>
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  rows={4}
                  placeholder="Nhập nội dung câu văn, dẫn chứng hoặc bài học cần ghi nhớ..."
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Nguồn / Tác phẩm (nếu có):</label>
                <input
                  type="text"
                  value={newSource}
                  onChange={(e) => setNewSource(e.target.value)}
                  placeholder="Ví dụ: Đồng chí - Chính Hữu"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Thẻ tag (cách nhau bằng dấu phẩy):</label>
                <input
                  type="text"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="Chi tiết hay, Lớp 9, Ôn thi vào 10"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300"
              >
                Hủy
              </button>
              <button
                onClick={handleCreateEntry}
                disabled={!newTitle.trim() || !newContent.trim()}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md"
              >
                Lưu ghi chú
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
