import React from 'react';
import {
  Flame,
  BookOpen,
  PenTool,
  BookMarked,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Search,
  FileText,
  Bot,
  BarChart3,
  Quote
} from 'lucide-react';
import { UserLearningState } from '../../types';
import { NavTabId } from '../layout/Sidebar';

interface DashboardViewProps {
  userState: UserLearningState;
  onNavigate: (tab: NavTabId) => void;
  onToggleReviewTask: (index: number) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  userState,
  onNavigate,
  onToggleReviewTask
}) => {
  const quickAreas: {
    id: NavTabId;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    tag: string;
  }[] = [
    {
      id: 'works',
      title: 'Thư viện tác phẩm',
      description: 'Khám phá các tác phẩm trọng tâm thi vào 10 & sơ đồ tư duy Bộ não văn học',
      icon: BookOpen,
      gradient: 'from-blue-600 to-cyan-600',
      tag: '12+ tác phẩm'
    },
    {
      id: 'dissect',
      title: 'Mổ xẻ tác phẩm',
      description: 'Phân tích chi tiết qua 10 câu hỏi & 5 tầng phân tích từ dễ đến nâng cao',
      icon: Search,
      gradient: 'from-indigo-600 to-purple-600',
      tag: '5 Tầng sâu'
    },
    {
      id: 'vocab',
      title: 'Học vốn từ vựng',
      description: 'Sổ tay 10 danh mục từ ngữ tinh hoa, nâng cấp câu văn và so sánh 4 cấp độ',
      icon: BookMarked,
      gradient: 'from-amber-500 to-orange-600',
      tag: '10 Danh mục'
    },
    {
      id: 'essay',
      title: 'Luyện viết & AI Sửa bài',
      description: 'Biến chi tiết thành đoạn văn, AI chấm 5 tiêu chí và chế độ Cứu bài văn',
      icon: PenTool,
      gradient: 'from-rose-500 to-pink-600',
      tag: 'Barem 10đ'
    },
    {
      id: 'exam',
      title: 'Luyện đề vào 10',
      description: 'Ngân hàng đề thi chính thức các tỉnh, luyện đọc hiểu, NLXH và học qua câu hỏi',
      icon: FileText,
      gradient: 'from-emerald-600 to-teal-700',
      tag: 'Đề chuẩn'
    },
    {
      id: 'ai-tutor',
      title: 'Trợ lý Cô giáo Văn AI',
      description: 'Chatbot sư phạm Socratic hỏi mở, gợi ý tư duy tự viết thay vì học vẹt văn mẫu',
      icon: Bot,
      gradient: 'from-violet-600 to-indigo-700',
      tag: 'Tương tác 24/7'
    },
    {
      id: 'progress',
      title: 'Tiến độ & Thành tích',
      description: 'Theo dõi sự tiến bộ, lịch trình ôn tập thông minh và mở khóa huy hiệu',
      icon: BarChart3,
      gradient: 'from-slate-700 to-slate-900',
      tag: 'Level Up'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-violet-900 text-white p-6 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 -mb-12 w-48 h-48 rounded-full bg-violet-500/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chinh phục kỳ thi Tuyển sinh vào Lớp 10</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Xin chào, <span className="text-amber-300">{userState.learnerName}</span>! 🌸
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Phương pháp học Văn hiện đại: <strong className="text-white">Hiểu → Suy nghĩ → Phân tích → Tự viết</strong>. Không học thuộc máy móc, bồi đắp tư duy độc lập và ngôn từ giàu cảm xúc.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('dissect')}
              className="px-5 py-3 rounded-2xl bg-white text-indigo-900 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>Mổ xẻ tác phẩm</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('essay')}
              className="px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
            >
              <PenTool className="w-4 h-4" />
              <span>Luyện viết ngay</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 Key Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Chuỗi ngày học</span>
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-bounce" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{userState.streakDays}</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Đang duy trì tốt 🔥</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Tác phẩm đã học</span>
            <BookOpen className="w-4 h-4 text-blue-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{userState.studiedWorkIds.length}</div>
            <div className="text-[11px] text-slate-500">trên 12 tác phẩm</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Chi tiết đã mổ xẻ</span>
            <Search className="w-4 h-4 text-purple-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{userState.dissectedDetailIds.length}</div>
            <div className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">5 Tầng phân tích</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Số bài viết luyện</span>
            <PenTool className="w-4 h-4 text-rose-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{userState.completedEssaysCount}</div>
            <div className="text-[11px] text-rose-600 dark:text-rose-400 font-medium">Được AI sửa bài</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Vốn từ đã lưu</span>
            <BookMarked className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{userState.savedVocabIds.length}</div>
            <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">Sổ tay từ vựng</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Điểm thi gần nhất</span>
            <Award className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {userState.latestExamScore ? `${userState.latestExamScore}` : 'Chưa thi'}
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Thang điểm 10</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Spaced Repetition + Literary Inspiration */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Smart Review Schedule */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Hệ Thống Ôn Tập Thông Minh (Spaced Repetition)</h3>
                <p className="text-xs text-slate-500">Lộ trình tự động nhắc nhở ôn lại từ vựng, chi tiết và kỹ năng viết</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('progress')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Xem chi tiết
            </button>
          </div>

          <div className="space-y-2.5">
            {userState.dailyReviewPlan.map((plan, idx) => (
              <div
                key={idx}
                onClick={() => onToggleReviewTask(idx)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  plan.isDone
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40 text-slate-500 line-through'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/70 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                    plan.isDone ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-600'
                  }`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 mr-2 rounded text-[10px] font-bold uppercase bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                      {plan.dayLabel}
                    </span>
                    <span className={`text-sm font-medium ${plan.isDone ? 'text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                      {plan.taskTitle}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {plan.isDone ? 'Đã hoàn thành' : 'Chưa xong'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Literary Quote of the Day */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Quote className="w-4 h-4" />
              <span>Góc Truyền Cảm Hứng</span>
            </div>
            <p className="font-serif-literary text-base sm:text-lg text-slate-800 dark:text-slate-200 italic leading-relaxed">
              "Văn học đối với tôi là một thứ vũ khí thanh cao và đắc lực mà chúng ta có, để vừa tố cáo và thay đổi một cái thế giới giả dối và tàn ác, vừa làm cho lòng người được thêm trong sạch và phong phú hơn."
            </p>
          </div>
          <div className="pt-4 border-t border-amber-200/50 dark:border-amber-900/40 flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Thạch Lam</div>
            <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">Bàn về văn chương</span>
          </div>
        </div>
      </div>

      {/* 7 Main Quick Access Areas */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Các Khu Vực Học Tập Trọng Tâm</h2>
            <p className="text-xs text-slate-500">Lựa chọn khu vực bạn muốn rèn luyện hôm nay</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {quickAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                onClick={() => onNavigate(area.id)}
                className="group relative p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${area.gradient} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {area.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1 line-clamp-2">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span>Khám phá ngay</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
