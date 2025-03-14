import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { socialIcons } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="bg-background py-20 lg:py-32 relative overflow-hidden">
      {/* Green gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-70"></div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              A digital marketing company you can trust
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/80 mb-8 max-w-2xl"
            >
              I truly believe Augustine's words are true and if you look at history you know it is true. There are many people in the world dolore magna aliqua.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/about-us">
                <Button className="bg-white text-background hover:bg-gray-100 font-medium rounded-full px-6 py-6 h-auto">
                  Let's Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+11234567890" className="flex items-center text-white hover:text-gray-200 transition">
                <span className="bg-white/20 rounded-full p-3 mr-3">
                  <Phone className="h-5 w-5 text-white" />
                </span>
                <span className="font-medium">+1 (123) 456 7890</span>
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <p className="text-white/70 mb-2">Follow Us</p>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={social.name}
                      href={social.url} 
                      className="text-white hover:text-primary transition w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Digital Marketing Team" 
              className="rounded-lg shadow-2xl w-full relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
