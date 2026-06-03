import { RotateCcw, Share2 } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../config/site';
import type { ResultProfile } from '../config/results';
import SharePoster from './SharePoster';

type Props = {
  result: ResultProfile;
  onRestart: () => void;
};

export default function ResultPage({ result, onRestart }: Props) {
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-md bg-white p-6 shadow-soft sm:p-10">
          <p className="text-sm font-semibold text-road">你的工作风格</p>
          <h2 className="mt-3 text-4xl font-bold text-navy">{result.name}</h2>
          <p className="mt-4 text-xl font-semibold leading-9 text-civic">{result.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {result.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
                {keyword}
              </span>
            ))}
          </div>
          <p className="mt-7 leading-8 text-slate-700">{result.description}</p>
          <p className="mt-5 font-semibold text-civic">{siteConfig.sharedLine}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Block title="你的工作特点" items={result.traits} />
            <Block title="你为团队带来的价值" items={result.teamValue} />
            <Block title="你更容易关注的细节" items={result.focusDetails} />
          </div>

          <div className="mt-8 rounded-md bg-slate-50 p-5">
            <p className="text-sm font-semibold text-civic">适合分享的一句话</p>
            <p className="mt-2 leading-7 text-slate-700">{result.shareText}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onRestart}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 font-semibold text-civic hover:bg-slate-50"
            >
              <RotateCcw className="h-5 w-5" />
              重新测试
            </button>
            <button
              onClick={() => setPosterOpen(true)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-civic px-5 font-semibold text-white hover:bg-navy"
            >
              <Share2 className="h-5 w-5" />
              生成分享海报
            </button>
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-500">{siteConfig.disclaimer}</p>
        </div>
      </div>
      {posterOpen && <SharePoster result={result} onClose={() => setPosterOpen(false)} />}
    </section>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-slate-200 p-5">
      <h3 className="font-bold text-navy">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-road" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
