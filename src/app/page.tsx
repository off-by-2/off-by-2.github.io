import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/markdown';
import { format } from 'date-fns';

import {
  ArrowRight,
  ShieldCheck,
  Code2,
  Stethoscope,
  Users,
  Github,
  CheckCircle,
  CheckCircle2,
  XCircle,
  Bell,
  Target,
  Send,
  Mic,
  Smile,
  Activity,
  UtensilsCrossed,
  ListMusic,
  MoreHorizontal,
  ChevronDown,
  Building2,
  LayoutGrid,
  Users2,
  UserCircle,
  ClipboardCheck,
  ArrowLeftRight,
  FileText,
  Layers,
  Search,
  Files,
  BarChart3,
  Settings,
  Share2,
  ChevronRight
} from 'lucide-react';

// Map icon strings to actual components for the blog cards
const IconMap: Record<string, any> = {
  ShieldCheck,
  Code2,
  Stethoscope,
};

const CategoryColors: Record<string, { bg: string, ring: string, iconBg: string, iconText: string, textHover: string }> = {
  'Compliance': {
    bg: 'bg-emerald-50',
    ring: 'from-emerald-100 to-teal-50',
    iconBg: 'text-emerald-300',
    iconText: 'text-emerald-300',
    textHover: 'group-hover:text-[#4a725b]'
  },
  'Open Source': {
    bg: 'bg-blue-50',
    ring: 'from-blue-100 to-indigo-50',
    iconBg: 'text-[#4a725b]lue-300',
    iconText: 'text-[#4a725b]lue-300',
    textHover: 'group-hover:text-[#4a725b]'
  },
  'Workflows': {
    bg: 'bg-amber-50',
    ring: 'from-amber-100 to-orange-50',
    iconBg: 'text-[#4a725b]mber-300',
    iconText: 'text-[#4a725b]mber-300',
    textHover: 'group-hover:text-[#4a725b]'
  }
};
const defaultColors = CategoryColors['Compliance'];

