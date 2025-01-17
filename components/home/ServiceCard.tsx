import { motion } from 'framer-motion';
import type { ServiceType } from '@/Typing/types/servicetype';

export const ServiceCard = ({
    title,
    description,
    icon: Icon,
    benefits,
    minInvestment,
    riskLevel,
    performanceMetric
}: ServiceType) => {



    
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
            <Icon className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                <ul className="space-y-2">
                    {
                        benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                                {benefit}
                            </li>
                        ))}
                </ul>
            </div>

            <div className="flex flex-col space-y-2 text-sm text-gray-500">
                {minInvestment && (
                    <p>Minimum Investment: {minInvestment}</p>
                )}
                <p>Risk Level: {riskLevel}</p>
                {performanceMetric && (
                    <p>Performance: {performanceMetric}</p>
                )}
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
            </button>
        </motion.div>
    );
};