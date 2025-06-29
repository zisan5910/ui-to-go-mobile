
import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const handleClick = () => {
    if (service.route) {
      // Navigate to service route
      console.log('Navigating to:', service.route);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex flex-col items-center space-y-3 border border-gray-100"
    >
      {/* Icon Container */}
      <div className={`p-3 rounded-lg ${service.color} text-white`}>
        {service.icon}
      </div>
      
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight">
        {service.title}
      </h3>
    </button>
  );
};

export default ServiceCard;
