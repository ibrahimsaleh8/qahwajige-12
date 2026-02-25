"use client";

import { motion } from "motion/react";
import {
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

type LinkItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  className: string;
};

export default function FloatedIcons({
  whatsapp,
  telephone,
}: {
  whatsapp: string;
  telephone: string;
}) {
  const waNum = (whatsapp || "").replace(/\+/g, "");
  const links: LinkItem[] = [];

  if (waNum) {
    links.push({
      href: `https://wa.me/${waNum}?text=مرحباً، أود الاستفسار عن خدمات قهوجى الرياض`,
      label: "واتساب",
      icon: <FaWhatsapp className="w-5 h-5 text-white" />,
      className: "bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25",
    });
  }
  if (telephone) {
    links.push({
      href: `tel:${telephone}`,
      label: "اتصل",
      icon: <FaPhone className="w-4 h-4 text-white" />,
      className: "bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/25",
    });
  }
  links.push(
    {
      href: "https://www.instagram.com/qahwajeyn",
      label: "انستغرام",
      icon: <FaInstagram className="w-4 h-4 text-white" />,
      className: "bg-gradient-to-br from-purple-600 to-pink-500 hover:opacity-90",
    },
    {
      href: "https://www.tiktok.com/@user61719922769991",
      label: "تيك توك",
      icon: <FaTiktok className="w-4 h-4 text-white" />,
      className: "bg-slate-900 hover:bg-slate-800 border border-white/10",
    },
    {
      href: "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
      label: "فيسبوك",
      icon: <FaFacebookF className="w-4 h-4 text-white" />,
      className: "bg-[#1877f2] hover:bg-[#166fe5]",
    },
    {
      href: "https://x.com/NghmAbw11703",
      label: "تويتر",
      icon: <FaTwitter className="w-4 h-4 text-white" />,
      className: "bg-[#1da1f2] hover:bg-[#1a94da]",
    },
    {
      href: "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
      label: "يوتيوب",
      icon: <FaYoutube className="w-4 h-4 text-white" />,
      className: "bg-red-600 hover:bg-red-500",
    }
  );

  return (
    <div
      className="fixed z-30 left-3 bottom-6 flex flex-col gap-2"
      aria-label="روابط التواصل"
    >
      {links.map((item, i) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: i * 0.05 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className={`
            flex items-center justify-center w-11 h-11 rounded-xl
            text-white transition-all border border-white/10
            ${item.className}
          `}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
