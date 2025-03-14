import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="text-white font-bold text-2xl flex items-center">
                <img src={logoImage} alt="Logo" className="h-10" />
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              We provide brilliant ideas and digital marketing solutions that help businesses grow and thrive in a competitive landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition">Services</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-primary transition">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary transition">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/digital-marketing" className="text-gray-400 hover:text-primary transition">Digital Marketing</Link></li>
              <li><Link href="/services/seo" className="text-gray-400 hover:text-primary transition">SEO Optimization</Link></li>
              <li><Link href="/services/content" className="text-gray-400 hover:text-primary transition">Content Strategy</Link></li>
              <li><Link href="/services/social" className="text-gray-400 hover:text-primary transition">Social Media Marketing</Link></li>
              <li><Link href="/services/email" className="text-gray-400 hover:text-primary transition">Email Marketing</Link></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mt-1 mr-3"><MapPin size={18} /></span>
                <span className="text-gray-400">1234 Digital Avenue, Marketing District, CA 90210</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3"><Phone size={18} /></span>
                <a href="tel:+11234567890" className="text-gray-400 hover:text-primary transition">+1 (123) 456 7890</a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3"><Mail size={18} /></span>
                <a href="mailto:info@anyco.com" className="text-gray-400 hover:text-primary transition">info@anyco.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Policy Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Anyco. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
