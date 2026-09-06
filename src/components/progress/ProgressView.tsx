import React from 'react';
import {
  BarChart3,
  Award,
  Flame,
  BookOpen,
  PenTool,
  BookMarked,
  FileText,
  CheckCircle2,
  Calendar,
  Sparkles,
  Trophy,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserLearningState } from '../../types';

interface ProgressViewProps {
  userState: UserLearningState;
  onToggleReviewTask: (index: number) => void;
  onAddSuccessToast: (msg: string) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  userState,
  onToggleReviewTask,
  onAddSuccessToast
}) => {
  const achievements = [
    {
      id: 'streak_3',
      title: '🔥 Chuỗi Ngày Bền Bỉ',
      desc: 'Học liên tiếp 3 ngày không bỏ lỡ',
      unlocked: userState.streakDays >= 3,
      badge: '3 Ngày'
    },
    {
      id: 'first_work',
      title: '⭐ Khởi Đầu Vững Chắc',
      desc: 'Hoàn thành mổ xẻ tác phẩm đầu tiên',
      unlocked: userState.studiedWorkIds.length >= 1,
      badge: 'Level 1'
    },
    {
      id: 'vocab_starter',
      title: '🧠 Vốn Từ Phong Phú',
      desc: 'Lưu trữ trên 3 từ vựng nghị luận hay',
      unlocked: userState.savedVocabIds.length >= 3,
      badge: 'Từ Vựng'
    },
    {
      id: 'essay_master',
      title: '✍️ Cây Bút Triển Vọng',
      desc: 'Luyện viết trên 3 đoạn văn chuẩn khung',
      unlocked: userState.completedEssaysCount >= 3,
      badge: 'Cây Bút'
    },
    {
      id: 'exam_ready',
      title: '📝 Sĩ Tử Thực Chiến',
      desc: 'Làm đề thi thử tuyển sinh đạt điểm 8.0+',
      unlocked: (userState.latestExamScore || 0) >= 8.0,
      badge: '8.0+ Vào 10'
    },
    {
      id: 'master_10',
      title: '🏆 Bậc Thầy Văn Học Lớp 9',
      desc: 'Nắm vững 10 tác phẩm trọng tâm thi vào 10',
      unlocked: userState.studiedWorkIds.length >= 10,
      badge: 'Thủ Khoa'
    }
  ];

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onAddSuccessToast('🎉 Chúc mừng em đã duy trì thói quen học Văn tuyệt vời!');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* View Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-indigo-600" />
            <span>Tiến Độ Học Tập & Hệ Thống Thành Tích</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Theo dõi sự bứt phá của em qua từng ngày theo thuật toán lặp lại ngắt quãng (Spaced Repetition)
          </p>
        </div>

        <button
          onClick={handleCelebrate}
          className="px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 flex items-center gap-1.5 self-start md:self-auto transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Bắn pháo hoa ăn mừng 🎉</span>
        </button>
      </div>

      {/* Target Progress Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
            <Target className="w-3.5 h-3.5 text-indigo-400" />
            <span>Mục Tiêu Thi Tuyển Sinh Vào 10</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">Điểm Kỳ Vọng: 8.5+ Điểm Ngữ Văn</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            Học sinh: <strong className="text-amber-300">{userState.learnerName}</strong> • Đã tích lũy {userState.studiedWorkIds.length} tác phẩm & {userState.savedVocabIds.length} từ ngữ tinh hoa.
          </p>
        </div>

        <div className="w-36 h-36 rounded-full border-4 border-indigo-500/30 flex flex-col items-center justify-center bg-indigo-950/40 relative shadow-inner">
          <div className="text-3xl font-black text-amber-300">
            {Math.min(100, Math.round((userState.studiedWorkIds.length / 12) * 100))}%
          </div>
          <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Tiến Độ Tổng</span>
        </div>
      </div>

      {/* Spaced Repetition Smart Review Schedule */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Lịch Ôn Tập Thông Minh Hôm Nay & Các Ngày Tiếp Theo
              </h3>
              <p className="text-xs text-slate-500">
                Thuật toán Spaced Repetition tự động nhắc nhở theo chu kỳ 1 ngày, 3 ngày, 7 ngày để kiến thức chuyển vào trí nhớ dài hạn
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {userState.dailyReviewPlan.map((plan, idx) => (
            <div
              key={idx}
              onClick={() => onToggleReviewTask(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                plan.isDone
                  ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40 text-slate-400 line-through'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-indigo-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  plan.isDone ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-600'
                }`}>
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 mr-2 rounded-lg text-xs font-bold uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {plan.dayLabel}
                  </span>
                  <span className={`text-sm font-semibold ${plan.isDone ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                    {plan.taskTitle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">
                  {plan.isDone ? '✓ Đã xong' : 'Chưa hoàn thành'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gamification Achievements Grid */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <Trophy className="w-5 h-5 text-amber-500" />
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Huy Hiệu & Cột Mốc Thành Tích
            </h3>
            <p className="text-xs text-slate-500">
              Mở khóa các cột mốc vinh danh khi em kiên trì học tập mỗi ngày
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-5 rounded-3xl border transition-all flex flex-col justify-between space-y-3 ${
                ach.unlocked
                  ? 'bg-gradient-to-tr from-amber-500/10 to-orange-500/10 border-amber-300 dark:border-amber-900/60 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/30 border-slate-200/60 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{ach.title}</h4>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                    ach.unlocked
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                  }`}>
                    {ach.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {ach.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between text-[11px] font-semibold">
                <span className={ach.unlocked ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'}>
                  {ach.unlocked ? '✓ Đã mở khóa' : '🔒 Đang khóa'}
                </span>
                {ach.unlocked && (
                  <span className="text-emerald-600 dark:text-emerald-400">Đạt chuẩn</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
