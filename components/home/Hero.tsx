"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const Hero = () => {


  const heroSlides = [
    {
      title: "Build Your Legacy Through Strategic Investments",
      description: "Partner with the industry's most trusted advisors to secure your financial future. Our team of experts is dedicated to providing you with the best investment strategies.",
      image: "https://img.freepik.com/premium-photo/two-young-black-people-discuss-their-business-using-diagrams-sitting-desk_88135-8026.jpg",
      overlay: "from-blue-900/90 to-gray-800/80"
    },
    {
      title: "Data-Driven Investment Solutions",
      description: "Make informed decisions with our advanced analytics and expert insights. We leverage data to help you achieve your financial goals.",
      image: "https://img.freepik.com/free-photo/two-talking-businessmen_23-2147626602.jpg",
      overlay: "from-gray-900/90 to-purple-800/80"
    },
    {
      title: "Secure Your Financial Future",
      description: "Personalized investment strategies tailored to your goals. Our approach ensures that your investments are aligned with your long-term objectives.",
      image: "https://img.freepik.com/free-photo/african-man-black-suit_1157-45559.jpg",
      overlay: "from-green-900/90 to-gray-800/80"
    },
    {
      title: "Innovative Business Solutions",
      description: "Empowering your business with cutting-edge strategies and insights. We provide innovative solutions to help your business thrive in a competitive market.",
      image: "https://img.freepik.com/free-photo/business-people-checking-papers_23-2147626490.jpg",
      overlay: "from-red-900/90 to-gray-800/80"
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      className="h-screen"
    >
      {
        heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className=" relative h-screen">
              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center ">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    {slide.description}
                  </p>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.9 }}
                      className="flex gap-4"
                    >
                      <Link href="/sign-in">
                      <Button size="lg" className="font-bold bg-primary hover:bg-primary/90">
                        Start Trade <ArrowRight className="ml-2" />
                      </Button>
                      </Link>
                    </motion.div>
                </motion.div>
              </div>
            </section>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Hero;