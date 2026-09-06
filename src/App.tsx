import React, { useState, useEffect } from 'react';
import { Sidebar, NavTabId } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { DashboardView } from './components/dashboard/DashboardView';
import { WorksView } from './components/works/WorksView';
import { DissectView } from './components/dissect/DissectView';
import { VocabularyView } from './components/vocabulary/VocabularyView';
import { EssayWritingView } from './components/essay/EssayWritingView';
import { ExamView } from './components/exams/ExamView';
import { AiTutorView } from './components/ai-tutor/AiTutorView';
import { NotebookView } from './components/notebook/NotebookView';
import { ProgressView } from './components/progress/ProgressView';
import { SettingsModal } from './components/common/SettingsModal';
import {
  getStoredUserState,
  saveUserState,
  toggleSaveVocab,
  markWorkStudied,
  markDetailDissected
} from './services/storage/storageService';
import { UserLearningState } from './types';
import { CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NavTabId>('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('vanhoc10_theme') === 'dark';
  });

  // User State
  const [userState, setUserState] = useState<UserLearningState>(getStoredUserState);

  // Cross-navigation states
  const [dissectWorkId, setDissectWorkId] = useState<string>('dong-chi');
  const [dissectDetailId, setDissectDetailId] = useState<string | undefined>(undefined);
  const [paragraphDetailQuote, setParagraphDetailQuote] = useState<string>('Đầu súng trăng treo');
  const [paragraphWorkTitle, setParagraphWorkTitle] = useState<string>('Đồng chí');

  // Toast alert
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('vanhoc10_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('vanhoc10_theme', 'light');
    }
  }, [isDarkMode]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3200);
  };

  const refreshUserState = () => {
    setUserState(getStoredUserState());
  };

  const handleToggleReviewTask = (index: number) => {
    const updated = { ...userState };
    updated.dailyReviewPlan[index].isDone = !updated.dailyReviewPlan[index].isDone;
    setUserState(updated);
    saveUserState(updated);
    if (updated.dailyReviewPlan[index].isDone) {
      showToast('Đã hoàn thành mục ôn tập!');
    }
  };

  const handleSelectWorkToDissect = (workId: string, detailId?: string) => {
    setDissectWorkId(workId);
    setDissectDetailId(detailId);
    markWorkStudied(workId);
    if (detailId) markDetailDissected(detailId);
    refreshUserState();
    setCurrentTab('dissect');
  };

  const handleNavigateToParagraph = (quote: string, workTitle: string) => {
    setParagraphDetailQuote(quote);
    setParagraphWorkTitle(workTitle);
    setCurrentTab('essay');
  };

  const handleToggleVocab = (vocabId: string) => {
    toggleSaveVocab(vocabId);
    refreshUserState();
  };

  const handleRecordExamScore = (score: number) => {
    const updated = { ...userState };
    updated.latestExamScore = score;
    setUserState(updated);
    saveUserState(updated);
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl border border-slate-700 dark:border-slate-200 text-xs sm:text-sm font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <Header
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          streakDays={userState.streakDays}
          onNavigate={(tab) => setCurrentTab(tab)}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {currentTab === 'dashboard' && (
            <DashboardView
              userState={userState}
              onNavigate={(tab) => setCurrentTab(tab)}
              onToggleReviewTask={handleToggleReviewTask}
            />
          )}

          {currentTab === 'works' && (
            <WorksView
              onSelectWorkToDissect={handleSelectWorkToDissect}
              studiedWorkIds={userState.studiedWorkIds}
            />
          )}

          {currentTab === 'dissect' && (
            <DissectView
              selectedWorkId={dissectWorkId}
              selectedDetailId={dissectDetailId}
              onNavigateToParagraphBuilder={handleNavigateToParagraph}
              onAddSuccessToast={showToast}
            />
          )}

          {currentTab === 'vocab' && (
            <VocabularyView
              savedVocabIds={userState.savedVocabIds}
              onToggleSaveVocab={handleToggleVocab}
              onAddSuccessToast={showToast}
            />
          )}

          {currentTab === 'essay' && (
            <EssayWritingView
              initialDetailQuote={paragraphDetailQuote}
              initialWorkTitle={paragraphWorkTitle}
              onAddSuccessToast={showToast}
            />
          )}

          {currentTab === 'exam' && (
            <ExamView
              onRecordExamScore={handleRecordExamScore}
              onAddSuccessToast={showToast}
            />
          )}

          {currentTab === 'ai-tutor' && (
            <AiTutorView />
          )}

          {currentTab === 'notebook' && (
            <NotebookView
              entries={userState.savedNotebookEntries}
              onRefreshEntries={refreshUserState}
              onAddSuccessToast={showToast}
            />
          )}

          {currentTab === 'progress' && (
            <ProgressView
              userState={userState}
              onToggleReviewTask={handleToggleReviewTask}
              onAddSuccessToast={showToast}
            />
          )}
        </main>
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onRefreshData={refreshUserState}
        onAddSuccessToast={showToast}
      />
    </div>
  );
};

export default App;
