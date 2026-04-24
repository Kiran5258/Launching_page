import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu, X, CheckCircle, Clock, ShieldCheck, MapPin,
  CreditCard, Smartphone, ArrowRight, Droplets, Zap,
  Wrench, Thermometer, Car, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DownloadCTA from '../components/DownloadCTA';
import logo from '../assets/logo.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* 1. Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#home" className="flex items-center gap-2 outline-none">
              <img src={logo} alt="Gigiman Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
              <a href="#download" className="px-5 py-2.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500 hover:text-white transition-all duration-300 font-medium">
                Download App
              </a>
            </div>

            <button
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/5 px-4 pt-2 pb-4 space-y-1">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">Home</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">Features</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">Services</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg">How It Works</a>
            <a href="#download" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-indigo-400 font-medium">Download App</a>
          </div>
        )}
      </nav>

      <main>
        {/* 2. Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Gigiman Mobile App is Live!
                </div>
                <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Book Trusted Services <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    Anytime, Anywhere
                  </span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                  Gigiman connects you with verified service professionals for all your home and personal needs. Instant booking, transparent pricing, and trusted experts.
                </motion.p>
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <DownloadCTA />
                  <a href="#services" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-colors">
                    Explore Services <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="mt-6 flex items-center gap-3 justify-center lg:justify-start"
                >
                  <a
                    href="https://www.instagram.com/gigiman_official?igsh=b2t0OTVkZncydGxh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-medium hover:scale-105 transition-transform"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5C19.216 2 22 4.784 22 7.75v8.5C22 19.216 19.216 22 16.25 22h-8.5C4.784 22 2 19.216 2 16.25v-8.5C2 4.784 4.784 2 7.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-2.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                    </svg>
                    Follow us on Instagram
                  </a>
                </motion.div>

                <motion.div variants={fadeIn} className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold z-${10 - i}`}>
                        U{i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="flex items-center text-amber-400"><Star className="w-4 h-4 fill-current" /> <Star className="w-4 h-4 fill-current" /> <Star className="w-4 h-4 fill-current" /> <Star className="w-4 h-4 fill-current" /> <Star className="w-4 h-4 fill-current" /></p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto w-full max-w-[400px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-[3rem] blur-2xl opacity-20 animate-pulse" />
                <img
                  src="/mockup.png"
                  alt="Gigiman App Interface"
                  className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[2.5rem] border border-white/10 select-none"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Problem Section */}
        <section className="py-24 bg-slate-900 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Finding reliable help used to be hard</h2>
              <p className="text-slate-400 text-lg">We understand the frustration of searching for trustworthy service providers when you need them the most.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Hard to find trusted workers", icon: ShieldCheck, text: "Endless scrolling through unverified listings and fake reviews makes it risky to let strangers into your home." },
                { title: "Unclear pricing", icon: CreditCard, text: "Hidden fees and unexpected charges turn simple jobs into expensive nightmares. You never know what to expect." },
                { title: "No scheduling flexibility", icon: Clock, text: "Professionals who don't show up on time, forcing you to rearrange your entire day around their vague availability." }
              ].map((problem, i) => (
                <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                  key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                    <problem.icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Gigiman Solution + 5. Features Section */}
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6">
                The Gigiman Solution
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need in one app</h2>
              <p className="text-slate-400 text-lg">Gigiman revolutionizes how you book services. We've built a platform that puts reliability, transparency, and convenience first.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "On-Demand Booking", icon: Zap, text: "Users can instantly book services through the app for emergency or quick needs." },
                { title: "Scheduled Services", icon: Clock, text: "Users can schedule services at their preferred time, days or weeks in advance." },
                { title: "Verified Professionals", icon: ShieldCheck, text: "All service providers go through strict background checks. They are verified and trusted." },
                { title: "Live Tracking", icon: MapPin, text: "Users can track service progress and professional's location directly inside the app." },
                { title: "Secure Payments", icon: CreditCard, text: "Safe and transparent transactions with no hidden fees. Pay seamlessly via the app." },
                { title: "Mobile Optimized", icon: Smartphone, text: "A sleek, intuitive interface designed specifically to make booking a breeze on your phone." }
              ].map((feature, i) => (
                <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                  key={i}
                  className="group p-8 rounded-3xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-white/5 hover:border-indigo-500/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Service Categories */}
        <section id="services" className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert services at your fingertips</h2>
                <p className="text-slate-400 text-lg">Whatever you need, we have a qualified professional ready to help. Browse our most popular service categories.</p>
              </div>
              <a href="#download" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                View all services <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Home Cleaning", icon: Droplets, color: "from-blue-500 to-cyan-400" },
                { name: "Electrician", icon: Zap, color: "from-amber-400 to-orange-500" },
                { name: "Plumbing", icon: Wrench, color: "from-sky-400 to-blue-500" },
                { name: "AC Repair", icon: Thermometer, color: "from-teal-400 to-emerald-500" },
                { name: "Appliance", icon: ShieldCheck, color: "from-indigo-400 to-purple-500" },
                { name: "Car Wash", icon: Car, color: "from-rose-400 to-red-500" },
              ].map((category, i) => (
                <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1 } } }}
                  key={i}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-all hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-center">{category.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. How It Works */}
        <section id="how-it-works" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works</h2>
              <p className="text-slate-400 text-lg">Booking a trusted professional takes less than 2 minutes.</p>
            </div>

            <div className="relative">
              {/* Connection line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-cyan-400/20 to-indigo-500/20 -translate-y-1/2 z-0" />

              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "01", title: "Download App", text: "Get the Gigiman app from Play Store or App Store." },
                  { step: "02", title: "Choose Service", text: "Select what you need from our wide range of categories." },
                  { step: "03", title: "Book or Schedule", text: "Request instantly or pick a convenient time for later." },
                  { step: "04", title: "Job Completed", text: "A verified pro arrives, does the job, and you pay securely." }
                ].map((item, i) => (
                  <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } } }}
                    key={i}
                    className="relative bg-slate-900 md:bg-transparent rounded-2xl p-6 md:p-0 border border-white/5 md:border-none"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center shadow-xl mx-auto mb-6 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                      {item.step}
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-400">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. App Preview Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for you</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">A seamless app experience that makes booking as easy as texting a friend.</p>
          </div>

          <div className="flex gap-8 justify-center items-center overflow-x-hidden pt-10 pb-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 20 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="w-64 md:w-80 shrink-0 hidden md:block opacity-50 blur-[2px] scale-90"
            >
              <img src="/mockup.png" alt="App Preview Left" className="w-full rounded-[2rem] shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="w-72 md:w-96 shrink-0 z-10 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-indigo-600 rounded-[2.5rem] blur-xl opacity-30 animate-pulse" />
              <img src="/mockup.png" alt="App Preview Center" className="w-full relative rounded-[2.5rem] shadow-[0_20px_50px_rgba(79,70,229,0.3)] border-2 border-slate-800" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 20 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="w-64 md:w-80 shrink-0 hidden md:block opacity-50 blur-[2px] scale-90"
            >
              <img src="/mockup.png" alt="App Preview Right" className="w-full rounded-[2rem] shadow-2xl" />
            </motion.div>
          </div>
        </section>

        {/* 9. Download App Section */}
        <section id="download" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-600/10" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Start Booking Services with <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-shadow-sm">Gigiman Today</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Join thousands of users who have simplified their tasks. Download the free app and get your first service done effortlessly.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <DownloadCTA />

                {/* App store outline button alternative */}
                <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-slate-600 hover:border-slate-400 bg-slate-900/50 hover:bg-slate-800 transition-all text-white font-medium group">
                  <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <span>App Store</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src={logo} alt="Gigiman Logo" className="h-10 sm:h-12 w-auto object-contain" />
              </div>
              <p className="text-slate-400 max-w-sm mb-6">The trusted platforms connecting you with reliable service professionals. Book on-demand or schedule for later.</p>
              <a href="mailto:gigiman2310@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">gigiman2310@gmail.com</a>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How It works</a></li>
                <li><a href="#download" className="text-slate-400 hover:text-white transition-colors">Download App</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/pro-terms" className="text-slate-400 hover:text-white transition-colors">Professional Terms</Link></li>
                <li><Link to="/pro-privacy" className="text-slate-400 hover:text-white transition-colors">Professional Privacy</Link></li>
                <li><Link to="/refund-policy" className="text-slate-400 hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link to="/disclaimer" className="text-slate-400 hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Gigiman Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="https://www.instagram.com/gigiman_official?igsh=b2t0OTVkZncydGxh" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
