import { mockAiEngine } from './mockAiEngine';
import { worksData } from '../../data/worksData';
import {
  SentenceUpgradeResult,
  EssayFeedbackResult,
  LiteraryDetail,
  Work
} from '../../types';

export interface AiServiceConfig {
  apiKey?: string;
  provider?: 'mock' | 'gemini' | 'openai';
}

class AiService {
  private config: AiServiceConfig = {
    provider: 'mock'
  };

  constructor() {
    const savedKey = localStorage.getItem('vanhoc10_ai_api_key');
    if (savedKey) {
      this.config.apiKey = savedKey;
      this.config.provider = 'gemini';
    }
  }

  setApiKey(key: string, provider: 'gemini' | 'openai' = 'gemini') {
    this.config.apiKey = key;
    this.config.provider = provider;
    localStorage.setItem('vanhoc10_ai_api_key', key);
    localStorage.setItem('vanhoc10_ai_provider', provider);
  }

  getApiKey(): string | undefined {
    return this.config.apiKey;
  }

  getProvider(): string {
    return this.config.provider || 'mock';
  }

  /**
   * Phân tích tổng quan tác phẩm
   */
  async analyzeWork(workId: string): Promise<Work | undefined> {
    return worksData.find(w => w.id === workId);
  }

  /**
   * Phân tích chi tiết tác phẩm (10 câu hỏi & 5 tầng)
   */
  async analyzeDetail(workId: string, detailId: string): Promise<LiteraryDetail | undefined> {
    const work = worksData.find(w => w.id === workId);
    if (!work) return undefined;
    return work.details.find(d => d.id === detailId);
  }

  /**
   * Nâng cấp câu văn học sinh
   */
  async improveSentence(inputSentence: string): Promise<SentenceUpgradeResult> {
    return mockAiEngine.improveSentence(inputSentence);
  }

  /**
   * Chấm và sửa bài văn 5 tiêu chí
   */
  async gradeEssay(essayText: string, topic?: string): Promise<EssayFeedbackResult> {
    return mockAiEngine.gradeEssay(essayText, topic);
  }

  /**
   * Tạo khung 7 bước biến chi tiết thành đoạn văn
   */
  generateParagraphFramework(detailText: string, thoughts: string, keywords: string[]) {
    return mockAiEngine.generateParagraphFramework(detailText, thoughts, keywords);
  }

  /**
   * Trò chuyện gợi mở với Cô giáo Văn AI (Socratic)
   */
  async chatWithTutor(message: string, contextTopic?: string) {
    return mockAiEngine.askTutorAi(message, contextTopic);
  }
}

export const aiService = new AiService();
