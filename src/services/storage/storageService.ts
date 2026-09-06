import { UserLearningState, NotebookEntry, DailyReviewSchedule } from '../../types';

const STORAGE_KEY = 'vanhoc10_user_state_v1';

const defaultReviewPlan: DailyReviewSchedule[] = [
  { dayLabel: 'Hôm nay', taskTitle: 'Ôn 5 từ vựng miêu tả cảm xúc & chi tiết Đồng chí', type: 'vocab', targetCount: 5, isDone: false },
  { dayLabel: 'Ngày mai', taskTitle: 'Mổ xẻ 3 chi tiết trong truyện ngắn Lặng lẽ Sa Pa', type: 'detail', targetCount: 3, isDone: false },
  { dayLabel: 'Sau 3 ngày', taskTitle: 'Làm mini test đọc hiểu Đề thi vào 10 Hà Nội', type: 'test', targetCount: 1, isDone: false },
  { dayLabel: 'Sau 7 ngày', taskTitle: 'Luyện viết đoạn văn 12 câu Tổng - Phân - Hợp', type: 'paragraph', targetCount: 1, isDone: false },
];

const initialDefaultState: UserLearningState = {
  learnerName: 'Sĩ tử 2K10',
  streakDays: 3,
  lastStudiedDate: new Date().toISOString().split('T')[0],
  studiedWorkIds: ['dong-chi', 'lang-le-sa-pa'],
  dissectedDetailIds: ['dc-1', 'llsp-1'],
  savedVocabIds: ['v-1', 'v-4', 'v-7'],
  savedNotebookEntries: [
    {
      id: 'nb-1',
      type: 'detail',
      title: 'Đầu súng trăng treo - Đỉnh cao kết hợp hiện thực & lãng mạn',
      content: 'Người chiến sĩ cầm chắc tay súng chiến đấu không phải vì hận thù mà vì tình yêu trăng, tình yêu sự sống và nền hòa bình cho xứ sở.',
      sourceWork: 'Đồng chí (Chính Hữu)',
      tags: ['Hình ảnh đẹp', 'Thi vào 10', 'Biểu tượng'],
      createdAt: '2026-09-05'
    },
    {
      id: 'nb-2',
      type: 'sentence',
      title: 'Cách chuyển ý mượt mà từ hiện thực sang lý tưởng',
      content: 'Mạch cảm xúc được tiếp nối bằng những suy ngẫm triết lý chín muồi về lẽ sống cống hiến thầm lặng của tuổi hai mươi.',
      tags: ['Kỹ năng viết', 'Chuyển ý'],
      createdAt: '2026-09-06'
    }
  ],
  completedEssaysCount: 4,
  latestExamScore: 8.5,
  dailyReviewPlan: defaultReviewPlan,
  unlockedAchievements: ['first_work', 'vocab_starter', 'streak_3']
};

export const getStoredUserState = (): UserLearningState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialDefaultState;
    return JSON.parse(raw);
  } catch {
    return initialDefaultState;
  }
};

export const saveUserState = (state: UserLearningState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
  }
};

export const addNotebookEntry = (entry: Omit<NotebookEntry, 'id' | 'createdAt'>): NotebookEntry => {
  const currentState = getStoredUserState();
  const newEntry: NotebookEntry = {
    ...entry,
    id: 'nb-' + Date.now(),
    createdAt: new Date().toISOString().split('T')[0]
  };
  currentState.savedNotebookEntries.unshift(newEntry);
  saveUserState(currentState);
  return newEntry;
};

export const toggleSaveVocab = (vocabId: string): boolean => {
  const currentState = getStoredUserState();
  const exists = currentState.savedVocabIds.includes(vocabId);
  if (exists) {
    currentState.savedVocabIds = currentState.savedVocabIds.filter(id => id !== vocabId);
  } else {
    currentState.savedVocabIds.push(vocabId);
  }
  saveUserState(currentState);
  return !exists;
};

export const markWorkStudied = (workId: string): void => {
  const currentState = getStoredUserState();
  if (!currentState.studiedWorkIds.includes(workId)) {
    currentState.studiedWorkIds.push(workId);
    saveUserState(currentState);
  }
};

export const markDetailDissected = (detailId: string): void => {
  const currentState = getStoredUserState();
  if (!currentState.dissectedDetailIds.includes(detailId)) {
    currentState.dissectedDetailIds.push(detailId);
    saveUserState(currentState);
  }
};
