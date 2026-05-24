"use client";

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

// ── Hero ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy grain-overlay py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp}><GoldBadge>Free Consultation</GoldBadge></motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl">
            Let&apos;s build your child&apos;s path to their dream college.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Book a free, no-obligation strategy session. We&apos;ll review your child&apos;s profile and give you a personalised roadmap — at no cost.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Contact Form + Info ───────────────────────────────────────────────
function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    grade: "",
    destination: "",
    timeline: "",
    message: "",
    preferredContact: "whatsapp",
    sessionFormat: "in-person",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left — form (3 cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GoldBadge>Book Your Session</GoldBadge>
            <h2 className="heading-section text-navy text-3xl sm:text-4xl mt-3 mb-8">
              Free strategy session — 45 minutes, no obligation.
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green/10 border border-green/30 rounded-2xl p-8 text-center space-y-4"
              >
                <div className="text-5xl">✅</div>
                <h3 className="heading-section text-navy text-2xl">We&apos;ve received your message.</h3>
                <p className="text-graphite">
                  Thank you, {form.parentName || "there"}. We&apos;ll be in touch within 24 hours to confirm your consultation.
                </p>
                <p className="text-graphite/60 text-sm">
                  In the meantime, feel free to WhatsApp us at{" "}
                  <a href="https://wa.me/971504946968" className="text-gold hover:underline">+971 50 494 6968</a>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-caps text-graphite block mb-2">Parent / Guardian Name *</label>
                    <input
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-white border border-cream rounded-xl px-4 py-3 text-navy text-sm placeholder:text-graphite/40 outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-graphite block mb-2">Student&apos;s Name *</label>
                    <input
                      name="studentName"
                      value={form.studentName}
                      onChange={handleChange}
                      required
                      placeholder="Student's full name"
                      className="w-full bg-white border border-cream rounded-xl px-4 py-3 text-navy text-sm placeholder:text-graphite/40 outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-caps text-graphite block mb-2">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white border border-cream rounded-xl px-4 py-3 text-navy text-sm placeholder:text-graphite/40 outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-caps text-graphite block mb-2">Phone / WhatsApp *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+971 50 XXX XXXX"
                      className="w-full bg-white border border-cream rounded-xl px-4 py-3 text-navy text-sm placeholder:text-graphite/40 outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="label-caps text-graphite block mb-2">Student&apos;s Grade / Year</label>
                    <select
                      name="grade"
                      value={form.grade}
                      onChange={handleChange}
                      className="w-full bg-white border border-cream rounded-xl px-4 py-3 text-navy text-sm outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="">Select grade</option>
                      {["Grade 9", "Grade 10", "Grade 11", "Grade 12", "Gap Year", "Other"].map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label-caps text-graphite block mb-2">Target Destination</label>
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      className="w-full bg-white border border-cream rounded-xl px-4 py-3 text-navy text-sm outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="">Select country</option>
                      {["USA", "UK", "Canada", "Australia", "Germany / Europe", "Undecided"].map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label-caps text-graphite block mb-2">Application Timeline</label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full bg-white border border-cream rounded-xl px-4 py-3 text-navy text-sm outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="">Select timeline</option>
                      {["This year (urgent)", "Next year", "2+ years", "Just exploring"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label-caps text-graphite block mb-2">Preferred Contact Method</label>
                    <div className="flex gap-3">
                      {[{ v: "whatsapp", l: "WhatsApp" }, { v: "email", l: "Email" }, { v: "call", l: "Phone Call" }].map(({ v, l }) => (
                        <label key={v} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={v}
                            checked={form.preferredContact === v}
                            onChange={handleChange}
                            className="accent-gold"
                          />
                          <span className="text-sm text-graphite">{l}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="label-caps text-graphite block mb-2">Session Format</label>
                    <div className="flex gap-3">
                      {[{ v: "in-person", l: "In-Person" }, { v: "online", l: "Online" }, { v: "either", l: "Either" }].map(({ v, l }) => (
                        <label key={v} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sessionFormat"
                            value={v}
                            checked={form.sessionFormat === v}
                            onChange={handleChange}
                            className="accent-gold"
                          />
                          <span className="text-sm text-graphite">{l}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="label-caps text-graphite block mb-2">Tell Us About Your Child</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your child's current profile, goals, and any specific challenges or questions you have..."
                    className="w-full bg-white border border-cream rounded-xl px-4 py-3 text-navy text-sm placeholder:text-graphite/40 outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-semibold py-4 rounded-full text-base hover:bg-gold/90 transition-colors"
                >
                  Book My Free Consultation
                </button>

                <p className="text-graphite/50 text-xs text-center">
                  We&apos;ll respond within 24 hours. No spam, no pressure, no obligation.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right — contact info (2 cols) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={fadeUp} className="bg-cream rounded-2xl p-7 space-y-5">
              <h3 className="heading-section text-navy text-xl">Get in touch directly.</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+971 50 494 6968",
                    href: "tel:+971504946968",
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: "+971 50 494 6968",
                    href: "https://wa.me/971504946968",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "admission@eliteivycounseling.com",
                    href: "mailto:admission@eliteivycounseling.com",
                  },
                ].map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <span className="text-2xl mt-0.5">{icon}</span>
                    <div>
                      <span className="label-caps text-gold block">{label}</span>
                      <span className="text-navy text-sm group-hover:text-gold transition-colors break-all">{value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-cream rounded-2xl p-7 space-y-3">
              <h3 className="heading-section text-navy text-xl">Our Office</h3>
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">📍</span>
                <div>
                  <p className="text-navy text-sm font-semibold">Al Owais Building</p>
                  <p className="text-graphite text-sm">Apartment 402</p>
                  <p className="text-graphite text-sm">Al Zahra&apos;a St, Al Naba&apos;a</p>
                  <p className="text-graphite text-sm">Sharjah, UAE</p>
                </div>
              </div>
              <p className="text-graphite/60 text-xs pl-10">
                In-person consultations available by appointment.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-navy rounded-2xl p-7 space-y-4">
              <h3 className="heading-section text-white text-xl">What to expect.</h3>
              <ul className="space-y-3">
                {[
                  "45-minute session, free of charge",
                  "Review of your child's current profile",
                  "Preliminary university shortlist",
                  "Honest assessment of timeline and strategy",
                  "No pressure, no commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
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

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactSection />
    </>
  );
}
