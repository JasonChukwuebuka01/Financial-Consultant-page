import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { StatsBar } from './StatsBar';
import { TestimonialSlider } from './TestimonialSlider';

const ServicesSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Investment Solutions for Your Future
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert financial guidance tailored to your goals, backed by decades of market experience.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <StatsBar stats={performanceStats} />
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Why Choose Our Investment Services?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator) => (
              <div key={indicator.title} className="text-center">
                <indicator.icon className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{indicator.title}</h4>
                <p className="text-blue-100">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={clientTestimonials} />

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Start Investing?</h3>
          <p className="text-gray-600 mb-8">
            Schedule a consultation with our investment experts today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;