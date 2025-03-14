import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface StatisticProps {
  label: string;
  value: number;
  suffix: string;
  duration?: number;
}

const Statistic = ({ label, value, suffix, duration = 2000 }: StatisticProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const totalDuration = duration;
    const incrementTime = totalDuration / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);
  
  return (
    <div ref={ref}>
      <h3 className="text-lg text-white/70 mb-2">{label}</h3>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-white">{count}</span>
        <span className="text-primary text-2xl font-bold ml-1">{suffix}</span>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const stats = [
    { label: "Business", value: 29, suffix: "+" },
    { label: "Peoples", value: 12, suffix: "%" },
    { label: "Customer Satisfaction", value: 98, suffix: "%" },
    { label: "Projects", value: 250, suffix: "+" }
  ];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4 inline-block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your experience is everything to us
            </h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Link href="/about-us">
              <Button className="gradient-primary text-white font-medium rounded-full px-6 py-6 h-auto">
                Let's Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.slice(0, 2).map((stat, index) => (
                <Statistic 
                  key={index}
                  label={stat.label} 
                  value={stat.value} 
                  suffix={stat.suffix} 
                />
              ))}
              {stats.slice(2, 4).map((stat, index) => (
                <Statistic 
                  key={index + 2}
                  label={stat.label} 
                  value={stat.value} 
                  suffix={stat.suffix} 
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="About Us" 
              className="rounded-lg w-full shadow-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 p-3 bg-primary rounded-lg shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80" 
                alt="Team Collaboration" 
                className="w-48 h-32 object-cover rounded"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
