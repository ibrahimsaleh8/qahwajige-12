import { getIconComponent } from "@/lib/getIconComponent";

type Props = {
  icon?: string;
};
export default function ShowSectionIcon({ icon }: Props) {
  return (() => {
    const Icon = getIconComponent(icon);
    return Icon ? (
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/70 bg-black/10 transition-colors duration-300 group-hover:border-black group-hover:bg-main-color/10">
        <Icon className="h-6 w-6" />
      </span>
    ) : null;
  })();
}
