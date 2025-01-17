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
    <section className="hero-section w-full min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <Slider {...settings}>
        {
          slides.map((slide, index) => (
            <article key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-4 lg:p-8">
              <header className="space-y-6">
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">{slide.title}</h1>
                <p className="text-base lg:text-lg text-gray-600">{slide.description}</p>
                <nav className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md">
                    Schedule a Consultation
                  </button>
                  <button className="bg-transparent hover:bg-gray-200 text-primary font-bold py-3 px-6 rounded-md border border-primary">
                    Learn More
                  </button>
                </nav>
              </header>
              <figure className="relative h-[300px] lg:h-[500px]">
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