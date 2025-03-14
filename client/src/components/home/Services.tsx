import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Service data
const services = [
  {
    icon: "/src/assets/icons/marketing_strategy.svg",
    title: "Estratégias de Marketing Digital",
    description: "Especializamos na criação de estratégias personalizadas de marketing digital para atingir seus objetivos de negócio."
  },
  {
    icon: "/src/assets/icons/process_automation.svg",
    title: "Gestão de Conteúdo Digital",
    description: "Gerenciamos seu conteúdo digital de forma eficiente e estratégica para maximizar o engajamento e conversões."
  },
  {
    icon: "/src/assets/icons/data_synchronization.svg",
    title: "Sincronização de Dados Digitais",
    description: "Integramos seus dados entre múltiplas plataformas para proporcionar uma visão unificada e insights valiosos."
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
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Serviços de Marketing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Coloque os remos na água e comece a remar. A execução é o maior fator de sucesso, quanto mais rápido você começar, mais rápido alcançará seus objetivos!
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
            Fornecemos ideias brilhantes & agência digital completa
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Imagine alcançar toda a força e sabedoria que você precisa para tomar a melhor decisão para seu negócio hoje.
          </p>
          <a href="/services" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-primary/90 transition-all duration-300">
            Ver Todos os Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
