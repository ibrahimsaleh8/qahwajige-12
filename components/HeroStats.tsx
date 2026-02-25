const stats = [
  { value: "+٥٠٠", label: "مناسبة" },
  { value: "+١٠٠", label: "عميل سعيد" },
  { value: "٢٤/٧", label: "دعم" },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-8 pt-2">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col">
          <span className="text-cyan-400 font-bold text-xl tabular-nums">
            {s.value}
          </span>
          <span className="text-slate-500 text-sm font-medium">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
