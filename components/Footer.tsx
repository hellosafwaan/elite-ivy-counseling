import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/destinations", label: "Destinations" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#strategy", label: "Admissions Strategy" },
  { href: "/services#shortlisting", label: "University Shortlisting" },
  { href: "/services#essays", label: "Essay Coaching" },
  { href: "/services#interview", label: "Interview Prep" },
  { href: "/services#ielts", label: "IELTS Support" },
  { href: "/services#visa", label: "Visa Guidance" },
  { href: "/services#postadmit", label: "Post-Admit Support" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <span className="heading-section text-white text-2xl block leading-none">Elite Ivy</span>
              <span className="label-caps text-gold text-[0.6rem]">Counseling</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-3">
              Your child's dream college, within reach.
            </p>
            <p className="text-white/50 text-xs mt-4 leading-relaxed">
              UAE's most trusted college admissions strategists, based in Sharjah.
            </p>
          </div>

          {/* Col 2 — Nav */}
          <div>
            <h4 className="label-caps text-gold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-gold transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="label-caps text-gold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-gold transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="label-caps text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="leading-relaxed">
                Al Owais Building, Apt 402<br />
                Al Zahra'a St, Al Naba'a<br />
                Sharjah, UAE
              </li>
              <li>
                <a href="tel:+971504946968" className="hover:text-gold transition-colors">+971 50 494 6968</a>
              </li>
              <li>
                <a href="mailto:admission@eliteivycounseling.com" className="hover:text-gold transition-colors break-all">
                  admission@eliteivycounseling.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971504946968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp us →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5 — Social / CTA */}
          <div>
            <h4 className="label-caps text-gold mb-4">Connect</h4>
            <p className="text-sm text-white/60 mb-4">
              Follow us for admissions tips and student success stories.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/971504946968"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green text-white text-xs font-semibold px-4 py-2 rounded-full w-fit hover:bg-green/90 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-gold/50 text-gold text-xs font-semibold px-4 py-2 rounded-full w-fit hover:bg-gold/10 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Gold rule */}
        <div className="gold-rule mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Elite Ivy Counseling. All rights reserved.</p>
          <p>Al Naba'a, Sharjah, UAE · +971 50 494 6968</p>
        </div>
      </div>
    </footer>
  );
}
