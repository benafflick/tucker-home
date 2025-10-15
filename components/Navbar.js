"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* ====== LOGO AREA ====== */}
        <div className="flex items-center gap-2">
          {/* Logo image placeholder */}
          <img
            src="/logo.png"
            alt="Tucker Home Renovations LLC"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl md:text-2xl font-semibold text-[#B48B5E]">
            Tucker Home Renovations LLC
          </span>
        </div>

        {/* ====== MOBILE MENU BUTTON ====== */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* ====== NAV LINKS ====== */}
        <ul
          className={`absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center gap-8 text-gray-700 font-medium transition-all duration-300 ease-in-out ${
            open
              ? "top-[70px] opacity-100 visible shadow-md md:shadow-none py-6 md:py-0"
              : "top-[-400px] opacity-0 invisible md:opacity-100 md:visible"
          }`}
        >
          {links.map((link) => (
            <li key={link.href} className="text-center">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 md:py-0 hover:text-[#B48B5E] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
