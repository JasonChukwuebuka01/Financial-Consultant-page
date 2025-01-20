"use client";

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "Unlock Your Financial Future with [Your Investment Firm Name]",
      description: "Navigating the complexities of the investment landscape to build sustainable growth and lasting financial security for our clients.",
      image: "https://img.freepik.com/free-photo/sunny-office-scene-front_23-2147626508.jpg",
    },
    {
      title: "Achieve Your Financial Goals with Expert Guidance",
      description: "Providing personalized investment strategies to help you reach your financial aspirations.",
      image: "https://img.freepik.com/free-photo/business-team-discussing-ideas-startup_23-2147626509.jpg",
    },
    {
      title: "Secure Your Future with Our Proven Investment Solutions",
      description: "Offering a range of investment options tailored to your unique needs and goals.",
      image: "https://img.freepik.com/free-photo/close-up-business-people-working-together_23-2147626510.jpg",
    },
  ];

  return (
    <section className="hero-section w-full min-h-[80vh] bg-gradient-to-r from-gray-50 to-gray-100">
      <Slider {...settings}>
        {
          slides.map((slide, index) => (
            <article
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center p-4 md:p-6 lg:p-8 max-w-7xl mx-auto"
            >
              <header className="space-y-4 md:space-y-6 lg:space-y-8 py-4 md:py-6 lg:py-8">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl">
                  {slide.description}
                </p>
                <nav className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                  <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md transition-colors duration-200">
                    Schedule a Consultation
                  </button>
                  <button className="bg-transparent hover:bg-gray-200 text-primary font-bold py-2 md:py-3 px-4 md:px-6 rounded-md border border-primary transition-colors duration-200">
                    Learn More
                  </button>
                </nav>
              </header>
              <figure className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-4 lg:mt-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
              </figure>
            </article>
          ))}
      </Slider>
    </section>
  );
};

export default Hero;