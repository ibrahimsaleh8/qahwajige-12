"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-main-color mb-4">
            معلومات التواصل
          </h2>
          <div className="w-24 h-1 bg-main-color mx-auto rounded-full mb-6" />
          <p className="text-low-color text-lg max-w-2xl mx-auto">
            نحن هنا لخدمتكم والإجابة على جميع استفساراتكم. تواصل معنا عبر أي من
            الوسائل التالية وسيسعد فريقنا بمساعدتك.{" "}
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 items-start">
              {/* Phone */}
              <div className="relative bg-card-background p-6 border border-main-color/10 hover:border-main-color/30 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-main-color rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold mb-2">الهاتف</p>
                    <a
                      href={`tel:${phone}`}
                      target="_blank"
                      className="text-low-color font-medium hover:text-main-color transition-colors duration-300 text-lg"
                      dir="ltr">
                      {phone}
                    </a>
                  </div>
                </div>
                <p className="absolute right-4 top-4 text-white/10 text-7xl font-bold">
                  1
                </p>
              </div>

              {/* Whatsapp */}
              <div className="relative bg-card-background  p-6 border border-main-color/10 hover:border-main-color/30 transition-all duration-300 group">
                <p className="absolute right-4 top-4 text-white/10 text-7xl font-bold">
                  2
                </p>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-main-color rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-2">واتساب</p>
                    <a
                      href={`https://wa.me/${
                        whatsapp.includes("+")
                          ? whatsapp.split("+").join("")
                          : whatsapp
                      }?text=`}
                      target="_blank"
                      className="text-low-color font-medium hover:text-main-color transition-colors duration-300 text-lg"
                      dir="ltr">
                      {whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="relative bg-card-background  p-6 border border-main-color/10 hover:border-main-color/30 transition-all duration-300 group">
                <p className="absolute right-4 top-4 text-white/10 text-7xl font-bold">
                  3
                </p>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-main-color rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-2">البريد الإلكتروني</p>
                    <a
                      target="_blank"
                      href={`mailto:${email}`}
                      className="text-low-color hover:text-main-color font-medium transition-colors duration-300 break-all">
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="relative bg-card-background p-6 border border-main-color/10 hover:border-main-color/30 transition-all duration-300 group">
                <p className="absolute right-4 top-4 text-white/10 text-7xl font-bold">
                  4
                </p>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-main-color rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-2">العنوان</p>
                    <p className="text-low-color text-sm font-medium leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
