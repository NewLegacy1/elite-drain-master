import { Phone, MessageCircle, MapPin, Youtube, Facebook, Instagram } from "lucide-react";

const PHONE_NUMBER = "289-242-4876";
const PHONE_TEL = "tel:+12892424876";
const SMS_LINK = "sms:+12892424876";
const EMAIL = "Jay.thatdrainguy@gmail.com";
const ADDRESS = "5216 Dickenson Rd E, Hannon, ON L0R 1P0";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-charcoal-deep border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="font-display text-xl font-bold text-foreground mb-2">
              Jay That Drain Guy
            </div>
            <div className="text-sm text-muted-foreground mb-3">
              ★★★★★ 5.0 Rating (96+ Reviews)
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{ADDRESS}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 items-center">
              <a 
                href={PHONE_TEL}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm w-fit"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground">{PHONE_NUMBER}</span>
              </a>
              <a 
                href={SMS_LINK}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm w-fit"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-foreground">Text Jay</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Available 24/7</p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3 justify-center md:justify-end">
              <a 
                href="https://www.youtube.com/@Jaythatdrainguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/30 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063960034982" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/jaythatdrainguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">27.4K+ YouTube Subscribers</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {currentYear} Jay That Drain Guy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Serving Hamilton, Burlington, Toronto & GTA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
