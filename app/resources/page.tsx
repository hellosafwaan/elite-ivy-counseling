"use client";

import Link from "next/link";
import { useState } from "react";
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

const categories = ["All", "USA Guide", "Essay Writing", "Visa & Immigration", "Test Prep", "Scholarship Strategy", "UAE Stories"];

const articles = [
  {
    title: "The UAE Parent's Complete Guide to US College Admissions",
    excerpt: "Everything you need to know about the US college admissions process — from the Common App to financial aid — written specifically for families based in the UAE.",
    category: "USA Guide",
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "How to Write a Winning Common App Essay",
    excerpt: "The personal statement is the most important 650 words your child will ever write. Here's how to approach it with strategy — and still sound like yourself.",
    category: "Essay Writing",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "F1 Visa from the UAE: Step-by-Step",
    excerpt: "A practical, UAE-specific guide to applying for your F1 student visa — from the DS-160 form to your embassy interview. No jargon, no surprises.",
    category: "Visa & Immigration",
    readTime: "10 min read",
    featured: true,
  },
  {
    title: "Should Your Child Apply Early Decision or Early Action?",
    excerpt: "ED, EA, REA, EDII — the terminology is confusing and the stakes are high. We explain what each means and when each is the right choice.",
    category: "USA Guide",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "IELTS vs TOEFL: Which Test Should UAE Students Take?",
    excerpt: "Both are accepted by universities worldwide, but they're very different exams. Here's how to decide which one gives your child the best chance.",
    category: "Test Prep",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "How Extracurriculars Affect Your Admissions Chances",
    excerpt: "It's not about having the most activities. It's about presenting the right ones — coherently, compellingly, and with a clear narrative.",
    category: "Essay Writing",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "How to Find and Win Scholarships at US Universities",
    excerpt: "Merit-based, need-based, athletic, and international scholarships — a practical guide for UAE families navigating US financial aid.",
    category: "Scholarship Strategy",
    readTime: "9 min read",
    featured: false,
  },
  {
    title: "What Happens After the Acceptance Letter Arrives",
    excerpt: "Congratulations — your child got in. Now what? Comparing offers, accepting, depositing, and preparing for day one.",
    category: "USA Guide",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Is a College Admissions Consultant Worth It?",
    excerpt: "An honest look at what admissions consultants actually do, what we don't do, and how to evaluate whether it's the right investment for your family.",
    category: "UAE Stories",
    readTime: "7 min read",
    featured: false,
  },
];

// ── Hero ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy grain-overlay py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp}><GoldBadge>Free Guidance</GoldBadge></motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl">
            Free guidance from the people who&apos;ve been there.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Practical insights for UAE families navigating global college admissions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Featured Articles ─────────────────────────────────────────────────
function FeaturedArticles() {
  const featured = articles.filter((a) => a.featured);
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <GoldBadge>Featured Guides</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl mt-3">Start here.</h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {featured.map(({ title, excerpt, category, readTime }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="card-lift bg-white rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-navy/10 to-gold/10 flex items-center justify-center">
                <span className="text-5xl">
                  {category === "USA Guide" ? "🇺🇸" : category === "Essay Writing" ? "✍️" : "✈️"}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex items-center justify-between">
                  <span className="label-caps text-gold text-[0.6rem]">{category}</span>
                  <span className="text-graphite/50 text-xs">{readTime}</span>
                </div>
                <h3 className="heading-section text-navy text-xl leading-tight">{title}</h3>
                <p className="text-graphite text-sm leading-relaxed flex-1">{excerpt}</p>
                <Link href="/contact" className="text-gold font-semibold text-sm hover:underline underline-offset-4 mt-2">
                  Read Article →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Article Grid with Filter ──────────────────────────────────────────
function ArticleGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles.filter((a) => !a.featured) : articles.filter((a) => a.category === active && !a.featured);

  return (
    <section className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <GoldBadge>All Resources</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl mt-3">More articles &amp; guides.</h2>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`label-caps px-4 py-2 rounded-full text-[0.65rem] transition-colors border ${
                active === cat
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-graphite border-cream hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ title, excerpt, category, readTime }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="card-lift bg-white rounded-2xl p-6 flex flex-col gap-3 border border-cream"
            >
              <div className="flex items-center justify-between">
                <span className="label-caps text-gold text-[0.6rem]">{category}</span>
                <span className="text-graphite/50 text-xs">{readTime}</span>
              </div>
              <h3 className="heading-section text-navy text-lg leading-snug">{title}</h3>
              <p className="text-graphite text-sm leading-relaxed flex-1">{excerpt}</p>
              <Link href="/contact" className="text-gold font-semibold text-sm hover:underline underline-offset-4">
                Read Article →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Email Capture ─────────────────────────────────────────────────────
function EmailCapture() {
  return (
    <section className="bg-navy grain-overlay py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}><GoldBadge>Free Resource</GoldBadge></motion.div>
          <motion.h2 variants={fadeUp} className="heading-section text-white text-3xl sm:text-4xl">
            Get our free college admissions checklist — delivered to your inbox.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70">
            The complete UAE student&apos;s guide to US applications, from Grade 10 to acceptance day.
          </motion.p>
          <motion.form
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-full px-5 py-3 text-sm outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-navy font-semibold px-6 py-3 rounded-full text-sm hover:bg-gold/90 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </motion.form>
          <motion.p variants={fadeUp} className="text-white/40 text-xs">
            No spam. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <ArticleGrid />
      <EmailCapture />
    </>
  );
}
