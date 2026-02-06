import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "289-242-4876";
const PHONE_TEL = "tel:+12892424876";
const SMS_LINK = "sms:+12892424876";

const DesktopCTA = () => {
  return (
    <div className="hidden md:flex fixed top-4 right-4 z-50 gap-3">
      <Button 
        asChild 
        variant="steel" 
        size="default" 
        className="gap-2 shadow-lg"
      >
        <a href={SMS_LINK}>
          <MessageCircle className="h-4 w-4" />
          <span>Text Jay</span>
        </a>
      </Button>
      <Button 
        asChild 
        variant="emergency" 
        size="default" 
        className="gap-2"
      >
        <a href={PHONE_TEL}>
          <Phone className="h-4 w-4" />
          <span>{PHONE_NUMBER}</span>
        </a>
      </Button>
    </div>
  );
};

export default DesktopCTA;
