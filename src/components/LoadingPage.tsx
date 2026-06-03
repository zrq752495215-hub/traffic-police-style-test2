export default function LoadingPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-navy px-5 text-white">
      <div className="text-center">
        <div className="mx-auto mb-8 h-16 w-16 rounded-full border-4 border-white/20 border-t-road animate-spin" />
        <p className="text-xl font-semibold">正在整理你的工作风格关键词……</p>
      </div>
    </section>
  );
}
