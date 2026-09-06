import React, { useState } from 'react';
import {
  BookOpen,
  Filter,
  BrainCircuit,
  Search,
  ArrowRight,
  Eye,
  CheckCircle,
  Tag
} from 'lucide-react';
import { Work } from '../../types';
import { worksData } from '../../data/worksData';
import { WorkMindmapModal } from './WorkMindmapModal';
import { WorkDetailModal } from './WorkDetailModal';

interface WorksViewProps {
  onSelectWorkToDissect: (workId: string, detailId?: string) => void;
  studiedWorkIds: string[];
}

export const WorksView: React.FC<WorksViewProps> = ({
  onSelectWorkToDissect,
  studiedWorkIds
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Tất cả');
  const [activeMindmapWork, setActiveMindmapWork] = useState<Work | null>(null);
  const [activeDetailWork, setActiveDetailWork] = useState<Work | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    'Tất cả',
    'Trọng tâm thi vào 10',
    'Thơ',
    'Truyện ngắn',
    'THCS thường gặp'
  ];

  const filteredWorks = worksData.filter((work) => {
    const matchesFilter =
      selectedFilter === 'Tất cả' ||
      (selectedFilter === 'Trọng tâm thi vào 10' && work.category === 'Trọng tâm thi vào 10') ||
      (selectedFilter === 'THCS thường gặp' && work.category === 'THCS thường gặp') ||
      work.genre === selectedFilter;

    const matchesSearch =
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.theme.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Title & Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <BookOpen className="w-7 h-7 text-indigo-600" />
            <span>Thư Viện Tác Phẩm Trọng Tâm THCS & Lớp 9</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Không học vẹt bài mẫu. Khám phá bối cảnh, bố cục, nhân vật và sơ đồ tư duy Bộ Não Văn Học
          </p>
        </div>

        {/* Search input inside works */}
        <div className="w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Lọc tên bài hoặc tác giả..."
            className="w-full px-3.5 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedFilter(option)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedFilter === option
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work) => {
          const isStudied = studiedWorkIds.includes(work.id);
          return (
            <div
              key={work.id}
              className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Header Gradient */}
              <div className={`p-5 bg-gradient-to-r ${work.coverGradient} text-white relative`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold">
                    {work.genre}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-bold">
                    {work.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight">{work.title}</h3>
                <p className="text-xs text-white/90 font-medium mt-0.5">{work.author} ({work.year})</p>

                {isStudied && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold shadow-sm">
                    <CheckCircle className="w-3 h-3" />
                    <span>Đã học</span>
                  </div>
                )}
              </div>

              {/* Body Summary */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">Chủ đề: </strong>
                    {work.theme}
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Bối cảnh: </span>
                      <span className="line-clamp-2">{work.context}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveMindmapWork(work)}
                      className="px-3 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <BrainCircuit className="w-3.5 h-3.5" />
                      <span>Bộ Não Sơ Đồ</span>
                    </button>
                    <button
                      onClick={() => setActiveDetailWork(work)}
                      className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Chi tiết bài học</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectWorkToDissect(work.id)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm shadow-indigo-500/20"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Mổ xẻ 5 tầng tác phẩm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mindmap Modal */}
      {activeMindmapWork && (
        <WorkMindmapModal
          work={activeMindmapWork}
          onClose={() => setActiveMindmapWork(null)}
          onDissectDetail={(detailId) => onSelectWorkToDissect(activeMindmapWork.id, detailId)}
        />
      )}

      {/* Detail Modal */}
      {activeDetailWork && (
        <WorkDetailModal
          work={activeDetailWork}
          onClose={() => setActiveDetailWork(null)}
          onOpenMindmap={(w) => setActiveMindmapWork(w)}
          onDissectDetail={(detailId) => onSelectWorkToDissect(activeDetailWork.id, detailId)}
        />
      )}
    </div>
  );
};
