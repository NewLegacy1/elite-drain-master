import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-equipment.jpg";

const PHONE_TEL = "tel:+12892424876";
const SMS_LINK = "sms:+12892424876";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Start video at 1:36 (96 seconds)
      video.currentTime = 96;
      
      // Loop between 1:36 and 2:36
      const handleTimeUpdate = () => {
        if (video.currentTime >= 156) { // 2:36 in seconds
          video.currentTime = 96; // Reset to 1:36
        }
      };
      
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-50"
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 96;
              videoRef.current.play();
            }
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-charcoal opacity-70" />
        <div className="absolute inset-0 bg-hero-glow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pattern-grid opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-4 md:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">Available 24/7 for Emergencies</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 text-foreground">
            Southern Ontario's
            <span className="block text-gradient-electric">Elite Drain Specialists</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            19 years of specialized drain clearing. 
            <span className="text-foreground font-medium"> We don't fix pipes; we master drains.</span>
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-16"
          >
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto gap-3">
              <a href={PHONE_TEL}>
                <Phone className="h-5 w-5" />
                <span>Emergency Call Now</span>
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="w-full sm:w-auto gap-3">
              <a href={SMS_LINK}>
                <MessageCircle className="h-5 w-5" />
                <span>Text Jay Directly</span>
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground mt-8 md:mt-0"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-2xl">5.0★</span>
              <span>(96 Reviews)</span>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-2xl">19</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-2xl">24/7</span>
              <span>Emergency Service</span>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-2xl">100%</span>
              <span>Drain Focused</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 md:mt-24"
        >
          <a 
            href="#services" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Explore Services</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
