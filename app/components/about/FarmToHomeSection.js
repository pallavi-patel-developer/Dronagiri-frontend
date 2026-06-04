"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sprout, Wheat, FlaskConical, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    step: "01",
    title: "Organic Farming",
    description:
      "Seeds nurtured in rich, chemical-free soil using traditional farming methods passed down through generations. No pesticides, no GMOs — only pure nature.",
    color: "#223614",
    accent: "#4a7c2f",
  },
  {
    icon: Wheat,
    step: "02",
    title: "Harvesting",
    description:
      "Hand-picked at peak ripeness during the optimal harvest season, ensuring maximum nutritional value and unmatched freshness in every batch.",
    color: "#8C6A43",
    accent: "#a5813d",
  },
  {
    icon: FlaskConical,
    step: "03",
    title: "Quality Testing",
    description:
      "Rigorous lab analysis for purity, nutritional content, and safety. Every product meets FSSAI standards and our own stringent quality benchmarks.",
    color: "#2d6b4e",
    accent: "#3a8a60",
  },
  {
    icon: Package,
    step: "04",
    title: "Eco Packaging",
    description:
      "Sealed in biodegradable, food-grade packaging that preserves freshness while protecting our planet. Sustainable from farm to your doorstep.",
    color: "#8C6A43",
    accent: "#b58355",
  },
  {
    icon: Truck,
    step: "05",
    title: "Home Delivery",
    description:
      "Express farm-to-door delivery across 50+ cities in India. From our hands to your family — fresh, pure, and on time, every single time.",
    color: "#223614",
    accent: "#2e5017",
  },
];

export default function FarmToHomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#223614] py-28 px-6 overflow-hidden relative">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #F7F1E8 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 border-b-2 border-amber-400/40 pb-2">
            The Process
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#F7F1E8] leading-tight">
            Farm To Home{" "}
            <span className="italic text-amber-400">Journey</span>
          </h2>
          <p className="text-[#D9CBB5] text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Every product travels a carefully curated path — from seed to your family&apos;s table, ensuring purity at every step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full bg-amber-400/20 scale-0 group-hover:scale-125 transition-transform duration-500" />
                    {/* Icon circle */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl group-hover:shadow-amber-400/30 transition-all duration-500 group-hover:-translate-y-2">
                      <Icon className="h-9 w-9 text-[#223614]" strokeWidth={2} />
                    </div>
                    {/* Step badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#F7F1E8] rounded-full flex items-center justify-center shadow-md">
                      <span className="text-[#223614] text-xs font-black">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#F7F1E8] mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#D9CBB5] text-sm leading-relaxed max-w-48">
                    {step.description}
                  </p>

                  {/* Arrow between steps (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute" style={{ top: "4.5rem", right: "-0.75rem" }}>
                      <div className="text-amber-400/60 text-2xl">›</div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom cert badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6 mt-20"
        >
          {["FSSAI Certified", "ISO 22000", "Organic Certified", "Lab Tested"].map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[#F7F1E8] px-5 py-3 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {cert}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
