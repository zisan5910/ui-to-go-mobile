
import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/services';

const ServicesGrid: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        সেবা সমূহ
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {servicesData.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
