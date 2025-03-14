import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { clientLogos } from "@/lib/constants";

const ClientLogos = () => {
  // Create two sets of logos for infinite loop effect
  const logos = [...clientLogos, ...clientLogos];
  
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
            Trusted by 50+ top companies
          </h2>
        </motion.div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex space-x-12 items-center client-logo-slider">
              {logos.map((logo, index) => (
                <div key={`logo-${index}`} className="mx-8">
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
