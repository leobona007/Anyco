import { useState, ReactNode, isValidElement, cloneElement } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowThroughHeart } from "react-icons/bs";
import { IconContext } from "react-icons";
// Import das imagens
import brandIcon1 from "@/assets/icons/brand-icon_1.svg";
import brandIcon2 from "@/assets/icons/brand-icon_2.svg";
import brandIcon3 from "@/assets/icons/brand-icon_3.svg";

// Award category icons
const awardCategories = [
  { icon: "/src/assets/icons/image.png", title: "Web Design" },
];

// Award data
const awards = [
  {
    id: "tab1",
    title: "1-Presença",
    description: "Criação de Paginas na Web e redes socias que solidificam a presença digital.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    icons: [
      { icon: brandIcon1, title: "Web Design" },
      { icon: <BsArrowThroughHeart />, title: "Design UI/UX" },
      { icon: brandIcon3, title: "Desenvolvimento" }
    ]
  },
  {
    id: "tab2",
    title: "2-Visibilidade",
    description: "Uso de Ferramentas de impulsionamentos para que possamos estar cada vez mais visivel para o seu publico alvo.",
    image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    , icons: [{ icon: "brandIcon1", title: "Web Design" },
    { icon: brandIcon2, title: "Design UI/UX" },
    { icon: brandIcon3, title: "Desenvolvimento" }]
  },
  {
    id: "tab3",
    title: "3-Conversão",
    description: "Estratégia de funil de vendas com objetivo de maximar conversões desde o primeiro contato com o cliente.",
    image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",icons: [{ icon: "brandIcon1", title: "Web Design" },
      { icon: brandIcon2, title: "Design UI/UX" },
      { icon: brandIcon3, title: "Desenvolvimento" }]
    }, {
    id: "tab4",
    title: "4-Resultado",
    description: "Consequencia das ações inciativas realizadas é o crescimento da sua empresa!",
    image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",icons: [{ icon: "brandIcon1", title: "Web Design" },
      { icon: brandIcon2, title: "Design UI/UX" },
      { icon: brandIcon3, title: "Desenvolvimento" }]
  }

];

interface AwardCategoryProps {
  icon: string | ReactNode;
  title: string;
}

const AwardCategory = ({ icon, title }: AwardCategoryProps) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={title}
            className="w-8 h-8 object-contain"
          />
        ) : (
          <div className="w-8 h-8 flex items-center justify-center">
            {isValidElement(icon)
              ? cloneElement(icon as React.ReactElement, {
                  className: "w-8 h-8",
                  style: { color: "#12cc94" },
                })
              : icon}
          </div>
        )}
      </div>
      <h4 className="text-white font-medium">{title}</h4>
    </div>
  );
};

const Awards = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeAward = awards.find((award) => award.id === activeTab);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4 inline-block">
            Nossa metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Metodologia PVC
          </h2>
          <div className="flex justify-center mt-6">
            <Link href="/nossa-historia"></Link>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {awards.map((award) => (
            <button
              key={award.id}
              className={`px-6 py-3 rounded-full text-white font-medium mr-4 mb-2 transition duration-300 ${
                activeTab === award.id
                  ? "bg-primary"
                  : "bg-secondary hover:bg-secondary/70"
              }`}
              onClick={() => handleTabChange(award.id)}
            >
              {award.title}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div>
          <AnimatePresence mode="wait">
            {activeAward && (
              <motion.div
                key={activeAward.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="tab-content-active"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <img
                      src={activeAward.image}
                      alt={activeAward.title}
                      className="w-full rounded-lg shadow-xl"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {activeAward.title}
                    </h3>
                    <p className="text-gray-400 mb-8">
                      {activeAward.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {activeAward.icons?.map((category, index) => (
                        <AwardCategory
                          key={index}
                          icon={category.icon}
                          title={category.title}
                        />
                      ))}
                    </div>

                    <div className="mt-8"></div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/awards"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-primary/90 transition-all duration-300"
          >
            Fale Conosco Agora!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
