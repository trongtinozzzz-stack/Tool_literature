import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  BookOpen,
  Search,
  PenTool,
  BookMarked,
  HelpCircle,
  FileText,
  CheckCircle2,
  RefreshCw,
  User
} from 'lucide-react';
import { ChatMessage } from '../../types';
import { aiService } from '../../services/ai/aiService';

export const AiTutorView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      role: 'assistant',
      content: `Chào em! Cô là Trợ lý Văn AI đồng hành cùng em ôn thi vào lớp 10. 🌸\n\nPhương châm học Văn của chúng ta là: **Hiểu sâu → Tự suy nghĩ → Tự viết**, kiên quyết nói không với việc học thuộc lòng văn mẫu sáo rỗng.\n\nHôm nay em muốn cô đồng hành về tác phẩm nào hay muốn rèn luyện kỹ năng gì? Em có thể gõ câu hỏi hoặc bấm vào các nút nhanh bên dưới nhé!`,
      timestamp: 'Vừa xong',
      quickReplies: [
        '📖 Giải thích tác phẩm',
        '🔍 Phân tích chi tiết',
        '✍️ Giúp em viết đoạn',
        '🧠 Cho em từ hay',
        '❓ Hỏi em để em tự suy nghĩ'
      ]
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: '📖 Giải thích tác phẩm', text: 'Cô ơi, giải thích giúp em tác phẩm Đồng chí một cách dễ hiểu nhất!' },
    { label: '🔍 Phân tích chi tiết', text: 'Cô hướng dẫn em phân tích chi tiết "Đầu súng trăng treo" theo hướng thi vào 10 với ạ!' },
    { label: '✍️ Giúp em viết đoạn', text: 'Cô hướng dẫn em cấu trúc viết một đoạn văn nghị luận 12 câu đạt điểm 8+ nhé!' },
    { label: '🧠 Cho em từ hay', text: 'Cô cho em một số từ vựng nâng cao thay thế cho từ "thể hiện" và "rất hay" nhé!' },
    { label: '❓ Hỏi em để em tự suy nghĩ', text: 'Cô hãy hỏi em một câu hỏi về tác phẩm Lặng lẽ Sa Pa để em tự trả lời nhé!' },
    { label: '📝 Ra đề cho em', text: 'Cô ra cho em một câu hỏi đọc hiểu 1 điểm môn Văn vào 10 để em làm thử!' },
    { label: '🔎 Kiểm tra bài viết', text: 'Làm thế nào để kiểm tra bài viết của em không bị mắc lỗi phân tích chung chung hả cô?' }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      role: 'user',
      content: text,
      timestamp: 'Vừa xong'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    try {
      const { reply, quickReplies, isSocratic } = await aiService.chatWithTutor(text);
      const assistantMsg: ChatMessage = {
        id: 'ai-' + Date.now(),
        role: 'assistant',
        content: reply,
        timestamp: 'Vừa xong',
        quickReplies,
        isSocraticQuestion: isSocratic
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: 'err-' + Date.now(),
        role: 'assistant',
        content: 'Cô tạm thời bị gián đoạn mạng một chút, em hãy thử hỏi lại nhé!',
        timestamp: 'Vừa xong'
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8.5rem)] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden animate-fade-in">
      {/* Tutor Top Banner */}
      <div className="px-6 py-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 absolute -bottom-0.5 -right-0.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                Cô Giáo Văn AI
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                Socratic Tutor
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Phương pháp gợi mở • Không học vẹt văn mẫu • Ôn thi vào lớp 10
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setMessages([
              {
                id: 'm-reset',
                role: 'assistant',
                content: 'Cô đã làm mới cuộc trò chuyện. Em muốn bắt đầu học về phần nào hôm nay?',
                timestamp: 'Vừa xong',
                quickReplies: ['📖 Giải thích tác phẩm', '✍️ Giúp em viết đoạn', '🧠 Cho em từ hay']
              }
            ]);
          }}
          className="text-xs text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Bắt đầu đoạn chat mới"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Prompts Bar */}
      <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/20 overflow-x-auto flex items-center gap-2">
        {quickPrompts.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(btn.text)}
            className="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold whitespace-nowrap hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-2xl"
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                isUser
                  ? 'bg-amber-500 text-white'
                  : 'bg-indigo-600 text-white'
              }`}>
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className="space-y-2">
                <div className={`p-4 rounded-3xl text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-200/50 dark:border-slate-700/50'
                }`}>
                  <div className="whitespace-pre-line font-medium">
                    {msg.content}
                  </div>
                </div>

                {/* Quick replies bubbles under assistant message */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.quickReplies.map((reply, rIdx) => (
                      <button
                        key={rIdx}
                        onClick={() => handleSendMessage(reply)}
                        className="px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                      >
                        👉 {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex gap-3 max-w-xl">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-3.5 rounded-3xl bg-slate-100 dark:bg-slate-800 rounded-tl-none flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Bar */}
      <div className="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Hỏi cô về tác phẩm, từ vựng hay cách viết đoạn..."
            className="flex-1 px-4 py-3 text-xs sm:text-sm rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 font-medium"
          />
          <button
            type="submit"
            disabled={!inputVal.trim() || isTyping}
            className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white shadow-md shadow-indigo-500/20 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
