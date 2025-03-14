import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Award category icons
const awardCategories = [
  { icon: "/src/assets/icons/brand-icon_1.svg", title: "Web Design" },
  { icon: "/src/assets/icons/brand-icon_2.svg", title: "UI/UX Design" },
  { icon: "/src/assets/icons/brand-icon_3.svg", title: "Developer" },
  { icon: "/src/assets/icons/brand-icon_4.svg", title: "ISO Developer" },
  { icon: "/src/assets/icons/brand-icon_5.svg", title: "Digital Agency" }
];

// Award data
const awards = [
  {
    id: "tab1",
    title: "CSS Design Awards",
    year: "2020",
    description: "Some people will tell you there are four while others may tell you there are eight thing.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tab2",
    title: "Good Design Award",
    year: "2021",
    description: "Some people will tell you there are four while others may tell you there are eight thing.",
    image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tab3",
    title: "Top Design King",
    year: "2022",
    description: "Some people will tell you there are four while others may tell you there are eight thing.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const AwardCategory = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
        <img src={icon} alt={title} className="w-8 h-8" />
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
  
  // Get current active award
  const activeAward = awards.find(award => award.id === activeTab);
  
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
            Our Achievement Awards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Check Our Awards and Achievement
          </h2>
          <div className="flex justify-center mt-6">
            <Link href="/our-history">
              <Button className="gradient-primary text-white font-medium rounded-full px-6 py-6 h-auto">
                Our History
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {awards.map((award) => (
            <button
              key={award.id}
              className={`px-6 py-3 rounded-full text-white font-medium mr-4 mb-2 transition duration-300 ${
                activeTab === award.id ? "bg-primary" : "bg-secondary hover:bg-secondary/70"
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
                    <div className="inline-block px-4 py-1 bg-secondary text-white/70 rounded-full text-sm font-medium mb-4">
                      [{activeAward.year}]
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {activeAward.title}
                    </h3>
                    <p className="text-gray-400 mb-8">
                      {activeAward.description}
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {awardCategories.map((category, index) => (
                        <AwardCategory 
                          key={index}
                          icon={category.icon} 
                          title={category.title} 
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Awards;
