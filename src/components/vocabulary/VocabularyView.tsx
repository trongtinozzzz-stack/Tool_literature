import React, { useState } from 'react';
import {
  BookMarked,
  Sparkles,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Search,
  Zap,
  TrendingUp,
  RefreshCw,
  Lightbulb,
  CheckCircle,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { VocabularyItem, VocabCategory, SentenceUpgradeResult } from '../../types';
import { vocabularyData, writingComparisons } from '../../data/vocabularyData';
import { aiService } from '../../services/ai/aiService';
import { toggleSaveVocab } from '../../services/storage/storageService';

interface VocabularyViewProps {
  savedVocabIds: string[];
  onToggleSaveVocab: (id: string) => void;
  onAddSuccessToast: (msg: string) => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({
  savedVocabIds,
  onToggleSaveVocab,
  onAddSuccessToast
}) => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'upgrade' | 'compare'>('catalog');

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  // Sentence Upgrade state
  const [inputSentence, setInputSentence] = useState('Tác giả rất yêu quê hương.');
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [upgradeResult, setUpgradeResult] = useState<SentenceUpgradeResult | null>(null);

  // Flashcard practice mode
  const [studyWord, setStudyWord] = useState<VocabularyItem | null>(null);
  const [showMeaning, setShowMeaning] = useState(false);

  const categories: string[] = [
    'Tất cả',
    'Từ miêu tả cảm xúc',
    'Từ phân tích nhân vật',
    'Từ phân tích hình ảnh',
    'Từ phân tích nghệ thuật',
    'Từ nhận xét tác giả',
    'Từ nhận xét chủ đề',
    'Từ chuyển ý',
    'Từ mở đoạn',
    'Từ kết đoạn',
    'Từ dùng để đánh giá'
  ];

  const filteredVocab = vocabularyData.filter((item) => {
    const matchesCat = selectedCategory === 'Tất cả' || item.category === selectedCategory;
    const matchesSearch =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.synonyms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleUpgradeSentence = async () => {
    if (!inputSentence.trim()) return;
    setIsUpgrading(true);
    try {
      const result = await aiService.improveSentence(inputSentence);
      setUpgradeResult(result);
    } finally {
      setIsUpgrading(false);
    }
  };

  const handleQuickExample = (text: string) => {
    setInputSentence(text);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header & Mode Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <BookMarked className="w-7 h-7 text-amber-500" />
            <span>Kho Vốn Từ & Kỹ Năng Diễn Đạt Văn Học</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Làm giàu vốn từ ngữ nghị luận, nâng cấp câu văn tự nhiên chuẩn bài thi tuyển sinh vào 10
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'catalog'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            📚 Sổ Tay 10 Nhóm Từ
          </button>
          <button
            onClick={() => setActiveTab('upgrade')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'upgrade'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🚀 Nâng Cấp Câu Văn
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'compare'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            ⚖️ So Sánh 4 Cấp Độ
          </button>
        </div>
      </div>

      {/* TAB 1: SỔ TAY 10 NHÓM TỪ */}
      {activeTab === 'catalog' && (
        <div className="space-y-5">
          {/* Category Filter Pills & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-full md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm từ vựng, ý nghĩa..."
                className="w-full px-3.5 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Vocabulary Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVocab.map((item) => {
              const isSaved = savedVocabIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-lg text-slate-900 dark:text-white">{item.word}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.level === 'Nâng cao'
                            ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                            : item.level === 'Khá'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                        }`}>
                          {item.level}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          onToggleSaveVocab(item.id);
                          onAddSuccessToast(isSaved ? 'Đã bỏ lưu từ' : 'Đã lưu từ vào Sổ tay');
                        }}
                        className={`p-1.5 rounded-xl transition-colors ${
                          isSaved ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      {item.category}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong>Nghĩa:</strong> {item.meaning}
                    </p>

                    <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
                      <div>
                        <strong className="text-slate-700 dark:text-slate-300">Khi nào nên dùng:</strong> {item.usageGuide}
                      </div>
                      <div className="pt-1 italic font-serif-literary text-slate-700 dark:text-slate-300">
                        "{item.exampleSentence}"
                      </div>
                    </div>

                    {/* Synonyms list */}
                    <div className="pt-1">
                      <span className="text-[11px] text-slate-400 font-medium">Từ đồng nghĩa hay hơn: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.synonyms.map((syn, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-[10px] font-semibold border border-amber-200/50 dark:border-amber-900/30"
                          >
                            {syn}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setStudyWord(item);
                        setShowMeaning(false);
                      }}
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>🧠 Học ngay</span>
                    </button>
                    <span className="text-[10px] text-slate-400">Chuẩn thi vào 10</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flashcard Study Modal */}
          {studyWord && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
              <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Thẻ Nhớ Từ Vựng Nhanh
                </div>

                <div className="py-6 px-4 rounded-2xl bg-gradient-to-tr from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">{studyWord.word}</h3>
                  <span className="text-xs text-slate-500 mt-1 block">{studyWord.category} ({studyWord.level})</span>

                  {showMeaning ? (
                    <div className="mt-4 pt-4 border-t border-amber-500/20 text-left space-y-2 animate-fade-in">
                      <p className="text-sm text-slate-800 dark:text-slate-200">
                        <strong>Nghĩa:</strong> {studyWord.meaning}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        <strong>Cách dùng:</strong> {studyWord.usageGuide}
                      </p>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-xs italic font-serif-literary text-slate-700 dark:text-slate-300">
                        "{studyWord.exampleSentence}"
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowMeaning(true)}
                      className="mt-6 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      Lật thẻ xem nghĩa & ví dụ
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => setStudyWord(null)}
                    className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Đóng
                  </button>
                  {showMeaning && (
                    <button
                      onClick={() => {
                        onAddSuccessToast('Tuyệt vời! Đã thuộc từ ' + studyWord.word);
                        setStudyWord(null);
                      }}
                      className="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md"
                    >
                      Đã ghi nhớ ✓
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: NÂNG CẤP CÂU VĂN */}
      {activeTab === 'upgrade' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span>Nhập Câu Văn Của Em Cần Nâng Cấp</span>
              </h3>
              <p className="text-xs text-slate-500">
                AI sẽ chỉ ra điểm yếu và đưa ra 3 phương án diễn đạt tự nhiên, giàu hình ảnh và chuẩn bài thi vào 10 (không sáo rỗng)
              </p>
            </div>

            <div className="space-y-3">
              <textarea
                value={inputSentence}
                onChange={(e) => setInputSentence(e.target.value)}
                rows={3}
                placeholder="Ví dụ: Tác giả rất yêu quê hương..."
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500 leading-relaxed font-medium"
              />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span>Câu mẫu thử nhanh:</span>
                  <button
                    onClick={() => handleQuickExample('Tác giả rất yêu quê hương.')}
                    className="hover:text-indigo-600 underline"
                  >
                    Yêu quê hương
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => handleQuickExample('Anh thanh niên rất chăm chỉ và yêu nghề.')}
                    className="hover:text-indigo-600 underline"
                  >
                    Anh thanh niên
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => handleQuickExample('Ông Hai rất yêu làng của mình.')}
                    className="hover:text-indigo-600 underline"
                  >
                    Ông Hai
                  </button>
                </div>

                <button
                  onClick={handleUpgradeSentence}
                  disabled={isUpgrading || !inputSentence.trim()}
                  className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-indigo-500/20 flex items-center gap-2 transition-all"
                >
                  {isUpgrading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>AI đang mổ xẻ câu văn...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Nâng cấp câu văn ngay</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Upgrade Result Output */}
          {upgradeResult && (
            <div className="space-y-4 animate-fade-in">
              {/* Weak Points Card */}
              <div className="p-5 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 space-y-2.5">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Điểm Cần Cải Thiện Trong Câu Hiện Tại</span>
                </div>
                <div className="space-y-1.5">
                  {upgradeResult.weakPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Upgraded Versions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Tự nhiên hơn */}
                <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4" />
                    <span>Cách 1: Tự Nhiên Hơn</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    "{upgradeResult.naturalVersion}"
                  </p>
                  <div className="text-[11px] text-slate-400">
                    Phù hợp cho câu diễn giải mở đầu luận điểm.
                  </div>
                </div>

                {/* 2. Giàu hình ảnh hơn */}
                <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Cách 2: Giàu Hình Ảnh Hơn</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed font-serif-literary italic">
                    "{upgradeResult.imageryVersion}"
                  </p>
                  <div className="text-[11px] text-slate-400">
                    Có sức gợi cảm, tạo ấn tượng với giám khảo.
                  </div>
                </div>

                {/* 3. Chuẩn bài thi vào 10 */}
                <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-800 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
                    <Zap className="w-4 h-4" />
                    <span>Cách 3: Chuẩn Bài Thi Vào 10 ⭐</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    "{upgradeResult.examStandardVersion}"
                  </p>
                  <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                    Chững chạc, lập luận sắc bén và có chiều sâu.
                  </div>
                </div>
              </div>

              {/* Explanation Why It Is Better */}
              <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>Giải Thích Vì Sao Câu Mới Tốt Hơn</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {upgradeResult.explanation}
                </p>
                {upgradeResult.warningNotice && (
                  <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-200 dark:border-slate-700">
                    {upgradeResult.warningNotice}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: SO SÁNH 4 CẤP ĐỘ CÁCH VIẾT */}
      {activeTab === 'compare' && (
        <div className="space-y-6">
          <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-500">
            Học sinh thường băn khoăn: <em>"Tại sao bài mình chỉ được 6 điểm còn bài bạn lại được 8.5?"</em> Hãy quan sát bảng so sánh 4 cấp độ tư duy dưới đây:
          </div>

          <div className="space-y-6">
            {writingComparisons.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-indigo-600 dark:text-indigo-400">Đề mục phân tích</span>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">{item.topic}</h4>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 font-serif-literary text-xs italic text-slate-700 dark:text-slate-300">
                    "{item.detailOrQuote}"
                  </span>
                </div>

                {/* 4 Levels Progression */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {/* Basic */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      Cấp độ 1: Cơ bản (5 - 6đ)
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                      "{item.level1Basic}"
                    </p>
                  </div>

                  {/* Fair */}
                  <div className="p-4 rounded-2xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/30 space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                      Cấp độ 2: Khá (6.5 - 7.5đ)
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 italic">
                      "{item.level2Fair}"
                    </p>
                  </div>

                  {/* Good */}
                  <div className="p-4 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/30 space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                      Cấp độ 3: Tốt (8.0 - 8.5đ)
                    </span>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-medium italic">
                      "{item.level3Good}"
                    </p>
                  </div>

                  {/* Deep */}
                  <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-900/40 space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                      Cấp độ 4: Có chiều sâu (9.0+)
                    </span>
                    <p className="text-xs text-slate-900 dark:text-white font-semibold italic">
                      "{item.level4Deep}"
                    </p>
                  </div>
                </div>

                {/* Analysis */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <strong className="text-slate-800 dark:text-slate-200">🔍 Phân tích sự khác biệt: </strong>
                  <span>{item.differenceExplanation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
