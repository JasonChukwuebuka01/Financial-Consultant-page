
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import GoalsAndPrinciples from "@/components/home/GoalsAndPrinciples";
import Philosophy from "@/components/home/Philosophy";
import CryptoTicker from "@/components/home/CryptoTicker";
import TradingView from "@/components/home/TradingView";
import Testominials from "@/components/home/Testominials";

export default function Home() {
  
  return (
    <section>
      <Hero />
      <AboutUs />
      <GoalsAndPrinciples />
      <Philosophy />
      <Testominials/>
      <CryptoTicker />

    </section>
  );
}
