import { Link } from "react-router-dom";
import { Lock, EyeOff, FileKey, Shield, Vault } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-discretion.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: FileKey,
    title: "No Paper Trail, No Gossip",
    desc: "No online or paper receipts left where others might see them, and no visible evidence of mold or water damage. All documentation is delivered to you under the same privacy protocols as attorney-client privilege.",
  },
  {
    icon: EyeOff,
    title: "No \"Neighborhood Watch\"",
    desc: "Nothing for your neighbors to see that might signal anything is amiss. Our Phantom Fleet® uses small magnetic monogram logos that are removed before arrival. Our Stealth Uniforms® feature tiny 5mm logos, and teams are prohibited from taking photos on the job site.",
  },
  {
    icon: Lock,
    title: "For Your Eyes Only",
    desc: "No concern about tenants or guests discovering a past remediation. Third-party reports are sealed in tamper-proof cases for your records only. We offer encrypted, password-protected reports with self-destructing links.",
  },
  {
    icon: Shield,
    title: "Your Home's History Remains Yours Alone",
    desc: "Our discretion premium is not simply a luxury. It assures that your home's history remains private and secures your legacy for future generations.",
  },
  {
    icon: Vault,
    title: "What Happens in Your Home Stays in Our Vault",
    desc: "Your status will never be impacted by a tabloid headline or social media post. We use NDAs for specialist third-party teams and code names for high-profile clients.",
  },
];

const Discretion = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, y: heroY }}
        />
        <div className="absolute inset-0 bg-[hsl(0_0%_5%/0.80)]" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="label-text text-primary mb-6"
          >
            Discretion Premium
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-primary leading-[1.1]"
          >
            Remediation & Restoration So Discreet, It's Like We're Invisible.
          </motion.h1>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-8">
              "Salem Steamer can operate with the discretion of a private trust. No branded vehicles, no intrusive signage. Our teams wear neutral attire, and our certified results are delivered so seamlessly, even your household staff won't detect we intervened."
            </blockquote>
            <p className="label-text text-primary">— Ahmed Salem, Founder and President</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className={`flex flex-col md:flex-row gap-8 items-start py-12 ${i < features.length - 1 ? "border-b border-border" : ""}`}>
                <div className={`md:w-1/2 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <f.icon size={32} className="text-foreground/50 mb-4" strokeWidth={1} />
                  <h3 className="font-heading text-2xl text-foreground mb-4">{f.title}</h3>
                </div>
                <div className={`md:w-1/2 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="text-muted-foreground leading-[1.8]">{f.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Restore Inner Peace */}
      <section className="section-padding bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Restore Your Inner Peace</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8">
              Your home is your sanctuary. Reminders of damage, no matter how small, can disrupt the bliss of your surroundings. We'll restore 100% of your environment, leaving zero visible traces we were there. The only thing we leave behind is your peace of mind.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Callout */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="border-2 border-primary p-10 text-center bg-card">
              <p className="label-text text-primary text-base tracking-[0.3em] mb-4">Ask About Our Discretion Premium</p>
              <p className="text-muted-foreground">We value your privacy as much as we value your property.</p>
              <Link to="/contact" className="mt-8 btn-gold-filled inline-block">
                Request Confidential Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding bg-secondary text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="label-text text-primary tracking-[0.3em] text-base md:text-lg leading-relaxed">
              At Salem Steamer, We Do More Than Protect Your Property.
            </p>
            <p className="label-text text-foreground tracking-[0.3em] text-lg md:text-xl mt-4">
              We Protect Your Legacy.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Discretion;
