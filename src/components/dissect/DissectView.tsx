import React, { useState } from 'react';
import {
  Search,
  Layers,
  Sparkles,
  BookOpen,
  ArrowRight,
  HelpCircle,
  PenTool,
  Bookmark,
  Check,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  FileCheck,
  Zap,
  BookmarkPlus
} from 'lucide-react';
import { Work, LiteraryDetail } from '../../types';
import { worksData } from '../../data/worksData';
import { addNotebookEntry } from '../../services/storage/storageService';

interface DissectViewProps {
  selectedWorkId?: string;
  selectedDetailId?: string;
  onNavigateToParagraphBuilder: (detailQuote: string, workTitle: string) => void;
  onAddSuccessToast: (msg: string) => void;
}

export const DissectView: React.FC<DissectViewProps> = ({
  selectedWorkId = 'dong-chi',
  selectedDetailId,
  onNavigateToParagraphBuilder,
  onAddSuccessToast
}) => {
  const [currentWorkId, setCurrentWorkId] = useState<string>(selectedWorkId);
  const currentWork = worksData.find(w => w.id === currentWorkId) || worksData[0];

  const [currentDetailId, setCurrentDetailId] = useState<string>(
    selectedDetailId || (currentWork.details[0]?.id || '')
  );
  const currentDetail = currentWork.details.find(d => d.id === currentDetailId) || currentWork.details[0];

  // 5 Levels Analysis State: 1 to 5
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3 | 4 | 5>(4);

  // 10 Questions Accordion state
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({
    q1: true,
    q2: true,
    q9: true,
    q10: true
  });

  // Dynamic explanation tweak state
  const [dynamicMode, setDynamicMode] = useState<'normal' | 'simpler' | 'deeper' | 'example'>('normal');

  const toggleQuestion = (key: string) => {
    setExpandedQuestions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    for (let i = 1; i <= 10; i++) all[`q${i}`] = true;
    setExpandedQuestions(all);
  };

  const collapseAll = () => {
    setExpandedQuestions({});
  };

  const handleSaveToNotebook = () => {
    if (!currentDetail) return;
    addNotebookEntry({
      type: 'detail',
      title: `Mổ xẻ: "${currentDetail.quote}" (${currentWork.title})`,
      content: currentDetail.fiveLevels.level4_examTarget,
      sourceWork: currentWork.title,
      tags: ['Mổ xẻ chi tiết', 'Thi vào 10', currentDetail.type]
    });
    onAddSuccessToast('Đã lưu chi tiết vào Sổ tay cá nhân!');
  };

  const tenQuestionsConfig = [
    { key: 'q1', num: 1, title: 'Chi tiết này là gì?', content: currentDetail?.analysisTenQuestions.q1_what },
    { key: 'q2', num: 2, title: 'Hiểu đơn giản như thế nào?', content: currentDetail?.analysisTenQuestions.q2_simpleMeaning },
    { key: 'q3', num: 3, title: 'Tại sao tác giả lại sử dụng chi tiết này?', content: currentDetail?.analysisTenQuestions.q3_whyAuthorUsed },
    { key: 'q4', num: 4, title: 'Nó thể hiện điều gì?', content: currentDetail?.analysisTenQuestions.q4_whatItExpresses },
    { key: 'q5', num: 5, title: 'Nó liên quan như thế nào đến nhân vật?', content: currentDetail?.analysisTenQuestions.q5_characterLink },
    { key: 'q6', num: 6, title: 'Nó thể hiện chủ đề gì?', content: currentDetail?.analysisTenQuestions.q6_themeLink },
    { key: 'q7', num: 7, title: 'Nghệ thuật được sử dụng?', content: currentDetail?.analysisTenQuestions.q7_artisticTechnique },
    { key: 'q8', num: 8, title: 'Có thể liên hệ với chi tiết nào khác?', content: currentDetail?.analysisTenQuestions.q8_connectionToOther },
    { key: 'q9', num: 9, title: 'Khi thi nên phân tích như thế nào?', content: currentDetail?.analysisTenQuestions.q9_examTips, highlight: true },
    { key: 'q10', num: 10, title: 'Có thể viết thành đoạn văn như thế nào?', content: currentDetail?.analysisTenQuestions.q10_paragraphDraft, isDraft: true }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Process Breadcrumb Flow */}
      <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          Dòng Chảy Phân Tích Chi Tiết
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap min-w-max text-slate-500">
          <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">Tác phẩm</span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">Bối cảnh</span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">Bố cục</span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">Từng phần</span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-bold">Từng chi tiết</span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">Ý nghĩa</span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">Nghệ thuật</span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold">Đoạn văn hoàn chỉnh</span>
        </div>
      </div>

      {/* Work & Detail Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Select Work */}
        <div className="md:col-span-5 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            1. Chọn Tác Phẩm
          </label>
          <select
            value={currentWorkId}
            onChange={(e) => {
              const newWorkId = e.target.value;
              setCurrentWorkId(newWorkId);
              const found = worksData.find(w => w.id === newWorkId);
              if (found && found.details.length > 0) {
                setCurrentDetailId(found.details[0].id);
              }
            }}
            className="w-full p-2.5 text-sm font-semibold rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500"
          >
            {worksData.map((work) => (
              <option key={work.id} value={work.id}>
                {work.title} - {work.author} ({work.genre})
              </option>
            ))}
          </select>
        </div>

        {/* Select Detail */}
        <div className="md:col-span-7 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            2. Chọn Chi Tiết / Câu Thơ Để Mổ Xẻ
          </label>
          <div className="flex flex-wrap gap-2">
            {currentWork.details.map((detail) => (
              <button
                key={detail.id}
                onClick={() => setCurrentDetailId(detail.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  currentDetailId === detail.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                "{detail.quote}"
              </button>
            ))}
          </div>
        </div>
      </div>

      {currentDetail ? (
        <div className="space-y-6">
          {/* Spotlight Detail Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 text-xs font-bold uppercase">
                  {currentDetail.type}
                </span>
                <span className="text-xs text-slate-300">
                  Thuộc: {currentDetail.section} ({currentWork.title})
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {currentDetail.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded-md bg-white/10 text-[11px] text-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="font-serif-literary text-2xl sm:text-3xl font-bold italic tracking-wide text-amber-200 py-2">
              "{currentDetail.quote}"
            </div>

            {/* Quick Action Toolbar */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setDynamicMode(dynamicMode === 'simpler' ? 'normal' : 'simpler')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  dynamicMode === 'simpler' ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>👉 Giải thích đơn giản hơn</span>
              </button>

              <button
                onClick={() => setDynamicMode(dynamicMode === 'deeper' ? 'normal' : 'deeper')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  dynamicMode === 'deeper' ? 'bg-indigo-400 text-slate-950 font-bold' : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>👉 Phân tích sâu hơn</span>
              </button>

              <button
                onClick={() => setDynamicMode(dynamicMode === 'example' ? 'normal' : 'example')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  dynamicMode === 'example' ? 'bg-emerald-400 text-slate-950 font-bold' : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>👉 Cho ví dụ thực tế</span>
              </button>

              <button
                onClick={() => onNavigateToParagraphBuilder(currentDetail.quote, currentWork.title)}
                className="px-3 py-1.5 rounded-xl bg-white text-indigo-900 font-bold text-xs hover:bg-slate-100 transition-colors flex items-center gap-1.5 ml-auto shadow-sm"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>👉 Biến thành đoạn văn</span>
              </button>

              <button
                onClick={handleSaveToNotebook}
                title="Lưu vào Sổ tay"
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <BookmarkPlus className="w-4 h-4" />
              </button>
            </div>

            {/* Dynamic mode explanation box if triggered */}
            {dynamicMode !== 'normal' && (
              <div className="mt-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-slate-100 leading-relaxed animate-fade-in">
                {dynamicMode === 'simpler' && (
                  <div>
                    <strong className="text-amber-300 font-bold">💡 Giải thích siêu đơn giản: </strong>
                    {currentDetail.fiveLevels.level1_simple}
                  </div>
                )}
                {dynamicMode === 'deeper' && (
                  <div>
                    <strong className="text-indigo-300 font-bold">⚡ Phân tích nâng cao chiều sâu: </strong>
                    {currentDetail.fiveLevels.level5_advancedDepth}
                  </div>
                )}
                {dynamicMode === 'example' && (
                  <div>
                    <strong className="text-emerald-300 font-bold">📝 Cách đưa vào bài làm thực tế: </strong>
                    Khi viết bài, em hãy đặt chi tiết này vào sau luận điểm phân tích tâm trạng nhân vật, kết hợp bình từ ngữ nghệ thuật trước rồi mới chốt ý nghĩa tư tưởng.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Feature 4: 5 Tầng Phân Tích (Switch Tabs) */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <span>Tính Năng "5 Tầng Phân Tích"</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Chuyển đổi cấp độ từ hiểu bài cơ bản đến bài thi điểm 9+ vào 10
                </p>
              </div>

              {/* 5 Level Switch Buttons */}
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl overflow-x-auto">
                <button
                  onClick={() => setActiveLevel(1)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeLevel === 1
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  1 Dễ
                </button>
                <button
                  onClick={() => setActiveLevel(2)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeLevel === 2
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  2 Ý nghĩa
                </button>
                <button
                  onClick={() => setActiveLevel(3)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeLevel === 3
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  3 Nghệ thuật
                </button>
                <button
                  onClick={() => setActiveLevel(4)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeLevel === 4
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  4 Thi vào 10 ⭐
                </button>
                <button
                  onClick={() => setActiveLevel(5)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeLevel === 5
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  5 Nâng cao
                </button>
              </div>
            </div>

            {/* Level Content Display */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {activeLevel === 1 && 'LEVEL 1: Hiểu đơn giản như đang được giáo viên giảng'}
                  {activeLevel === 2 && 'LEVEL 2: Hiểu ý nghĩa của chi tiết'}
                  {activeLevel === 3 && 'LEVEL 3: Phân tích nghệ thuật + nội dung'}
                  {activeLevel === 4 && 'LEVEL 4: Phân tích theo hướng bài thi vào 10'}
                  {activeLevel === 5 && 'LEVEL 5: Phân tích nâng cao để tạo đoạn văn có chiều sâu'}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {activeLevel === 1 && currentDetail.fiveLevels.level1_simple}
                {activeLevel === 2 && currentDetail.fiveLevels.level2_meaning}
                {activeLevel === 3 && currentDetail.fiveLevels.level3_artAndContent}
                {activeLevel === 4 && currentDetail.fiveLevels.level4_examTarget}
                {activeLevel === 5 && currentDetail.fiveLevels.level5_advancedDepth}
              </p>
            </div>
          </div>

          {/* Feature 3: Bộ Cấu Trúc 10 Câu Hỏi Phân Tích Chi Tiết */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  <span>Bộ Khung 10 Câu Hỏi Mổ Xẻ Chi Tiết Chuẩn Mực</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Tập dượt thói quen tư duy đa chiều, trả lời đủ 10 câu hỏi để tự tin viết mọi bài văn
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold">
                <button onClick={expandAll} className="text-indigo-600 hover:underline">Mở tất cả</button>
                <span className="text-slate-300">|</span>
                <button onClick={collapseAll} className="text-slate-500 hover:underline">Thu gọn</button>
              </div>
            </div>

            <div className="space-y-3">
              {tenQuestionsConfig.map((q) => {
                const isOpen = expandedQuestions[q.key];
                return (
                  <div
                    key={q.key}
                    className={`rounded-2xl border transition-all ${
                      q.highlight
                        ? 'border-indigo-300 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20'
                        : q.isDraft
                        ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20'
                        : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30'
                    }`}
                  >
                    <button
                      onClick={() => toggleQuestion(q.key)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                          q.highlight
                            ? 'bg-indigo-600 text-white'
                            : q.isDraft
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {q.num}
                        </span>
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {q.title}
                        </span>
                      </div>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800/50">
                        <p className={`text-xs sm:text-sm leading-relaxed ${
                          q.isDraft
                            ? 'font-serif-literary italic text-slate-800 dark:text-slate-200 pl-3 border-l-2 border-emerald-500'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {q.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center text-slate-400">
          Chưa có chi tiết nào cho tác phẩm này. Vui lòng chọn tác phẩm khác.
        </div>
      )}
    </div>
  );
};
