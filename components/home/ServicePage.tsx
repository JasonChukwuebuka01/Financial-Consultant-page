import React from 'react';
import { services } from '@/datas/datas';
import Card from './Card';

const ServicesPage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Investment Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of investment solutions designed to help you achieve your financial goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            services.map((service) => (
              <Card key={service.id} {...service} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;