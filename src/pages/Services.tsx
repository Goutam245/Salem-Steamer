import { Link } from "react-router-dom";
import { Droplets, Sofa, Layers, Wind, Sparkles, FlaskConical } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-services.jpg";
import serviceWater from "@/assets/service-water.jpg";
import serviceCarpet from "@/assets/service-carpet.jpg";
import serviceMold from "@/assets/service-mold.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import serviceTile from "@/assets/service-tile.jpg";
import serviceOdor from "@/assets/service-odor.jpg";

const protocolSteps = [
  { title: "Precision Assessment", desc: "Utilizing advanced moisture meters and thermal imaging to map all affected areas, ensuring no hidden moisture is overlooked." },
  { title: "Surgical Demolition", desc: "We remove only compromised drywall and insulation, preserving structural integrity and minimizing repair costs." },
  { title: "Strategic Drying", desc: "We engineer a targeted drying system using industrial-grade air movers and dehumidifiers to reduce moisture levels to industry-approved targets." },
  { title: "Validation & Verification", desc: "Through continuous daily monitoring and documentation, we ensure complete drying is achieved. We then engage independent, certified hygienists to provide third-party verification." },
];

const services = [
  {
    icon: Sofa,
    title: "Carpet & Upholstery Restoration",
    desc: "Deep restorative care for fine Orientals, natural fabrics, and synthetic fibers using temperature-controlled extraction and pH-balanced solutions.",
    features: ["pH-balanced, fiber-specific treatment", "Temperature-controlled extraction", "Post-restoration fiber grooming"],
    duration: "2–4 hours",
    image: serviceCarpet,
  },
  {
    icon: Layers,
    title: "Hard Surface & Tile Renewal",
    desc: "Professional restoration for stone, marble, tile, and grout — returning surfaces to their original condition with minimal disruption.",
    features: ["Grout restoration & sealing", "Stone & marble surface renewal", "Slip-resistance verification"],
    duration: "3–6 hours",
    image: serviceTile,
  },
  {
    icon: Wind,
    title: "Air Duct & Dryer Vent Care",
    desc: "Improving indoor air quality and HVAC system efficiency through thorough duct remediation and dryer vent maintenance.",
    features: ["Full HVAC duct remediation", "Dryer vent lint removal", "Post-service air quality check"],
    duration: "2–4 hours",
    image: serviceHvac,
  },
  {
    icon: Sparkles,
    title: "Odor Neutralization",
    desc: "Permanent removal of smoke, pet, and microbial odors using advanced ozone and hydroxyl treatment protocols.",
    features: ["Ozone & hydroxyl treatment", "Source identification & removal", "Post-treatment air verification"],
    duration: "4–8 hours",
    image: serviceOdor,
  },
  {
    icon: FlaskConical,
    title: "Mold Testing & Remediation",
    desc: "Comprehensive identification and safe removal of mold contamination with independent third-party lab verification of results.",
    features: ["Air & surface sampling", "Containment & HEPA filtration", "Third-party lab certification"],
    duration: "1–5 days",
    image: serviceMold,
  },
];

const Services = () => (
  <main>
    <PageHero
      image={heroImage}
      label="Our Services"
      title="Our Services"
      subtitle="Premium restoration, remediation, and environmental care for discerning property owners."
    />

    {/* Intro — CREAM */}
    <section className="section-padding bg-[#111111]">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-[#C8C0B4] text-lg leading-[1.8]">
            Every service Salem Steamer provides is governed by IICRC-certified standards, structured protocols, and a commitment to complete environmental restoration. We do not offer quick fixes. We deliver verified, documented results.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Primary Service — Water Damage — DARK */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative overflow-hidden border border-border gold-border-top">
            {/* Hero image for water damage */}
            <div className="card-image-wrapper h-64 md:h-80">
              <img
                src={serviceWater}
                alt="Professional water damage restoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-12 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <Droplets size={32} className="text-foreground/50" strokeWidth={1} />
                <p className="label-text text-primary">Primary Service</p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Restoration & Mitigation</h2>
              <p className="text-muted-foreground leading-[1.8] mb-10 max-w-3xl">
                Our water damage mitigation process blends cutting-edge technology with strict IICRC S500 standards to ensure not just dryness, but truly restored environmental health. We understand the trauma you are going through and will treat you and your family with the respect and concern you deserve.
              </p>

              <p className="label-text text-primary mb-6">Our Science-Driven Protocol</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {protocolSteps.map((s, i) => (
                  <div key={s.title} className="flex gap-4">
                    <span className="font-display text-3xl text-primary/30 font-light shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="font-heading text-lg text-foreground mb-2">{s.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Additional Services Grid — WARM WHITE */}
    <section className="section-padding bg-[#161616]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-primary mb-4 text-center">Additional Services</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Comprehensive Care</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="bg-card border border-border gold-border-top h-full group card-hover overflow-hidden">
                {s.image && (
                  <div className="card-image-wrapper h-[220px] relative rounded-t-lg overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.5)]" />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <s.icon size={24} className="text-foreground/50" strokeWidth={1} />
                    <span className="label-text text-primary/60">{s.duration}</span>
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-0.5">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-primary label-text hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — DARK */}
    <section className="section-padding text-center bg-background border-t border-primary/20">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Ready to Restore Your Property?</h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Contact us for a confidential assessment. Emergency response available 24/7.</p>
        <Link to="/contact" className="btn-gold-filled">
          Request Consultation
        </Link>
      </ScrollReveal>
    </section>
  </main>
);

export default Services;
