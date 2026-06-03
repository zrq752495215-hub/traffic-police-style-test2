import { ArrowLeft, ArrowRight, Clock, LockKeyhole, UserRoundX } from 'lucide-react';
import type { ReactNode } from 'react';
import { siteConfig } from '../config/site';

type Props = {
  onStart: () => void;
  onBack: () => void;
};

export default function IntroPage({ onStart, onBack }: Props) {
  return (
    <section className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-civic hover:text-navy">
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </button>
        <div className="mt-8 rounded-md bg-white p-6 shadow-soft sm:p-10">
          <p className="text-sm font-semibold text-road">测试说明</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">开始前，请先了解这些内容</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Info icon={<Clock />} title="预计 3 至 5 分钟" />
            <Info icon={<UserRoundX />} title="不涉及能力评价" />
            <Info icon={<LockKeyhole />} title="不采集个人信息" />
          </div>
          <ul className="mt-8 space-y-4">
            {siteConfig.introItems.map((item) => (
              <li key={item} className="flex gap-3 rounded-md bg-slate-50 p-4 leading-7 text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-road" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={onStart}
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-civic px-6 py-3 font-semibold text-white transition hover:bg-navy focus:outline-none focus:ring-4 focus:ring-civic/30 sm:w-auto"
          >
            开始答题
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <div className="mb-3 text-road [&_svg]:h-6 [&_svg]:w-6">{icon}</div>
      <p className="font-semibold text-navy">{title}</p>
    </div>
  );
}
