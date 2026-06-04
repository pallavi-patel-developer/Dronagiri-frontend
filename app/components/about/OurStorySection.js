"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function OurStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="our-story" ref={ref} className="bg-[#F7F1E8] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#8C6A43] text-xs font-bold tracking-[0.3em] uppercase mb-4 border-b-2 border-[#8C6A43]/40 pb-2">
            Our Journey
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#223614] leading-tight">
            A Story Rooted in{" "}
            <span className="italic text-[#8C6A43]">Pure Tradition</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image Side */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#8C6A43]/30 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Founder of Dronagiri Farm"
                  width={600}
                  height={700}
                  className="w-full h-[500px] lg:h-[620px] object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#223614]/60 via-transparent to-transparent" />
                {/* Founder name tag */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <p className="font-[family-name:var(--font-playfair)] text-[#223614] font-bold text-lg">Rajendra Patil</p>
                  <p className="text-[#8C6A43] text-sm font-medium">Founder & Head Farmer · Dronagiri, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -right-4 top-12 bg-[#223614] text-[#F7F1E8] rounded-2xl px-5 py-4 shadow-2xl text-center">
              <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-amber-400">7+</div>
              <div className="text-xs tracking-widest uppercase mt-1 text-[#D9CBB5]">Years of<br/>Farming</div>
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Quote */}
            <div className="relative pl-8 border-l-4 border-[#8C6A43]">
              <Quote className="absolute -left-4 -top-2 h-8 w-8 text-[#8C6A43] fill-[#8C6A43]" />
              <p className="font-[family-name:var(--font-playfair)] text-xl italic text-[#223614] leading-relaxed">
                "Every grain we grow carries the blessing of our land and the trust of a thousand families."
              </p>
            </div>

            <p className="text-[#8C6A43] text-base leading-relaxed font-medium">
              Born from a deep love of the land and a grandfather&apos;s wisdom, Dronagiri Farm began as a humble dream — to bring the purest, most wholesome food directly to Indian families.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              In the fertile valleys of Dronagiri, Maharashtra, our founder Rajendra Patil watched his grandfather tend the soil with reverence — no chemicals, no shortcuts, just nature&apos;s own rhythm. When modern farming began to drift from these roots, Rajendra returned to his ancestral land with a mission: to prove that traditional, organic farming could nourish both families and the planet.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              Today, we source over 100 premium products — from golden <strong className="text-[#223614]">desi ghee</strong> and aromatic <strong className="text-[#223614]">heirloom spices</strong> to protein-rich <strong className="text-[#223614]">pulses</strong>, ancient <strong className="text-[#223614]">millets</strong>, pure <strong className="text-[#223614]">ragi</strong>, and raw <strong className="text-[#223614]">forest honey</strong> — directly from 500+ partner farmers across Maharashtra, building a chain of trust from seed to table.
            </p>

            {/* Brand values pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["100% Organic", "No Preservatives", "Farm Direct", "Lab Certified", "Traditional Methods"].map((val) => (
                <span
                  key={val}
                  className="bg-[#223614]/10 text-[#223614] border border-[#223614]/20 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {val}
                </span>
              ))}
            </div>

            {/* Timeline milestones */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { year: "2018", event: "Farm Founded" },
                { year: "2020", event: "500 Farmers" },
                { year: "2024", event: "Pan-India" },
              ].map((m) => (
                <div key={m.year} className="text-center p-4 bg-[#223614]/5 rounded-2xl border border-[#223614]/10">
                  <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#8C6A43]">{m.year}</div>
                  <div className="text-[#223614] text-xs font-medium mt-1 tracking-wide">{m.event}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
