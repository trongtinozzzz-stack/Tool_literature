export type WorkCategory = 'Trọng tâm thi vào 10' | 'THCS thường gặp';
export type WorkGenre = 'Thơ' | 'Truyện ngắn' | 'Ký' | 'Văn bản nghị luận';

export interface WorkStructure {
  part: string;
  title: string;
  content: string;
}

export interface LiteraryCharacter {
  name: string;
  role: string;
  traits: string[];
  keyQuotes?: string[];
}

export interface TenQuestionsAnalysis {
  q1_what: string;             // 1. Chi tiết này là gì?
  q2_simpleMeaning: string;    // 2. Hiểu đơn giản như thế nào?
  q3_whyAuthorUsed: string;    // 3. Tại sao tác giả lại sử dụng chi tiết này?
  q4_whatItExpresses: string;  // 4. Nó thể hiện điều gì?
  q5_characterLink: string;    // 5. Nó liên quan như thế nào đến nhân vật?
  q6_themeLink: string;        // 6. Nó thể hiện chủ đề gì?
  q7_artisticTechnique: string;// 7. Nghệ thuật được sử dụng?
  q8_connectionToOther: string;// 8. Có thể liên hệ với chi tiết nào khác?
  q9_examTips: string;         // 9. Khi thi nên phân tích như thế nào?
  q10_paragraphDraft: string;  // 10. Có thể viết thành đoạn văn như thế nào?
}

export interface FiveLayersAnalysis {
  level1_simple: string;       // LEVEL 1: Hiểu đơn giản như đang được giáo viên giảng
  level2_meaning: string;      // LEVEL 2: Hiểu ý nghĩa của chi tiết
  level3_artAndContent: string;// LEVEL 3: Phân tích nghệ thuật + nội dung
  level4_examTarget: string;   // LEVEL 4: Phân tích theo hướng bài thi vào 10
  level5_advancedDepth: string;// LEVEL 5: Phân tích nâng cao để tạo đoạn văn có chiều sâu
}

export interface LiteraryDetail {
  id: string;
  workId: string;
  quote: string;
  section: string;
  type: 'câu thơ' | 'hình ảnh' | 'hành động' | 'lời nói' | 'thiên nhiên' | 'chi tiết nghệ thuật';
  analysisTenQuestions: TenQuestionsAnalysis;
  fiveLevels: FiveLayersAnalysis;
  tags: string[];
}

export interface MindmapBranch {
  category: 'Chủ đề' | 'Nhân vật' | 'Chi tiết cốt lõi' | 'Hình ảnh' | 'Nghệ thuật' | 'Cảm xúc' | 'Thông điệp' | 'Dẫn chứng đắt giá';
  icon: string;
  color: string;
  items: {
    title: string;
    description: string;
    quote?: string;
  }[];
}

export interface Work {
  id: string;
  title: string;
  author: string;
  authorBio?: string;
  year: string;
  genre: WorkGenre;
  category: WorkCategory;
  grade: number;
  context: string;
  coreContent: string;
  theme: string;
  structure: WorkStructure[];
  characters?: LiteraryCharacter[];
  importantDetailsSummary: string[];
  artisticFeatures: string[];
  examProblems: string[];
  mindmap: MindmapBranch[];
  details: LiteraryDetail[];
  coverGradient: string;
}

export type VocabCategory = 
  | 'Từ miêu tả cảm xúc'
  | 'Từ phân tích nhân vật'
  | 'Từ phân tích hình ảnh'
  | 'Từ phân tích nghệ thuật'
  | 'Từ nhận xét tác giả'
  | 'Từ nhận xét chủ đề'
  | 'Từ chuyển ý'
  | 'Từ mở đoạn'
  | 'Từ kết đoạn'
  | 'Từ dùng để đánh giá';

export interface VocabularyItem {
  id: string;
  word: string;
  category: VocabCategory;
  meaning: string;
  usageGuide: string;
  exampleSentence: string;
  synonyms: string[];
  level: 'Cơ bản' | 'Khá' | 'Nâng cao';
  isSaved?: boolean;
}

export interface SentenceUpgradeResult {
  originalSentence: string;
  weakPoints: string[];
  naturalVersion: string;
  imageryVersion: string;
  examStandardVersion: string;
  explanation: string;
  warningNotice?: string;
}

export interface WritingComparisonItem {
  id: string;
  topic: string;
  detailOrQuote: string;
  level1Basic: string;
  level2Fair: string;
  level3Good: string;
  level4Deep: string;
  differenceExplanation: string;
}

export interface EssayScoreCriteria {
  content: number;     // 0-10
  analysis: number;    // 0-10
  evidence: number;    // 0-10
  expression: number;  // 0-10
  cohesion: number;    // 0-10
  total: number;       // 0-10
}

export interface EssayCritiqueItem {
  type: 'chính tả' | 'ngữ pháp' | 'câu yếu' | 'ý thiếu' | 'phân tích chung chung';
  originalSnippet: string;
  problemDesc: string;
  solutionSuggestion: string;
}

export interface EssayFeedbackResult {
  scores: EssayScoreCriteria;
  topThreeActions: string[];
  strengths: string[];
  critiques: EssayCritiqueItem[];
  evaluationSummary: {
    structure: string;
    points: string;
    evidence: string;
    expressionAndVocab: string;
  };
  stepByStepSelfCorrectionHints: string[];
  suggestedReferenceParagraph: string;
}

export interface ExamQuestion {
  id: string;
  text: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  score: number;
  standardAnswer: string;
  analysisGuide: string[];
  commonMistakes: string[];
  similarPracticePrompt: string;
}

export interface ExamPart {
  partTitle: string;
  partType: 'Đọc hiểu' | 'Nghị luận xã hội' | 'Nghị luận văn học';
  readingPassage?: string;
  readingSource?: string;
  questions: ExamQuestion[];
}

export interface ExamPaper {
  id: string;
  title: string;
  provinceOrSchool: string;
  year: string;
  targetClass: string;
  durationMinutes: number;
  parts: ExamPart[];
  totalScore: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  quickReplies?: string[];
  isSocraticQuestion?: boolean;
}

export interface NotebookEntry {
  id: string;
  type: 'detail' | 'sentence' | 'vocab' | 'evidence' | 'idea' | 'mistake';
  title: string;
  content: string;
  sourceWork?: string;
  tags: string[];
  createdAt: string;
}

export interface DailyReviewSchedule {
  dayLabel: string;
  taskTitle: string;
  type: 'vocab' | 'detail' | 'test' | 'paragraph';
  targetCount: number;
  isDone: boolean;
}

export interface UserLearningState {
  learnerName: string;
  streakDays: number;
  lastStudiedDate: string;
  studiedWorkIds: string[];
  dissectedDetailIds: string[];
  savedVocabIds: string[];
  savedNotebookEntries: NotebookEntry[];
  completedEssaysCount: number;
  latestExamScore: number | null;
  dailyReviewPlan: DailyReviewSchedule[];
  unlockedAchievements: string[];
}
