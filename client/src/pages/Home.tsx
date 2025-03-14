import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Awards from "@/components/home/Awards";
import CookieBanner from "@/components/shared/CookieBanner";

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <AboutUs />
        <Services />
        <Awards />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Home;
