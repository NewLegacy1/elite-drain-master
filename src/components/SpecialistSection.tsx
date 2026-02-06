import { Award, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import jayPortrait from "@/assets/jay-portrait.png";

const SpecialistSection = () => {

  return (
    <section className="py-20 md:py-32 bg-charcoal-deep relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-industrial" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-6">
            Drain Technicians,
            <span className="block text-gradient-electric">Not Plumbers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            There's a critical difference. Plumbers do a little of everything. 
            We do one thing—<span className="text-foreground font-semibold">and we do it better than anyone.</span>
          </p>
        </motion.div>

        {/* Jay's Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bento-card flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 overflow-hidden" style={{ borderRadius: '0 0 24px 24px' }}>
              <img
                src={jayPortrait}
                alt="Jay - That Drain Guy"
                className="w-48 md:w-64 object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">
                Meet Jay
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With <span className="text-primary font-bold">19 years of hands-on experience</span>, Jay has dedicated his career exclusively to drain clearing. 
                Working with his son Logan and training the next generation of drain specialists.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-xl font-bold text-foreground">19</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-xl font-bold text-foreground">Local</div>
                  <div className="text-xs text-muted-foreground">Ontario</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-xl font-bold text-foreground">Family</div>
                  <div className="text-xs text-muted-foreground">Owned</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialistSection;
