import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Menu, ChevronDown, ChevronRight } from "lucide-react";

// Navigation data
const navigationItems = [
  { name: "Início", href: "/", dropdown: false },
  { 
    name: "Páginas", 
    href: "#", 
    dropdown: true,
    items: [
      { name: "Sobre Nós", href: "/about" },
      { name: "Nossa Equipe", href: "/team" },
      { name: "Preços", href: "/pricing" },
      { name: "Perguntas Frequentes", href: "/faq" }
    ]
  },
  { 
    name: "Serviços", 
    href: "#", 
    dropdown: true,
    items: [
      { name: "Marketing Digital", href: "/services/digital-marketing" },
      { name: "Serviços de SEO", href: "/services/seo" },
      { name: "Gestão de Conteúdo", href: "/services/content" },
      { name: "Análise de Dados", href: "/services/data-analysis" }
    ]
  },
  { 
    name: "Estudos de Caso", 
    href: "#", 
    dropdown: true,
    items: [
      { name: "Estudo de Caso 1", href: "/case-study/1" },
      { name: "Estudo de Caso 2", href: "/case-study/2" },
      { name: "Galeria de Estudos", href: "/case-studies" }
    ]
  },
  { 
    name: "Blog", 
    href: "#", 
    dropdown: true,
    items: [
      { name: "Blog Galeria", href: "/blog" },
      { name: "Blog Artigo", href: "/blog/1" }
    ]
  },
  { 
    name: "Loja", 
    href: "#", 
    dropdown: true,
    items: [
      { name: "Produtos", href: "/shop" },
      { name: "Detalhes do Produto", href: "/shop/product/1" },
      { name: "Carrinho", href: "/shop/cart" },
      { name: "Checkout", href: "/shop/checkout" }
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
                <span className="text-primary text-3xl mr-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    className="w-7 h-7 transform rotate-45 fill-current"
                  >
                    <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5 12 10.85 17.96 7.5 12 4.15z" />
                  </svg>
                </span>
                <span>NetCraft</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              !item.dropdown ? (
                <Link key={item.name} href={item.href} className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary">
                  {item.name}
                </Link>
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
            <a href="tel:+551123456789" className="hidden lg:flex items-center mr-4 text-white hover:text-primary transition duration-200">
              <span className="bg-primary/80 rounded-full p-2 mr-2">
                <Phone className="text-white h-4 w-4" />
              </span>
              <span>+55 (11) 2345-6789</span>
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
              <Link key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-accent">
                {item.name}
              </Link>
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
          <a href="tel:+551123456789" className="flex items-center text-white">
            <span className="bg-primary/80 rounded-full p-2 mr-2">
              <Phone className="text-white h-4 w-4" />
            </span>
            <span>+55 (11) 2345-6789</span>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
