import React, { useState } from 'react';
import {
  PenTool,
  Sparkles,
  ArrowRight,
  Send,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  FileText,
  LifeBuoy,
  RefreshCw,
  Award,
  Layers,
  GraduationCap
} from 'lucide-react';
import { EssayFeedbackResult } from '../../types';
import { aiService } from '../../services/ai/aiService';

interface EssayWritingViewProps {
  initialDetailQuote?: string;
  initialWorkTitle?: string;
  onAddSuccessToast: (msg: string) => void;
}

export const EssayWritingView: React.FC<EssayWritingViewProps> = ({
  initialDetailQuote = 'Đầu súng trăng treo',
  initialWorkTitle = 'Đồng chí',
  onAddSuccessToast
}) => {
  const [activeTab, setActiveTab] = useState<'builder' | 'grade' | 'rescue' | 'stepbystep'>('builder');

  // --- Feature 5: Biến chi tiết thành đoạn văn state ---
  const [detailQuote, setDetailQuote] = useState(initialDetailQuote);
  const [userThoughts, setUserThoughts] = useState('Hình ảnh vừa lãng mạn vừa hiện thực, thể hiện tâm hồn người lính');
  const [keywords, setKeywords] = useState('súng, trăng, lãng mạn, hòa bình, tinh thần lạc quan');
  const [frameworkResult, setFrameworkResult] = useState<ReturnType<typeof aiService.generateParagraphFramework> | null>(null);

  // --- Feature 5 Mode 2: "Học từng bước" state ---
  const [stepIndex, setStepIndex] = useState(0);
  const [stepStudentInput, setStepStudentInput] = useState('');
  const [stepHistory, setStepHistory] = useState<{ question: string; studentAnswer: string; tutorFeedback: string }[]>([]);

  const stepByStepQuestions = [
    'Chi tiết này khiến em cảm nhận điều gì đầu tiên khi đọc?',
    'Trong chi tiết này, từ ngữ hoặc hình ảnh nào khiến em chú ý nhất và vì sao?',
    'Chi tiết này thể hiện phẩm chất hoặc tâm sự gì của nhân vật?',
    'Biện pháp nghệ thuật nào làm nên sự độc đáo của chi tiết này?',
    'Em hãy đúc kết lại ý nghĩa của chi tiết này đối với chủ đề tác phẩm?'
  ];

  // --- Feature 8: AI Sửa Bài Văn state ---
  const [essayContent, setEssayContent] = useState(
    'Bài thơ Đồng chí của Chính Hữu rất hay. Tác giả đã viết về những người lính nông dân rất yêu nước. Họ chia sẻ với nhau cái chăn, chiếc áo rách và nắm tay nhau giữa trời rét. Đặc biệt là hình ảnh đầu súng trăng treo rất đẹp và lãng mạn.'
  );
  const [isGrading, setIsGrading] = useState(false);
  const [gradeResult, setGradeResult] = useState<EssayFeedbackResult | null>(null);

  // --- Feature 16: Cứu Bài Văn state ---
  const [rescueInput, setRescueInput] = useState('Anh thanh niên làm việc trên núi rất vất vả nhưng anh ấy rất chăm chỉ và không buồn.');
  const [rescueStage, setRescueStage] = useState<'input' | 'feedback' | 'self_edited' | 'reference'>('input');
  const [studentRevisedVersion, setStudentRevisedVersion] = useState('');

  // Handle Feature 5 Framework Generation
  const handleGenerateFramework = () => {
    const kws = keywords.split(/[,;]+/).map(k => k.trim()).filter(Boolean);
    const result = aiService.generateParagraphFramework(detailQuote, userThoughts, kws);
    setFrameworkResult(result);
  };

  // Handle Feature 5 Step by step next
  const handleStepSubmit = () => {
    if (!stepStudentInput.trim()) return;

    let tutorFeedback = 'Nhận xét của AI: Em đã nắm được ý chính xác! Lời giải thích rất chân thành, hãy tiếp tục phát triển ý này sang bước tiếp theo nhé.';
    if (stepIndex === 0) {
      tutorFeedback = 'Rất tốt! Cảm xúc đầu tiên này sẽ là chất liệu tuyệt vời để em viết câu chủ đề mở đoạn.';
    } else if (stepIndex === 1) {
      tutorFeedback = 'Phân tích từ ngữ rất sắc bén! Em đã biết chỉ ra nét đối lập của hình ảnh.';
    }

    setStepHistory(prev => [
      ...prev,
      {
        question: stepByStepQuestions[stepIndex],
        studentAnswer: stepStudentInput,
        tutorFeedback
      }
    ]);

    setStepStudentInput('');
    if (stepIndex < stepByStepQuestions.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      onAddSuccessToast('Chúc mừng em đã hoàn thành cả 5 bước tự viết đoạn văn!');
    }
  };

  // Handle Feature 8 AI Grade Essay
  const handleGradeEssay = async () => {
    if (!essayContent.trim()) return;
    setIsGrading(true);
    try {
      const result = await aiService.gradeEssay(essayContent);
      setGradeResult(result);
    } finally {
      setIsGrading(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* View Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <PenTool className="w-7 h-7 text-rose-500" />
            <span>Luyện Viết & AI Sửa Bài Chuẩn Thi Vào 10</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Không đưa văn mẫu sao chép. Hướng dẫn từng bước để học sinh tự viết đoạn văn có chiều sâu
          </p>
        </div>

        {/* Action Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
          <button
            onClick={() => setActiveTab('builder')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'builder'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            ✍️ Biến Chi Tiết → Đoạn Văn
          </button>
          <button
            onClick={() => setActiveTab('stepbystep')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'stepbystep'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🎓 Học Từng Bước (Hỏi-Đáp)
          </button>
          <button
            onClick={() => setActiveTab('grade')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'grade'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🔍 AI Sửa Bài (5 Tiêu Chí)
          </button>
          <button
            onClick={() => setActiveTab('rescue')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'rescue'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🚑 Cứu Bài Văn Yếu
          </button>
        </div>
      </div>

      {/* TAB 1: BIẾN CHI TIẾT THÀNH ĐOẠN VĂN (KHUNG 7 BƯỚC) */}
      {activeTab === 'builder' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-500" />
                <span>Nhập Dữ Liệu Để AI Thiết Kế Khung Lập Luận 7 Bước</span>
              </h3>
              <p className="text-xs text-slate-500">
                AI không viết hộ toàn bộ đoạn văn. AI sẽ tạo khung sườn chuẩn xác để em tự viết bằng tư duy của mình
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  1. Chi tiết muốn phân tích
                </label>
                <input
                  type="text"
                  value={detailQuote}
                  onChange={(e) => setDetailQuote(e.target.value)}
                  placeholder="Ví dụ: Đầu súng trăng treo"
                  className="w-full p-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-rose-500 font-semibold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  2. Ý em đang nghĩ về chi tiết này
                </label>
                <input
                  type="text"
                  value={userThoughts}
                  onChange={(e) => setUserThoughts(e.target.value)}
                  placeholder="Ví dụ: Vừa lãng mạn vừa hiện thực..."
                  className="w-full p-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  3. Một vài từ khóa chính
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Cách nhau bằng dấu phẩy: súng, trăng, lãng mạn..."
                  className="w-full p-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleGenerateFramework}
                className="px-5 py-2.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-md shadow-rose-500/20 flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Thiết kế khung lập luận 7 bước</span>
              </button>
            </div>
          </div>

          {/* 7-Step Framework Render */}
          {frameworkResult && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Khung Lập Luận 7 Bước Chuẩn Điểm 9+ Thi Vào 10
                  </h4>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                  Dành cho: "{detailQuote}"
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { step: 1, name: 'Mở ý', desc: frameworkResult.step1_opening, color: 'bg-indigo-500' },
                  { step: 2, name: 'Dẫn chứng', desc: frameworkResult.step2_evidence, color: 'bg-blue-500' },
                  { step: 3, name: 'Phân tích từ ngữ / hình ảnh', desc: frameworkResult.step3_wordsAnalysis, color: 'bg-cyan-500' },
                  { step: 4, name: 'Phân tích ý nghĩa', desc: frameworkResult.step4_meaning, color: 'bg-emerald-500' },
                  { step: 5, name: 'Phân tích nghệ thuật', desc: frameworkResult.step5_art, color: 'bg-amber-500' },
                  { step: 6, name: 'Đánh giá tài năng', desc: frameworkResult.step6_evaluation, color: 'bg-orange-500' },
                  { step: 7, name: 'Liên kết chủ đề', desc: frameworkResult.step7_connection, color: 'bg-rose-500' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5"
                  >
                    <span className={`w-7 h-7 rounded-xl ${item.color} text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-sm`}>
                      {item.step}
                    </span>
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {item.name}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Student Practice Writing Box */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Dựa vào khung trên, em hãy tự ráp các câu thành đoạn văn hoàn chỉnh của mình:
                </label>
                <textarea
                  rows={4}
                  placeholder="Bắt đầu viết đoạn văn của em tại đây..."
                  className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500"
                />
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-200">
                  ⭐ <strong>Ghi nhớ:</strong> Đây là bài của chính em. Khi viết xong, hãy chuyển sang tab "AI Sửa Bài" để được chấm điểm 5 tiêu chí nhé!
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: HỌC TỪNG BƯỚC (HỎI - ĐÁP TƯ DUY SOCRATIC) */}
      {activeTab === 'stepbystep' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Chế Độ "🎓 Học Từng Bước": AI Đặt Câu Hỏi Gợi Mở
                </h3>
                <p className="text-xs text-slate-500">
                  Trả lời từng câu hỏi nhỏ để tự kích thích tư duy, sau đó ghép lại thành đoạn văn điểm 8.5+
                </p>
              </div>
            </div>

            {/* Step progress bar */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-2">
              <span>Bước {stepIndex + 1} / {stepByStepQuestions.length}</span>
              <span className="text-indigo-600 dark:text-indigo-400">Tiến trình rèn luyện tư duy</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${((stepIndex + 1) / stepByStepQuestions.length) * 100}%` }}
              />
            </div>

            {/* Conversation History */}
            <div className="space-y-3 pt-2">
              {stepHistory.map((item, idx) => (
                <div key={idx} className="space-y-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                    <strong>AI hỏi ({idx + 1}):</strong> {item.question}
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 ml-4">
                    <strong>Em trả lời:</strong> {item.studentAnswer}
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 text-xs ml-4 border-l-2 border-emerald-500">
                    {item.tutorFeedback}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Active Question */}
            {stepIndex < stepByStepQuestions.length ? (
              <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-3">
                <div className="font-bold text-sm text-indigo-950 dark:text-indigo-100 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  <span>Câu hỏi {stepIndex + 1}: {stepByStepQuestions[stepIndex]}</span>
                </div>
                <textarea
                  value={stepStudentInput}
                  onChange={(e) => setStepStudentInput(e.target.value)}
                  rows={3}
                  placeholder="Gõ suy nghĩ thật của em tại đây (không sợ sai!)..."
                  className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 font-medium"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleStepSubmit}
                    disabled={!stepStudentInput.trim()}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm flex items-center gap-1.5 transition-colors"
                  >
                    <span>Gửi câu trả lời & Nhận gợi ý tiếp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-emerald-900 dark:text-emerald-200">
                  Tuyệt Vời! Em Đã Trả Lời Đủ 5 Câu Hỏi Cốt Lõi!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Toàn bộ các câu trả lời trên chính là một đoạn văn phân tích hoàn chỉnh do chính em viết ra.
                </p>
                <button
                  onClick={() => {
                    setStepIndex(0);
                    setStepHistory([]);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md"
                >
                  Luyện tập với chi tiết khác
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: AI SỬA BÀI VĂN 5 TIÊU CHÍ */}
      {activeTab === 'grade' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <span>Nhập / Dán Đoạn Văn Hoặc Bài Viết Của Em</span>
              </h3>
              <p className="text-xs text-slate-500">
                AI sẽ chấm điểm theo 5 tiêu chí chính xác (Nội dung, Phân tích, Dẫn chứng, Diễn đạt, Liên kết) và chỉ ra 3 việc cần sửa đầu tiên
              </p>
            </div>

            <textarea
              value={essayContent}
              onChange={(e) => setEssayContent(e.target.value)}
              rows={6}
              placeholder="Dán bài văn hoặc đoạn văn của em vào đây..."
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-purple-500 leading-relaxed font-medium"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-400">
                Số từ: <strong>{essayContent.trim().split(/\s+/).filter(Boolean).length}</strong> từ
              </span>
              <button
                onClick={handleGradeEssay}
                disabled={isGrading || !essayContent.trim()}
                className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-purple-500/20 flex items-center gap-2 transition-all"
              >
                {isGrading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>AI đang chấm điểm 5 tiêu chí...</span>
                  </>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    <span>Chấm điểm & Sửa bài ngay</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Graded Result View */}
          {gradeResult && (
            <div className="space-y-6 animate-fade-in">
              {/* 5 Criteria Score Grid */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Bảng Điểm 5 Tiêu Chí Chuẩn Kỳ Thi Tuyển Sinh Vào 10
                  </h4>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-extrabold text-sm">
                    <span>Tổng điểm: {gradeResult.scores.total} / 10</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { label: 'Nội dung', score: gradeResult.scores.content },
                    { label: 'Phân tích', score: gradeResult.scores.analysis },
                    { label: 'Dẫn chứng', score: gradeResult.scores.evidence },
                    { label: 'Diễn đạt', score: gradeResult.scores.expression },
                    { label: 'Liên kết', score: gradeResult.scores.cohesion }
                  ].map((crit, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 text-center"
                    >
                      <div className="text-xs text-slate-500 font-medium">{crit.label}</div>
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                        {crit.score}<span className="text-xs text-slate-400 font-normal">/10</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top 3 Actions to Fix First */}
              <div className="p-6 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 space-y-3">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm uppercase tracking-wider">
                  <LifeBuoy className="w-5 h-5" />
                  <span>"3 Việc Em Nên Sửa Đầu Tiên"</span>
                </div>
                <div className="space-y-2">
                  {gradeResult.topThreeActions.map((action, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/60 dark:border-amber-900/30 flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Critiques List */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  Những Chỗ Còn Yếu & Lỗi Diễn Đạt Cụ Thể
                </h4>
                <div className="space-y-2.5">
                  {gradeResult.critiques.map((crit, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                          {crit.type}
                        </span>
                        <span className="text-xs text-slate-500">Vị trí: {crit.originalSnippet}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <strong>Vấn đề:</strong> {crit.problemDesc}
                      </p>
                      <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                        💡 <strong>Gợi ý sửa:</strong> {crit.solutionSuggestion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reference Sample Note */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Đoạn Văn Tham Khảo (Không Học Vẹt)
                </div>
                <p className="text-xs sm:text-sm italic font-serif-literary text-slate-700 dark:text-slate-300 leading-relaxed pl-3 border-l-2 border-indigo-500">
                  {gradeResult.suggestedReferenceParagraph}
                </p>
                <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium pt-1">
                  ⚠️ "Đây là bài tham khảo. Hãy tự diễn đạt lại bằng suy nghĩ và phong cách của em."
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: TÍNH NĂNG ĐẶC BIỆT "CỨU BÀI VĂN" */}
      {activeTab === 'rescue' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Tính Năng Đặc Biệt: "Cứu Bài Văn"
                </h3>
                <p className="text-xs text-slate-500">
                  Nếu em viết một đoạn văn quá thô hoặc quá đơn giản, AI sẽ KHÔNG viết đè lên ngay mà hỗ trợ em tự sửa trước
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Câu / đoạn văn của em hiện tại:
              </label>
              <textarea
                value={rescueInput}
                onChange={(e) => setRescueInput(e.target.value)}
                rows={3}
                placeholder="Dán câu văn ngắn hoặc đơn giản của em..."
                className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-emerald-500 font-medium"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setRescueStage('feedback')}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
              >
                <span>Chẩn đoán vấn đề của câu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Stage 2: Feedback and 3 steps to self-correct */}
          {rescueStage !== 'input' && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 animate-fade-in">
              <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/30 space-y-2">
                <div className="text-xs font-bold uppercase text-rose-700 dark:text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Vấn đề câu văn của em gặp phải:</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
                  <li><strong>Ý còn chung chung:</strong> Nhận xét "rất vất vả", "rất chăm chỉ" mang tính kể lể thông thường.</li>
                  <li><strong>Thiếu phân tích:</strong> Chưa gắn liền với hoàn cảnh đỉnh Yên Sơn cao 2600m hay công việc đo gió đo mưa cụ thể.</li>
                  <li><strong>Từ ngữ lặp:</strong> Sử dụng liên tiếp từ "rất", thiếu từ ngữ nghị luận giàu sức gợi.</li>
                </ul>
              </div>

              {/* 3 Steps To Self-Improve */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/30 space-y-2">
                <div className="text-xs font-bold uppercase text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Em có thể cải thiện bằng 3 bước sau:</span>
                </div>
                <ol className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal pl-5">
                  <li>Thay chữ "rất vất vả" bằng chi tiết cụ thể: "giữa đỉnh Yên Sơn buốt giá trong sương mù tuyết lạnh".</li>
                  <li>Thay chữ "chăm chỉ" bằng phẩm chất: "tinh thần trách nhiệm cao và lòng say mê lao động cống hiến".</li>
                  <li>Bổ sung 1 câu lý giải: Vì sao anh không buồn? (Vì anh coi công việc là người bạn đồng hành).</li>
                </ol>
              </div>

              {/* Student Self-Editing Input */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-900 dark:text-white">
                  Bây giờ, hãy tự sửa câu của em theo 3 gợi ý trên:
                </label>
                <textarea
                  value={studentRevisedVersion}
                  onChange={(e) => setStudentRevisedVersion(e.target.value)}
                  rows={3}
                  placeholder="Viết lại câu sau khi đã tự sửa..."
                  className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setRescueStage('reference')}
                  className="text-xs font-semibold text-slate-500 hover:text-indigo-600 underline"
                >
                  Xem phiên bản gợi ý tham khảo của AI
                </button>
                <button
                  onClick={() => {
                    onAddSuccessToast('Tuyệt vời! Tự sửa câu văn là cách nhanh nhất để tiến bộ');
                    setRescueStage('reference');
                  }}
                  disabled={!studentRevisedVersion.trim()}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-colors"
                >
                  Hoàn tất bài tự sửa
                </button>
              </div>

              {/* Reference Sample (Only shown after student tries or clicks view) */}
              {rescueStage === 'reference' && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 animate-fade-in">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Phiên Bản Tham Khảo Sau Cải Tiến
                  </div>
                  <p className="text-xs sm:text-sm font-serif-literary italic text-slate-900 dark:text-white leading-relaxed">
                    "Giữa đỉnh Yên Sơn mây mù tuyết lạnh cao hơn hai nghìn sáu trăm mét, anh thanh niên vẫn lặng lẽ cống hiến tuổi xuân bằng tinh thần trách nhiệm bền bỉ. Anh không hề cảm thấy cô đơn buồn tẻ, bởi lẽ trong tâm niệm chàng trai trẻ, công việc khí tượng đo gió đo mưa chính là người bạn tri kỷ, gắn liền với nhịp thở dựng xây của non sông."
                  </p>
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                    ⚠️ "Đây là bài tham khảo. Hãy tự diễn đạt lại bằng suy nghĩ của em!"
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