export default function Home() {
  const allPosts = getSortedPostsData();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <>
      <Header />

      <main>
        {/* 2. HERO + 3D */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white to-[#f7f9f6]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-[#4a725b]xl lg:text-[#4a725b]xl font-serif tracking-tight text-[#1f3d2b] leading-[1.05]">
                Stop documenting.<br /><span className="italic text-[#4a725b]">Start caring.</span>
              </h1>
              <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#3d5f4d] leading-relaxed font-light">
                Salvia unites Care Documentation, Compliance protocols, and Patient Feedback under one open-source roof.
                Eliminating human mistakes so you can focus on patient outcomes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <a href="#demo" className="px-8 py-4 bg-[#1f3d2b] text-white rounded-full font-bold text-sm tracking-wide hover:bg-[#2f5a43] transition-all flex items-center gap-2 btn-shadow">
                  See it in Action <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://github.com/off-by-2/sal" target="_blank" className="px-8 py-4 bg-white border border-slate-200 text-[#1f3d2b] rounded-full font-bold text-sm tracking-wide hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Github className="w-4 h-4" /> Open Source
                </a>
              </div>
            </div>

            {/* Right Content - 3D Object Area Placeholder (Empty grid item for layout) */}
            <div className="hidden lg:block h-[600px] w-full relative">
              {/* This space is occupied by the absolutely positioned 3D scene below */}
            </div>
          </div>

          {/* Static Image Layer (Absolute positioning pushes it to the right) */}
          <div className="absolute top-0 right-0 w-full lg:w-3/5 h-[60vh] lg:h-full z-0 pointer-events-none lg:pointer-events-auto opacity-30 lg:opacity-100 flex items-center justify-center">
            <div className="w-full h-full relative lg:-right-48 scale-150 lg:scale-[1.5] flex items-center justify-center drop-shadow-2xl">
              <Image
                src="/hero-rocks.webp"
                alt="Moss covered rocks"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
                unoptimized
              />
            </div>
          </div>


        </section>

        {/* 3. THE WORKSPACE / MANAGEMENT HUB */}
        <section id="management" className="py-16 md:py-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
              <p className="text-[10px] font-bold text-[#1f3d2b] uppercase tracking-widest mb-3">Complete Oversight</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f3d2b] mb-4">Easy Management Hub</h2>
              <p className="text-[#3d5f4d] text-[#4a725b]ase md:text-lg font-light leading-relaxed">
                A high-performance explorer designed for clinics to manage organizational hierarchies, staff
                rosters, resident directories, and unified compliance dashboards all in one place.
              </p>
            </div>

            <div className="overflow-x-auto pb-4 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0 scrollbar-hide">
              <div className="app-window rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden min-w-[800px] md:min-w-0 max-w-5xl mx-auto border border-slate-200">
                {/* Header */}
                <div className="bg-[#f3f3f3] border-b border-slate-200 h-10 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5 w-24">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">Surgical Verify</div>
                  <div className="w-24 flex justify-end">
                    <Share2 className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                </div>

                <div className="flex h-[550px]">
                  {/* Activity Bar */}
                  <div className="w-14 vsl-activitybar flex flex-col items-center py-6 gap-8 shrink-0 bg-[#1f3d2b]">
                    <div className="p-2 bg-white/10 rounded-lg"><Files className="w-5 h-5 text-white" /></div>
                    <Users className="w-5 h-5 text-white/30 hover:text-white transition-colors cursor-pointer" />
                    <BarChart3 className="w-5 h-5 text-white/30 hover:text-white transition-colors cursor-pointer" />
                    <Settings className="w-5 h-5 text-white/30 mt-auto hover:text-white transition-colors cursor-pointer" />
                  </div>

                  {/* Explorer Sidebar */}
                  <div className="w-64 vsl-sidebar flex flex-col shrink-0 text-[12px] text-slate-600 border-r border-slate-100">
                    <div className="p-4 font-bold uppercase text-[9px] text-slate-600 tracking-wider">
                      Today&apos;s Operations
                    </div>
                    <div className="overflow-y-auto">
                      <div className="px-4 py-2 flex items-center gap-2 vsl-tree-hover font-bold text-slate-800">
                        <ChevronDown className="w-4 h-4" />
                        <Building2 className="w-4 h-4 text-[#1f3d2b]" />
                        Orchard_Health_Corp
                      </div>
                      <div className="ml-4 px-4 py-2 flex items-center gap-2 vsl-tree-hover font-semibold">
                        <ChevronDown className="w-4 h-4" />
                        <LayoutGrid className="w-4 h-4 text-[#4a725b]mber-600" />
                        North_Region
                      </div>
                      <div className="ml-8 px-4 py-2 flex items-center gap-2 vsl-tree-hover text-[#1f3d2b] bg-emerald-50 border-l-2 border-[#1f3d2b] font-medium">
                        <Users2 className="w-4 h-4" />
                        Clinical_Staff.staff
                      </div>
                      <div className="ml-8 px-4 py-2 flex items-center gap-2 vsl-tree-hover">
                        <ChevronRight className="w-4 h-4 opacity-50" />
                        <UserCircle className="w-4 h-4 text-[#4a725b]lue-500" />
                        Resident_Census
                      </div>
                    </div>
                  </div>

                  {/* Main View: Staff Management */}
                  <div className="flex-1 flex flex-col bg-white">
                    <div className="h-10 bg-[#ececec] border-b border-slate-200 flex text-[10px] font-medium items-center">
                      <div className="bg-white px-6 h-full flex items-center gap-2 border-r border-slate-200 border-t-2 border-[#1f3d2b]">
                        <Users2 className="w-3.5 h-3.5" />
                        Clinical_Staff.staff
                      </div>
                      <div className="px-6 h-full flex items-center gap-2 text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-slate-600" />
                        <span className="text-xs font-medium">Pending Verify</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="font-bold text-xl text-slate-800">Staff Management</h3>
                          <p className="text-xs text-slate-600 mt-1">Showing all active clinicians in North Region</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-white border border-slate-200 text-slate-600 text-[11px] px-4 py-2 rounded-lg font-bold hover:bg-slate-50">Export PDF</button>
                          <button className="bg-[#1f3d2b] text-white text-[11px] px-4 py-2 rounded-lg font-bold hover:bg-[#2f5a43] btn-shadow">+ Add Member</button>
                        </div>
                      </div>
                      <table className="w-full text-left text-[13px]">
                        <thead className="text-[10px] uppercase text-slate-600 border-b border-slate-100">
                          <tr>
                            <th className="pb-3 font-bold tracking-widest">Name</th>
                            <th className="pb-3 font-bold tracking-widest">Role</th>
                            <th className="pb-3 font-bold tracking-widest">Shift Group</th>
                            <th className="pb-3 font-bold tracking-widest">Status</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-600">
                          <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[#1f3d2b] text-[10px]">
                                  MC
                                </div>
                                <span className="font-medium text-slate-900">Emily Richardson</span>
                              </div>
                            </td>
                            <td className="py-4 italic">RN / Clinical Lead</td>
                            <td className="py-4">Morning / High Care</td>
                            <td className="py-4"><span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#1f3d2b] text-[10px] font-bold">ACTIVE</span></td>
                          </tr>
                          <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center font-bold text-[#4a725b]mber-700 text-xs">MV</div>
                                <span className="font-medium text-slate-900">Marcus Vane</span>
                              </div>
                            </td>
                            <td className="py-4 italic">LPN</td>
                            <td className="py-4">Post-Acute</td>
                            <td className="py-4"><span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#1f3d2b] text-[10px] font-bold">ACTIVE</span></td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-800 text-xs">SJ</div>
                                <span className="font-medium text-slate-900">Sarah Jenkins</span>
                              </div>
                            </td>
                            <td className="py-4 italic">CNA</td>
                            <td className="py-4">Dementia Care</td>
                            <td className="py-4">
                              <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold">
                                Pending
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-slate-600 mt-4 md:hidden">
                <span className="inline-flex items-center gap-1"><ArrowLeftRight className="w-3 h-3" /> Swipe to explore interface</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CARE DOCUMENTATION */}
        <section id="documentation" className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 max-w-xl order-2 md:order-1">
              <div>
                <p className="text-[10px] font-bold text-[#1f3d2b] uppercase tracking-widest mb-3">Single Source of Truth</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f3d2b] leading-tight">Care Documentation</h2>
                <p className="text-[#3d5f4d] text-[#4a725b]ase md:text-lg mt-4 font-light leading-relaxed">
                  Stop trying to figure out scattered nurses&apos; notes. Salvia provides a unified timeline where all
                  documentation is structured, accurate, and instantly accessible to your entire clinic in one place.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#1f3d2b]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f3d2b] text-sm">Timelined Legal Records</h3>
                    <p className="text-[13px] text-[#3d5f4d] mt-1 leading-normal font-light">Instantly extract complete, chronological patient interactions for legal and compliance matters.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-[#4a725b]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f3d2b] text-sm">Structured Integrity</h3>
                    <p className="text-[13px] text-[#3d5f4d] mt-1 leading-normal font-light">Ensures all inputs follow your clinic&apos;s specific formatting rules. No more missing context.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-[#4a725b]mber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f3d2b] text-sm">Instant Retrieval</h3>
                    <p className="text-[13px] text-[#3d5f4d] mt-1 leading-normal font-light">Search across all shifts and specialties in milliseconds to find exactly what happened, when.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="mobile-frame transform scale-90 md:scale-100 origin-center">
                <div className="mobile-notch"></div>
                <div className="h-full flex flex-col pt-8 bg-white">
                  <div className="px-5 py-5 flex items-center justify-between border-b bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1f3d2b] flex items-center justify-center text-white font-bold text-xs">EM</div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">Eleanor Mayberry</p>
                        <p className="text-[9px] text-slate-600 uppercase font-bold tracking-tight mt-0.5">Room 204 • Wing North</p>
                      </div>
                    </div>
                    <button aria-label="More options" className="p-2 hover:bg-slate-50 rounded-full text-slate-600 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                    <button className="w-full py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                      <ListMusic className="w-3.5 h-3.5" /> OPEN LIVE TRANSCRIPT
                    </button>
                    <div className="space-y-4 pb-6">
                      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-50 pb-2.5">
                          <UtensilsCrossed className="w-3.5 h-3.5 text-[#4a725b]mber-500" />
                          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Nutrition & Hydration</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-slate-50 rounded-xl">
                            <p className="text-[8px] text-slate-600 font-bold uppercase">Breakfast</p>
                            <p className="text-[12px] font-bold text-slate-800 mt-0.5">75% Intake</p>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-xl">
                            <p className="text-[8px] text-slate-600 font-bold uppercase">PO Hydration</p>
                            <p className="text-[12px] font-bold text-slate-800 mt-0.5">450ml (H₂O)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-50 pb-2.5">
                          <Activity className="w-3.5 h-3.5 text-red-500" />
                          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Clinical Vitals</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                            <p className="text-[8px] text-red-600 font-bold uppercase tracking-tighter">B-Sugar (AC)</p>
                            <p className="text-[12px] font-bold text-red-700 mt-0.5">142 mg/dL</p>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-xl">
                            <p className="text-[8px] text-slate-600 font-bold uppercase tracking-tighter">Temp (Ax)</p>
                            <p className="text-[12px] font-bold text-slate-800 mt-0.5">98.4 °F</p>
                          </div>
                        </div>
                        <div className="text-[10px] bg-red-100/40 p-2.5 rounded-xl text-red-800 font-semibold flex items-center gap-2">
                          <Activity className="w-4 h-4" /> Glucose spike: Reviewing med schedule.
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-50 pb-2.5">
                          <Smile className="w-3.5 h-3.5 text-[#4a725b]lue-500" />
                          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Wellbeing & ADLs</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-[11px] border-b border-slate-50 pb-2">
                            <span className="text-slate-600">ADL Support</span>
                            <span className="font-bold text-slate-800">Max Assist</span>
                          </div>
                          <div className="flex justify-between items-center text-[11px] border-b border-slate-50 pb-2">
                            <span className="text-slate-600">Mood/Affect</span>
                            <span className="font-bold text-slate-800">Oriented ×3</span>
                          </div>
                          <div className="flex justify-between items-center text-[11px]">
                            <span className="text-slate-600">Mobility</span>
                            <span className="font-bold text-slate-800 italic">Independent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white border-t border-slate-100 space-y-5">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-[#1f3d2b] rounded-full flex items-center justify-center shadow-2xl relative cursor-pointer">
                        <Mic className="text-white w-8 h-8" />
                        <div className="absolute -inset-2 bg-emerald-500/10 rounded-full -z-10 animate-ping"></div>
                      </div>
                      <p className="text-[10px] font-bold text-[#1f3d2b] mt-4 uppercase tracking-[0.2em]">Live Assessment...</p>
                    </div>
                    <button className="w-full py-4 bg-[#1f3d2b] text-white rounded-2xl text-[12px] font-bold tracking-tight shadow-xl hover:bg-opacity-90 transition-all">
                      SYNC TO CLINICAL RECORD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. COMPLIANCE */}
        <section id="compliance" className="py-16 md:py-32 px-4 md:px-6 bg-[#f7f9f6]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="text-[#4a725b] uppercase tracking-widest text-xs font-bold">Prevent Mistakes</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1f3d2b] mt-4 mb-6">Error-Proof Compliance.</h2>
              <p className="text-[#4a725b]ase md:text-lg text-[#3d5f4d] font-light leading-relaxed mb-8">
                Prevent critical errors, like leaving instruments behind post-OP, with strict verification
                workflows. Clinicians must follow ordered checklists and upload images of instrument trays before
                and after surgery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-gray-100 text-sm font-bold text-[#1f3d2b]">Image Verification</div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 text-sm font-bold text-[#1f3d2b]">Mandatory Checklists</div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 text-sm font-bold text-[#1f3d2b]">Dedicated Overseers</div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 text-sm font-bold text-[#1f3d2b]">Audit Trails</div>
              </div>
            </div>
            <div className="relative group mt-8 md:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#5a8a6e]/10 to-[#1f3d2b]/10 rounded-[48px] blur-2xl group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-10">
                  <div className="text-sm font-serif font-bold text-[#1f3d2b]">OP Instrument Verification</div>
                  <span className="px-3 py-1 bg-amber-50 text-[#4a725b]mber-700 text-[10px] font-bold rounded-full">PENDING</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-xs shrink-0 text-white">✓</div>
                    <div className="flex-1 text-sm font-medium text-emerald-900">Pre-OP Tray Image Uploaded</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-xs shrink-0 text-white">✓</div>
                    <div className="flex-1 text-sm font-medium text-emerald-900">Instruments Logged (Total: 42)</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-dashed border-amber-300">
                    <div className="w-8 h-8 rounded bg-white border border-amber-300 flex items-center justify-center text-xs text-[#4a725b]mber-500 shrink-0">03</div>
                    <div className="flex-1 text-sm font-medium text-[#4a725b]mber-900">Awaiting Post-OP Tray Image Verify</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PATIENT FEEDBACK */}
        <section id="feedback" className="py-16 md:py-32 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1f3d2b]">Continuous Patient Feedback.</h2>
                <p className="text-[#3d5f4d] mt-4 text-[#4a725b]ase md:text-lg font-light leading-relaxed">Directly share customized feedback forms with specific patients post-visit or post-operation to catch issues early and continuously improve care quality.</p>
              </div>
              <button className="px-8 py-4 rounded-full bg-[#1f3d2b] text-white font-bold text-xs uppercase tracking-widest w-full md:w-auto hover:bg-[#2f5a43] transition-colors">Setup Forms</button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-[#f7f9f6] p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-[#1f3d2b] text-xs font-bold mb-4 uppercase tracking-widest">Share Easily</div>
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                  <Send className="w-6 h-6" />
                </div>
                <p className="text-sm text-[#3d5f4d] font-light">Send secure, unique feedback links directly via SMS or email after discharge.</p>
              </div>
              <div className="bg-[#f7f9f6] p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-[#1f3d2b] text-xs font-bold mb-4 uppercase tracking-widest">Targeted Surveys</div>
                <div className="w-12 h-12 bg-blue-100 text-[#4a725b]lue-700 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <p className="text-sm text-[#3d5f4d] font-light">Customize questionnaires automatically based on the specific procedure performed.</p>
              </div>
              <div className="bg-[#f7f9f6] p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-[#1f3d2b] text-xs font-bold mb-4 uppercase tracking-widest">Anomaly Alerts</div>
                <div className="w-12 h-12 bg-amber-100 text-[#4a725b]mber-700 rounded-xl flex items-center justify-center mb-6">
                  <Bell className="w-6 h-6" />
                </div>
                <p className="text-sm text-[#3d5f4d] font-light">Immediately notify clinic management if patient discomfort scores trigger clinical flags.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE ONE REASON */}
        <section id="problem" className="py-16 md:py-24 bg-white/50">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-xs font-bold leading-7 text-[#4a725b] uppercase tracking-widest">The Core Problem</h2>
                <p className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f3d2b] leading-tight">
                  The #1 reason to use Salvia:
                  <br /><span className="text-[#4a725b] italic">Clinical Burnout is Optional.</span>
                </p>
                <p className="mt-6 text-[#4a725b]ase md:text-lg text-[#3d5f4d] font-light leading-relaxed">Healthcare professionals spend up to 40% of their day on administrative data entry. This &quot;documentation debt&quot; leads to fatigue, errors, and less time for patients. Salvia resolves this by making documentation a natural byproduct of your care, not a separate chore.</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-emerald-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-100 p-3 rounded-full shrink-0"><XCircle className="text-red-600 w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-[#1f3d2b]">Before Salvia</h3>
                    <p className="text-sm text-[#3d5f4d] font-light">&quot;Pajama time&quot; charting, fragmented notes, and administrative exhaustion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full shrink-0"><CheckCircle className="text-[#1f3d2b] w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-[#1f3d2b]">After Salvia</h3>
                    <p className="text-sm text-[#3d5f4d] font-light">Instant structured notes, 100% compliance, and more focus on the human in front of you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SECURITY */}
        <section id="security" className="py-16 md:py-32 px-4 md:px-6 bg-[#f7f9f6]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <span className="text-[#4a725b] uppercase tracking-widest text-xs font-bold">Uncompromising</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1f3d2b] mt-4 mb-6">Built for HIPAA & GDPR.</h2>
              <p className="text-[#3d5f4d] font-light leading-relaxed">Medical data is sacred. We treat security not as a feature, but as the foundation of every line of code we write.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-6 md:p-8 border border-gray-100 rounded-2xl bg-white">
                <h3 className="font-bold text-[#1f3d2b] mb-2">End-to-End Encryption</h3>
                <p className="text-sm text-[#3d5f4d] font-light">Audio and transcripts are encrypted in transit and at rest using AES-256 standards.</p>
              </div>
              <div className="p-6 md:p-8 border border-gray-100 rounded-2xl bg-white">
                <h3 className="font-bold text-[#1f3d2b] mb-2">Zero-Knowledge Storage</h3>
                <p className="text-sm text-[#3d5f4d] font-light">Your organization owns the keys. We cannot access raw patient data without your explicit permission.</p>
              </div>
              <div className="p-6 md:p-8 border border-gray-100 rounded-2xl bg-white">
                <h3 className="font-bold text-[#1f3d2b] mb-2">Audit Trails</h3>
                <p className="text-sm text-[#3d5f4d] font-light">Every access, every edit, and every verification is logged in an immutable ledger.</p>
              </div>
              <div className="p-6 md:p-8 border border-gray-100 rounded-2xl bg-white">
                <h3 className="font-bold text-[#1f3d2b] mb-2">PII Masking</h3>
                <p className="text-sm text-[#3d5f4d] font-light">Optional automatic redaction of personal identifiers for research or training purposes.</p>
              </div>
            </div>
          </div>
        </section>


        {/* 9. RESOURCES & BLOG */}
        <section id="blog" className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1f3d2b]">Latest Insights</h2>
                <p className="text-[#3d5f4d] font-light mt-4">Articles on compliance, open-source health tech, and better workflows.</p>
              </div>
              <Link href="/blog" className="text-[#4a725b] font-bold text-sm hover:text-[#1f3d2b] transition-colors flex items-center gap-1">View all articles <ArrowRight className="w-4 h-4" /></Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {latestPosts.map((post) => {
                const Icon = IconMap[post.icon] || ShieldCheck;
                const colors = CategoryColors[post.category] || defaultColors;

                return (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                    <div className={`w-full h-48 ${colors.bg} rounded-2xl mb-4 overflow-hidden relative`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.ring} opacity-50 group-hover:scale-105 transition-transform duration-500`}></div>
                      <div className={`absolute inset-0 flex items-center justify-center ${colors.iconBg}`}>
                        <Icon className="w-12 h-12" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-[0.2em] text-[#1f3d2b] mb-6">
                      <span>{post.category}</span> • <span>{post.readTime || "5 Min Read"}</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#1f3d2b] transition-colors mb-3">
                      {post.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. OPEN SOURCE CTA */}
        <section id="opensource" className="py-20 md:py-32 bg-[#1f3d2b] relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#6b8f7a]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mx-auto max-w-4xl px-4 md:px-6 relative z-10 text-center">
            <span className="text-[#1f3d2b] uppercase tracking-widest text-xs font-bold bg-[#6b8f7a]/20 px-3 py-1 rounded-full border border-[#6b8f7a]/30">Salvia Resources</span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-[#4a725b]xl font-bold text-white mt-8 mb-6">Your data. Your servers. Your control.</h2>

            <p className="text-emerald-50/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Salvia is completely free to self-host. We believe essential clinical tools for documentation, feedback,
              and compliance shouldn&apos;t be locked behind enterprise paywalls.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://github.com/off-by-2/sal" target="_blank" className="px-8 py-5 rounded-2xl bg-white text-[#1f3d2b] font-bold text-sm tracking-wide hover:bg-slate-50 transition-all flex items-center justify-center gap-3 btn-shadow">
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a href="https://github.com/off-by-2" target="_blank" className="px-8 py-5 rounded-2xl bg-[#2f5a43] border border-[#6b8f7a]/30 text-white font-bold text-sm tracking-wide hover:bg-[#3d5f4d] transition-all flex items-center justify-center gap-3">
                <Users className="w-5 h-5" />
                Join the Community
              </a>
            </div>

            <div className="mt-12 text-emerald-100/40 text-sm font-medium flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Fully compliant with HIPAA & GDPR when self-hosted properly.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
