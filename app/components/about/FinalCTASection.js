"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wheat-field.jpg"
          alt="Golden wheat fields"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#223614]/90 via-[#223614]/75 to-[#8C6A43]/70" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-[15%] w-3 h-3 rounded-full bg-amber-400/30 animate-bounce" style={{ animationDelay: "0.3s" }} />
      <div className="absolute top-32 right-[20%] w-2 h-2 rounded-full bg-[#D9CBB5]/40 animate-bounce" style={{ animationDelay: "0.8s" }} />
      <div className="absolute bottom-28 left-[25%] w-2.5 h-2.5 rounded-full bg-amber-300/30 animate-bounce" style={{ animationDelay: "1.2s" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 px-5 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Farm Fresh · Delivered Pan-India
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F7F1E8] leading-tight mb-8"
        >
          Start Your{" "}
          <span className="italic text-amber-400">Organic Journey</span>
          <br />
          Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#D9CBB5] text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-14 font-light"
        >
          Every meal is a choice. Choose pure. Choose organic. Choose to support the farmers 
          who pour their hearts into growing your food. Join 10,000+ families who&apos;ve made the switch.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-[#223614] font-bold px-10 py-5 rounded-full text-base tracking-wide transition-all duration-400 shadow-2xl hover:shadow-amber-400/30 hover:-translate-y-1.5"
          >
            <ShoppingBag className="h-5 w-5" />
            Shop All Products
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/60 hover:bg-white/15 text-[#F7F1E8] font-semibold px-10 py-5 rounded-full text-base tracking-wide transition-all duration-400 hover:-translate-y-1.5"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Trust icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-16"
        >
          {[
            "🌾 100% Organic",
            "🚚 Free Delivery ₹999+",
            "🔬 Lab Tested",
            "✅ FSSAI Certified",
            "♻️ Eco Packaging",
          ].map((badge) => (
            <div
              key={badge}
              className="text-[#D9CBB5] text-sm bg-white/8 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
