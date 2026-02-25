export default function HeroText({
  headline,
  subheadline,
}: {
  headline: string;
  subheadline: string;
}) {
  return (
    <div className="space-y-4">
      <h2 className="flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400/90 text-[0.7rem] font-semibold tracking-widest uppercase">
        قهوجى الرياض
      </h2>
      <h1
        style={{ contentVisibility: "visible" }}
        className="font-extrabold leading-[1.15] text-white max-w-2xl text-3xl tracking-tight">
        {headline}
      </h1>
      <p className="text-slate-400 leading-[1.8] max-w-xl text-xl">
        {subheadline}
      </p>
    </div>
  );
}
