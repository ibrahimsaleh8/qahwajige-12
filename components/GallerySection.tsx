"use client";

import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "motion/react";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  return (
    <>
      <style>{`
        #gallery-section .glass-overlay {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          overflow: hidden;
          transition: border-color 0.38s ease, box-shadow 0.38s ease, transform 0.38s ease;
        }

        #gallery-section .glass-overlay:hover {
          border-color: rgba(34, 211, 238, 0.3);
          box-shadow: 0 12px 40px rgba(0,0,0,0.45), 0 0 18px rgba(34,211,238,0.1);
          transform: translateY(-5px);
        }

        #gallery-section .img-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(15, 23, 42, 0.88) 0%,
            rgba(15, 23, 42, 0.1) 55%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: flex-end;
          padding: 18px;
          border-radius: 18px;
        }

        #gallery-section .glass-overlay:hover .img-hover-overlay {
          opacity: 1;
        }

        #gallery-section .img-hover-overlay span {
          color: #E5E7EB;
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.4;
          transform: translateY(6px);
          transition: transform 0.35s ease;
        }

        #gallery-section .glass-overlay:hover .img-hover-overlay span {
          transform: translateY(0);
        }

        #gallery-section .cyan-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22D3EE;
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.7);
          flex-shrink: 0;
        }

        #gallery-section .glow-orb {
          animation: gallery-orb 9s ease-in-out infinite alternate;
        }
        @keyframes gallery-orb {
          0%  { opacity: 0.35; transform: scale(1); }
          100%{ opacity: 0.6;  transform: scale(1.1); }
        }

        /* Featured first image spans 2 rows on md+ */
        @media (min-width: 768px) {
          #gallery-section .gallery-grid .item-featured {
            grid-row: span 2;
          }
          #gallery-section .gallery-grid .item-featured .aspect-box {
            aspect-ratio: unset;
            height: 100%;
          }
        }
      `}</style>

      <section
        id="gallery"
        dir="rtl"
        className="py-24 relative overflow-hidden">
        {/* Ambient orbs */}
        <div
          className="glow-orb pointer-events-none absolute top-[-15%] left-[-10%] rounded-full"
          style={{
            width: 520,
            height: 520,
            background: "rgba(34, 211, 238, 0.06)",
            filter: "blur(110px)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[-10%] right-[-12%] rounded-full"
          style={{
            width: 400,
            height: 400,
            background: "rgba(99, 102, 241, 0.07)",
            filter: "blur(90px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* ── Header ── */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            {/* Badge pill */}
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{
                background: "rgba(34, 211, 238, 0.08)",
                border: "1px solid rgba(34, 211, 238, 0.25)",
                color: "#22D3EE",
                borderRadius: "9999px",
                padding: "6px 18px",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              معرض الأعمال
            </span>

            <h2
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: "#C7CBEF",
                textShadow: "0 0 20px rgba(199,203,239,0.25)",
              }}>
              من ذكريات <span style={{ color: "#22D3EE" }}>مناسباتنا</span>
            </h2>

            <p
              className="mt-3"
              style={{
                color: "rgba(229,231,235,0.50)",
                fontSize: "1rem",
                lineHeight: 1.75,
              }}>
              لقطات حية من فعاليات ومناسبات قمنا بخدمتها في الرياض
            </p>

            {/* Gradient divider */}
            <div
              className="mx-auto mt-6"
              style={{
                height: 2,
                width: 80,
                background:
                  "linear-gradient(to left, transparent, #22D3EE, transparent)",
                borderRadius: 9999,
              }}
            />
          </motion.div>

          {/* ── Gallery Grid ── */}
          <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                className={`glass-overlay cursor-pointer group${index === 0 ? " item-featured" : ""}`}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}>
                {/* Image */}
                <div
                  className="aspect-box relative"
                  style={{ aspectRatio: "1 / 1" }}>
                  <Image
                    src={image.url}
                    alt={image.alt ?? `صورة-${index + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    style={{
                      borderRadius: 18,
                      transform: "scale(1)",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.transform =
                        "scale(1.08)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.transform =
                        "scale(1)")
                    }
                  />

                  {/* Hover overlay */}
                  <div className="img-hover-overlay">
                    <div className="flex items-center gap-2">
                      <div className="cyan-dot" />
                      <span>{image.alt ?? `صورة-${index + 1}`}</span>
                    </div>
                  </div>

                  {/* Top-left index badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "rgba(15,23,42,0.7)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      borderRadius: 9999,
                      padding: "2px 10px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#22D3EE",
                      letterSpacing: "0.05em",
                      backdropFilter: "blur(8px)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="index-badge">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom accent line ── */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}>
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.07))",
              }}
            />
            <span
              style={{
                color: "rgba(229,231,235,0.3)",
                fontSize: "0.78rem",
                whiteSpace: "nowrap",
              }}>
              قهوجي الرياض
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(to left, transparent, rgba(255,255,255,0.07))",
              }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
