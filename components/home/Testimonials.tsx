"use client"

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVentures Inc",
    image: "/avatars/sarah.jpg",
    company: "/logos/techventures.png",
    comment: "The investment strategies provided have transformed our portfolio performance. Exceptional service and profound market insights.",
    rating: 5
  },
  // ...more testimonials
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="text-primary">Success</span> Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our valued clients about their investment journey with us.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="pb-14 !overflow-visible"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 transform group-hover:scale-110 transition-transform" />

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-8 relative z-10 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Client Info */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    {/* Company Logo */}
                    <div className="relative w-20 h-8 opacity-75">
                      <Image
                        src={testimonial.company}
                        alt="Company Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;