import React, { useState } from 'react';
import { Shield, Menu, X, ArrowRight, Star, Phone, Mail, FileText, Users, Lock } from 'lucide-react';

export default function PoliceBlueNationHero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* 1. TOP BAR / NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo Brand */}
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-600/20">
                <Shield className="h-6 w-6 text-white" strokeWidth={2} />
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-blue-600 opacity-30 blur" />
              </div>
              <div>
                <span className="block text-lg font-black tracking-wider text-white sm:text-xl">
                  POLICE BLUE <span className="text-blue-500">NATION</span>
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  National Law Enforcement Platform
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-semibold text-slate-300 transition-colors hover:text-blue-400">Platform</a>
              <a href="#resources" className="text-sm font-semibold text-slate-300 transition-colors hover:text-blue-400">Resources</a>
              <a href="#training" className="text-sm font-semibold text-slate-300 transition-colors hover:text-blue-400">Training</a>
              <a href="#community" className="text-sm font-semibold text-slate-300 transition-colors hover:text-blue-400">Community</a>
            </div>

            {/* Desktop CTA Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-900 hover:text-white">
                <Lock className="h-4 w-4 text-blue-500" />
                Secure Portal
              </button>
              <button className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]">
                Join the Nation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2.5 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="border-b border-slate-800 bg-slate-950 px-4 py-6 md:hidden">
            <div className="space-y-4">
              <a href="#features" className="block text-base font-semibold text-slate-300 hover:text-blue-400">Platform</a>
              <a href="#resources" className="block text-base font-semibold text-slate-300 hover:text-blue-400">Resources</a>
              <a href="#training" className="block text-base font-semibold text-slate-300 hover:text-blue-400">Training</a>
              <a href="#community" className="block text-base font-semibold text-slate-300 hover:text-blue-400">Community</a>
              <hr className="border-slate-800" />
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 py-3 text-sm font-semibold text-slate-300">
                  <Lock className="h-4 w-4 text-blue-500" />
                  Secure Portal
                </button>
                <button className="w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/10">
                  Join the Nation
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        
        {/* STRICT REQUIREMENT: FULL WIDTH BACKGROUND PICTURE WITH ADVANCED OVERLAYS */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=2850&q=80"
            alt="Law Enforcement Officers Community Grid"
            className="h-full w-full object-cover object-center transform scale-105 animate-[pulse_8s_ease-in-out_infinite]"
          />
          {/* Radial Gradient Ambient Lighting */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
          {/* Bottom Fade to blend into next sections smoothly */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          {/* Top Fade to balance contrast against Nav */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32 w-full">
          <div className="max-w-3xl">
            
            {/* Tagline / Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md mb-6">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 sm:text-sm">
                The Trusted National Network for Law Enforcement
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              United in Duty. <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Empowered by Community.
              </span>
            </h1>

            {/* Sub-headline Description */}
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Welcome to the premier, verified tactical hub built exclusively for America's law enforcement personnel. Access critical multi-agency intelligence, verified career development, peer-to-peer mental resilience networks, and premium duty equipment.
            </p>

            {/* Modern High-Conversion Call To Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button className="group relative flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.99]">
                Verify & Claim Badge
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-900 hover:border-slate-600">
                Explore Public Resources
              </button>
            </div>

            {/* Platform Credibility Metrics Grid */}
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-slate-800/80 pt-10 sm:grid-cols-3 max-w-2xl">
              <div>
                <div className="flex items-baseline gap-1 text-2xl font-bold text-white sm:text-3xl">
                  <span>140K</span>
                  <span className="text-blue-500">+</span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Verified Officers</p>
              </div>
              
              <div>
                <div className="flex items-baseline gap-1 text-2xl font-bold text-white sm:text-3xl">
                  <span>2.4M</span>
                  <span className="text-blue-500">+</span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Intel Submissions</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Department Trusted</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}