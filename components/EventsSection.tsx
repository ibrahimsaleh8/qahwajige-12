"use client";

import { motion } from "motion/react";
import {
  Heart,
  Briefcase,
  Users,
  PartyPopper,
  Calendar,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { InlineGallery } from "./InlineGallery";
import type { GalleryImageData } from "@/lib/responseType";

const events: { icon: string; title: string; description: string }[] = [
  {
    icon: "Heart",
    title: "أعراس وليالي زفاف",
    description:
      "نسهم في إضفاء طابع الضيافة العربية على ليلة العمر مع تقديم القهوة والتمر باحترافية وأناقة.",
  },
  {
    icon: "Briefcase",
    title: "اجتماعات وفعاليات شركات",
    description:
      "خدمة ضيافة راقية للاجتماعات واللقاءات الرسمية في الرياض تناسب صورة مؤسستكم.",
  },
  {
    icon: "Users",
    title: "مناسبات عائلية",
    description:
      "مجالس وأفراح عائلية مع صبّابين محترفين ومستلزمات كاملة لضمان راحة ضيوفكم.",
  },
  {
    icon: "PartyPopper",
    title: "حفلات ومناسبات خاصة",
    description:
      "تخرج، خطوبة، أعياد ميلاد وأي مناسبة خاصة نقدم فيها خدمة القهوة العربية بتميز.",
  },
  {
    icon: "Calendar",
    title: "فعاليات ومؤتمرات",
    description:
      "دعم ضيافة لفعالياتكم ومؤتمراتكم في الرياض مع تنظيم ومرونة في التوقيت والحجم.",
  },
  {
    icon: "Sparkles",
    title: "مناسبات رمضان والعيد",
    description:
      "نساعدكم في استقبال الضيوف في رمضان والعيد بتقديم قهوة وضيافة تليق بالمناسبة.",
  },
];

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Briefcase,
  Users,
  PartyPopper,
  Calendar,
  Sparkles,
};

export default function EventsSection({
  gallery = [],
}: {
  gallery?: GalleryImageData[];
}) {
  return (
    <section id="events" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.header
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}>
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wider mb-4">
            نخدم جميع المناسبات
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            مناسباتنا <span className="text-cyan-400">في الرياض</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm leading-relaxed">
            قهوجى الرياض جاهز لخدمة مناسبتكم — أعراس، اجتماعات، مناسبات عائلية.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-slate-800/30 p-6 text-right hover:border-cyan-500/20 hover:bg-slate-800/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        <InlineGallery images={gallery} title="من مناسباتنا المتنوعة" />
      </div>
    </section>
  );
}
