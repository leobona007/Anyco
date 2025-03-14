import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Menu, ChevronDown, ChevronRight } from "lucide-react";
import logoImage from "@/assets/images/logo.png";

// Navigation data
const navigationItems = [
  { name: "Início", href: "#top", dropdown: false },
  { 
    name: "Sobre Nós", 
    href: "#about-us", 
    dropdown: false
  },
  { 
    name: "Serviços", 
    href: "#", 
    dropdown: true,
    items: [
      { name: "Desenvolvimento de WebPages", href: "/services/digital-marketing" },
      { name: "Desenvolvimento de WebAplications", href: "/services/seo" },
      { name: "Gerenciamento de Google ADS", href: "/services/content" },
      { name: "Gerenciamento do Instagram/Facebook ADS", href: "/services/content"}
    ]
  },
   { 
    name: "Blog", 
    href: "#", 
    dropdown: false,
    items: [
      { name: "Blog Galeria", href: "/blog" },
      { name: "Blog Artigo", href: "/blog/1" }
    ]
  },
    { name: "Contato", href: "/contact", dropdown: false }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState<Record<string, boolean>>({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <header className="sticky top-0 z-40 bg-background shadow-lg">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="text-white font-bold text-2xl flex items-center">
                <img src={logoImage} alt="Logo" className="h-10" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              !item.dropdown ? (
                item.href.startsWith('#') ? (
                  <a key={item.name} href={item.href} className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary">
                    {item.name}
                  </a>
                ) : (
                  <Link key={item.name} href={item.href} className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary">
                    {item.name}
                  </Link>
                )
              ) : (
                <div key={item.name} className="relative group">
                  <button className="text-white px-3 py-2 rounded-md text-sm font-medium flex items-center hover:bg-secondary">
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-secondary/80">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center">
            <a href="tel:+5551981310168" className="hidden lg:flex items-center mr-4 text-white hover:text-primary transition duration-200">
              <span className="bg-primary/80 rounded-full p-2 mr-2">
                <Phone className="text-white h-4 w-4" />
              </span>
              <span>+51 (51) 98131-0168</span>
            </a>
            <button 
              className="lg:hidden text-gray-300 hover:text-white focus:outline-none" 
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-secondary overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => (
            !item.dropdown ? (
              item.href.startsWith('#') ? (
                <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-accent">
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-accent">
                  {item.name}
                </Link>
              )
            ) : (
              <div key={item.name} className="mobile-dropdown">
                <button 
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-accent flex justify-between items-center"
                  onClick={() => toggleMobileDropdown(item.name)}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <motion.div 
                  initial={false}
                  animate={activeDropdowns[item.name] ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-4"
                >
                  {item.items?.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-accent">
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              </div>
            )
          ))}
        </div>
        <div className="px-5 pt-4 pb-5 border-t border-border">
          <a href="tel:+5551981310168" className="flex items-center text-white">
            <span className="bg-primary/80 rounded-full p-2 mr-2">
              <Phone className="text-white h-4 w-4" />
            </span>
            <span>+55 (51) 98131-0168</span>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
