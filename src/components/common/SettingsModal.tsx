import React, { useState } from 'react';
import { X, Key, ShieldCheck, User, RotateCcw } from 'lucide-react';
import { aiService } from '../../services/ai/aiService';
import { getStoredUserState, saveUserState } from '../../services/storage/storageService';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshData: () => void;
  onAddSuccessToast: (msg: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  onRefreshData,
  onAddSuccessToast
}) => {
  const [apiKey, setApiKey] = useState(aiService.getApiKey() || '');
  const [provider, setProvider] = useState<'gemini' | 'openai'>('gemini');
  const [learnerName, setLearnerName] = useState(getStoredUserState().learnerName);

  if (!isOpen) return null;

  const handleSave = () => {
    if (apiKey.trim()) {
      aiService.setApiKey(apiKey.trim(), provider);
    }
    const state = getStoredUserState();
    state.learnerName = learnerName.trim() || 'Sĩ tử 2K10';
    saveUserState(state);

    onRefreshData();
    onClose();
    onAddSuccessToast('Đã lưu cấu hình cài đặt thành công!');
  };

  const handleResetData = () => {
    if (confirm('Em có chắc chắn muốn đặt lại dữ liệu học tập về mặc định không?')) {
      localStorage.removeItem('vanhoc10_user_state_v1');
      onRefreshData();
      onClose();
      onAddSuccessToast('Đã khôi phục dữ liệu ban đầu!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
            Cài Đặt Hệ Thống & AI
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          {/* Learner Name */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <User className="w-4 h-4 text-indigo-600" />
              <span>Tên sĩ tử (người học):</span>
            </label>
            <input
              type="text"
              value={learnerName}
              onChange={(e) => setLearnerName(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
            />
          </div>

          {/* AI Provider & Key */}
          <div className="space-y-2 p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
            <div className="flex items-center gap-1.5 font-bold text-indigo-900 dark:text-indigo-200">
              <Key className="w-4 h-4 text-indigo-600" />
              <span>Tùy chọn kết nối AI Trực Tuyến:</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Mặc định ứng dụng sử dụng Engine Văn học Offline phong phú. Nếu muốn kết nối API Gemini hoặc OpenAI riêng của em, hãy nhập key bên dưới.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value as 'gemini' | 'openai')}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
              >
                <option value="gemini">Google Gemini API</option>
                <option value="openai">OpenAI GPT-4o API</option>
              </select>
            </div>

            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Nhập API Key nếu có (không bắt buộc)..."
              className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
            />
          </div>

          {/* Reset progress */}
          <div className="pt-2">
            <button
              onClick={handleResetData}
              className="text-xs text-rose-500 hover:text-rose-600 flex items-center gap-1 font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Khôi phục tiến độ & dữ liệu mặc định</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300"
          >
            Đóng
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md"
          >
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
};
