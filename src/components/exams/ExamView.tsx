import React, { useState } from 'react';
import {
  FileText,
  Clock,
  Award,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Send,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  BookOpen
} from 'lucide-react';
import { ExamPaper, ExamQuestion } from '../../types';
import { examBankData } from '../../data/examBankData';

interface ExamViewProps {
  onRecordExamScore: (score: number) => void;
  onAddSuccessToast: (msg: string) => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  onRecordExamScore,
  onAddSuccessToast
}) => {
  const [activeTab, setActiveTab] = useState<'exambank' | 'question_tutor'>('exambank');

  // Selected Exam State
  const [selectedExam, setSelectedExam] = useState<ExamPaper>(examBankData[0]);
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  // Feature 11: "Học qua câu hỏi" interactive reflexive tutor state
  const [qIndex, setQIndex] = useState(0);
  const [qStudentAnswer, setQStudentAnswer] = useState('');
  const [qFeedback, setQFeedback] = useState<{
    correctPoints: string[];
    missingPoints: string[];
    nextPrompt: string;
  } | null>(null);

  const interactiveQuestions = [
    {
      q: 'Trong bài thơ "Đồng chí", hình ảnh "Đầu súng trăng treo" theo em gợi lên ý nghĩa gì giữa hiện thực và lãng mạn?',
      hint: 'Hãy chú ý: Súng đại diện cho điều gì? Trăng đại diện cho điều gì? Tại sao hai thứ đó lại đi liền nhau?'
    },
    {
      q: 'Tại sao ông Hai khi nghe tin làng Chợ Dầu theo giặc lại nói: "Làng thì yêu thật, nhưng làng theo Tây mất rồi thì phải thù"?',
      hint: 'Tình cảm nào được đặt lên cao hơn: Tình yêu làng quê hay tình yêu tổ quốc?'
    },
    {
      q: 'Trong "Lặng lẽ Sa Pa", lời nói "Khi ta làm việc, ta với công việc là đôi, sao gọi là một mình được?" thể hiện quan niệm gì của anh thanh niên?',
      hint: 'Công việc đối với anh là gánh nặng hay là người bạn tri kỷ?'
    }
  ];

  const handleAnswerChange = (qId: string, val: string) => {
    setStudentAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const toggleSolution = (qId: string) => {
    setExpandedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    // Expand all solutions for review
    const allExp: Record<string, boolean> = {};
    selectedExam.parts.forEach(p => p.questions.forEach(q => { allExp[q.id] = true; }));
    setExpandedSolutions(allExp);

    // Mock grading calculation
    const answeredCount = Object.keys(studentAnswers).filter(k => studentAnswers[k].trim()).length;
    const score = answeredCount > 2 ? 8.5 : 7.0;
    onRecordExamScore(score);
    onAddSuccessToast(`Đã nộp bài! Điểm thi ước tính: ${score}/10`);
  };

  const handleInteractiveAnswer = () => {
    if (!qStudentAnswer.trim()) return;

    // Simulate Socratic pedagogical analysis of student's answer
    setQFeedback({
      correctPoints: [
        'Em đã chỉ ra được mối liên hệ trực tiếp giữa hình ảnh trong tác phẩm và cảm xúc người lính.',
        'Nhận xét chân thành, không bị khuôn sáo văn mẫu.'
      ],
      missingPoints: [
        'Cần gắn chặt hơn với hoàn cảnh sáng tác năm 1948 (kháng chiến chống Pháp gian khổ).',
        'Bổ sung phân tích nghệ thuật đối lập giữa súng (chiến tranh) và trăng (hòa bình).'
      ],
      nextPrompt: qIndex < interactiveQuestions.length - 1
        ? 'Rất tốt! Em đã hiểu sâu hơn rồi đấy. Giờ hãy thử sức với câu hỏi phản xạ tiếp theo nhé!'
        : 'Chúc mừng em đã hoàn thành xuất sắc chuỗi câu hỏi phản xạ tư duy Ngữ Văn!'
    });
  };

  const handleNextInteractiveQuestion = () => {
    if (qIndex < interactiveQuestions.length - 1) {
      setQIndex(qIndex + 1);
      setQStudentAnswer('');
      setQFeedback(null);
    } else {
      setQIndex(0);
      setQStudentAnswer('');
      setQFeedback(null);
      onAddSuccessToast('Em đã rèn luyện phản xạ thành công!');
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header & Sub-Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <FileText className="w-7 h-7 text-emerald-600" />
            <span>Ngân Hàng Đề Thi Tuyển Sinh Vào 10</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Đề thi cấu trúc chính thức các tỉnh, phân hóa 4 cấp độ: Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <button
            onClick={() => setActiveTab('exambank')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'exambank'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            📝 Đề Thi Tuyển Sinh Chính Thức
          </button>
          <button
            onClick={() => setActiveTab('question_tutor')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'question_tutor'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            ❓ Tính Năng "Học Qua Câu Hỏi"
          </button>
        </div>
      </div>

      {/* TAB 1: NGÂN HÀNG ĐỀ THI */}
      {activeTab === 'exambank' && (
        <div className="space-y-6">
          {/* Exam Info Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                  {selectedExam.provinceOrSchool}
                </span>
                <span className="text-xs text-slate-400">Năm học {selectedExam.year}</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Thời gian: {selectedExam.durationMinutes} phút</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Tổng điểm: {selectedExam.totalScore}đ</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              {selectedExam.title}
            </h3>
          </div>

          {/* Parts & Questions */}
          <div className="space-y-6">
            {selectedExam.parts.map((part, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                    {part.partTitle}
                  </h4>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {part.partType}
                  </span>
                </div>

                {/* Reading Passage */}
                {part.readingPassage && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 space-y-2">
                    <div className="text-xs font-bold uppercase text-slate-400">Ngữ Liệu Đọc Hiểu:</div>
                    <p className="text-xs sm:text-sm font-serif-literary leading-relaxed whitespace-pre-line text-slate-800 dark:text-slate-200 pl-3 border-l-2 border-emerald-500">
                      {part.readingPassage}
                    </p>
                    {part.readingSource && (
                      <div className="text-[11px] text-right italic text-slate-500">
                        ({part.readingSource})
                      </div>
                    )}
                  </div>
                )}

                {/* Questions list */}
                <div className="space-y-4 pt-2">
                  {part.questions.map((q, qIdx) => {
                    const isExp = expandedSolutions[q.id];
                    return (
                      <div
                        key={q.id}
                        className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                              {qIdx + 1}
                            </span>
                            <span className="font-bold text-sm text-slate-900 dark:text-white">
                              Câu {qIdx + 1} ({q.score} điểm)
                            </span>
                          </div>

                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            q.level === 'Nhận biết'
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                              : q.level === 'Thông hiểu'
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                              : q.level === 'Vận dụng'
                              ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                          }`}>
                            {q.level}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                          {q.text}
                        </p>

                        {/* Student Answer Box */}
                        <div className="space-y-1.5">
                          <textarea
                            value={studentAnswers[q.id] || ''}
                            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                            rows={3}
                            placeholder="Nhập câu trả lời của em tại đây..."
                            className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 font-medium"
                          />
                        </div>

                        {/* Solution & Common Mistakes Accordion */}
                        <div className="pt-1">
                          <button
                            onClick={() => toggleSolution(q.id)}
                            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                          >
                            <span>{isExp ? 'Thu gọn đáp án & barem điểm' : 'Xem đáp án chuẩn & barem chấm điểm'}</span>
                            {isExp ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          {isExp && (
                            <div className="mt-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 space-y-3 animate-fade-in">
                              <div className="space-y-1">
                                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                                  Đáp Án Chuẩn (Barem Kỳ Thi)
                                </span>
                                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {q.standardAnswer}
                                </p>
                              </div>

                              {/* Grading Criteria */}
                              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                                <span className="text-[11px] font-bold text-slate-500 uppercase">
                                  Tiêu chí phân chia điểm:
                                </span>
                                <ul className="text-xs text-slate-600 dark:text-slate-400 list-disc pl-5 space-y-0.5">
                                  {q.analysisGuide.map((g, gIdx) => (
                                    <li key={gIdx}>{g}</li>
                                  ))}
                                </ul>
                              </div>

                              {/* Common Mistakes */}
                              <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/50 text-xs space-y-1">
                                <span className="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  <span>Lỗi thí sinh thường bị mất điểm:</span>
                                </span>
                                <ul className="text-slate-600 dark:text-slate-300 list-disc pl-5 space-y-0.5">
                                  {q.commonMistakes.map((m, mIdx) => (
                                    <li key={mIdx}>{m}</li>
                                  ))}
                                </ul>
                              </div>

                              {/* Similar Practice hint */}
                              {q.similarPracticePrompt && (
                                <div className="text-[11px] text-indigo-600 dark:text-indigo-400 pt-1">
                                  💡 <strong>Bài tập rèn luyện tương tự: </strong>
                                  {q.similarPracticePrompt}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Submit Bar */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hoàn Tất Bài Làm</h4>
                <p className="text-xs text-slate-500">
                  Nộp bài để AI chấm điểm và mở khóa toàn bộ barem đáp án chi tiết
                </p>
              </div>

              <button
                onClick={handleSubmitExam}
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-500/20 flex items-center gap-2 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Nộp bài & Chấm điểm vào 10</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TÍNH NĂNG "HỌC QUA CÂU HỎI" */}
      {activeTab === 'question_tutor' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Tính Năng "Học Qua Câu Hỏi": Kích Thích Tự Phân Tích
                </h3>
                <p className="text-xs text-slate-500">
                  Thay vì đọc bài phân tích dài dòng, AI sẽ hỏi em. Em trả lời → AI chỉ ra điểm đúng, bổ sung điểm thiếu và đặt câu hỏi tiếp theo
                </p>
              </div>
            </div>

            {/* Current Reflexive Question Card */}
            <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-bold">
                  Câu hỏi phản xạ số {qIndex + 1} / {interactiveQuestions.length}
                </span>
                <span className="text-xs text-slate-400">Rèn tư duy độc lập</span>
              </div>

              <h4 className="font-extrabold text-base sm:text-lg text-indigo-950 dark:text-indigo-100 leading-relaxed">
                "{interactiveQuestions[qIndex].q}"
              </h4>

              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-indigo-100 dark:border-indigo-900 text-xs text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span><strong>Gợi ý suy nghĩ: </strong>{interactiveQuestions[qIndex].hint}</span>
              </div>

              {/* Student Answer */}
              <div className="space-y-2 pt-2">
                <textarea
                  value={qStudentAnswer}
                  onChange={(e) => setQStudentAnswer(e.target.value)}
                  rows={4}
                  placeholder="Gõ cách hiểu của em tại đây (cứ tự tin trình bày nhé)..."
                  className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 font-medium"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleInteractiveAnswer}
                    disabled={!qStudentAnswer.trim()}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Gửi câu trả lời cho AI</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* AI Feedback Output */}
              {qFeedback && (
                <div className="mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-800 space-y-3 animate-fade-in">
                  {/* Correct points */}
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 space-y-1">
                    <span className="font-bold text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Điểm em đã làm rất tốt:</span>
                    </span>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-5 space-y-0.5">
                      {qFeedback.correctPoints.map((cp, idx) => (
                        <li key={idx}>{cp}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Missing points */}
                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 space-y-1">
                    <span className="font-bold text-xs text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Phần em nên bổ sung thêm để đạt điểm 9+:</span>
                    </span>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-5 space-y-0.5">
                      {qFeedback.missingPoints.map((mp, idx) => (
                        <li key={idx}>{mp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300">
                      {qFeedback.nextPrompt}
                    </span>
                    <button
                      onClick={handleNextInteractiveQuestion}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1"
                    >
                      <span>Câu hỏi tiếp theo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
