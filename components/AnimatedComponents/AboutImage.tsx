import Image from "next/image";

export default function AboutImage({ imageUrl }: { imageUrl: string }) {
  if (!imageUrl) {
    return (
      <div className="w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden border border-white/10 bg-slate-800/50 flex items-center justify-center">
        <div className="text-slate-600 text-6xl font-black">قهوجى</div>
      </div>
    );
  }
  return (
    <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <Image
        src={imageUrl}
        alt="قهوجى الرياض — خدمة الضيافة"
        width={600}
        height={750}
        className="w-full aspect-4/5 object-cover"
        priority
        sizes="(max-width: 768px) 90vw, 420px"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </div>
  );
}
