import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      // Show banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleManagePreferences = () => {
    // This would typically open a more detailed cookie preferences modal
    console.log("Cookie preferences management");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 w-full bg-secondary z-50 border-t border-border p-4"
        >
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              <p className="font-medium mb-1">Your privacy matters</p>
              <p>
                We use cookies to enhance your experience, analyse traffic, and serve personalised content. 'Accept Cookies' to consent per our{" "}
                <a href="#" className="text-primary hover:underline">
                  Cookie
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy
                </a>{" "}
                policies.
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={handleManagePreferences}
                className="border-muted-foreground/40 text-sm"
              >
                Manage preferences
              </Button>
              <Button 
                className="gradient-primary text-white text-sm"
                onClick={handleAccept}
              >
                Accept Cookies
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
