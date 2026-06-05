import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0707074D] backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group" id="nav-logo">
          <img src="/klyrologo.png" alt="logo" className='w-22'/>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className="text-[15px] font-medium text-klyro-text/80 transition-colors duration-200 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-klyro-blue after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          id="nav-get-started"
          className="hidden md:inline-flex items-center justify-center rounded-lg bg-klyro-blue px-6 py-2.5 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,124,255,0.15)]"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          id="nav-mobile-toggle"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-klyro-navy/95 backdrop-blur-xl border-t border-klyro-outline px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-klyro-text/80 transition-colors duration-200 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-klyro-blue px-6 py-2.5 text-[14px] font-medium text-white transition-all duration-300 hover:bg-klyro-accent"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
