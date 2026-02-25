import { Quote, Coffee } from "lucide-react";

export default function WhyUsDescription({
  description,
}: {
  description: string;
}) {
  return (
    <section
      id="why-us-section"
      dir="rtl"
      className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/3 via-transparent to-amber-500/3" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-amber-500/5 blur-[80px] -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Icon / visual block */}
          <div className="shrink-0 flex items-center justify-center w-24 h-24 rounded-3xl bg-amber-500/10 border border-amber-500/20 text-amber-400/90">
            <Coffee className="w-12 h-12" />
          </div>

          {/* Quote block */}
          <div className="flex-1 text-center md:text-right">
            <Quote className="w-10 h-10 text-cyan-500/20 mb-4 mx-auto md:mx-0 md:mb-3" />
            <p className="text-xl sm:text-2xl text-slate-200 font-medium leading-[1.9] max-w-2xl">
              {description}
            </p>
            <p className="mt-5 text-slate-500 text-sm font-medium">
              — قهوجى الرياض
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
