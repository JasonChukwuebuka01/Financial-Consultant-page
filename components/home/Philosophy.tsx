'use client';

import { motion } from 'framer-motion';
import { 
  LineChart, 
  ShieldCheck, 
  Search, 
  Timer,
} from 'lucide-react';

const philosophyData = [
  {
    Icon: LineChart,
    title: "Strategy Overview",
    description: "Our disciplined approach combines fundamental analysis with quantitative methods to identify unique investment opportunities."
  },
  {
    Icon: ShieldCheck,
    title: "Risk Management",
    description: "We employ sophisticated risk management tools and systematic monitoring to protect and grow your investments."
  },
  {
    Icon: Search,
    title: "Research & Due Diligence",
    description: "Our dedicated research team conducts thorough analysis using proprietary methods and extensive industry expertise."
  },
  {
    Icon: Timer,
    title: "Long-Term Focus",
    description: "We believe in sustainable wealth creation through patient capital allocation and long-term investment horizons."
  }
];

const Philosophy = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment Philosophy
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophyData.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-6">
                <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;