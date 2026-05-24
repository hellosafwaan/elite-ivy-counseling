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

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy grain-overlay py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp}><GoldBadge>Student Outcomes</GoldBadge></motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl">
            Our students don&apos;t just apply. They win.
          </motion.h1>
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto pt-6">
            {[
              { v: "100+", l: "Students Admitted" },
              { v: "92%", l: "Top-3 Placement" },
              { v: "Multiple", l: "Scholarships Won" },
              { v: "4+", l: "Countries" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <span className="heading-section text-gold text-3xl sm:text-4xl block">{v}</span>
                <span className="label-caps text-white/60 text-[0.6rem] block mt-1">{l}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Featured Outcomes ─────────────────────────────────────────────────
const featured = [
  {
    uni: "Columbia University",
    location: "New York, USA",
    quote: "We were doubtful at first — but our son got into Columbia University with a scholarship. Elite Ivy guided us through every step of the process. We can't thank them enough.",
    attr: "Parent of admitted student, UAE 2024",
    services: ["Admissions Strategy", "Essay Support", "Scholarship Guidance"],
    badge: "Admitted + Scholarship",
  },
  {
    uni: "Penn State University",
    location: "Pennsylvania, USA",
    quote: "The team helped us understand the entire process from applications through to accommodation, meal plans, and F1 visa. Nothing was left unclear. They were available at every step.",
    attr: "Admitted student, UAE 2024",
    services: ["Full-Service Package", "Post-Admit Support", "F1 Visa Guidance"],
    badge: "Admitted",
  },
  {
    uni: "San Jose State University",
    location: "California, USA",
    quote: "The essay coaching and help with extracurricular documents gave my application a completely different level of quality. I genuinely don't think I would have gotten in without this support.",
    attr: "Admitted student, UAE 2023",
    services: ["Essay Support", "Profile Development"],
    badge: "Admitted",
  },
];

function FeaturedOutcomes() {
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
          <GoldBadge>Featured Stories</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">
            Stories from our students.
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {featured.map(({ uni, location, quote, attr, services: svcs, badge }) => (
            <motion.div key={uni} variants={fadeUp} className="card-lift bg-white rounded-2xl p-8 flex flex-col gap-5">
              <div>
                <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                  <h3 className="heading-section text-navy text-xl">{uni}</h3>
                  <span className="label-caps text-green bg-green/10 px-2.5 py-1 rounded-full text-[0.6rem] shrink-0">
                    {badge} ✓
                  </span>
                </div>
                <p className="text-graphite/60 text-xs">{location}</p>
              </div>
              <div className="gold-rule w-full" />
              <div className="flex-1">
                <p className="pull-quote text-graphite text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
              </div>
              <div>
                <p className="text-graphite/60 text-xs mb-3">— {attr}</p>
                <div className="flex flex-wrap gap-1.5">
                  {svcs.map((s) => (
                    <span key={s} className="label-caps bg-navy/5 text-navy px-2 py-0.5 rounded text-[0.55rem]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Testimonials Grid ─────────────────────────────────────────────────
const testimonials = [
  {
    quote: "Salabat took the time to understand exactly what my daughter wanted from university — not just her grades, but her personality and ambitions. The shortlist was perfect.",
    attr: "Parent, Dubai",
    uni: "University of Edinburgh",
    stars: 5,
  },
  {
    quote: "The IELTS preparation with Syeda was excellent. She helped me go from a Band 6.5 to a 7.5 in six weeks. Completely changed my options.",
    attr: "Student, Sharjah",
    uni: "UK University",
    stars: 5,
  },
  {
    quote: "I had no idea how important the extracurricular section was until they showed me. They helped me present four years of community work in a way that was genuinely impressive.",
    attr: "Student, Abu Dhabi",
    uni: "US University",
    stars: 5,
  },
  {
    quote: "We tried doing this on our own first. After one session with Elite Ivy we realised we'd been thinking about it completely wrong. Worth every dirham.",
    attr: "Parent, Sharjah",
    uni: "Canada University",
    stars: 5,
  },
  {
    quote: "The F1 visa guidance was incredibly thorough. They prepared me for every question the embassy officer asked. I walked in calm and came out with my visa.",
    attr: "Student, UAE",
    uni: "Penn State University",
    stars: 5,
  },
  {
    quote: "What I appreciated most was that they were honest. When I wanted to aim too high, they explained why — and then helped me build a list I could actually win.",
    attr: "Student, Sharjah",
    uni: "US University",
    stars: 5,
  },
];

function TestimonialsGrid() {
  return (
    <section className="bg-blush py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <GoldBadge>Testimonials</GoldBadge>
          <h2 className="heading-section text-navy text-3xl sm:text-4xl lg:text-5xl mt-4">
            What families say.
          </h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map(({ quote, attr, uni, stars }, i) => (
            <motion.div key={i} variants={fadeUp} className="card-lift bg-white rounded-2xl p-7 flex flex-col gap-4">
              <Stars n={stars} />
              <p className="pull-quote text-graphite text-base leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="text-navy font-semibold text-sm">{attr}</p>
                <p className="text-graphite/60 text-xs">{uni}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Universities Row ──────────────────────────────────────────────────
const universities = [
  "Columbia University",
  "Penn State University",
  "San Jose State University",
  "University of Edinburgh",
  "McGill University",
  "UNSW Sydney",
  "University of Toronto",
  "King's College London",
];

function UniversitiesRow() {
  return (
    <section className="bg-ivory py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <GoldBadge>Admitted To</GoldBadge>
          <p className="text-graphite text-lg mt-3">Students admitted to universities including:</p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {universities.map((u) => (
            <motion.span
              key={u}
              variants={fadeUp}
              className="bg-white border border-gold/30 text-navy px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm"
            >
              {u}
            </motion.span>
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
          <GoldBadge>Join Our Students</GoldBadge>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="heading-display text-white text-4xl sm:text-5xl">
          Join over 100 students who&apos;ve won their offer.
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-white/70 text-lg">
          Book a free, no-obligation strategy session today.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Link href="/contact" className="inline-flex items-center bg-gold text-navy font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors">
            Book Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ResultsPage() {
  return (
    <>
      <Hero />
      <FeaturedOutcomes />
      <TestimonialsGrid />
      <UniversitiesRow />
      <CTA />
    </>
  );
}
