import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Flame,
  Users,
  Eye,
  Palette,
  BookOpen,
  Quote,
  Check,
  ArrowRight
} from 'lucide-react';
import { Work, MindmapBranch } from '../../types';

interface WorkMindmapModalProps {
  work: Work | null;
  onClose: () => void;
  onDissectDetail?: (detailId: string) => void;
}

export const WorkMindmapModal: React.FC<WorkMindmapModalProps> = ({
  work,
  onClose,
  onDissectDetail
}) => {
  const [selectedBranchIndex, setSelectedBranchIndex] = useState<number>(0);

  if (!work) return null;

  const getBranchIcon = (category: string) => {
    switch (category) {
      case 'Chủ đề': return Flame;
      case 'Nhân vật': return Users;
      case 'Chi tiết cốt lõi': return Sparkles;
      case 'Hình ảnh': return Eye;
      case 'Nghệ thuật': return Palette;
      case 'Thông điệp': return BookOpen;
      case 'Dẫn chứng đắt giá': return Quote;
      default: return Sparkles;
    }
  };

  const activeBranch: MindmapBranch = work.mindmap[selectedBranchIndex] || work.mindmap[0];
  const ActiveIcon = getBranchIcon(activeBranch?.category || '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Bộ Não Văn Học (Sơ Đồ Tư Duy)</h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  Mindmap
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Tác phẩm: <strong className="text-slate-800 dark:text-slate-200">{work.title}</strong> — {work.author}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mindmap Content Layout */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left Root & Branches List (5 cols) */}
          <div className="md:col-span-4 border-r border-slate-100 dark:border-slate-800 p-4 overflow-y-auto space-y-3 bg-slate-50/30 dark:bg-slate-950/20">
            {/* Center Node */}
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-indigo-700 to-violet-800 text-white text-center shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">Gốc Tư Duy</span>
              <h4 className="text-lg font-extrabold mt-0.5">{work.title}</h4>
              <p className="text-xs text-indigo-100">{work.genre} • Năm {work.year}</p>
            </div>

            <div className="text-[11px] font-bold uppercase text-slate-400 px-2 pt-2">
              Các Nhánh Tri Thức (Click để xem)
            </div>

            {/* Branch navigation buttons */}
            <div className="space-y-1.5">
              {work.mindmap.map((branch, index) => {
                const Icon = getBranchIcon(branch.category);
                const isSelected = selectedBranchIndex === index;
                return (
                  <button
                    key={branch.category}
                    onClick={() => setSelectedBranchIndex(index)}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 shadow-sm'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm ${branch.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">{branch.category}</span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {branch.items.length} ý
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Items of the Selected Branch (8 cols) */}
          <div className="md:col-span-8 p-6 overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <ActiveIcon className={`w-5 h-5 ${activeBranch.color}`} />
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                  Nhánh: {activeBranch.category}
                </h4>
              </div>
              <span className="text-xs text-slate-400">
                Hiển thị {activeBranch.items.length} luận điểm chi tiết
              </span>
            </div>

            <div className="space-y-3.5">
              {activeBranch.items.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 shadow-sm space-y-2 hover:border-indigo-400 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                    {item.description}
                  </p>
                  {item.quote && (
                    <div className="mt-2 ml-8 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border-l-2 border-amber-500 text-xs font-serif-literary italic text-slate-700 dark:text-slate-300">
                      "{item.quote}"
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick action button to dissect details */}
            {work.details.length > 0 && onDissectDetail && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  Muốn mổ xẻ từng câu thơ và chi tiết của bài này theo 5 tầng?
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onDissectDetail(work.details[0].id);
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Mổ xẻ chi tiết tác phẩm</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
