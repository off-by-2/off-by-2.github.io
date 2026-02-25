import { getPostData, getAllPostSlugs } from '@/lib/markdown';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
    const posts = getAllPostSlugs();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const postData = await getPostData(params.slug);

    if (!postData) {
        notFound();
    }

    return (
        <>
            <Header />

            <main>
                {/* ARTICLE HEADER */}
                <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-emerald-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 opacity-50"></div>
                    <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10">
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#4a725b] mb-6">
                            <Link href="/blog" className="hover:text-[#1f3d2b] transition-colors flex items-center gap-1">
                                <ArrowLeft className="w-3 h-3" /> Back to Blog
                            </Link>
                            <span>•</span>
                            <span className="bg-white/50 px-2 py-1 rounded">{postData.category}</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#1f3d2b] leading-[1.1] mb-6">
                            {postData.title}
                        </h1>

                        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#6b8f7a]/20">
                            <div className="w-12 h-12 rounded-full bg-[#1f3d2b] flex items-center justify-center text-white font-serif font-bold">
                                SM
                            </div>
                            <div>
                                <p className="font-bold text-[#1f3d2b] text-sm">Dr. Sarah Miller</p>
                                <p className="text-sm text-[#4a725b]">
                                    Published {postData.date ? format(new Date(postData.date), 'MMM d, yyyy') : 'Unknown Date'} • {postData.readTime}
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ARTICLE BODY */}
                <article className="py-16 md:py-24">
                    <div
                        className="max-w-3xl mx-auto px-4 md:px-6 prose prose-lg"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    />

                    <div className="max-w-3xl mx-auto px-4 md:px-6">
                        <hr className="my-12 border-slate-200" />
                        {postData.ctaTitle && (
                            <div className="bg-emerald-50 rounded-2xl p-8 text-center mt-12">
                                <h3 className="font-serif font-bold text-2xl text-[#1f3d2b] mb-4">{postData.ctaTitle}</h3>
                                {postData.ctaDescription && (
                                    <p className="text-[#3d5f4d] mb-6">
                                        {postData.ctaDescription}
                                    </p>
                                )}
                                {postData.ctaLink && postData.ctaLinkText && (
                                    <a href={postData.ctaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1f3d2b] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#3d5f4d] transition-colors shadow-[0_4px_14px_0_rgba(107,143,122,0.39)]">
                                        {postData.ctaLinkText} <ArrowRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </article>
            </main>

            <Footer />
        </>
    );
}
