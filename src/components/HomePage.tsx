import { ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

type Props = {
  onStart: () => void;
};

export default function HomePage({ onStart }: Props) {
  return (
    <section className="relative min-h-screen bg-navy text-white">
      <div className="absolute inset-0 road-grid opacity-80" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-12 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-50">
            <ShieldCheck className="h-4 w-4 text-road" />
            交通安全互动体验
          </div>
          <h1 className="text-balance text-4xl font-bold leading-tight sm:text-6xl">{siteConfig.title}</h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-9 text-blue-50">{siteConfig.subtitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100">{siteConfig.description}</p>
          <button
            onClick={onStart}
            className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-md bg-road px-6 py-3 text-base font-semibold text-navy shadow-soft transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-road/40"
          >
            开始测试
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
