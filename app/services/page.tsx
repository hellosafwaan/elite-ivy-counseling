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
          <motion.div variants={fadeUp}><GoldBadge>Our Services</GoldBadge></motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl">
            End-to-end support. Nothing falls through the cracks.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            From your child&apos;s first shortlist to visa day, we manage the entire journey — so you can focus on the excitement, not the paperwork.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────
const servicesList = [
  {
    id: "strategy",
    icon: "🗺️",
    title: "College Admissions Strategy",
    desc: "Big-picture planning, timeline management, and positioning strategy — we build your child's narrative before a single application is written. Every strength is documented, every gap is addressed, and the entire journey is mapped with precision.",
    who: "Grade 10–12 students beginning the admissions journey.",
    bg: "bg-ivory",
  },
  {
    id: "shortlisting",
    icon: "🏛️",
    title: "University Shortlisting",
    desc: "A curated list of universities matched to your child's academic profile, ambitions, budget, and personal preferences. We cover reach, match, and safety schools — and explain exactly why each university made the list.",
    who: "Students ready to identify their target university list.",
    bg: "bg-cream",
  },
  {
    id: "essays",
    icon: "✍️",
    title: "Essay Support & Coaching",
    desc: "The personal statement and supplemental essays are the most critical part of any application. We guide every word — your child's voice, our strategy. We never write essays for students; we coach them to write their best work.",
    who: "Students applying to Common App, UCAS, or any essay-required program.",
    bg: "bg-ivory",
  },
  {
    id: "interview",
    icon: "🎤",
    title: "Interview Preparation",
    desc: "Mock interviews, coaching sessions, and detailed feedback for universities that require a formal interview — Oxford, MIT, Oxbridge, business schools. We prepare students for every likely question and help them project authentic confidence.",
    who: "Students who have been invited to interview.",
    bg: "bg-cream",
  },
  {
    id: "profile",
    icon: "🌟",
    title: "Extracurricular & Profile Development",
    desc: "Most students underestimate what they've achieved. We help your child identify, document, and present their activities compellingly — framing leadership, service, and passion in ways admissions officers respond to.",
    who: "Students in Grade 9–11 who want to strengthen their profile before applications open.",
    bg: "bg-ivory",
  },
  {
    id: "testprep",
    icon: "📚",
    title: "Test Prep Guidance",
    desc: "SAT, ACT, and AP strategy — which tests, when, and how to prepare efficiently. We connect students with the right resources and track their progress toward target scores.",
    who: "Students preparing for standardized testing.",
    bg: "bg-cream",
  },
  {
    id: "ielts",
    icon: "📝",
    title: "IELTS Support",
    desc: "Led by certified IELTS trainer Syeda Urooj Khan, our structured IELTS preparation covers all four skills — Listening, Reading, Writing, and Speaking — with personalised feedback and realistic mock tests.",
    who: "Students applying to UK, Canada, Australia, or any institution requiring English proficiency proof.",
    bg: "bg-ivory",
  },
  {
    id: "postadmit",
    icon: "🎓",
    title: "Post-Admit Support",
    desc: "After the offer arrives, the real decisions begin. We help families compare offers, understand financial aid packages, weigh the pros and cons of each institution, and make the choice that's right for your child.",
    who: "Students with one or more admission offers in hand.",
    bg: "bg-cream",
  },
  {
    id: "accommodation",
    icon: "🏠",
    title: "Accommodation Guidance",
    desc: "We help students navigate on-campus vs off-campus options, complete housing applications, understand what to expect, and prepare for living away from home for the first time.",
    who: "All admitted students relocating for university.",
    bg: "bg-ivory",
  },
  {
    id: "mealplan",
    icon: "🍽️",
    title: "Meal Plan Guidance",
    desc: "Understanding university meal plans, dietary considerations, halal options, and what to arrange before arrival — so your child is settled and nourished from day one.",
    who: "First-year students and families preparing for the transition.",
    bg: "bg-cream",
  },
  {
    id: "visa",
    icon: "✈️",
    title: "Student Visa Guidance (F1 + Others)",
    desc: "DS-160 forms, SEVIS registration, embassy interview preparation, and complete document checklists for US F1 visas. We also provide guidance on student visas for UK, Canada, and Australia.",
    who: "Students admitted to universities requiring a student visa.",
    bg: "bg-ivory",
  },
  {
    id: "consultation",
    icon: "💡",
    title: "Free Consultation & Personalized Roadmap",
    desc: "A 45-minute strategy session at no cost. We review the student's academic profile, discuss goals and target universities, assess the timeline, and produce a personalised roadmap for the journey ahead.",
    who: "Any UAE family considering their options — no obligation.",
    bg: "bg-cream",
  },
];

function ServiceCard({ service, flip }: { service: typeof servicesList[0]; flip: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${service.bg} py-20`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${flip ? "lg:flex-row-reverse" : ""}`}>
          <div className={flip ? "lg:order-2" : ""}>
            <span className="text-5xl block mb-6">{service.icon}</span>
            <div className="gold-rule w-12 mb-6" />
            <h2 id={service.id} className="heading-section text-navy text-3xl sm:text-4xl mb-5">
              {service.title}
            </h2>
            <p className="text-graphite text-lg leading-relaxed mb-6">{service.desc}</p>
            <div className="bg-navy/5 rounded-xl p-4 border-l-4 border-gold">
              <span className="label-caps text-gold block mb-1">Who this is for</span>
              <p className="text-graphite text-sm">{service.who}</p>
            </div>
          </div>
          <div className={`${flip ? "lg:order-1" : ""} hidden lg:flex items-center justify-center`}>
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-navy/5 to-gold/10 flex items-center justify-center border border-gold/20">
              <span className="text-8xl">{service.icon}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── How It Works ──────────────────────────────────────────────────────
const steps = [
  { n: "01", title: "Free Consultation", desc: "We learn your child's goals, strengths, and timeline." },
  { n: "02", title: "Roadmap + Shortlist", desc: "Personalised strategy and curated university list." },
  { n: "03", title: "Application Build", desc: "Essays, activities, test prep, and submission — guided." },
  { n: "04", title: "Admission + Beyond", desc: "Visa, accommodation, and post-admit support." },
];

function HowItWorks() {
  return (
    <section className="bg-navy grain-overlay py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <GoldBadge>The Process</GoldBadge>
          <h2 className="heading-section text-white text-3xl sm:text-4xl lg:text-5xl mt-4">
            Your child&apos;s journey, step by step.
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map(({ n, title, desc }, i) => (
            <motion.div key={n} variants={fadeUp} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <span className="heading-display text-gold text-5xl">{n}</span>
                <h3 className="heading-section text-white text-xl mt-2 mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <GoldBadge>Free Consultation</GoldBadge>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="heading-section text-navy text-3xl sm:text-4xl">
          Get your child&apos;s personalized roadmap — free, no obligation.
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-graphite text-lg">
          45 minutes. In person or online. No cost, no commitment.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Link href="/contact" className="inline-flex items-center bg-gold text-navy font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors">
            Book Now — It&apos;s Free
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Hero />
      {servicesList.map((s, i) => (
        <ServiceCard key={s.id} service={s} flip={i % 2 === 1} />
      ))}
      <HowItWorks />
      <CTA />
    </>
  );
}
