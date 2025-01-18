import GoalsAndPrinciples from "@/components/home/GoalsAndPrinciples";
import Hero from "@/components/home/Hero";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from "@/components/home/AboutUs";
import ServicesPage from "@/components/home/ServicePage";
import Philosophy from "@/components/home/Philosophy";
import Testimonials from "@/components/home/Testominials";
import CryptoTicker from "@/components/home/CryptoTicker";
import TradingView from "@/components/home/TradingView";

export default function Home() {
  return (
    <section>
      <Hero />
      <AboutUs />
      <GoalsAndPrinciples />
      <ServicesPage />
      <Philosophy />
      <Testimonials />
      <CryptoTicker />

    </section>
  );
}
