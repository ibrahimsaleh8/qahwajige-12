const stats = [
  { value: "+٥٠٠", label: "مناسبة منجزة" },
  { value: "+١٠٠", label: "عميل راضٍ" },
  { value: "٢٤/٧", label: "خدمة متواصلة" },
];

export default function HeroStats() {
  return (
    <div className="flex gap-6 pt-6 border-t border-white/10 justify-center lg:justify-start">
      {stats.map((s) => (
        <div key={s.label} className="text-center lg:text-right">
          <span className="block text-cyan-400 font-extrabold text-lg">
            {s.value}
          </span>
          <span className="text-white/35 text-xs">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
