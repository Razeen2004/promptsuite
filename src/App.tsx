import { ArrowUpRight, Sparkles, Zap, Github, Twitter, Linkedin, Workflow, MessageCircle, Megaphone, Palette, Users, LayoutDashboard, Check, Minus } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import logoImg from './images/nav-logo.png';


export default function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitMessage("");
    emailjs
      .sendForm("service_bo5stuc", "template_52telyn", formRef.current, "DK9QM1xAfwhwKiHQW")
      .then(
        () => { setSubmitMessage("Message sent successfully."); setIsSubmitting(false); formRef.current?.reset(); },
        (error) => { setSubmitMessage("Error sending message. Please try again."); setIsSubmitting(false); console.error(error); }
      );
  };

  const navLinks = ["Home", "Services", "Pricing", "Portfolio", "Contact"];

  const services = [
    {
      title: "AI Automations (GHL & Beyond)",
      desc: "We build end-to-end automations inside GoHighLevel and other platforms — automated follow-ups, pipeline triggers, appointment booking, CRM tagging, and multi-step workflows that run 24/7 without lifting a finger. If it's repetitive, we automate it.",
      icon: <Workflow size={32} />
    },
    {
      title: "WhatsApp AI & Messaging",
      desc: "Deploy intelligent AI-powered WhatsApp bots that handle customer enquiries, send reminders, qualify leads, and nurture prospects — all through the channel your audience already uses every day. Instant replies. Zero manual effort.",
      icon: <MessageCircle size={32} />
    },
    {
      title: "Lead Capture & Nurturing",
      desc: "We engineer smart lead funnels that capture, qualify, and follow up with prospects automatically. From landing page forms to automated email and SMS sequences, every lead gets the right message at the right time — no one falls through the cracks.",
      icon: <Users size={32} />
    },
    {
      title: "Web & CRM Development",
      desc: "Custom-built websites and CRM systems designed around your business processes — not the other way around. We build in GHL, React, and other modern stacks, delivering fast, polished platforms your team actually enjoys using.",
      icon: <LayoutDashboard size={32} />
    },
    {
      title: "Social Media Marketing",
      desc: "Strategy-led social media management that builds audiences and drives real business results. We handle content planning, copywriting, scheduling, and performance tracking across Instagram, Facebook, LinkedIn, and TikTok.",
      icon: <Megaphone size={32} />
    },
    {
      title: "Graphics & Brand Design",
      desc: "Scroll-stopping visuals that make your brand impossible to ignore. From social media content and ad creatives to full brand identity kits, we design assets that look sharp, communicate clearly, and convert.",
      icon: <Palette size={32} />
    },
  ];

  const allFeatures = [
    "GHL Automations",
    "WhatsApp AI Bot",
    "Lead Capture Funnel",
    "Email & SMS Sequences",
    "Custom Website",
    "CRM Setup & Configuration",
    "Social Media Management",
    "Ad Creatives & Graphics",
    "Monthly Strategy Call",
    "Dedicated Account Manager",
    "Priority Support",
  ];

  const pricingTiers = [
    {
      name: "Launch",
      badge: null,
      oneTime: "$599",
      monthly: "$199",
      period: isMonthly ? "/mo" : "/project",
      desc: "For businesses ready to start automating and look professional online.",
      features: {
        "GHL Automations": true,
        "WhatsApp AI Bot": false,
        "Lead Capture Funnel": true,
        "Email & SMS Sequences": true,
        "Custom Website": true,
        "CRM Setup & Configuration": false,
        "Social Media Management": false,
        "Ad Creatives & Graphics": "3 designs/mo",
        "Monthly Strategy Call": false,
        "Dedicated Account Manager": false,
        "Priority Support": false,
      }
    },
    {
      name: "Scale",
      badge: "Most Popular",
      oneTime: "$1,499",
      monthly: "$499",
      period: isMonthly ? "/mo" : "/project",
      desc: "The full stack for businesses actively generating and converting leads.",
      features: {
        "GHL Automations": true,
        "WhatsApp AI Bot": true,
        "Lead Capture Funnel": true,
        "Email & SMS Sequences": true,
        "Custom Website": true,
        "CRM Setup & Configuration": true,
        "Social Media Management": "3 platforms",
        "Ad Creatives & Graphics": "10 designs/mo",
        "Monthly Strategy Call": true,
        "Dedicated Account Manager": false,
        "Priority Support": true,
      }
    },
    {
      name: "Dominate",
      badge: "Full Service",
      oneTime: "Custom",
      monthly: "Custom",
      period: "",
      desc: "Done-for-you everything. We become your growth team.",
      features: {
        "GHL Automations": true,
        "WhatsApp AI Bot": true,
        "Lead Capture Funnel": true,
        "Email & SMS Sequences": true,
        "Custom Website": true,
        "CRM Setup & Configuration": true,
        "Social Media Management": "All platforms",
        "Ad Creatives & Graphics": "Unlimited",
        "Monthly Strategy Call": true,
        "Dedicated Account Manager": true,
        "Priority Support": true,
      }
    },
  ];

  const portfolioItems = [
    {
      name: "Hargreaves Property Group",
      category: "GHL Automation + WhatsApp AI",
      year: "2025",
      result: "3× more booked inspections in 30 days",
      desc: "Built a full GHL pipeline with automated WhatsApp follow-ups for inbound property enquiries across their Sydney and Melbourne offices. Leads go from form fill to booked inspection without any human involvement.",
    },
    {
      name: "Peak Performance Coaching",
      category: "Lead Funnel + CRM",
      year: "2024",
      result: "68% lead-to-discovery call rate",
      desc: "Designed a multi-step lead capture funnel with GHL CRM integration for a Brisbane-based fitness coaching brand. Prospects receive an instant personalised email sequence, SMS nudge, and a calendar booking link — all automated.",
    },
    {
      name: "Lumière Skin & Aesthetics",
      category: "Web Dev + Branding + Social",
      year: "2025",
      result: "5,100 Instagram followers in 60 days",
      desc: "Rebuilt the clinic's website, created a full visual brand identity, and launched a content strategy across Instagram and TikTok for this Melbourne aesthetics clinic. Paired with monthly ad creatives and a consistent weekly posting schedule.",
    },
    {
      name: "Outback Gear Co.",
      category: "WhatsApp AI + Email Automation",
      year: "2024",
      result: "44% reduction in support tickets",
      desc: "Deployed an AI-powered WhatsApp assistant to handle order tracking, FAQs, and returns for this Australian outdoor e-commerce brand. Integrated directly with their Shopify store — human agents only step in for escalations.",
    },
    {
      name: "Meridian Freight Solutions",
      category: "CRM Development + Automations",
      year: "2025",
      result: "Saved 22 staff hours per week",
      desc: "Custom-built a GHL CRM to replace spreadsheet chaos across their Perth and Adelaide depots — automated job assignment, client invoicing reminders, and a driver check-in workflow. Entire ops runs on autopilot.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#111_0%,#000_100%)] pointer-events-none" />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-3 flex justify-between items-center max-w-[1400px] mx-auto w-full bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="PromptSuite Logo" width={60} />
          <h1 className="text-xl">PromptSuite</h1>
        </div>
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide transition-opacity hover:opacity-100 text-white ${link === "Home" ? "opacity-100" : "opacity-60"}`}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <div className="relative z-10">

        {/* HERO */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-8 max-w-[1400px] mx-auto relative overflow-hidden pt-30">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,#222,transparent_35%),linear-gradient(to_bottom,#000_00,#000_90)] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full items-start relative z-10">
            <div className="flex flex-col gap-10">
              <a href="#contact" className="flex items-center gap-4 group cursor-pointer w-fit">
                <span className="text-xl font-light tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">Work with us</span>
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </a>
              <h2 className="text-5xl md:text-7xl font-medium leading-[1.05] max-w-[600px] tracking-tight">
                We Build AI That Works While You Sleep.
              </h2>
            </div>
            <div className="flex flex-col lg:pl-20 text-white/90">
              <div className="mb-12">
                <h1 className="text-[10vw] lg:text-[10rem] font-medium leading-[0.8] tracking-[-0.05em] select-none opacity-90">
                  prompt<br />suite
                </h1>
              </div>
              <div className="flex flex-col gap-6 max-w-[420px]">
                <p className="text-sm leading-relaxed opacity-70 font-light">
                  PromptSuite is an AI-first digital agency. We design, build, and deploy intelligent systems — from autonomous agents and workflow automations to custom AI applications — that give businesses a real, measurable edge.
                </p>
                <p className="text-sm leading-relaxed opacity-70 font-light">
                  No buzzwords. No bloated retainers. Just AI that solves real problems, ships fast, and keeps working.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 py-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-14 border-t border-white/5 relative z-10">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">AI systems</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">shipped & running</span>
            </div>
            <div className="text-5xl md:text-6xl font-medium tracking-tighter">35+ Deployments</div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="min-h-screen py-32 px-8 max-w-[1400px] mx-auto">
          <div className="mb-24">
            <span className="text-xs uppercase tracking-[0.5em] opacity-40 mb-4 block">What We Build</span>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-tight">AI that runs<br />your business.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
            {services.map((service) => (
              <div key={service.title} className="bg-black p-12 flex flex-col gap-8 group hover:bg-white/5 transition-colors duration-300 min-h-[400px]">
                <div className="opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 origin-left">
                  {service.icon}
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-medium mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-sm opacity-60 font-light leading-relaxed max-w-[300px]">{service.desc}</p>
                </div>
                <div className="pt-8 border-t border-white/5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-center">
                  <span className="text-[10px] tracking-widest uppercase">Explore Service</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-32 px-8 max-w-[1400px] mx-auto">
          <div className="mb-16 flex flex-col items-end text-right">
            <span className="text-xs uppercase tracking-[0.5em] opacity-40 mb-4 block">What It Costs</span>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-tight italic">Simple, honest<br />pricing.</h2>
          </div>

          {/* Billing toggle */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <span className={`text-sm font-medium transition-opacity ${!isMonthly ? "opacity-100" : "opacity-40"}`}>One-time</span>
              <button
                onClick={() => setIsMonthly(!isMonthly)}
                className="relative w-12 h-6 rounded-full bg-white/20 transition-colors duration-300 focus:outline-none"
                aria-label="Toggle billing"
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${isMonthly ? "left-7" : "left-1"}`} />
              </button>
              <span className={`text-sm font-medium transition-opacity ${isMonthly ? "opacity-100" : "opacity-40"}`}>
                Monthly
                <span className="ml-2 text-[10px] uppercase tracking-wider bg-white text-black px-2 py-0.5 rounded-full">Retainer</span>
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pricingTiers.map((tier, i) => (
              <div key={tier.name}
                className={`relative flex flex-col border transition-all duration-300 ${i === 1
                  ? "border-white/40 shadow-[0_0_60px_rgba(255,255,255,0.07)] scale-[1.03]"
                  : "border-white/10 hover:border-white/25"
                } bg-black p-10`}
              >
                {tier.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full ${i === 1 ? "bg-white text-black" : "bg-white/10 text-white border border-white/20"}`}>
                    {tier.badge}
                  </div>
                )}
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-[0.3em] opacity-40 block mb-5">{tier.name}</span>
                  <div className="flex items-end gap-2 mb-3">
                    <span className="text-5xl font-medium tracking-tighter leading-none">
                      {isMonthly ? tier.monthly : tier.oneTime}
                    </span>
                    {tier.period && <span className="text-sm opacity-40 font-light mb-1">{tier.period}</span>}
                  </div>
                  {isMonthly && tier.monthly !== "Custom" && (
                    <p className="text-[11px] opacity-40 tracking-wide">billed monthly · cancel anytime</p>
                  )}
                </div>
                <p className="text-sm opacity-60 font-light leading-relaxed mb-8 min-h-[56px]">{tier.desc}</p>
                <ul className="flex flex-col gap-3 mb-10 border-t border-white/8 pt-8 flex-1">
                  {allFeatures.map((feat) => {
                    const val = tier.features[feat as keyof typeof tier.features];
                    const isString = typeof val === "string";
                    const isTrue = val === true;
                    return (
                      <li key={feat} className={`flex items-center justify-between gap-3 text-xs font-light tracking-wide ${!val ? "opacity-25" : "opacity-80"}`}>
                        <span>{feat}</span>
                        <span className="shrink-0">
                          {isString ? (
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full tracking-wide">{val}</span>
                          ) : isTrue ? (
                            <Check size={13} strokeWidth={2.5} className="text-white" />
                          ) : (
                            <Minus size={13} strokeWidth={1.5} className="opacity-30" />
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <a href="#contact"
                  className={`w-full py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 text-center mt-auto ${i === 1 ? "bg-white text-black hover:bg-white/90" : "bg-transparent border border-white/20 hover:bg-white hover:text-black"}`}
                >
                  {tier.monthly === "Custom" ? "Talk to Us" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs opacity-30 tracking-wide">All plans include a free discovery call. No contracts on one-time projects.</p>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-32 px-8 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-[600px]">
              <span className="text-xs uppercase tracking-[0.5em] opacity-40 mb-4 block">Our Work</span>
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-tight italic">Selected<br />Projects.</h2>
            </div>
            <p className="text-sm opacity-60 font-light max-w-[300px] leading-relaxed">
              Real clients. Real results. A look at the automations, platforms, and growth systems we've shipped.
            </p>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {portfolioItems.map((item, i) => (
              <div key={item.name}
                className="group border-b border-white/10 py-10 px-4 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-start hover:bg-white/[0.02] transition-all duration-300 cursor-pointer"
              >
                <span className="text-xs opacity-20 font-mono pt-1 hidden md:block">0{i + 1}</span>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">{item.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest opacity-40 border border-white/10 px-3 py-1 rounded-full">{item.category}</span>
                  </div>
                  <p className="text-sm opacity-50 font-light max-w-[560px] leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                  <span className="text-[10px] uppercase tracking-widest opacity-30 font-mono">{item.year}</span>
                  <span className="text-xs text-white/70 bg-white/8 border border-white/10 px-3 py-1 rounded-full font-light">↑ {item.result}</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-60 transition-opacity mt-1 self-end" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="min-h-screen py-10 px-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.5em] opacity-40 mb-8 block">Let's Talk</span>
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-tight mb-12">
                Ready to<br />automate<br /><span className="italic">everything?</span>
              </h2>
              <div className="flex flex-col gap-12 mt-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest opacity-30">Email Us</span>
                  <a href="mailto:contact@promptsuite.dev" className="text-lg md:text-2xl font-light hover:opacity-60 transition-opacity break-all">
                    contact@promptsuite.dev
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest opacity-30">Response Time</span>
                  <p className="text-2xl font-light opacity-80">Within 24 hours</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest opacity-30">What happens next</span>
                  <p className="text-sm opacity-60 font-light max-w-[300px] leading-relaxed">
                    We'll review your brief, scope the work, and get back to you with a clear plan and timeline — no fluff.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-12 lg:p-20 border border-white/5 relative group">
              <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4">
                <Sparkles size={120} strokeWidth={0.5} />
              </div>
              <form ref={formRef} className="flex flex-col gap-10 relative z-10" onSubmit={sendEmail}>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Your Name</label>
                  <input type="text" name="user_name" required placeholder="Full Name"
                    className="bg-transparent border-b border-white/20 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Email Address</label>
                  <input type="email" name="user_email" required placeholder="you@company.com"
                    className="bg-transparent border-b border-white/20 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">What Do You Need?</label>
                  <select name="service_required" className="bg-transparent border-b border-white/20 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors cursor-pointer appearance-none">
                    <option className="bg-black">AI Automations (GHL)</option>
                    <option className="bg-black">WhatsApp AI & Messaging</option>
                    <option className="bg-black">Lead Capture & Nurturing</option>
                    <option className="bg-black">Web / CRM Development</option>
                    <option className="bg-black">Social Media Marketing</option>
                    <option className="bg-black">Graphics & Brand Design</option>
                    <option className="bg-black">Not sure — let's talk</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Tell Us About Your Project</label>
                  <textarea name="message" required placeholder="What problem are you trying to solve? What does success look like?" rows={4}
                    className="bg-transparent border-b border-white/20 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors resize-none" />
                </div>
                <div className="flex flex-col items-center mt-10">
                  <button type="submit" disabled={isSubmitting}
                    className={`bg-white text-black py-6 px-12 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-500 w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
                    {isSubmitting ? "Sending..." : "Send Message"} <ArrowUpRight size={18} />
                  </button>
                  {submitMessage && (
                    <p className={`mt-4 text-sm ${submitMessage.includes("Error") ? "text-red-400" : "text-green-400"}`}>{submitMessage}</p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="mt-20 w-full pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs uppercase tracking-[0.2em] opacity-40">PromptSuite Agency</span>
              <span className="text-sm font-light italic">AI that works while you sleep.</span>
            </div>
            <div className="flex gap-8 opacity-40">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} className="hover:opacity-100 transition-opacity cursor-pointer" /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} className="hover:opacity-100 transition-opacity cursor-pointer" /></a>
              <a href="#" aria-label="GitHub"><Github size={18} className="hover:opacity-100 transition-opacity cursor-pointer" /></a>
            </div>
            <span className="text-[10px] uppercase tracking-widest opacity-20 text-center md:text-left mt-8 md:mt-0">© 2026 PromptSuite Agency. All Rights Reserved.</span>
          </footer>
        </section>
      </div>

      <div className="fixed bottom-12 right-12 text-white/50 z-0 hidden lg:block">
        <Zap size={48} strokeWidth={1} />
      </div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
    </div>
  );
}
