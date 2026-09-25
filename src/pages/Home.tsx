import { Hero } from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import { ProductPreview } from "../components/ProductPreview/ProductPreview";
import Testimonials from "../components/Testimonials/Testimonials";
import { FinalCTA } from "../components/FinalCTA/FinalCTA";
import TechWrapAI from "../components/TechwrapAI/TechwrapAI";
import Logoslider from "../components/LogoStrip/Logoslider";
import WhatsAppButton from "../components/Whatsup integration/Whatsup";


/**
 * Home page — composition only. Each section owns its own markup,
 * styles, and (where needed) animation logic, so this file stays
 * a thin, readable outline of the page structure.
 */
export function Home() {
  return (
    <>
    
      <Hero />
      <Logoslider/>
      <Services />
      <ProductPreview />
      <Testimonials />
      <FinalCTA />
      <TechWrapAI/>
      <WhatsAppButton />
      
    </>
  );
}
export default Home;