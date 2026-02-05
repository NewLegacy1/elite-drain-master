import { motion } from "framer-motion";
import workPhoto1 from "@/assets/work-photo-1.jpg";
import workPhoto2 from "@/assets/work-photo-2.jpg";
import workPhoto3 from "@/assets/work-photo-3.jpg";

const workPhotos = [
  { src: workPhoto1, label: "Main Line Repair" },
  { src: workPhoto2, label: "Blocked Kitchen Sink" },
  { src: workPhoto3, label: "Floor Drain Clearing" },
];

const WorkGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Real Work, Real Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">
            Problems We <span className="text-gradient-electric">Solve Daily</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {workPhotos.map((photo, index) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border border-border bg-card aspect-[4/3]">
                {/* Dark overlay for low quality images */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 z-10" />
                
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {photo.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted-foreground mt-8 text-sm max-w-lg mx-auto"
        >
          From clogged sinks to collapsed main lines—no drain problem is too tough. 
          These are real jobs we handle every day across Southern Ontario.
        </motion.p>
      </div>
    </section>
  );
};

export default WorkGallery;
