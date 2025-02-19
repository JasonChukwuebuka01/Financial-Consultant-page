"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface TestimonialProps {
  name: string
  role: string
  company: string
  image: string
  testimonial: string
  rating: number
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    image: "/testimonials/sarah.jpg",
    testimonial: "The team delivered exceptional results. Their expertise and dedication transformed our business processes.",
    rating: 5
  },
  {
    name: "Michael Smith",
    role: "CTO",
    company: "InnovateX",
    image: "/testimonials/michael.jpg",
    testimonial: "Their innovative solutions and professional approach exceeded our expectations. Highly recommended!",
    rating: 4
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
    company: "MarketGurus",
    image: "/testimonials/emily.jpg",
    testimonial: "A fantastic experience from start to finish. The results speak for themselves.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    company: "NextGen Solutions",
    image: "/testimonials/james.jpg",
    testimonial: "We&apos;re impressed with their innovative approach and dedication.",
    rating: 5
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}



export default function Testominials() {


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="testimonial-slider pb-12"
        >
          {
          testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 h-full"
              >
                <div className="flex items-center mb-6">
                    <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-full h-full"
                    />
                    </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.testimonial.replace(/'/g, "&apos;")}&rdquo;
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}