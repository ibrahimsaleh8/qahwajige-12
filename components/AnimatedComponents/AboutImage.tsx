import Image from "next/image";

export default function AboutImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="flex justify-center items-center px-1">
      {/* IMAGE (LCP) — NO ANIMATION */}
      <div className="relative md:rounded-2xl overflow-hidden shadow-lg border-2 border-main-color">
        <Image
          src={imageUrl}
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full md:h-200 object-top object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/40" />
      </div>
    </div>
  );
}
