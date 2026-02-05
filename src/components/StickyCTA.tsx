import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "289-242-4876";
const PHONE_TEL = "tel:+12892424876";
const SMS_LINK = "sms:+12892424876";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md p-3 md:hidden">
      <div className="flex gap-2 max-w-lg mx-auto">
        <Button 
          asChild 
          variant="emergency" 
          size="lg" 
          className="flex-1 gap-2"
        >
          <a href={PHONE_TEL}>
            <Phone className="h-5 w-5" />
            <span>Emergency Call</span>
          </a>
        </Button>
        <Button 
          asChild 
          variant="steel" 
          size="lg" 
          className="gap-2"
        >
          <a href={SMS_LINK}>
            <MessageCircle className="h-5 w-5" />
            <span>Text</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
