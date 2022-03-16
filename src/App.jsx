import Layout from "./layout";
import HeroSection from "./components/hero-section";
import IntroSection from "./components/intro-section";
import ServicesSection from "./components/services-section";
import OfferSection from "./components/offer-section";
import AboutUsSection from "./components/about-us-section";
import PartnersSection from "./components/partners-section";
import FormSection from "./components/form-section";
function App() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <OfferSection />
      <AboutUsSection />
      <PartnersSection />
      <FormSection />
    </Layout>
  );
}

export default App;
