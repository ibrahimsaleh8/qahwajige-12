export default function HeroText({
  headline,
  subheadline,
}: {
  headline: string;
  subheadline: string;
}) {
  return (
    <>
      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/25 text-cyan-400 text-xs font-bold tracking-wider">
        الأصالة في كل فنجان
      </span>

      {/* LCP ELEMENT */}
      <h1
        style={{ contentVisibility: "visible" }}
        className="
          font-extrabold
          leading-tight
          text-[#C7CBEF]
          max-w-2xl
          text-[clamp(2rem,6vw,3.75rem)]
        ">
        {headline}
      </h1>

      <p className="text-white/80 leading-[1.85] max-w-xl text-[clamp(0.95rem,2vw,1.15rem)]">
        {subheadline}
      </p>
    </>
  );
}
