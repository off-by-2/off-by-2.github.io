import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#1f3d2b] text-white pt-16 md:pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-4xl font-serif font-bold tracking-tight">Salvia.</h2>
                            <p className="text-lg text-emerald-100/70 font-light max-w-sm leading-relaxed mt-4">
                                Transforming the chaos of clinical conversations into the clarity of structured records.
                            </p>
                        </div>
                        <div className="max-w-sm">
                            <label id="newsletter-label" className="text-[10px] font-bold uppercase tracking-widest text-[#93b7a1] mb-3 block">Stay Updated</label>
                            <div className="flex gap-2">
                                <input type="email" placeholder="email@hospital.org"
                                    aria-labelledby="newsletter-label"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#6b8f7a] outline-none transition-colors" />
                                <button
                                    aria-label="Subscribe to newsletter"
                                    className="bg-[#6b8f7a] text-[#1f3d2b] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#5a8a6e] transition-colors">
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:col-span-1"></div>
                    <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-[#93b7a1] mb-6">Platform</h3>
                            <ul className="space-y-4 text-sm text-emerald-100/80 font-medium">
                                <li><Link href="/#documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                                <li><Link href="/#compliance" className="hover:text-white transition-colors">Compliance Hub</Link></li>
                                <li><Link href="/#feedback" className="hover:text-white transition-colors">Feedback</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-[#93b7a1] mb-6">Company</h3>
                            <ul className="space-y-4 text-sm text-emerald-100/80 font-medium">
                                <li><Link href="#" className="hover:text-white transition-colors">Mission</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Ethics</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-[#93b7a1] mb-6">Resources</h3>
                            <ul className="space-y-4 text-sm text-emerald-100/80 font-medium">
                                <li><a href="https://github.com/off-by-2/sal" className="hover:text-white transition-colors">GitHub</a></li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-px w-full bg-white/5 mb-8"></div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-emerald-100/60 font-bold">
                    <div className="flex items-center gap-2">
                        <span>© 2026 OFF BY 2.</span><span className="w-1 h-1 rounded-full bg-[#93b7a1]"></span><span>All rights reserved.</span>
                    </div>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
