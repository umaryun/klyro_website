import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const companyLinks = [
  { label: 'Home', href: '/', section: null },
  { label: 'About', href: '/#about', section: 'about' },
  { label: 'Services', href: '/#services', section: 'services' },
  { label: 'Contact', href: '/contact', section: null },
];

const serviceLinks = [
  { label: 'Brand Design', href: '#services' },
  { label: 'Web Development', href: '#services' },
  { label: 'Marketing systems', href: '#services' },
  { label: 'Automation', href: '#services' },
];

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
      e.preventDefault();
      if (location.pathname === '/') {
        const el = document.getElementById(section);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(section);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <footer id="footer" className="bg-klyro-dark">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block" id="footer-logo">
              <img
                src="/icon.png"
                alt="Klyro logo"
                className="w-16 h-auto mb-5"
              />
            </Link>
            <p className="text-[14px] leading-relaxed text-klyro-text/70 max-w-[260px]">
              Building scalable digital solutions for modern businesses
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                id="footer-instagram"
                aria-label="Instagram"
                className="text-klyro-text/50 transition-colors duration-200 hover:text-klyro-cta"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                id="footer-x"
                aria-label="X (Twitter)"
                className="text-klyro-text/50 transition-colors duration-200 hover:text-klyro-cta"
              >
                <XIcon />
              </a>
              <a
                href="#"
                id="footer-linkedin"
                aria-label="LinkedIn"
                className="text-klyro-text/50 transition-colors duration-200 hover:text-klyro-cta"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                id="footer-facebook"
                aria-label="Facebook"
                className="text-klyro-text/50 transition-colors duration-200 hover:text-klyro-cta"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[15px] font-semibold text-white tracking-wide uppercase mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-3.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.section ? (
                    <a
                      href={link.href}
                      id={`footer-${link.label.toLowerCase()}`}
                      onClick={(e) => handleSectionClick(e, link.section!)}
                      className="text-[14px] text-klyro-text/60 transition-colors duration-200 hover:text-white cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      id={`footer-${link.label.toLowerCase()}`}
                      className="text-[14px] text-klyro-text/60 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-[15px] font-semibold text-white tracking-wide uppercase mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    id={`footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => handleSectionClick(e, 'services')}
                    className="text-[14px] text-klyro-text/60 transition-colors duration-200 hover:text-white cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[15px] font-semibold text-white tracking-wide uppercase mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hello@brand.com"
                  id="footer-email"
                  className="inline-flex items-center gap-3 text-[14px] text-klyro-text/60 transition-colors duration-200 hover:text-white"
                >
                  <span className="text-klyro-cta"><MailIcon /></span>
                  hello@brand.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348035461122"
                  id="footer-phone"
                  className="inline-flex items-center gap-3 text-[14px] text-klyro-text/60 transition-colors duration-200 hover:text-white"
                >
                  <span className="text-klyro-cta"><PhoneIcon /></span>
                  +234 803 546 1122
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-klyro-text/40">
            © 2026 KlyroSolutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              id="footer-privacy"
              className="text-[13px] text-klyro-text/50 transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              id="footer-terms"
              className="text-[13px] text-klyro-text/50 transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
