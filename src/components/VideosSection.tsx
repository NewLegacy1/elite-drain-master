import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Featured videos from Jay's YouTube channel
const featuredVideos = [
  {
    id: "3qBF0mpdz9Q",
    title: "Professional Drain Clearing",
  },
  {
    id: "qI9quO0gwKA",
    title: "Expert Drain Service",
  },
  {
    id: "LG-cs4meJ9A",
    title: "Drain Repair Solutions",
  },
  {
    id: "ZmoiKBwATWs",
    title: "About Jay",
  },
];

const CHANNEL_URL = "https://www.youtube.com/c/jaythatdrainguy";

const VideosSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Watch Us Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            See <span className="text-gradient-electric">Real Jobs</span> In Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From our popular YouTube channel with thousands of subscribers. 
            Watch real drain clearing jobs and learn from 15+ years of experience.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Video Embed - 16:9 Aspect Ratio */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Video Title */}
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="gap-2 group hover:border-primary hover:bg-primary/10"
          >
            <a 
              href={CHANNEL_URL} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Youtube className="h-5 w-5 text-red-600" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands learning about professional drain clearing
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideosSection;
