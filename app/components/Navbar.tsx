"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Destinations", "Packages", "Why Us", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className={`text-2xl font-bold tracking-tight ${scrolled ? "text-sky-600" : "text-white"}`}>
          🐚 BahamasEscape
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium hover:text-sky-400 transition-colors ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#packages"
          className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Book Now
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? "bg-gray-700" : "bg-white"}`} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? "bg-gray-700" : "bg-white"}`} />
          <div className={`w-6 h-0.5 transition-all ${scrolled ? "bg-gray-700" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="block py-2 text-gray-700 font-medium hover:text-sky-500"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#packages"
            className="mt-3 block text-center bg-sky-500 text-white font-semibold py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
