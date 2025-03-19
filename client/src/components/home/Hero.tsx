import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { socialIcons } from "@/lib/constants";

import mulher from "@/assets/images/mulherv5.png";

const Hero = () => {
  return (
    <section className="bg-background py-20 lg:pb-8 relative overflow-hidden">
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
              Mostramos o seu Negócio para o Mundo.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/80 mb-8 max-w-2xl"
            >
              Tenha tempo para focar onde tua empresa precisa de você! E ós cuidamos de mostrar a tua empresa para o mundo!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#about-us">
                <Button className="bg-white text-background hover:bg-gray-300 font-big rounded-full px-6 py-3 h-auto text-lg">
                  Conheça a AnyCo.
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <p className="text-white/70 mb-2">Siga nas Redes</p>
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
            className="lg:col-span-5 relative flex justify-end items-center h-full"
          >
            <div className="relative w-full overflow-hidden rounded-l-lg transform scale-110 h-auto lg:mr-[-50px]">
              <img
                src={mulher}
                alt="Digital Marketing Team"
                className="w-full h-auto object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
