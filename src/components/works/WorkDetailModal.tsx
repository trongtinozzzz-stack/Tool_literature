import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  HelpCircle,
  Search,
  BrainCircuit,
  ArrowRight,
  Bookmark
} from 'lucide-react';
import { Work } from '../../types';

interface WorkDetailModalProps {
  work: Work | null;
  onClose: () => void;
  onOpenMindmap: (work: Work) => void;
  onDissectDetail: (detailId: string) => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  work,
  onClose,
  onOpenMindmap,
  onDissectDetail
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'characters' | 'exam'>('overview');

  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Banner Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${work.coverGradient} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
              {work.genre}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/90 text-slate-900 text-xs font-bold">
              {work.category}
            </span>
            <span className="text-xs text-white/80">Lớp {work.grade} • Năm {work.year}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold">{work.title}</h2>
          <p className="text-white/90 text-sm mt-1 font-medium">{work.author}</p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <button
              onClick={() => {
                onClose();
                onOpenMindmap(work);
              }}
              className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 transition-all"
            >
              <BrainCircuit className="w-4 h-4" />
              <span>Sơ đồ Bộ Não Văn Học</span>
            </button>
            {work.details.length > 0 && (
              <button
                onClick={() => {
                  onClose();
                  onDissectDetail(work.details[0].id);
                }}
                className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 flex items-center gap-1.5 shadow-md transition-all"
              >
                <Search className="w-4 h-4 text-indigo-600" />
                <span>Mổ xẻ 5 tầng chi tiết</span>
              </button>
            )}
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-100 dark:border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-2 border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Tổng quan & Bối cảnh
          </button>
          <button
            onClick={() => setActiveTab('structure')}
            className={`pb-3 px-2 border-b-2 transition-all ${
              activeTab === 'structure'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Bố cục & Chi tiết then chốt
          </button>
          {work.characters && (
            <button
              onClick={() => setActiveTab('characters')}
              className={`pb-3 px-2 border-b-2 transition-all ${
                activeTab === 'characters'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Hệ thống nhân vật
            </button>
          )}
          <button
            onClick={() => setActiveTab('exam')}
            className={`pb-3 px-2 border-b-2 transition-all ${
              activeTab === 'exam'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Nghệ thuật & Đề thi vào 10
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              {/* Context */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  <span>Hoàn Cảnh Sáng Tác</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {work.context}
                </p>
              </div>

              {/* Core Content & Theme */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>Nội Dung Chính</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {work.coreContent}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Chủ Đề Cốt Lõi</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {work.theme}
                  </p>
                </div>
              </div>

              {/* Author Bio */}
              {work.authorBio && (
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-1">
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">Về tác giả {work.author}</span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {work.authorBio}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'structure' && (
            <div className="space-y-5">
              {/* Structure */}
              <div className="space-y-2.5">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  <span>Bố Cục Tác Phẩm</span>
                </h4>
                <div className="space-y-2">
                  {work.structure.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                          {item.part}
                        </span>
                        <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">{item.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 pl-2 border-l-2 border-slate-200 dark:border-slate-700">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important details summary */}
              <div className="space-y-2.5">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Hình Ảnh & Chi Tiết Quan Trọng</span>
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {work.importantDetailsSummary.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex items-start gap-2"
                    >
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'characters' && work.characters && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Hệ Thống Nhân Vật & Phẩm Chất
              </h4>
              <div className="grid grid-cols-1 gap-3.5">
                {work.characters.map((char, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-base text-slate-900 dark:text-white">{char.name}</div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                        {char.role}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {char.traits.map((trait, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'exam' && (
            <div className="space-y-5">
              {/* Artistic features */}
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Đặc Sắc Nghệ Thuật
                </h4>
                <div className="space-y-2">
                  {work.artisticFeatures.map((art, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-indigo-500 font-bold">✓</span>
                      <span>{art}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common exam problems */}
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-rose-500" />
                  <span>Các Vấn Đề Thường Gặp Trong Đề Thi Vào 10</span>
                </h4>
                <div className="space-y-2">
                  {work.examProblems.map((prob, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200 text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
