"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Target, Globe, Heart } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
  }),
};

export default function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F7F1E8] py-28 px-6 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#223614]/4 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#8C6A43]/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#8C6A43] text-xs font-bold tracking-[0.3em] uppercase mb-4 border-b-2 border-[#8C6A43]/40 pb-2">
            Our Purpose
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#223614] leading-tight">
            Mission &{" "}
            <span className="italic text-[#8C6A43]">Vision</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative bg-[#223614] rounded-3xl p-10 overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* Background texture */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #F7F1E8 1px, transparent 0)`,
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Target className="h-8 w-8 text-amber-400" strokeWidth={1.5} />
              </div>

              <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Our Mission
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#F7F1E8] mb-6 leading-tight">
                Nourishing Families with Pure, Honest Food
              </h3>

              <p className="text-[#D9CBB5] text-base leading-relaxed mb-6">
                Our mission is to make authentic, certified organic food accessible to every Indian family — breaking the barrier between the farm and your kitchen table with complete transparency and unwavering commitment to purity.
              </p>

              <ul className="space-y-3">
                {[
                  "Zero compromise on ingredient quality",
                  "Support 1,000+ smallholder farmers by 2027",
                  "Educate consumers about organic living",
                  "Build a transparent farm-to-table supply chain",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-amber-400" />
                    <span className="text-[#D9CBB5] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group relative bg-white rounded-3xl p-10 border-2 border-[#D9CBB5] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#223614]/10 border border-[#223614]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Eye className="h-8 w-8 text-[#223614]" strokeWidth={1.5} />
              </div>

              <div className="inline-flex items-center gap-2 bg-[#223614]/10 border border-[#223614]/20 text-[#223614] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Our Vision
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#223614] mb-6 leading-tight">
                A Healthier India Rooted in Organic Abundance
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                We envision a future where every Indian household chooses organic consciously — where farmers are celebrated as national heroes, and the connection between land and table is restored, pure and unbroken.
              </p>

              <ul className="space-y-3">
                {[
                  "Be India's most trusted organic food brand",
                  "Reduce synthetic agriculture by 20% in our regions",
                  "Launch organic retail stores in 100 cities",
                  "Create a farmer welfare & education fund",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-[#8C6A43]" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Heart, value: "Integrity", desc: "Pure honesty in every product and process" },
            { icon: Globe, value: "Sustainability", desc: "Protecting our planet for future generations" },
            { icon: Target, value: "Purpose", desc: "A clear mission in every grain we sell" },
            { icon: Eye, value: "Transparency", desc: "Open books — from farm to your doorstep" },
          ].map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.value}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="bg-[#D9CBB5]/30 rounded-2xl p-5 text-center border border-[#D9CBB5]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#223614] flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-5 w-5 text-amber-400" strokeWidth={1.5} />
                </div>
                <h4 className="font-[family-name:var(--font-playfair)] font-bold text-[#223614] text-base mb-1">{val.value}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
