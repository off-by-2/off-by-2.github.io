"use client";

import Link from "next/link";
import { Menu, Github } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav
                className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-[#6b8f7a]/10 top-0"
                id="navbar"
            >
                <div className="px-6 md:px-8 mx-auto flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <img src="/logo.svg" alt="Salvia Logo" className="w-10 h-10 shadow-sm group-hover:scale-105 transition-transform" />
                        <span className="font-serif font-bold text-2xl tracking-tight text-[#1f3d2b]">
                            Salvia.
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-10 text-sm font-medium text-[#2f5a43]">
                        <Link href="/#documentation" className="hover:text-[#1f3d2b] transition-colors">
                            Documentation
                        </Link>
                        <Link href="/#compliance" className="hover:text-[#1f3d2b] transition-colors">
                            Compliance
                        </Link>
                        <Link href="/#feedback" className="hover:text-[#1f3d2b] transition-colors">
                            Feedback
                        </Link>
                        <Link href="/#management" className="hover:text-[#1f3d2b] transition-colors">
                            Management
                        </Link>
                        <Link href="/blog" className="hover:text-[#1f3d2b] transition-colors">
                            Blog
                        </Link>
                        <Link href="/#opensource" className="hover:text-[#1f3d2b] transition-colors">
                            Open Source
                        </Link>
                    </div>

                    {/* CTA Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://github.com/off-by-2/sal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-[#1f3d2b] hover:text-[#4a725b] transition-colors flex items-center gap-2"
                        >
                            <Github className="w-4 h-4" /> GitHub
                        </a>
                        <button className="bg-[#1f3d2b] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#3d5f4d] transition-all btn-shadow transition-transform hover:-translate-y-0.5">
                            Self-Host Documentation
                        </button>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-[#1f3d2b]"
                        aria-label={mobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#f7f9f6] z-40 flex flex-col justify-center items-center transition-all duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-[10px]"
                    }`}
            >
                <div className="flex flex-col items-center gap-8 text-lg font-serif font-medium text-[#1f3d2b]">
                    <Link href="/#documentation" onClick={() => setMobileMenuOpen(false)} className="mobile-link hover:text-[#5a8a6e] transition-colors">
                        Documentation
                    </Link>
                    <Link href="/#compliance" onClick={() => setMobileMenuOpen(false)} className="mobile-link hover:text-[#5a8a6e] transition-colors">
                        Compliance
                    </Link>
                    <Link href="/#feedback" onClick={() => setMobileMenuOpen(false)} className="mobile-link hover:text-[#5a8a6e] transition-colors">
                        Feedback
                    </Link>
                    <Link href="/#management" onClick={() => setMobileMenuOpen(false)} className="mobile-link hover:text-[#5a8a6e] transition-colors">
                        Management
                    </Link>
                    <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="mobile-link hover:text-[#5a8a6e] transition-colors">
                        Blog
                    </Link>
                    <Link href="/#opensource" onClick={() => setMobileMenuOpen(false)} className="mobile-link hover:text-[#5a8a6e] transition-colors">
                        Open Source
                    </Link>
                    <a href="https://github.com/off-by-2/sal" target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-3 rounded-xl bg-[#1f3d2b] text-white text-sm font-bold transition-all mobile-link flex items-center gap-2">
                        <Github className="w-4 h-4" /> View on GitHub
                    </a>
                </div>
            </div>
        </>
    );
}
