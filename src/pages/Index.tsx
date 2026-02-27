import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Shield, Award, FileCheck, Users, Eye } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import heroImage from "@/assets/hero-home.jpg";
import { useRef } from "react";

const credentials = [
  "IICRC Certified Firm",
  "Fully Licensed",
  "Fully Insured",
  "300+ Verified Reviews",
  "Est. 2003",
];

const stats = [
  { value: 300, suffix: "+", label: "Verified Five-Star Reviews" },
  { value: 20, suffix: "+", label: "Years of Proven Performance" },
  { value: 60, suffix: "–90", label: "Minute Emergency Response" },
  { value: 100, suffix: "%", label: "Environment Restoration Guarantee" },
];

const differentiators = [
  {
    icon: Users,
    title: "White-Glove Service for Every Client",
    desc: "Our teams are vetted, uniformed, and professional. We communicate clearly, protect your privacy, and ensure a seamless experience — no matter the size of your project.",
  },
  {
    icon: Shield,
    title: "Technical Expertise for Any Finish",
    desc: "We employ advanced, industry-leading techniques for soot, odor, and mold remediation that are safe for any surface — from antique hardwood to modern building materials. We restore and preserve the integrity of your space.",
  },
  {
    icon: FileCheck,
    title: "A Public Adjuster, Paid by Us",
    desc: "For clients navigating insurance claims, we provide a public adjuster — at our cost — who will negotiate on your behalf for the fullest and fairest settlement possible. They handle complex paperwork and communications with your insurer.",
  },
  {
    icon: Award,
    title: "Third-Party Certified Lab Report",
    desc: "We engage an independent, third-party certified laboratory to scientifically analyze post-remediation samples and validate that your indoor air quality meets stringent health standards. Your property is not just restored — it is scientifically safe.",
  },
  {
    icon: Eye,
    title: "As Discreet as You Want Us to Be",
    desc: "We value your privacy as much as we value your property. Options include unmarked vehicles, sealed records, paperless transactions, NDAs, and code names for high-profile clients. Your legacy stays secure.",
  },
];

const methodSteps = [
  { num: "01", title: "Assessment Protocol", desc: "Every project begins with a structured evaluation process to identify material type, contamination level, moisture conditions, and risk factors." },
  { num: "02", title: "Controlled Restoration Process", desc: "We apply IICRC-aligned procedures using calibrated equipment and controlled application methods to protect fibers, surfaces, and structural materials." },
  { num: "03", title: "Documentation & Verification", desc: "Moisture readings, inspection points, and post-service validation ensure measurable performance — not guesswork." },
  { num: "04", title: "Client Assurance Standard", desc: "Clear communication, defined scope, and satisfaction confirmation complete every service cycle." },
];

const testimonials = [
  { text: "Salem Steamer handled our water damage restoration with absolute professionalism. The results were flawless — you'd never know anything happened.", location: "McLean, VA", avatar: "https://i.pravatar.cc/60?img=1" },
  { text: "Their discretion and precision is unmatched. From assessment to final report, every step was communicated clearly and executed perfectly.", location: "Great Falls, VA", avatar: "https://i.pravatar.cc/60?img=5" },
  { text: "The public adjuster they provided saved us thousands on our insurance claim. Truly a white-glove experience from start to finish.", location: "Potomac, MD", avatar: "https://i.pravatar.cc/60?img=8" },
  { text: "Outstanding mold remediation work. The third-party lab report gave us complete peace of mind that our home was safe.", location: "Arlington, VA", avatar: "https://i.pravatar.cc/60?img=12" },
  { text: "From the first phone call to final walkthrough, the professionalism was extraordinary. Our carpets look brand new.", location: "Bethesda, MD", avatar: "https://i.pravatar.cc/60?img=15" },
  { text: "We needed discretion for our high-profile property and Salem Steamer delivered beyond expectations. Unmarked vehicles, sealed records — flawless.", location: "Washington, DC", avatar: "https://i.pravatar.cc/60?img=20" },
  { text: "Their emergency response time was incredible. Within 90 minutes they had a full team on-site managing our water damage situation.", location: "McLean, VA", avatar: "https://i.pravatar.cc/60?img=25" },
  { text: "The IICRC-certified process gave us confidence from day one. Every step was documented and verified. Truly elite service.", location: "Great Falls, VA", avatar: "https://i.pravatar.cc/60?img=33" },
];

