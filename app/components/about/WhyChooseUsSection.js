"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, FlaskConical, HandHeart, Recycle } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Certified Organic",
    description:
      "Every product is grown without synthetic pesticides, artificial fertilizers, or GMOs. Certified organic by NPOP standards — pure as nature intended.",
    gradient: "from-[#223614] to-[#2e5017]",
    accent: "#4a9d3f",
    badge: "NPOP Certified",
  },
  {
    icon: FlaskConical,
    title: "Rigorous Lab Testing",
    description:
      "Batch-tested at NABL-accredited laboratories for heavy metals, pesticide residues, and nutritional profiles. You see the certificate, not just our word.",
    gradient: "from-[#8C6A43] to-[#a5813d]",
    accent: "#d4a853",
    badge: "NABL Approved",
  },
  {
    icon: HandHeart,
    title: "Direct From Farmers",
    description:
      "We work directly with 500+ smallholder farmers across Maharashtra — no middlemen. Farmers earn fair prices; you get genuinely fresh produce.",
    gradient: "from-[#2d5f4a] to-[#1f4535]",
    accent: "#3a8a60",
    badge: "Fair Trade",
  },
  {
    icon: Recycle,
    title: "Sustainable Packaging",
    description:
      "100% biodegradable, food-grade packaging made from recycled materials. Our packaging leaves zero plastic footprint on this beautiful planet.",
    gradient: "from-[#5c3d1e] to-[#7a4f2a]",
    accent: "#c4874b",
    badge: "Eco-Friendly",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F7F1E8] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#8C6A43] text-xs font-bold tracking-[0.3em] uppercase mb-4 border-b-2 border-[#8C6A43]/40 pb-2">
            Our Promise
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#223614] leading-tight">
            Why Choose{" "}
            <span className="italic text-[#8C6A43]">Dronagiri</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Four pillars of our commitment to your family&apos;s health and our planet&apos;s future.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-default border border-gray-100"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${feature.gradient}`} />

                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold tracking-widest uppercase text-green-600">{feature.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#223614] mb-4 group-hover:text-[#8C6A43] transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover accent corner */}
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 scale-0 group-hover:scale-100"
                  style={{ backgroundColor: feature.accent }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 bg-[#223614] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#F7F1E8]">
              Trusted by 10,000+ families across India
            </p>
            <p className="text-[#D9CBB5] mt-1">Join the organic revolution — one meal at a time.</p>
          </div>
          <a
            href="/products"
            className="shrink-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Explore Products →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
