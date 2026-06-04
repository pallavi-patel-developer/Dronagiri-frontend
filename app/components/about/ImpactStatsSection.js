"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, UserCheck, ShoppingBag, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    target: 10000,
    suffix: "+",
    label: "Happy Families",
    description: "Families choosing pure organic nutrition",
    color: "#223614",
  },
  {
    icon: UserCheck,
    target: 500,
    suffix: "+",
    label: "Partner Farmers",
    description: "Smallholder farmers earning fair wages",
    color: "#8C6A43",
  },
  {
    icon: ShoppingBag,
    target: 100,
    suffix: "+",
    label: "Pure Products",
    description: "Organic products, lab-tested and certified",
    color: "#2d6b4e",
  },
  {
    icon: MapPin,
    target: 50,
    suffix: "+",
    label: "Cities Served",
    description: "Delivering freshness across India",
    color: "#8C6A43",
  },
];

function AnimatedCounter({ target, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#D9CBB5]/40 py-28 px-6 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#223614]/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#8C6A43]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#8C6A43] text-xs font-bold tracking-[0.3em] uppercase mb-4 border-b-2 border-[#8C6A43]/40 pb-2">
            By The Numbers
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#223614] leading-tight">
            Our Growing{" "}
            <span className="italic text-[#8C6A43]">Impact</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-[#D9CBB5]/50"
              >
                {/* Background accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: stat.color }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: stat.color }} strokeWidth={1.5} />
                </div>

                {/* Counter */}
                <div
                  className="font-[family-name:var(--font-playfair)] text-5xl font-black mb-3 tracking-tight"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>

                {/* Label */}
                <h3 className="text-[#223614] font-bold text-lg mb-2">{stat.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"
                  style={{ backgroundColor: stat.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Impact narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-gray-600 text-base mt-12 max-w-2xl mx-auto leading-relaxed"
        >
          Every number here represents a real family eating healthier, a real farmer earning better, 
          and a real step towards a more sustainable India.
        </motion.p>
      </div>
    </section>
  );
}
