"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = { show: { transition: { staggerChildren: 0.1 } } };

function GoldBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-gold text-gold label-caps px-3 py-1 rounded-full text-[0.65rem]">
      {children}
    </span>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy grain-overlay py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp}><GoldBadge>Study Destinations</GoldBadge></motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl">
            Where do you see your child in four years?
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            From the Ivy League to tuition-free European universities — we guide students to the right destination for their goals, budget, and future.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Destinations ──────────────────────────────────────────────────────
const destinations = [
  {
    flag: "🇺🇸",
    name: "United States",
    tagline: "Home to the world's most sought-after universities.",
    desc: "From the Ivy League to leading public research universities, the US offers unparalleled academic diversity, campus life, and global career pathways. Our students have been admitted to Columbia, Penn State, San Jose State, and many more.",
    universities: ["Columbia University", "Penn State", "San Jose State", "UCLA", "NYU", "University of Michigan"],
    visa: "F1 Student Visa",
    admissions: "Common App / Coalition App",
    language: "TOEFL or IELTS Academic",
    whyStudents: ["Scholarship opportunities", "Diverse campuses", "Global career network", "Research opportunities"],
    howWeHelp: ["Common App essay strategy", "F1 visa preparation", "Scholarship applications", "Post-admit support"],
    bg: "bg-ivory",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    tagline: "World-class degrees in as little as three years.",
    desc: "From Oxford and Cambridge to modern research powerhouses, the UK offers some of the world's most respected degrees. The UCAS system is unique — and requires a different strategy to the US Common App.",
    universities: ["Oxford University", "London School of Economics", "King's College London", "University of Edinburgh", "University of Warwick", "Bristol"],
    visa: "UK Student Visa (Tier 4)",
    admissions: "UCAS System",
    language: "IELTS Academic",
    whyStudents: ["3-year degrees", "Prestigious institutions", "Post-study work visa", "Cultural richness"],
    howWeHelp: ["UCAS personal statement", "IELTS coaching", "University shortlisting", "Visa guidance"],
    bg: "bg-cream",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    tagline: "World-class education meets welcoming immigration.",
    desc: "Canada offers world-class universities, one of the most welcoming immigration policies for international students, and outstanding post-study work opportunities through the PGWP program.",
    universities: ["University of Toronto", "University of British Columbia", "McGill University", "University of Waterloo", "Queen's University"],
    visa: "Canadian Study Permit",
    admissions: "Direct university application",
    language: "IELTS Academic or TOEFL",
    whyStudents: ["Post-graduation work permit", "Path to permanent residency", "Diverse, safe cities", "Tuition lower than US"],
    howWeHelp: ["Application essays", "Study permit guidance", "Post-admit support", "University comparisons"],
    bg: "bg-ivory",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    tagline: "Top-ranked universities and an exceptional quality of life.",
    desc: "Australia's top universities consistently rank among the world's best. Combined with a high quality of life, strong graduate outcomes, and a welcoming student environment, it's an increasingly popular choice for UAE families.",
    universities: ["University of Melbourne", "Australian National University", "UNSW Sydney", "University of Sydney", "Monash University"],
    visa: "Student Visa (Subclass 500)",
    admissions: "Direct university application",
    language: "IELTS Academic",
    whyStudents: ["QS top-ranked institutions", "Post-study work visa", "High quality of life", "Industry connections"],
    howWeHelp: ["Application strategy", "Visa guidance", "Accommodation help", "University fit analysis"],
    bg: "bg-cream",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    tagline: "Tuition-free or low-cost world-class education.",
    desc: "Germany is one of the world's most popular destinations for international students — offering tuition-free or near-free public university education at institutions that compete with the world's elite.",
    universities: ["TU Munich", "LMU Munich", "Heidelberg University", "Freie Universität Berlin", "RWTH Aachen"],
    visa: "German Student Visa",
    admissions: "Direct or via uni-assist",
    language: "German (B2/C1) or English-taught programs",
    whyStudents: ["Tuition-free public universities", "Strong engineering programs", "EU work rights", "Central European location"],
    howWeHelp: ["Language requirement planning", "Program identification", "Application strategy", "Visa preparation"],
    bg: "bg-ivory",
  },
  {
    flag: "🌍",
    name: "Europe & Beyond",
    tagline: "ETH Zurich, Netherlands, and more.",
    desc: "Beyond the UK and Germany, Europe offers extraordinary options — from Switzerland's ETH Zurich (ranked #7 in the world) to the Netherlands' international-friendly programs taught entirely in English.",
    universities: ["ETH Zurich", "TU Delft", "University of Amsterdam", "KU Leuven", "University of Copenhagen"],
    visa: "Country-specific student visa",
    admissions: "Direct university application",
    language: "English-taught programs widely available",
    whyStudents: ["World-class research", "Lower tuition than US/UK", "EU mobility", "Unique academic cultures"],
    howWeHelp: ["Destination fit analysis", "Application strategy", "Language planning", "Visa guidance"],
    bg: "bg-cream",
  },
];

function DestinationSection({ dest, i }: { dest: typeof destinations[0]; i: number }) {
  const flip = i % 2 === 1;
  return (
    <section className={`${dest.bg} py-24`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-start ${flip ? "" : ""}`}>
          {/* Main content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={flip ? "lg:order-2" : ""}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">{dest.flag}</span>
              <div>
                <h2 className="heading-section text-navy text-3xl sm:text-4xl">{dest.name}</h2>
                <p className="text-gold text-sm">{dest.tagline}</p>
              </div>
            </div>
            <div className="gold-rule w-12 mb-6" />
            <p className="text-graphite text-lg leading-relaxed mb-8">{dest.desc}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Visa", value: dest.visa },
                { label: "Admissions", value: dest.admissions },
                { label: "Language", value: dest.language },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-cream">
                  <span className="label-caps text-gold block mb-1">{label}</span>
                  <span className="text-navy text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side panel */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`space-y-6 ${flip ? "lg:order-1" : ""}`}
          >
            {/* Top universities */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 border border-cream">
              <h3 className="heading-section text-navy text-lg mb-4">Key Universities</h3>
              <div className="flex flex-wrap gap-2">
                {dest.universities.map((u) => (
                  <span key={u} className="label-caps bg-navy/5 text-navy px-3 py-1.5 rounded-full text-[0.6rem]">{u}</span>
                ))}
              </div>
            </motion.div>

            {/* Why students choose */}
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 border border-cream">
              <h3 className="heading-section text-navy text-lg mb-4">Why Students Choose {dest.name.split(" ")[0]}</h3>
              <ul className="space-y-2">
                {dest.whyStudents.map((w) => (
                  <li key={w} className="flex items-center gap-3 text-graphite text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* How we help */}
            <motion.div variants={fadeUp} className="bg-navy rounded-2xl p-6">
              <h3 className="heading-section text-white text-lg mb-4">How We Help</h3>
              <ul className="space-y-2">
                {dest.howWeHelp.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="bg-navy grain-overlay py-28">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <GoldBadge>Find the Right Fit</GoldBadge>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="heading-display text-white text-4xl sm:text-5xl">
          Which destination is right for your child?
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-white/70 text-lg">
          Let&apos;s discuss your child&apos;s goals, budget, and ambitions — and find the right universities, in the right country.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Link href="/contact" className="inline-flex items-center bg-gold text-navy font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors">
            Book a Free Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function DestinationsPage() {
  return (
    <>
      <Hero />
      {destinations.map((d, i) => (
        <DestinationSection key={d.name} dest={d} i={i} />
      ))}
      <CTA />
    </>
  );
}
