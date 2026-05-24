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

// ── Stats Bar ──────────────────────────────────────────────────────
const stats = [
  { value: "100+", label: "Students Admitted" },
  { value: "92%", label: "Top-3 Placement Rate" },
  { value: "UAE-Based", label: "Global Reach" },
  { value: "Scholarship", label: "Focused Outcomes" },
];

function StatsBar() {
  return (
    <section className="bg-cream py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gold/30">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center py-6 lg:py-0 gap-1"
            >
              <span className="heading-section text-navy text-3xl lg:text-4xl">{value}</span>
              <span className="label-caps text-gold text-center">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Hero ───────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy grain-overlay min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp}>
              <GoldBadge>UAE College Admissions Experts</GoldBadge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Your child&apos;s dream college,{" "}
              <span className="text-gold">within reach.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed max-w-lg">
              100+ students admitted. 92% placed in their top 3 choices. UAE&apos;s most trusted college
              admissions strategists — based in Sharjah, serving families across the region.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center bg-gold text-navy font-semibold px-7 py-4 rounded-full hover:bg-gold/90 transition-colors text-sm"
              >
                Book Your Free Consultation
              </Link>
              <Link
                href="/results"
                className="inline-flex justify-center items-center border-2 border-white/40 text-white font-semibold px-7 py-4 rounded-full hover:border-gold hover:text-gold transition-colors text-sm"
              >
                See Our Results
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — editorial frame (replace inner div with actual <Image> of a student) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-gold/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                    <span className="label-caps text-green text-[0.65rem]">Recent Win</span>
                  </div>
                  <p className="pull-quote text-white text-base leading-snug">
                    &ldquo;Our son was admitted to Columbia University — with a scholarship.&rdquo;
                  </p>
                  <p className="text-white/50 text-xs mt-2">— Parent, Sharjah 2024</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/60 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/60 rounded-bl-lg" />
            </div>
            <div className="absolute -left-6 top-1/3 bg-ivory text-navy rounded-xl p-4 shadow-xl border border-cream">
              <span className="heading-section text-gold text-3xl block">92%</span>
              <span className="label-caps text-graphite text-[0.6rem]">Top-3 Placement</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Problem / Solution ─────────────────────────────────────────────
const features = [
  {
    icon: "🎯",
    title: "Strategic Guidance",
    desc: "We build your child's admissions narrative before a single application is written — positioning every strength intentionally.",
  },
  {
    icon: "✍️",
    title: "Compelling Applications",
    desc: "From the personal statement to supplemental essays, we ensure your child's voice is heard clearly by every admissions committee.",
  },
  {
    icon: "🤝",
    title: "End-to-End Support",
    desc: "From first consultation to F1 visa and accommodation — we stay with your family through the entire journey.",
  },
];

function ProblemSection() {
  return (
    <section className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <GoldBadge>Why Strategy Matters</GoldBadge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6"
          >
            Marks alone don&apos;t win offers from the world&apos;s best universities.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-graphite text-lg leading-relaxed"
          >
            The most competitive universities admit students who present themselves strategically —
            compelling essays, a coherent profile, and a story that stands out. Most families don&apos;t
            know where to start. We do.
          </motion.p>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="card-lift bg-white rounded-2xl p-7 border border-cream shadow-sm"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="heading-section text-navy text-xl mb-3">{title}</h3>
              <p className="text-graphite text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Services Teaser ────────────────────────────────────────────────
const services = [
  { icon: "🗺️", title: "Admissions Strategy", desc: "Big-picture planning and profile positioning" },
  { icon: "🏛️", title: "University Shortlisting", desc: "Curated target lists matched to your child" },
  { icon: "✍️", title: "Essay Coaching", desc: "Your child's story, powerfully told" },
  { icon: "🎤", title: "Interview Preparation", desc: "Mock sessions and real feedback" },
  { icon: "📝", title: "Test Prep & IELTS", desc: "SAT, ACT, AP and IELTS preparation" },
  { icon: "✈️", title: "Visa & Post-Admit", desc: "F1 visa, accommodation, and beyond" },
];

function ServicesTeaser() {
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
          <GoldBadge>Our Services</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">
            Everything your child needs to win their offer.
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="card-lift bg-white rounded-2xl p-6 border border-cream/60 shadow-sm flex gap-4"
            >
              <span className="text-2xl mt-0.5 shrink-0">{icon}</span>
              <div>
                <h3 className="heading-section text-navy text-lg mb-1">{title}</h3>
                <p className="text-graphite text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/services" className="text-gold font-semibold hover:underline underline-offset-4 transition-colors">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Results Snapshot ───────────────────────────────────────────────
const outcomes = [
  {
    uni: "Columbia University",
    quote: "We were doubtful at first — but our son got into Columbia with a scholarship. Elite Ivy guided us through every step.",
    attr: "— Parent, UAE 2024",
  },
  {
    uni: "Penn State University",
    quote: "The team helped us understand the entire process from applications through to accommodation, meal plans, and F1 visa.",
    attr: "— Student, UAE 2024",
  },
  {
    uni: "San Jose State University",
    quote: "The essay coaching and help with extracurricular documents gave my application a completely different level of quality.",
    attr: "— Student, UAE 2023",
  },
];

function ResultsSnapshot() {
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
          <GoldBadge>Student Outcomes</GoldBadge>
          <h2 className="heading-display text-white text-4xl sm:text-5xl lg:text-6xl mt-4">
            Our students don&apos;t just apply. They win.
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {outcomes.map(({ uni, quote, attr }) => (
            <motion.div key={uni} variants={fadeUp} className="card-lift bg-white rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="heading-section text-navy text-lg">{uni}</span>
                <span className="label-caps text-green bg-green/10 px-2.5 py-1 rounded-full text-[0.6rem]">Admitted ✓</span>
              </div>
              <div className="gold-rule w-full" />
              <p className="pull-quote text-graphite text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
              <p className="text-graphite/60 text-xs">{attr}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/results" className="text-gold font-semibold hover:underline underline-offset-4">
            See All Results →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── How It Works ───────────────────────────────────────────────────
const steps = [
  { n: "01", title: "Free Consultation", desc: "We learn your child's goals, strengths, and timeline in a 45-minute session." },
  { n: "02", title: "Roadmap + Shortlist", desc: "Personalized strategy and curated university list — reach, match, and safety." },
  { n: "03", title: "Application Build", desc: "Essays, activities, test prep, interview coaching, and submission — guided by us." },
  { n: "04", title: "Admission + Beyond", desc: "Visa support, accommodation guidance, and planning until move-in day." },
];

function HowItWorks() {
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
          <GoldBadge>The Process</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">
            Your child&apos;s journey to their dream college — step by step.
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
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-gold/40 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <span className="heading-display text-gold text-5xl">{n}</span>
                <h3 className="heading-section text-navy text-xl mt-2 mb-3">{title}</h3>
                <p className="text-graphite text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Team Intro ─────────────────────────────────────────────────────
const team = [
  { name: "Salabat Khan", role: "U.S. Admissions Strategist, Founder", initials: "SK" },
  { name: "Syeda Urooj Khan", role: "IELTS Trainer & Admissions Advisor", initials: "SU" },
  { name: "Hashmat Khan", role: "University Advisor", initials: "HK" },
  { name: "Saad Syed", role: "Student Mentor", initials: "SS" },
];

function TeamIntro() {
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
          <GoldBadge>The Team</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">
            Meet the people in your corner.
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map(({ name, role, initials }) => (
            <motion.div key={name} variants={fadeUp} className="card-lift bg-white rounded-2xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                <span className="heading-section text-gold text-2xl">{initials}</span>
              </div>
              <h3 className="heading-section text-navy text-lg mb-1">{name}</h3>
              <p className="text-graphite text-sm">{role}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/about#team" className="text-gold font-semibold hover:underline underline-offset-4">
            Meet the Full Team →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Destinations Teaser ────────────────────────────────────────────
const destinations = [
  { flag: "🇺🇸", name: "USA", desc: "Ivy League to top publics" },
  { flag: "🇬🇧", name: "UK", desc: "Oxford, LSE, Russell Group" },
  { flag: "🇨🇦", name: "Canada", desc: "U of T, UBC, McGill" },
  { flag: "🇦🇺", name: "Australia", desc: "Top QS-ranked universities" },
  { flag: "🇩🇪", name: "Germany", desc: "Tuition-free world-class" },
  { flag: "🌍", name: "Europe", desc: "ETH Zurich & beyond" },
];

function DestinationsTeaser() {
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
          <GoldBadge>Study Destinations</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">
            Where will your child thrive?
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {destinations.map(({ flag, name, desc }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="card-lift bg-white rounded-2xl p-5 text-center border border-cream"
            >
              <span className="text-4xl block mb-2">{flag}</span>
              <span className="heading-section text-navy text-base block mb-1">{name}</span>
              <span className="text-graphite/70 text-xs">{desc}</span>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/destinations" className="text-gold font-semibold hover:underline underline-offset-4">
            Explore All Destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ──────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="bg-navy grain-overlay py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <GoldBadge>Get Started Today</GoldBadge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="heading-display text-white text-4xl sm:text-5xl lg:text-6xl">
            Ready to give your child every advantage?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed">
            Book a free, no-obligation strategy session. We&apos;ll review your child&apos;s profile and map out the
            path to their dream college.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gold text-navy font-semibold px-8 py-4 rounded-full text-base hover:bg-gold/90 transition-colors"
            >
              Book Your Free Consultation
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2 text-white/60 text-sm flex-wrap">
            <a href="tel:+971504946968" className="hover:text-gold transition-colors flex items-center gap-2">
              📞 +971 50 494 6968
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="https://wa.me/971504946968" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2">
              💬 WhatsApp
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="mailto:admission@eliteivycounseling.com" className="hover:text-gold transition-colors flex items-center gap-2">
              ✉️ admission@eliteivycounseling.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProblemSection />
      <ServicesTeaser />
      <ResultsSnapshot />
      <HowItWorks />
      <TeamIntro />
      <DestinationsTeaser />
      <FinalCTA />
    </>
  );
}
