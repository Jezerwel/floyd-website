"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card border-b py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 backdrop-blur-md bg-card/95">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            FeedFrendz
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? "text-foreground font-semibold border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-foreground transition-colors duration-200"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <div
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 pb-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
