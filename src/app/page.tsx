"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function A({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const className =
    "underline decoration-muted-foreground/50 underline-offset-[3px] hover:decoration-foreground transition-colors";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function Row({
  year,
  children,
  right,
  href,
  subtitle,
  subtitleHref,
}: {
  year?: string;
  children: React.ReactNode;
  right?: string;
  href?: string;
  subtitle?: React.ReactNode;
  subtitleHref?: string;
}) {
  const content = href ? (
    <A href={href}>{children}</A>
  ) : (
    <span>{children}</span>
  );
  const sub =
    subtitle != null ? (
      subtitleHref ? (
        <A href={subtitleHref}>{subtitle}</A>
      ) : (
        <span>{subtitle}</span>
      )
    ) : null;
  return (
    <motion.div
      variants={item}
      className="flex items-baseline gap-4 py-[3px]"
    >
      <span className="w-12 shrink-0 text-muted-foreground tabular-nums">
        {year ?? ""}
      </span>
      <span className="flex-1">
        {content}
        {sub && <span className="block text-muted-foreground">{sub}</span>}
      </span>
      {right && (
        <span className="text-muted-foreground shrink-0 tabular-nums">
          {right}
        </span>
      )}
    </motion.div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={item} className="mb-10">
      <h2 className="font-medium mb-3">{title}</h2>
      <div className="space-y-0">{children}</div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[620px] mx-auto px-6 py-16 md:py-24"
      >
        <motion.header
          variants={item}
          className="mb-6 flex items-start justify-between gap-4"
        >
          <h1 className="text-2xl font-medium tracking-tight">
            Ege Kaan Gürkan
          </h1>
          <ThemeToggle />
        </motion.header>

        <motion.div
          variants={item}
          className="space-y-2.5 leading-normal mb-10"
        >
          <p>
            I&apos;m a Full Stack Engineer from Ankara, based in Munich, with
            4+ years building cloud-native infrastructure at scale and
            designing agentic systems.
          </p>
          <p>
            I currently build OSINT integrations at{" "}
            <A href="https://maltego.com/">Maltego</A>, where I also help
            shape our LLM efforts through disruptive POCs, company-wide
            adoption, and the internal platforms that power them.
          </p>
          <p>
            On the side I&apos;m building{" "}
            <A href="https://buildinsight.dev">BuildInsight</A>, a
            developer-first platform that turns user feedback into shipped
            product improvements, and{" "}
            <A href="https://stashling.app">Stashling</A>, which turns saved
            TikToks, Reels and Shorts into searchable cards.
          </p>
          <p>
            I consider myself a builder at heart and enjoy turning technical
            challenges into tools people actually use.
          </p>
          <p>
            You can reach me on{" "}
            <A href="https://linkedin.com/in/ege-kaan-gurkan">LinkedIn</A>,{" "}
            <A href="https://github.com/EgeKaanGurkan">GitHub</A>, or at{" "}
            <A href="mailto:egekaanngurkan@gmail.com">
              egekaanngurkan@gmail.com
            </A>
            . My <A href="/resume.pdf">resume</A> is here.
          </p>
        </motion.div>

        <Section title="Work">
          <Row
            year="2022"
            right="Present"
            subtitle="Maltego"
            subtitleHref="https://maltego.com/"
          >
            Integrations &amp; Software Developer
          </Row>
          <Row year="2022" right="2022" subtitle="Layermark">
            Systems Engineer &amp; Backend Developer
          </Row>
          <Row year="2021" right="2022" subtitle="BK Mobil">
            Kubernetes Cluster Admin &amp; Backend Developer
          </Row>
        </Section>

        <Section title="Projects">
          <Row year="2026">
            <A href="https://stashling.app">Stashling</A>; turn saved TikToks,
            Reels and Shorts into searchable cards
          </Row>
          <Row year="2026">
            <A href="https://buildinsight.dev">BuildInsight</A>;
            feedback-to-feature with agents
          </Row>
          <Row year="2022">
            AlgoDrop; cloud-native NFT launchpad on AWS (EKS, Lambda, SQS)
          </Row>
          <Row year="2020">
            Buluşunca; co-founded platform for small businesses during
            COVID-19, seed-funded by Tuborg
          </Row>
        </Section>

        <Section title="Education">
          <Row year="2018" right="2023">
            B.Sc. Computer Science at Bilkent University
          </Row>
        </Section>

        <Section title="Leadership">
          <Row year="2019" right="2021">
            Business Talks Board Member at Young Entrepreneurs Society
          </Row>
          <Row year="2019" right="2021">
            Mentor &amp; Core Member at Google Developer Student Clubs
          </Row>
        </Section>
      </motion.div>
    </main>
  );
}
