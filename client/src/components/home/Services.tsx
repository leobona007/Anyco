import { motion } from "framer-motion";

// Service data
const services = [
  {
    icon: "/src/assets/icons/marketing_strategy.svg",
    title: "Digital Marketing Strategies",
    description: "We specialize in creating custom, responsive websites tailored to your business objectives."
  },
  {
    icon: "/src/assets/icons/process_automation.svg",
    title: "Digital Content Management",
    description: "We specialize in creating custom, responsive websites tailored to your business objectives."
  },
  {
    icon: "/src/assets/icons/data_synchronization.svg",
    title: "Digital Data Synchronization",
    description: "We specialize in creating custom, responsive websites tailored to your business objectives."
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 bg-background text-primary rounded-full text-sm font-medium mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Marketing Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get the oars in the water and start rowing. Execution is the single biggest factor in achievement, the quicker you will get to the goals!
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card bg-background p-8 rounded-lg border border-gray-800"
            >
              <div className="mb-6 text-primary w-16 h-16 flex items-center justify-center bg-secondary rounded-lg">
                <img src={service.icon} alt={service.title} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            We Provide brilliant ideas & the digital agency
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
