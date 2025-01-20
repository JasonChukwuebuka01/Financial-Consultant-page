"use client";

import { motion } from 'framer-motion';
import { Shield, Lightbulb, Star, Users, Target, HandshakeIcon } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We believe in absolute transparency and ethical conduct in all our dealings. Our reputation is built on trust.',
      icon: Shield,
      color: 'bg-blue-500/10'
    },
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
      icon: Lightbulb,
      color: 'bg-purple-500/10'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, ensuring quality in every detail.',
      icon: Star,
      color: 'bg-yellow-500/10'
    },
    {
      title: 'Collaboration',
      description: 'We foster strong partnerships and teamwork to achieve shared success and growth.',
      icon: HandshakeIcon,
      color: 'bg-green-500/10'
    },
    {
      title: 'Client Focus',
      description: 'Our clients\' success is our priority. We deliver personalized solutions that exceed expectations.',
      icon: Users,
      color: 'bg-red-500/10'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering investors with innovative solutions and expert guidance to achieve their financial goals.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`${value.color} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <value.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '$2.5B', label: 'Assets Managed' },
            { value: '1000+', label: 'Happy Clients' },
            { value: '98%', label: 'Client Retention' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;