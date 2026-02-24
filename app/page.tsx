import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";


export default function Home() {
  return (
    <>
      <Header />
      <Hero /> 
      <Services />
       <Clients />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      
    </>
  );
}
