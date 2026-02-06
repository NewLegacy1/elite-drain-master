import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_TEL = "tel:+12892424876";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md p-3 md:hidden">
      <div className="flex justify-center max-w-lg mx-auto">
        <Button 
          asChild 
          variant="emergency" 
          size="lg" 
          className="gap-2 w-full max-w-sm"
        >
          <a href={PHONE_TEL}>
            <Phone className="h-5 w-5" />
            <span>Emergency Call</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
