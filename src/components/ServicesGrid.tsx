import { Home, Building2, Shovel, Bath, Droplets, PipetteIcon, CircleDot, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  accent?: boolean;
  large?: boolean;
}

const ServiceCard = ({ icon: Icon, title, items, accent = false, large = false }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`bento-card ${large ? 'md:col-span-2' : ''} ${accent ? 'border-primary/30 bg-gradient-to-br from-card to-primary/5' : ''}`}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accent ? 'bg-primary/20' : 'bg-secondary'}`}>
      <Icon className={`w-6 h-6 ${accent ? 'text-primary' : 'text-muted-foreground'}`} />
    </div>
    <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-foreground">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-muted-foreground">
          <CircleDot className="w-3 h-3 text-primary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServicesGrid = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Drains",
      items: ["Toilets & Urinals", "Bathtubs & Showers", "Kitchen Sinks", "Bathroom Sinks", "Laundry Drains"],
      accent: true,
      large: false
    },
    {
      icon: Building2,
      title: "Main Lines & Stacks",
      items: ["Floor Drains", "Main Sewer Stacks", "Building Traps", "Catch Basins", "Commercial Lines"],
      accent: false,
      large: false
    },
    {
      icon: Shovel,
      title: "Excavation & Repair",
      items: ["Broken Drain Lines", "Collapsed Pipes", "Root Damage Repair", "Drain Line Replacement", "Trenchless Options"],
      accent: false,
      large: false
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-6">
            What We <span className="text-gradient-electric">Clear</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential clogs to commercial main lines, if it drains—we clear it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
