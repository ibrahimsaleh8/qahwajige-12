"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) {
          setSubmitted(value);
        }
      }
    } catch {
      // localStorage not available
    }
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {
          // localStorage not available
        }
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const ratingLabels: Record<number, string> = {
    1: "سيء",
    2: "مقبول",
    3: "جيد",
    4: "رائع",
    5: "ممتاز",
  };

  return (
    <>
      {/* Inject the matching font & styles */}
      <style>{`

        #rating-section .glass-panel-rating {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          border-radius: 24px;
          transition: all 0.4s ease;
        }

        #rating-section .glow-orb-rating {
          animation: pulse-glow-rating 8s infinite alternate;
        }

        @keyframes pulse-glow-rating {
          0%  { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
          100%{ opacity: 0.4; transform: scale(1); }
        }

        #rating-section .star-btn:hover .star-icon {
          filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.5));
        }

        #rating-section .stat-divider {
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent);
        }

        #rating-section .badge-pill {
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.25);
          color: #22D3EE;
          border-radius: 9999px;
          padding: 6px 18px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        #rating-section .submit-hint {
          color: rgba(229, 231, 235, 0.45);
          font-size: 0.8rem;
          min-height: 1.2rem;
          transition: opacity 0.3s ease;
        }

        #rating-section .rating-label {
          color: #22D3EE;
          font-weight: 700;
          font-size: 1rem;
          min-height: 1.5rem;
          transition: all 0.3s ease;
        }
      `}</style>

      <section
        id="rating-section"
        dir="rtl"
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "transparent" }}>
        {/* Background glow orbs — mirrors the site's aesthetic */}
        <div
          className="glow-orb-rating pointer-events-none absolute top-[-30%] left-[-15%] rounded-full"
          style={{
            width: 600,
            height: 600,
            background: "rgba(34, 211, 238, 0.07)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[-20%] right-[-10%] rounded-full"
          style={{
            width: 400,
            height: 400,
            background: "rgba(99, 102, 241, 0.08)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          {/* ── Section header ── */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <span className="badge-pill mb-5">
              {/* tiny star icon */}
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              آراء العملاء
            </span>

            <h2
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: "#C7CBEF",
                textShadow: "0 0 20px rgba(199, 203, 239, 0.25)",
              }}>
              قيّم تجربتك <span style={{ color: "#22D3EE" }}>معنا</span>
            </h2>
            <p
              className="mt-3 max-w-md mx-auto"
              style={{
                color: "rgba(229,231,235,0.55)",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}>
              رأيك يهمنا! ساعدنا في التحسين من خلال تقييم تجربتك
            </p>
          </motion.div>

          {/* ── Main glass card ── */}
          <motion.div
            className="glass-panel-rating"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
            whileHover={{
              borderColor: "rgba(34, 211, 238, 0.28)",
              boxShadow:
                "0 12px 50px rgba(0,0,0,0.45), 0 0 20px rgba(34,211,238,0.08)",
            }}>
            {/* top cyan accent bar */}
            <div
              style={{
                height: 2,
                background:
                  "linear-gradient(to left, transparent, #22D3EE, transparent)",
                borderRadius: "24px 24px 0 0",
              }}
            />

            <div className="p-8 md:p-12 text-center">
              {/* ── Stats row ── */}
              {(averageRating > 0 || totalRatings > 0) && (
                <motion.div
                  className="flex flex-wrap items-center justify-center gap-8 mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}>
                  {averageRating > 0 && (
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className="font-bold"
                        style={{
                          fontSize: "2.4rem",
                          color: "#22D3EE",
                          lineHeight: 1,
                        }}>
                        {averageRating.toFixed(1)}
                      </span>
                      <span
                        style={{
                          color: "rgba(229,231,235,0.4)",
                          fontSize: "0.75rem",
                        }}>
                        من 5
                      </span>
                      <div className="flex gap-0.5 mt-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-4 h-4"
                            style={{
                              fill:
                                s <= Math.round(averageRating)
                                  ? "#FBBF24"
                                  : "rgba(229,231,235,0.2)",
                              color:
                                s <= Math.round(averageRating)
                                  ? "#FBBF24"
                                  : "rgba(229,231,235,0.2)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {averageRating > 0 && totalRatings > 0 && (
                    <div className="stat-divider self-stretch hidden md:block" />
                  )}

                  {totalRatings > 0 && (
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className="font-bold"
                        style={{
                          fontSize: "2.4rem",
                          color: "#C7CBEF",
                          lineHeight: 1,
                        }}>
                        {totalRatings}
                      </span>
                      <span
                        style={{
                          color: "rgba(229,231,235,0.4)",
                          fontSize: "0.75rem",
                        }}>
                        {totalRatings === 1 ? "تقييم" : "تقييمات"}
                      </span>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ── Divider ── */}
              <div
                className="mb-8 mx-auto"
                style={{
                  height: 1,
                  maxWidth: 260,
                  background:
                    "linear-gradient(to left, transparent, rgba(255,255,255,0.07), transparent)",
                }}
              />

              {/* ── Rating state ── */}
              <AnimatePresence mode="wait">
                {submitted !== null && mounted ? (
                  /* ── Submitted state ── */
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 py-2">
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((s, i) => (
                        <motion.span
                          key={s}
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: i * 0.08,
                            type: "spring",
                            stiffness: 320,
                            damping: 14,
                          }}>
                          <Star
                            className="w-11 h-11 md:w-13 md:h-13"
                            style={{
                              fill:
                                s <= submitted
                                  ? "#FBBF24"
                                  : "rgba(229,231,235,0.15)",
                              color:
                                s <= submitted
                                  ? "#FBBF24"
                                  : "rgba(229,231,235,0.15)",
                              filter:
                                s <= submitted
                                  ? "drop-shadow(0 0 6px rgba(251,191,36,0.5))"
                                  : "none",
                            }}
                          />
                        </motion.span>
                      ))}
                    </div>

                    <motion.p
                      className="font-bold text-lg"
                      style={{ color: "#22D3EE" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}>
                      شكراً لتقييمك! 🎉
                    </motion.p>
                    <motion.p
                      style={{
                        color: "rgba(229,231,235,0.45)",
                        fontSize: "0.85rem",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.65 }}>
                      نسعد بتقييمك وسنعمل على تحسين تجربتك
                    </motion.p>
                  </motion.div>
                ) : (
                  /* ── Interactive stars ── */
                  <motion.div
                    key="interactive"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-5">
                    {/* Rating label */}
                    <div
                      className="rating-label"
                      style={{ minHeight: "1.5rem" }}>
                      {displayRating > 0 ? ratingLabels[displayRating] : ""}
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          disabled={isLoading || !mounted}
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="star-btn p-1.5 rounded-xl focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                          style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                          }}
                          aria-label={`تقييم ${star} من 5`}
                          whileTap={{ scale: 1.25 }}
                          whileHover={{ scale: 1.15 }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 16,
                          }}>
                          <motion.div
                            animate={
                              star <= displayRating
                                ? { scale: [1, 1.18, 1] }
                                : { scale: 1 }
                            }
                            transition={{ duration: 0.25, ease: "easeOut" }}>
                            <Star
                              className="star-icon w-11 h-11 md:w-12 md:h-12 transition-all duration-200"
                              style={{
                                fill:
                                  star <= displayRating
                                    ? "#FBBF24"
                                    : "rgba(229,231,235,0.18)",
                                color:
                                  star <= displayRating
                                    ? "#FBBF24"
                                    : "rgba(229,231,235,0.18)",
                                filter:
                                  star <= displayRating
                                    ? "drop-shadow(0 0 8px rgba(251,191,36,0.45))"
                                    : "none",
                                transition:
                                  "fill 0.18s ease, filter 0.18s ease",
                              }}
                            />
                          </motion.div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Hint text */}
                    <p className="submit-hint">
                      {mounted &&
                        !isLoading &&
                        "انقر على النجم المناسب للتقييم"}
                      {isLoading && (
                        <span style={{ color: "#22D3EE", fontWeight: 600 }}>
                          جاري الإرسال...
                        </span>
                      )}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
