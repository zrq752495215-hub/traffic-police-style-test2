import { useMemo, useState } from 'react';
import HomePage from './components/HomePage';
import IntroPage from './components/IntroPage';
import LoadingPage from './components/LoadingPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import { results } from './config/results';
import { calculateResult, emptyAnswers, type Answers } from './utils/calculateResult';

type Page = 'home' | 'intro' | 'quiz' | 'loading' | 'result';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [answers, setAnswers] = useState<Answers>(() => emptyAnswers());
  const resultId = useMemo(() => calculateResult(answers), [answers]);

  function finishQuiz(nextAnswers: Answers) {
    setAnswers(nextAnswers);
    setPage('loading');
    window.setTimeout(() => setPage('result'), 1500);
  }

  function restart() {
    setAnswers(emptyAnswers());
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      {page === 'home' && <HomePage onStart={() => setPage('intro')} />}
      {page === 'intro' && <IntroPage onStart={() => setPage('quiz')} onBack={() => setPage('home')} />}
      {page === 'quiz' && <QuizPage initialAnswers={answers} onChange={setAnswers} onFinish={finishQuiz} />}
      {page === 'loading' && <LoadingPage />}
      {page === 'result' && <ResultPage result={results[resultId]} onRestart={restart} />}
    </main>
  );
}
