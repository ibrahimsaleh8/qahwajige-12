import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

const footerLinks = [
  { name: "الرئيسية", href: "/#main-section" },
  { name: "من نحن", href: "/#about-us" },
  { name: "مناسباتنا", href: "/#events" },
  { name: "كيف نعمل", href: "/#how-it-works" },
  { name: "الباقات", href: "/#packages" },
  { name: "الأسئلة الشائعة", href: "/#faq-section" },
  { name: "اتصل بنا", href: "/#contact-information" },
];

/** Keyword-style links — all point to #services for SEO/navigation */
const servicesKeywords = [
  "خدماتنا",
  "خدمة القهوة العربية",
  "ضيافة الرياض",
  "صبّابون قهوة",
  "خدمات مناسبات",
  "قهوة عربية الرياض",
];

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-white/6 bg-[#0F172A]">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute top-[-20%] right-[-10%] w-125 h-125 rounded-full bg-cyan-400/5 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-100 h-100 rounded-full bg-indigo-600/6 blur-[90px]" />

      {/* ── Main grid ── */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link
              href="/"
              className="text-[#C7CBEF] text-2xl font-bold tracking-wide hover:text-cyan-400 transition-colors duration-200 [text-shadow:0_0_20px_rgba(199,203,239,0.2)] w-fit">
              {brandName}
            </Link>

            {description && (
              <p className="text-white/70 text-sm leading-[1.85]">
                {description}
              </p>
            )}

            {/* Cyan divider */}
            <div className="w-12 h-0.5 rounded-full bg-linear-to-l from-transparent via-cyan-400 to-transparent" />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <p className="text-[#C7CBEF] font-bold text-base tracking-wide">
              روابط سريعة
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:shadow-[0_0_6px_rgba(34,211,238,0.7)] transition-all duration-200 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* خدماتنا — keyword links to #services */}
          <div className="flex flex-col gap-5">
            <p className="text-[#C7CBEF] font-bold text-base tracking-wide">
              خدماتنا
            </p>
            <ul className="space-y-3">
              {servicesKeywords.map((label) => (
                <li key={label}>
                  <Link
                    href="/#services"
                    className="group flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:shadow-[0_0_6px_rgba(34,211,238,0.7)] transition-all duration-200 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <p className="text-[#C7CBEF] font-bold text-base tracking-wide">
              تواصل معنا
            </p>
            <ul className="space-y-4">
              {address && (
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-8 h-8 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="text-white/70 text-sm leading-relaxed pt-1">
                    {address}
                  </span>
                </li>
              )}
              {email && (
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-8 h-8 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-white/70 text-sm leading-relaxed pt-1 hover:text-cyan-400 transition-colors duration-200 break-all">
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-8 h-8 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <a
                    href={`tel:${phone}`}
                    dir="ltr"
                    className="text-white/70 text-sm leading-relaxed pt-1 hover:text-cyan-400 transition-colors duration-200">
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-5">
            <p className="text-[#C7CBEF] font-bold text-base tracking-wide">
              موقعنا على الخريطة
            </p>
            <div
              className="
              relative rounded-3xl overflow-hidden
              bg-slate-800/40 backdrop-blur-xl
              border border-white/8 border-t-white/[0.14]
              shadow-[0_4px_30px_rgba(0,0,0,0.25)]
              p-1
            ">
              {/* top accent */}
              <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-3xl bg-linear-to-l from-transparent via-cyan-400/40 to-transparent" />
              <div className="w-full aspect-video min-h-44 rounded-2xl overflow-hidden">
                <iframe
                  src={mapEmbedSrc}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع قهوجى الرياض على الخريطة"
                  className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-white/6 container mx-auto text-center">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center flex-wrap gap-4">
          <p className="text-white/70 text-xs">
            © {currentYear}{" "}
            <span className="text-white/70 font-semibold">{brandName}</span>.{" "}
            جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
