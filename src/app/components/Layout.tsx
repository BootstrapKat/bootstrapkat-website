'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Lato, Playfair_Display } from 'next/font/google';

// Load the fonts
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${lato.className}`}>
      {/* Navigation */}
      <header className="bg-[#354F52] p-4 flex justify-between items-center">
        <a href="/">
          <img
            src="/logos/logo.png"
            alt="Bootstrap Kat Logo"
            className="h-16"
          />
        </a>
        <button className="md:hidden" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6 text-[#CAD2C5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">
            <p className="text-[#CAD2C5] hover:text-[#84A98C] transition-colors duration-300 ease-in-out">
              Home
            </p>
          </Link>
          {/* <Link href="/wednesday">
            <p className="text-[#CAD2C5] hover:text-[#84A98C] transition-colors duration-300 ease-in-out">
              Wind Down Wednesday
            </p>
          </Link> */}
          <Link href="/portfolio">
            <p className="text-[#CAD2C5] hover:text-[#84A98C] transition-colors duration-300 ease-in-out">
              Portfolio
            </p>
          </Link>
        </nav>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#354F52] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button onClick={closeMenu} className="p-4 text-[#CAD2C5]">
            Close
          </button>
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/">
              <p
                className="text-[#CAD2C5] hover:text-[#84A98C]"
                onClick={closeMenu}
              >
                Home
              </p>
            </Link>
            <Link href="/wednesday">
              <p
                className="text-[#CAD2C5] hover:text-[#84A98C]"
                onClick={closeMenu}
              >
                Wind Down Wednesday
              </p>
            </Link>
            <Link href="/portfolio">
              <p
                className="text-[#CAD2C5] hover:text-[#84A98C]"
                onClick={closeMenu}
              >
                Portfolio
              </p>
            </Link>
          </nav>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
            onClick={closeMenu}
          ></div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-grow p-2 md:p-8">{children}</main>

      {/* Footer */}
      <footer className="bg-[#2F3E46] text-[#CAD2C5] p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Bootstrap Kat | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
