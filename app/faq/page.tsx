"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = { show: { transition: { staggerChildren: 0.08 } } };

function GoldBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-gold text-gold label-caps px-3 py-1 rounded-full text-[0.65rem]">
      {children}
    </span>
  );
}

const faqSections = [
  {
    category: "About the Process",
    items: [
      {
        q: "How early should we start the admissions process?",
        a: "Ideally, Grade 10 or the start of Grade 11. Starting early gives your child time to build a strong extracurricular profile, sit standardised tests, and apply to Early Decision or Early Action rounds. That said, even late-stage students in Grade 12 can benefit significantly from strategic support — we've helped Grade 12 students secure strong offers with targeted guidance.",
      },
      {
        q: "Do you work with students applying to multiple countries?",
        a: "Yes. Many of our students apply to the US, UK, and Canada simultaneously. Each system has its own requirements, timeline, and application format — and we manage all of them in parallel. We ensure your child doesn't miss a deadline or overlook a requirement across any of their applications.",
      },
      {
        q: "What makes Elite Ivy different from other consultants in the UAE?",
        a: "We are not a visa agency or a generalist education consultancy. We specialise in the admissions strategy itself — helping your child build the profile, essays, and narrative that win offers at the world's most competitive universities. Our team has deep expertise in the specific systems we support (US Common App, UK UCAS, Canada, Australia), and every student receives a personalised strategy, not a template.",
      },
      {
        q: "How does the free consultation work?",
        a: "It's a 45-minute session — in person at our Sharjah office or via video call for families across the UAE. We review your child's current academic profile, discuss their goals and target universities, assess the timeline, and provide a preliminary roadmap. There is no cost and no obligation. We believe families should understand exactly what's involved before committing to anything.",
      },
      {
        q: "Do you guarantee admission?",
        a: "No ethical admissions consultant can guarantee admission to any specific university — anyone who tells you otherwise is misleading you. What we do guarantee is our full commitment to maximising your child's chances across their entire university list, through every element of the application process.",
      },
    ],
  },
  {
    category: "About Our Services",
    items: [
      {
        q: "Do you write the essays for students?",
        a: "No. We guide your child to find their story and their voice — but every word in the essay belongs to your child. Universities are experienced at identifying essays that weren't written by the student, and it can result in rescinded offers. Our role is to coach the strategy, structure, and clarity while ensuring the essay sounds authentically like your child.",
      },
      {
        q: "Can we hire you for just one service?",
        a: "Yes. We offer à la carte services in addition to full-service packages. Some families come to us specifically for essay coaching; others for IELTS preparation or F1 visa guidance. We discuss the best approach during the free consultation and tailor a package accordingly.",
      },
      {
        q: "Do you offer IELTS preparation in-house?",
        a: "Yes. Our IELTS preparation is led by certified IELTS trainer Syeda Urooj Khan. She provides structured preparation covering all four skills — Listening, Reading, Writing, and Speaking — with personalised feedback and realistic mock tests aligned to the current exam format.",
      },
      {
        q: "Do you help with scholarship applications?",
        a: "Absolutely. Scholarship strategy is integrated into our admissions approach from the beginning. We identify merit-based, need-based, and international scholarship opportunities at each target university, and ensure your child's application is positioned to be competitive. We have helped students secure significant scholarship funding at US universities.",
      },
    ],
  },
  {
    category: "Outcomes & Cost",
    items: [
      {
        q: "What universities have your students been admitted to?",
        a: "Our students have been admitted to Columbia University, Penn State University, San Jose State University, the University of Edinburgh, and many other leading institutions across the US, UK, Canada, and Australia. You can read their stories on our Results page.",
      },
      {
        q: "What is the cost of your services?",
        a: "Pricing depends on the level and duration of support required. We discuss packages during the free consultation and ensure every family is matched with a service level that fits their needs, timeline, and budget. We believe every UAE family should have access to the guidance their child deserves — and we work to make that possible.",
      },
    ],
  },
  {
    category: "Logistics",
    items: [
      {
        q: "Are sessions in-person or online?",
        a: "Both. Our Sharjah office (Al Owais Building, Apartment 402, Al Zahra'a St, Al Naba'a) is open for in-person meetings. We also work with students and families remotely — by video call — across the UAE and internationally. Many of our clients prefer a combination of both.",
      },
      {
        q: "What languages does your team speak?",
        a: "Our team primarily communicates in English and Urdu. We can accommodate basic Arabic conversations and are experienced working with families from across the diverse UAE community — including Pakistani, Indian, Arab, and other international backgrounds.",
      },
      {
        q: "How do I get started?",
        a: "Simply book a free consultation via our Contact page, send us a message on WhatsApp at +971 50 494 6968, or email us at admission@eliteivycounseling.com. We'll respond within 24 hours and arrange a session at a time that works for you.",
      },
    ],
  },
];

// ── Accordion Item ────────────────────────────────────────────────────
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="heading-section text-navy text-lg group-hover:text-gold transition-colors">{q}</span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center transition-all duration-300 ${
            open ? "bg-gold rotate-45" : "bg-transparent"
          }`}
        >
          <svg className="w-3 h-3 text-gold fill-none stroke-current" viewBox="0 0 12 12">
            <path strokeLinecap="round" strokeWidth={2} d="M6 2v8M2 6h8" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-graphite leading-relaxed pb-6 text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy grain-overlay py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp}><GoldBadge>FAQ</GoldBadge></motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl">
            Everything you need to know before you call.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            We believe in transparency. Here are the questions every UAE family asks us.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── FAQ Sections ──────────────────────────────────────────────────────
function FAQSections() {
  return (
    <section className="bg-ivory py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {faqSections.map(({ category, items }) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <GoldBadge>{category}</GoldBadge>
                <div className="flex-1 h-px bg-gold/20" />
              </div>
              <div className="space-y-1">
                {items.map(({ q, a }) => (
                  <AccordionItem key={q} q={q} a={a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <GoldBadge>Still Have Questions?</GoldBadge>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="heading-section text-navy text-3xl sm:text-4xl">
          Still have questions?
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-graphite text-lg">
          We&apos;re here. Reach out directly — by WhatsApp, email, or book a consultation.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/971504946968"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-navy text-white font-semibold px-7 py-4 rounded-full hover:bg-navy/90 transition-colors text-sm gap-2"
          >
            💬 Chat on WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center bg-gold text-navy font-semibold px-7 py-4 rounded-full hover:bg-gold/90 transition-colors text-sm"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function FAQPage() {
  return (
    <>
      <Hero />
      <FAQSections />
      <CTA />
    </>
  );
}
