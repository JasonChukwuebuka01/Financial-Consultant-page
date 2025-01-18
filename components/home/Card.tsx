import React from 'react';

import { IconType } from 'react-icons/lib';

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  benefits: string[];
  minInvestment: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  performanceMetric: string;
}



export const Card: React.FC<ServiceType> = ({
    title,
    description,
    icon: Icon,
    benefits,
    minInvestment,
    riskLevel,
    performanceMetric
}: ServiceType) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold ml-3">{title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>

            <ul className="space-y-2 mb-4">

                {
                    benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-blue-600 mr-2">✓</span>
                            {benefit}
                        </li>
                    ))}
            </ul>
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                    <p className="text-gray-500">Minimum Investment</p>
                    <p className="font-semibold">{minInvestment}</p>
                </div>
                <div>
                    <p className="text-gray-500">Risk Level</p>
                    <p className="font-semibold">{riskLevel}</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="text-gray-500">Performance</p>
                <p className="font-semibold text-green-600">{performanceMetric}</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Learn More
            </button>
        </div>
    );
};

export default Card;