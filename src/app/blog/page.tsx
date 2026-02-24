import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSortedPostsData } from '@/lib/markdown';
import { format } from 'date-fns';
import { ShieldCheck, Code2, Stethoscope, ArrowRight } from 'lucide-react';

// Map icon strings to actual components
const IconMap: Record<string, any> = {
    ShieldCheck,
    Code2,
    Stethoscope,
};

// Map categories to color themes for the cards
const CategoryColors: Record<string, { bg: string, ring: string, iconBg: string, iconText: string, textHover: string }> = {
    'Compliance': {
        bg: 'bg-emerald-50',
        ring: 'from-emerald-100 to-teal-50',
        iconBg: 'text-emerald-300',
        iconText: 'text-emerald-300',
        textHover: 'group-hover:text-[#6b8f7a]'
    },
    'Open Source': {
        bg: 'bg-blue-50',
        ring: 'from-blue-100 to-indigo-50',
        iconBg: 'text-blue-300',
        iconText: 'text-blue-300',
        textHover: 'group-hover:text-[#6b8f7a]'
    },
    'Workflows': {
        bg: 'bg-amber-50',
        ring: 'from-amber-100 to-orange-50',
        iconBg: 'text-amber-300',
        iconText: 'text-amber-300',
        textHover: 'group-hover:text-[#6b8f7a]'
    }
};

const defaultColors = CategoryColors['Compliance'];

export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <>
            <Header />

            <main>
                {/* HEADER */}
                <section className="min-h-[40vh] flex flex-col justify-center items-center px-4 md:px-6 pt-32 pb-16 bg-white border-b border-slate-100 text-center">
                    <span className="text-[#6b8f7a] uppercase tracking-widest text-xs font-bold bg-[#6b8f7a]/10 px-3 py-1 rounded-full border border-[#6b8f7a]/20 mb-6">Salvia Resources</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#1f3d2b] leading-[1.1]">
                        Latest Insights
                    </h1>
                    <p className="mt-6 text-base md:text-xl text-[#3d5f4d] max-w-2xl mx-auto leading-relaxed font-light px-2">
                        Articles on compliance protocols, building open-source health tech, and better clinical workflows.
                    </p>
                </section>

                {/* BLOG LISTING */}
                <section className="py-16 md:py-24 bg-white min-h-[50vh]">
                    <div className="mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {posts.map((post) => {
                                const Icon = IconMap[post.icon] || ShieldCheck;
                                const colors = CategoryColors[post.category] || defaultColors;

                                return (
                                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                                        <div className={`w-full h-56 ${colors.bg} rounded-2xl mb-6 overflow-hidden relative`}>
                                            <div className={`absolute inset-0 bg-gradient-to-br ${colors.ring} opacity-50 group-hover:scale-105 transition-transform duration-500`}></div>
                                            <div className={`absolute inset-0 flex items-center justify-center ${colors.iconBg}`}>
                                                <Icon className="w-16 h-16" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#6b8f7a] mb-3">
                                            <span>{post.category}</span> • <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                                        </div>
                                        <h4 className={`font-serif font-bold text-2xl text-[#1f3d2b] ${colors.textHover} transition-colors mb-3`}>
                                            {post.title}
                                        </h4>
                                        <p className="text-[#3d5f4d] font-light text-sm line-clamp-3">
                                            {post.description}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
