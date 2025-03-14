import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { clientLogos } from "@/lib/constants";
import tailwindImage from "@/assets/images/tailwind.png";
import "./ClientLogos.css";

const ClientLogos = () => {
  // Create two sets of logos for infinite loop effect
  const logos = [...clientLogos, ...clientLogos];
  
  // Calculate the total width needed for animation
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(30); // Default duration in seconds
  
  useEffect(() => {
    // Adjust animation speed based on the number of logos
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth / 2; // Divide by 2 since we duplicated the logos
      // Adjust speed based on width (more logos = slower animation)
      setAnimationDuration(containerWidth / 30); // Adjusted divisor for better speed
    }
  }, []);
  
  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Desenvolvimento Multi-Plataforma
          </h2>
        </motion.div>
        
        <div className="relative logo-carousel-container">
          <div className="overflow-hidden">
            <div 
              ref={containerRef}
              className="logos-slide"
              style={{ 
                animationDuration: `${animationDuration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationName: "slide",
                display: "flex",
                width: "fit-content"
              }}
            >
              {logos.map((logo, index) => (
                <div key={`logo-${index}`} className="mx-8 logo-item">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
