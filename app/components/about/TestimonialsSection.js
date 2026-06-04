"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    avatar: "PS",
    color: "#223614",
    rating: 5,
    text: "Dronagiri's desi ghee has completely changed how our food tastes. You can immediately tell it's authentic — the golden color, the aroma, the purity. My mother couldn't believe it wasn't made at home!",
    product: "A2 Desi Ghee",
    since: "Customer since 2021",
  },
  {
    name: "Arjun Mehta",
    location: "Pune, Maharashtra",
    avatar: "AM",
    color: "#8C6A43",
    rating: 5,
    text: "I switched to Dronagiri's millets and ragi for my fitness diet. The quality difference is night and day compared to supermarket brands. Real farm freshness, and I can feel it in my energy levels every day.",
    product: "Millets & Ragi Combo",
    since: "Customer since 2022",
  },
  {
    name: "Sunita Reddy",
    location: "Hyderabad, Telangana",
    avatar: "SR",
    color: "#2d6b4e",
    rating: 5,
    text: "The spice quality is exceptional. Their haldi has a vibrant color and intense aroma unlike anything I've found in stores. The packaging is so thoughtful — sealed perfectly and eco-friendly too.",
    product: "Organic Spice Box",
    since: "Customer since 2020",
  },
  {
    name: "Rahul Patil",
    location: "Nashik, Maharashtra",
    avatar: "RP",
    color: "#5c3d1e",
    rating: 5,
    text: "Their raw honey is pure liquid gold. No crystallization tricks, no additives — exactly how honey should be. I feel great knowing I'm also supporting local farmers directly. Truly a brand with a soul.",
    product: "Forest Raw Honey",
    since: "Customer since 2019",
  },
  {
    name: "Dr. Kavitha Nair",
    location: "Bengaluru, Karnataka",
    avatar: "KN",
    color: "#223614",
    rating: 5,
    text: "As a nutritionist, I recommend Dronagiri to all my clients. The lab reports are transparent and accurate, the products are genuinely organic, and the delivery is always prompt. A rare combination of quality and ethics.",
    product: "Complete Wellness Bundle",
    since: "Customer since 2021",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[active];

  return (
    <section ref={ref} className="bg-[#223614] py-28 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#8C6A43]/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 border-b-2 border-amber-400/40 pb-2">
            Customer Love
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#F7F1E8] leading-tight">
            What Families{" "}
            <span className="italic text-amber-400">Say</span>
          </h2>
        </motion.div>

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/15 rounded-3xl p-10 md:p-14"
            >
              {/* Large quote mark */}
              <Quote className="absolute top-8 right-10 h-20 w-20 text-amber-400/10 fill-amber-400/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#F7F1E8] leading-relaxed italic mb-10 max-w-4xl">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Reviewer info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-lg"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#F7F1E8] text-lg">{t.name}</p>
                    <p className="text-[#D9CBB5] text-sm">{t.location} · {t.since}</p>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-full px-4 py-2">
                  <p className="text-amber-400 text-xs font-semibold">Purchased: {t.product}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-2.5 bg-amber-400"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-amber-400 hover:bg-amber-400/10 flex items-center justify-center text-[#F7F1E8] hover:text-amber-400 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-amber-400 hover:bg-amber-400/10 flex items-center justify-center text-[#F7F1E8] hover:text-amber-400 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
