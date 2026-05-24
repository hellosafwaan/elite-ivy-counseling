"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = { show: { transition: { staggerChildren: 0.12 } } };

function GoldBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-gold text-gold label-caps px-3 py-1 rounded-full text-[0.65rem]">
      {children}
    </span>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy grain-overlay py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp}>
            <GoldBadge>Our Story</GoldBadge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl">
            Built for families who won&apos;t settle for anything less.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            We founded Elite Ivy because exceptional students deserve exceptional guidance — wherever they come from.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Our Story ─────────────────────────────────────────────────────────
function OurStory() {
  return (
    <section className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — editorial frame */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20 bg-gradient-to-br from-cream via-cream to-gold/10 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center mx-auto mb-6">
                  <span className="heading-section text-gold text-3xl">EI</span>
                </div>
                <p className="pull-quote text-navy text-lg leading-relaxed">
                  &ldquo;Every exceptional student deserves an exceptional shot.&rdquo;
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold/30 rounded-br-2xl pointer-events-none" />
          </motion.div>

          {/* Right — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <motion.div variants={fadeUp}>
              <GoldBadge>Why Elite Ivy Exists</GoldBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-3xl sm:text-4xl">
              A better path for UAE families.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-graphite text-base leading-relaxed">
              Our founder, Salabat Khan, navigated the US college admissions process first-hand — and saw how opaque, intimidating, and unfair it could feel for families outside the American system. UAE students with extraordinary potential were being under-served by generic agencies more focused on visa processing than genuine strategy.
            </motion.p>
            <motion.p variants={fadeUp} className="text-graphite text-base leading-relaxed">
              Elite Ivy was built to change that. We assembled a team of specialists — admissions strategists, IELTS trainers, mentors — to create a service that treats every student as an individual, not a case number.
            </motion.p>
            <motion.p variants={fadeUp} className="text-graphite text-base leading-relaxed">
              Today, over 100 students have been admitted to universities across the US, UK, Canada, and Australia through our guidance. Every one of them received a service built around their story.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Mission Pull-Quote ─────────────────────────────────────────────────
function Mission() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <div className="gold-rule w-24 mx-auto" />
          </motion.div>
          <motion.blockquote
            variants={fadeUp}
            className="pull-quote text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            &ldquo;Every exceptional student deserves an exceptional shot — regardless of their school,
            their country, or their background.&rdquo;
          </motion.blockquote>
          <motion.div variants={fadeUp}>
            <div className="gold-rule w-24 mx-auto" />
          </motion.div>
          <motion.p variants={fadeUp} className="label-caps text-gold">Our Mission</motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Team ──────────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Salabat Khan",
    role: "Founder & U.S. College Admissions Strategist",
    initials: "SK",
    bio: "Salabat is the founder of Elite Ivy and an expert in US university applications, Common App strategy, essay development, and profile positioning. Having guided students from the UAE into top American universities, he brings deep knowledge of what Ivy League and competitive US programs truly look for — and how to position UAE students to meet those expectations. His approach is strategic, personalised, and results-driven.",
    credentials: "Common App Expert · US Admissions Strategy · Profile Positioning · Founder",
  },
  {
    name: "Syeda Urooj Khan",
    role: "IELTS Trainer & Admissions Advisor",
    initials: "SU",
    bio: "Syeda is a certified IELTS trainer who helps students achieve the language scores required by UK, US, Canadian, and Australian universities. She combines structured test preparation with admissions advising — ensuring students not only meet requirements but present their English proficiency confidently throughout their application.",
    credentials: "Certified IELTS Trainer · UK & Canada Admissions · Language Proficiency",
  },
  {
    name: "Hashmat Khan",
    role: "University Advisor",
    initials: "HK",
    bio: "Hashmat advises students and families on university fit, career alignment, and application strategy. With experience spanning multiple higher education systems, he brings a broad perspective to the shortlisting process — helping families make informed decisions that balance academic ambition with practical considerations like cost, location, and career outcomes.",
    credentials: "University Fit · Career Alignment · Multi-Country Application Strategy",
  },
  {
    name: "Saad Syed",
    role: "Student Mentor",
    initials: "SS",
    bio: "Saad works directly with students on motivation, direction, and personal development alongside the application process. He bridges the gap between strategic advising and the human side of what is, for many students, the most significant application of their lives — keeping students focused, confident, and authentic throughout.",
    credentials: "Student Development · Motivation & Clarity · Personal Statement Mentorship",
  },
];

function Team() {
  return (
    <section id="team" className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GoldBadge>The Team</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">
            The specialists in your corner.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {teamMembers.map(({ name, role, initials, bio, credentials }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`grid lg:grid-cols-3 gap-8 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              {/* Avatar + name block */}
              <div className="lg:col-span-1">
                <div className="bg-cream rounded-2xl p-8 text-center">
                  <div className="w-28 h-28 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                    <span className="heading-section text-gold text-3xl">{initials}</span>
                  </div>
                  <h3 className="heading-section text-navy text-xl mb-1">{name}</h3>
                  <p className="text-gold text-sm mb-4">{role}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {credentials.split(" · ").map((c) => (
                      <span key={c} className="label-caps bg-navy/5 text-navy px-2 py-0.5 rounded text-[0.55rem]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <p className="text-graphite text-base leading-relaxed">{bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Values ────────────────────────────────────────────────────────────
const values = [
  { icon: "👤", title: "Personalized", desc: "Every student is unique. We never use templates — every roadmap, every essay strategy, every shortlist is built from scratch." },
  { icon: "♟️", title: "Strategic", desc: "We plan before we act. Every decision in your child's application has a reason behind it." },
  { icon: "💬", title: "Honest", desc: "We tell you what works, not what you want to hear. That's the only way to get real results." },
  { icon: "🏡", title: "Family-Oriented", desc: "We treat every student like they're our own — because to us, every success is personal." },
];

function Values() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <GoldBadge>What We Stand For</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">Our values.</h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map(({ icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} className="card-lift bg-white rounded-2xl p-7">
              <span className="text-4xl block mb-4">{icon}</span>
              <h3 className="heading-section text-navy text-xl mb-3">{title}</h3>
              <p className="text-graphite text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Why UAE Families Choose Us ─────────────────────────────────────────
const differentiators = [
  { icon: "🇦🇪", title: "UAE-Based, Globally Trained", desc: "We live and work in the UAE — we understand the local context, the school systems, and the family dynamics." },
  { icon: "🗣️", title: "Arabic & English Speaking", desc: "Our team communicates in both English and Urdu, and can accommodate Arabic-speaking families." },
  { icon: "🏢", title: "Sharjah Office", desc: "Meet us in person at our office in Al Naba'a, Sharjah — or work with us remotely from anywhere in the UAE." },
  { icon: "🏆", title: "Proven Track Record", desc: "100+ students admitted to universities across the US, UK, Canada, and Australia." },
];

function WhyUs() {
  return (
    <section className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <GoldBadge>Why Choose Us</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">
            Why UAE families choose Elite Ivy.
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {differentiators.map(({ icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} className="card-lift bg-white rounded-2xl p-7 flex gap-5 border border-cream">
              <span className="text-3xl mt-1 shrink-0">{icon}</span>
              <div>
                <h3 className="heading-section text-navy text-xl mb-2">{title}</h3>
                <p className="text-graphite text-sm leading-relaxed">{desc}</p>
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
    <section className="bg-navy grain-overlay py-28">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <GoldBadge>Get Started</GoldBadge>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="heading-display text-white text-4xl sm:text-5xl">
          Ready to meet your team?
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-white/70 text-lg leading-relaxed">
          Book a free, no-obligation strategy session and we&apos;ll show you exactly how we can help your child.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Link href="/contact" className="inline-flex items-center bg-gold text-navy font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors">
            Book Your Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <OurStory />
      <Mission />
      <Team />
      <Values />
      <WhyUs />
      <CTA />
    </>
  );
}