const serviceAreas = ["McLean", "Great Falls", "Potomac", "Arlington", "Bethesda", "Washington DC"];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, y: heroY }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.70) 100%)" }} />
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-10 h-px bg-primary" />
            <span className="text-primary font-body font-medium uppercase" style={{ fontSize: "13px", letterSpacing: "0.25em" }}>
              Est. 2003 · McLean, Virginia
            </span>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-foreground leading-[1.1] text-balance"
            style={{ fontSize: "clamp(52px, 7vw, 88px)", textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
          >
            Elite Expertise for Every Property,{" "}
            <span className="italic font-light">From Historic Estates to Modern Condos.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-body max-w-[520px] mx-auto"
            style={{ fontSize: "18px", lineHeight: 1.7, color: "#C8C0B4", textShadow: "0 1px 20px rgba(0,0,0,0.6)" }}
          >
            Salem Steamer serves the McLean and Washington, DC metropolitan area. Every property. Every client. The highest standard of care.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-gold-filled">Request Consultation</Link>
            <Link to="/services" className="btn-gold">Our Services</Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={24} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      {/* Credentials Strip */}
      <section className="bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center items-center gap-6 md:gap-0 md:divide-x md:divide-primary/30">
          {credentials.map((c, i) => (
            <ScrollReveal key={c} delay={i * 0.1}>
              <div className="flex items-center gap-2 px-6 md:px-8">
                <span className="text-primary text-lg">✦</span>
                <span className="label-text text-foreground">{c}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Certified. Licensed. Proven. — CREAM */}
      <section className="section-padding bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Our Promise</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Certified. Licensed. Proven.</h2>
            <p className="text-muted-foreground text-lg mb-8">Industry-recognized standards. Two decades of documented performance.</p>
            <div className="gold-divider mx-auto mb-10" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[#C8C0B4] leading-[1.8] text-base md:text-lg mb-8">
              Salem Steamer operates under internationally recognized IICRC standards for restorative services and environmental remediation. We maintain full licensing and insurance compliance and adhere to defined operational systems developed since 2003. Our reputation is not marketing-driven — it is performance-driven, validated by over 300 verified client reviews and decades of field execution.
            </p>
            <p className="text-[#C8C0B4] leading-[1.8] text-base md:text-lg">
              Salem Steamer serves the McLean and Washington, DC metropolitan area and is built on a simple principle: every property and every client deserves the highest standard of care. Whether you own a historic home, single-family residence, condominium, or commercial property, we treat your space with the utmost regard. Using the latest restoration technology, we restore 100% of your environment, leaving zero visible traces we were ever there.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[#C8C0B4] leading-[1.8] text-base md:text-lg mt-8">
              We understand the trauma you are going through and will treat you and your family with the respect and concern you deserve. To make this difficult time easier, we provide two key advocates at no cost to you: a Public Adjuster to handle your insurance claim and a Third-Party Certified Lab to certify your environment is truly safe.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg mt-6 italic">
              When you choose Salem Steamer, our results are so seamless and complete that the only thing we leave behind is your peace of mind.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* By The Numbers — CREAM */}
      <section className="section-padding bg-[#161616]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">By The Numbers</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Performance, Not Promises.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-display text-5xl md:text-7xl text-primary font-light block mb-3">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </span>
                  <p className="text-muted-foreground text-sm font-body leading-snug">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart — DARK */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">Why Salem Steamer</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">What Sets Us Apart</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.1}>
                <div className="card-surface gold-border-top p-8 h-full card-hover group">
                  <d.icon size={28} className="text-foreground/50 mb-6" strokeWidth={1} />
                  <h3 className="font-heading text-xl text-foreground mb-4">{d.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Salem Steamer Method — STONE */}
      <section className="section-padding bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">Our Process</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-4">The Salem Steamer Method.</h2>
            <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">Defined Systems. Measurable Standards. Consistent Results.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodSteps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.15}>
                <div className="text-center md:text-left">
                  <span className="font-display text-6xl text-primary/40 font-light">{s.num}</span>
                  <h3 className="font-heading text-xl text-foreground mt-2 mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.5}>
            <p className="text-center text-muted-foreground text-sm mt-12 italic">
              Built on standardized operating procedures designed for consistent execution across every service location.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials — Auto-scrolling Carousel */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-primary fill-primary" />
              ))}
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">300+ Verified Five-Star Reviews</h2>
          </ScrollReveal>
          {/* Note for client: Replace review text with actual Google reviews before launch */}
          <div
            className="relative"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              className="flex gap-6 hover:[animation-play-state:paused]"
              style={{
                animation: "testimonial-scroll 80s linear infinite",
                width: "max-content",
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="card-surface p-8 flex-shrink-0 w-[340px] md:w-[380px]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.avatar}
                      alt="Verified client"
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-foreground text-sm font-heading">Verified Client</p>
                      <p className="label-text text-primary text-[10px]">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed italic">"{t.text}"</p>
                  <p className="label-text text-primary/60 mt-4 text-[10px]">— Verified Google Review</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Service Area</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10">Proudly Serving the Washington DC Metropolitan Area</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="border border-primary/40 text-foreground px-5 py-2 label-text hover:bg-primary/10 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — DARK */}
      <section className="section-padding text-center border-t border-primary/20">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            We Do More Than Protect Your Property.<br />We Protect Your Legacy.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Contact our team for a confidential consultation and experience the Salem Steamer standard.</p>
          <Link to="/contact" className="btn-gold-filled">
            Request Consultation
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Index;
