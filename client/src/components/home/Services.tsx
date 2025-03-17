import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Service data
const services = [
  {
    icon: "/src/assets/icons/marketing_strategy.svg",
    title: "Criação de WebPages e WebAPP",
    description: " Desenvolvemos o espaço ou a ferramenta que seu negocio precisa para estar mais presente no mundo digital!."
  },
  {
    icon: "/src/assets/icons/process_automation.svg",
    title: "Trafego Pago",
    description: "Criamos e gerenciamos suas campanhas dentro do cenário digital de forma eficiente e estratégica para maximizar o engajamento e conversões."
  },
  {
    icon: "/src/assets/icons/data_synchronization.svg",
    title: "Implementação de Agentes De IA",
    description: "Não paguem impostos, não pague direitos, não tenha falta, nem vale refeição, agentes de ia o futuro te espera."
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
            Seja visto no Digital
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
           Aqui você encontrará um time preparado para fortalecer o seu negocio! 
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
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
              }}
              transition={{ duration: 0.3 }}
              className="service-card bg-background p-8 rounded-lg border border-gray-800 hover:border-primary/30 group cursor-pointer"
            >
              <div className="mb-6 text-primary w-16 h-16 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                <img src={service.icon} alt={service.title} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <a 
                href={`/services/${index + 1}`} 
                className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-primary transition-colors duration-300 group-hover:text-primary"
              >
              </a>
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
            Não espere Resultados diferentes fazendo a Mesma coisa!
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-0">
            Imagine alcançar toda a força e sabedoria que você precisa para tomar a melhor decisão para seu negócio hoje.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
