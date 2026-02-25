export default function ShowKeywords({ keywords }: { keywords: string[] }) {
  return (
    <section
      id="keywords-section"
      className="py-20 sm:py-28 relative overflow-hidden bg-coffee-dark/80">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-coffee-dark dark:text-cream">
          خدماتنا تشمل
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 list-none p-0">
          {keywords.map((keyword, idx) => (
            <p
              key={idx}
              className="flex gap-3 items-start w-fit p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors text-sm">
              {keyword}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
