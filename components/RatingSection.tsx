"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

const RATING_LABELS: Record<number, string> = {
  1: "سيء",
  2: "مقبول",
  3: "جيد",
  4: "رائع",
  5: "ممتاز",
};

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
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
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
        } catch {}
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

  return (
    <section
      id="rating"
      dir="rtl"
      className="py-10 sm:py-14 flex justify-center px-4">
      <motion.div
        className="w-full max-w-2xl rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm px-5 py-5 shadow-lg"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}>
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-white/80 text-sm font-semibold">
            قيّم تجربتك معنا
          </p>
          {averageRating > 0 && (
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5" fill="#FBBF24" color="#FBBF24" />
              <span className="text-amber-400 text-sm font-bold tabular-nums">
                {averageRating.toFixed(1)}
              </span>
              {totalRatings > 0 && (
                <span className="text-white/30 text-xs">({totalRatings})</span>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/6 mb-4" />

        {/* Rating area */}
        <AnimatePresence mode="wait">
          {submitted !== null && mounted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-2 py-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 350,
                      damping: 18,
                    }}>
                    <Star
                      className="w-7 h-7"
                      fill={
                        s <= submitted ? "#FBBF24" : "rgba(255,255,255,0.1)"
                      }
                      color={
                        s <= submitted ? "#FBBF24" : "rgba(255,255,255,0.1)"
                      }
                    />
                  </motion.span>
                ))}
              </div>
              <p className="text-amber-400 text-xs font-semibold mt-1">
                شكراً لتقييمك!
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="interactive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-2">
              {/* Label */}
              <p className="min-h-5 text-amber-400/90 text-xs font-medium">
                {displayRating > 0 ? RATING_LABELS[displayRating] : "\u00A0"}
              </p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    disabled={isLoading || !mounted}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/40 disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label={`تقييم ${star} من 5`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 1.25 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}>
                    <Star
                      className="w-8 h-8 transition-colors duration-150"
                      fill={
                        star <= displayRating
                          ? "#FBBF24"
                          : "rgba(255,255,255,0.12)"
                      }
                      color={
                        star <= displayRating
                          ? "#FBBF24"
                          : "rgba(255,255,255,0.12)"
                      }
                    />
                  </motion.button>
                ))}
              </div>

              {/* Status */}
              <p className="min-h-4 text-white/25 text-xs">
                {!mounted ? (
                  "\u00A0"
                ) : isLoading ? (
                  <span className="text-amber-400/70">جاري الإرسال...</span>
                ) : (
                  "اختر تقييمك"
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
