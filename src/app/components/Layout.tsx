"use client";
import { useState } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col h-screen">
      {/* Navigation */}
      <header className="border-b border-black [z-index:100]">
        <div className="flex justify-between items-center px-6 md:px-12 py-4">
          {/* Logo */}
          <Link href="/" className="text-3xl md:text-4xl">
            Bootstrap Kat
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 text-xl">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            <Link href="/wednesday" className="hover:underline">Wednesday</Link>
          </nav>

          {/* Mobile Toggle Button (SVG Arrow) */}
          <button
            className={`md:hidden transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer (Slides Down) */}
        <nav
          className={`md:hidden flex flex-col items-center gap-4 text-xl bg-white w-full px-6 py-4 border-b border-black transition-all duration-300 ${
            isOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/wednesday" onClick={() => setIsOpen(false)}>Wednesday</Link>
        </nav>
      </header>

      {/* Page Content */}

        <main className="flex-grow overflow-x-hidden animate-fade-in-slow">{children}</main>

      {/* Footer */}
      <footer className="border-t border-black text-center p-4">
        <p>&copy; {new Date().getFullYear()} Bootstrap Kat | All Rights Reserved</p>
      </footer>
    </div>
  );
}
