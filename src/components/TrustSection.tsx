import { Award, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const TrustSection = () => {
  return (
    <section className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-6">
              15 Years of
              <span className="block text-gradient-electric">Snaking Ontario</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm Jay—a drain technician, not a plumber. For over 15 years, I've dedicated my career 
              exclusively to clearing and repairing drains across Southern Ontario. I'm a local 
              family man who built this business on reliability, expertise, and straight talk.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              When you call, you get me—not a call center. When I show up, you get real solutions—not 
              upselling. This is what specialization looks like.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">Local</div>
                <div className="text-sm text-muted-foreground">Ontario</div>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">Family</div>
                <div className="text-sm text-muted-foreground">Owned</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bento-card p-8 md:p-10 border-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <blockquote className="relative z-10">
                <div className="text-6xl text-primary/30 font-serif leading-none mb-4">"</div>
                <p className="text-xl md:text-2xl font-display text-foreground mb-6 leading-relaxed">
                  Your drain emergency is my priority. I treat every call like it's my own home—because that's 
                  the only way to do this right.
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-electric flex items-center justify-center text-primary-foreground font-bold text-lg">
                    J
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">Jay</div>
                    <div className="text-sm text-muted-foreground">That Drain Guy</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
