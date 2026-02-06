import { XCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ScopeSection = () => {
  const dontDo = [
    "Water heater installation or repair",
    "Pressure water pipe work",
    "Fixture installations (faucets, toilets)",
    "Bathroom or kitchen renovations",
    "General plumbing maintenance"
  ];

  const doDo = [
    "All residential drain clearing",
    "Commercial & industrial drains",
    "Main line & sewer clearing",
    "Drain camera inspections",
    "Excavation & drain repair"
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-6">
            Our <span className="text-gradient-electric">Focus</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialization means knowing exactly what we're great at—and being upfront about what we don't do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* What We Don't Do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bento-card border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-bold text-muted-foreground">
                What We Don't Do
              </h3>
            </div>
            <ul className="space-y-3">
              {dontDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground/70 italic">
              Need a plumber? We're happy to recommend trusted local professionals.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card border-primary/30 bg-gradient-to-br from-card to-primary/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                What We Master
              </h3>
            </div>
            <ul className="space-y-3">
              {doDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-primary font-medium">
              If it drains, we clear it. Guaranteed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;
