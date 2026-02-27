import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-contact.jpg";
import { motion, AnimatePresence } from "framer-motion";

const serviceTypes = [
  "Water Damage Restoration",
  "Mold Testing & Remediation",
  "Carpet & Upholstery Restoration",
  "Air Duct & Vent Care",
  "Fire / Smoke Damage",
  "Discretion Premium Inquiry",
  "Other / Not Sure",
];

const urgencyOptions = [
  "Emergency (Call me immediately)",
  "Within 24 Hours",
  "Within 3 Days",
  "Just researching / Planning ahead",
];

const hearAboutOptions = [
  "Google Search",
  "Referral / Word of Mouth",
  "Yelp / Review Site",
  "Social Media",
  "Previous Client",
  "Other",
];

const faqs = [
  { q: "How fast can you get to my property in McLean?", a: "We maintain a rapid response team specifically for the McLean and Great Falls areas. For water emergencies, we aim to be on-site within 60–90 minutes of your call." },
  { q: "Do you serve condos and townhomes, or only single-family homes?", a: "We serve all property types — from historic estates and single-family homes to high-rise condos and commercial buildings." },
  { q: "Will my neighbors know you were here?", a: "Not unless you want them to. Our standard fleet is discreet, and we offer a Discretion Premium for clients requiring absolute privacy." },
  { q: "Do you handle insurance claims directly?", a: "Yes. We provide a public adjuster — at our cost — who will negotiate with your insurance company on your behalf." },
  { q: "What is a Third-Party Certified Lab Report?", a: "An independent, certified laboratory analyzes post-remediation samples and provides a scientific report validating that your indoor air quality meets stringent health standards." },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      <PageHero
        image={heroImage}
        label="Contact"
        title="Reach the Team That Protects Your Legacy."
        subtitle="Immediate response. Discreet service. Certified results."
      />

      {/* Contact Info — CREAM */}
      <section className="section-padding bg-[#111111]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MapPin, label: "Service Area", text: "McLean, Great Falls, Potomac, Arlington, Bethesda, Washington DC" },
            { icon: Phone, label: "Emergency Line", text: "(571) 344-3837 — Available 24/7" },
            { icon: Mail, label: "Email", text: "hello@salemsteamer.com" },
            { icon: Clock, label: "Office Hours", text: "Mon–Fri 8:00 AM–6:00 PM\nEmergency: 24/7/365" },
          ].map((item) => (
            <ScrollReveal key={item.label}>
              <div className="text-center">
                <item.icon size={24} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
                <p className="label-text text-primary mb-2">{item.label}</p>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact Form — DARK */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl text-foreground mb-4">Request a Consultation</h2>
            <p className="text-muted-foreground mb-10">
              Fill out the form below, and a member of our team will respond within one business hour during regular hours. For immediate emergencies, please call our 24/7 line.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input placeholder="First Name" className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                <input placeholder="Last Name" className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
              </div>
              <input placeholder="Property Address" className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input placeholder="Phone Number" className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                <input placeholder="Email Address" type="email" className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
              </div>

              <select className="w-full bg-card border border-border px-4 py-3 text-muted-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                <option value="">Type of Service Needed</option>
                {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <div>
                <p className="label-text text-foreground mb-3">How Urgent is This?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {urgencyOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="urgency" className="accent-primary" />
                      <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea placeholder="Message / Details" rows={5} className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none min-h-[120px]" />

              <select className="w-full bg-card border border-border px-4 py-3 text-muted-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                <option value="">How Did You Hear About Us?</option>
                {hearAboutOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <button type="submit" className="w-full btn-gold-filled py-4 text-center">
                Request Callback
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ — STONE */}
      <section className="section-padding bg-[#161616]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">FAQ</p>
            <h2 className="font-display text-4xl text-foreground text-center mb-12">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border border-border bg-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1C1C1C] transition-colors"
                  >
                    <span className="text-foreground font-heading text-lg pr-4">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-primary shrink-0 transition-transform duration-500 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section-padding bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="label-text text-primary mb-4 text-center">Service Area</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">Proudly Serving the Washington DC Metropolitan Area</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-full h-[450px] border border-border overflow-hidden">
              <iframe
                title="Salem Steamer Service Area — McLean, VA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.22891414482!2d-77.23746813!3d38.9338676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64ab55cbe37c5%3A0xf7e1e30daff6ee64!2sMcLean%2C%20VA%2022102!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["McLean", "Great Falls", "Potomac", "Arlington", "Bethesda", "Washington DC"].map((city) => (
                <span
                  key={city}
                  className="border border-primary/40 text-primary px-5 py-2 label-text bg-[#1A1A1A] hover:bg-primary/10 transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Sign-Off — DARK */}
      <section className="section-padding text-center bg-background">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Backed by 300+ Verified Five-Star Reviews.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See why McLean homeowners trust Salem Steamer with their most valuable properties.
          </p>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Contact;
