"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";

const item: Variants = {
  hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <motion.h1
          variants={item}
          className="text-6xl md:text-7xl font-medium tracking-tight mb-3"
        >
          404
        </motion.h1>
        <motion.p
          variants={item}
          className="text-muted-foreground text-base mb-6"
        >
          This page doesn&apos;t exist.
        </motion.p>
        <motion.p variants={item}>
          <Link
            href="/"
            className="underline decoration-muted-foreground/50 underline-offset-[3px] hover:decoration-foreground transition-colors"
          >
            Back home
          </Link>
        </motion.p>
      </motion.div>
    </main>
  );
}
