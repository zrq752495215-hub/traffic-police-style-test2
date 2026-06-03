import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { questions } from '../config/questions';
import type { Answers } from '../utils/calculateResult';

type Props = {
  initialAnswers: Answers;
  onChange: (answers: Answers) => void;
  onFinish: (answers: Answers) => void;
};

export default function QuizPage({ initialAnswers, onChange, onFinish }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const question = questions[current];
  const selected = answers[question.id];
  const progress = ((current + 1) / questions.length) * 100;

  function choose(index: number) {
    const nextAnswers = { ...answers, [question.id]: index };
    setAnswers(nextAnswers);
    onChange(nextAnswers);

    if (current === questions.length - 1) {
      onFinish(nextAnswers);
      return;
    }
    window.setTimeout(() => setCurrent((value) => value + 1), 160);
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-5 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrent((value) => Math.max(0, value - 1))}
            disabled={current === 0}
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-civic shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            上一题
          </button>
          <p className="text-sm font-semibold text-slate-600">第 {current + 1} 题 / 共 {questions.length} 题</p>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-road transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-6 rounded-md bg-white p-5 shadow-soft sm:p-8">
          <p className="text-sm font-semibold text-civic">工作场景</p>
          <h2 className="mt-3 text-2xl font-bold leading-10 text-navy sm:text-3xl">{question.title}</h2>
          <div className="mt-7 grid gap-3">
            {question.options.map((option, index) => (
              <button
                key={option.text}
                onClick={() => choose(index)}
                className={`min-h-16 rounded-md border px-4 py-4 text-left leading-7 transition focus:outline-none focus:ring-4 focus:ring-road/30 ${
                  selected === index
                    ? 'border-road bg-amber-50 text-navy'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-civic hover:bg-slate-50'
                }`}
              >
                <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-civic">
                  {String.fromCharCode(65 + index)}
                </span>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
