import GoalsAndPrinciples from "@/components/home/GoalsAndPrinciples";
import Hero from "@/components/home/Hero";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from "@/components/home/AboutUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <GoalsAndPrinciples />
      <AboutUs />

    </div>
  );
}
