"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to highlight currently visible section
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["work", "experience", "systems", "skills", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Handle incoming hash anchor from cross-page navigation
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const targetEl = document.getElementById(hashId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  }, [pathname]);

  const navLinks = [
    { label: "Work", href: pathname === "/" ? "#work" : "/#work", id: "work" },
    { label: "Experience", href: pathname === "/" ? "#experience" : "/#experience", id: "experience" },
    { label: "Engineering", href: pathname === "/" ? "#systems" : "/#systems", id: "systems" },
    { label: "Skills", href: pathname === "/" ? "#skills" : "/#skills", id: "skills" },
    { label: "About", href: pathname === "/" ? "#about" : "/#about", id: "about" },
    { label: "Contact", href: pathname === "/" ? "#contact" : "/#contact", id: "contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
        setActiveSection(targetId);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F5F1E8]/92 dark:bg-[#161412]/92 backdrop-blur-md border-b border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] shadow-sm dark:shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand identity with "S" Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-[#29251F] dark:text-[#F5F1E8] hover:text-[#B66A3C] dark:hover:text-[#E28754] transition-colors"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-md bg-[#B66A3C]/10 dark:bg-[#25211D] border border-[#B66A3C]/30 dark:border-[#E28754]/30 group-hover:border-[#B66A3C]/60 dark:group-hover:border-blue-500/60 transition-colors text-[#B66A3C] dark:text-[#E28754] font-mono text-base font-extrabold shadow-sm shadow-[#B66A3C]/10">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold tracking-tight text-sm sm:text-base leading-tight">
              Saimon Emon
            </span>
            <span className="font-mono text-[10px] text-[#777168] dark:text-slate-400 group-hover:text-[#B66A3C] dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              saimon.systems
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-xs lg:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              pathname === "/"
                ? activeSection === link.id
                : pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-[#B66A3C] dark:text-[#E28754] font-bold"
                    : "text-[#777168] hover:text-[#29251F] dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B66A3C] dark:bg-blue-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action buttons (Theme Toggle & Resume) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download="Saimon_Hasan_Emon_Resume.pdf"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-[#29251F] dark:text-slate-200 bg-[#EAE3D6] hover:bg-[#DCD3C5] dark:bg-[#25211D] dark:hover:bg-[#1E1B18] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] hover:border-[#B66A3C]/50 dark:hover:border-blue-500/50 hover:text-[#B66A3C] dark:hover:text-[#E28754] transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-[#B66A3C] dark:text-[#E28754]" />
            <span>Resume ↓</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="p-2 rounded-md bg-[#EAE3D6] dark:bg-[#25211D] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] text-[#29251F] dark:text-slate-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#FFFCF6]/98 dark:bg-[#161412]/98 backdrop-blur-xl border-b border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] px-4 pt-3 pb-6 space-y-3"
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === "/"
                  ? activeSection === link.id
                  : pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#B66A3C]/10 dark:bg-[#B66A3C]/20 text-[#B66A3C] dark:text-[#E28754] font-bold"
                      : "text-[#29251F] dark:text-slate-200 hover:bg-[#EAE3D6] dark:hover:bg-[#25211D] hover:text-[#B66A3C] dark:hover:text-[#E28754]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex gap-2">
            <a
              href="/resume.pdf"
              download="Saimon_Hasan_Emon_Resume.pdf"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono font-medium text-[#29251F] dark:text-slate-200 bg-[#EAE3D6] dark:bg-[#25211D] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] hover:border-[#B66A3C]/50"
            >
              <FileDown className="w-4 h-4 text-[#B66A3C] dark:text-[#E28754]" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
