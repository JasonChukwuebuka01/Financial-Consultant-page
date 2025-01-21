"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CardProps {
    title: string;
    description: string;
    benefits: string[];
    minInvestment: string;
    riskLevel: string;
    performanceMetric: string;
}

const Card = ({ title, description, benefits, minInvestment, riskLevel, performanceMetric }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            {/* Card Header */}
            <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                    {title}
                </h3>
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                    <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                ))}
            </ul>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">Minimum Investment</p>
                    <p className="text-lg font-semibold text-gray-900">{minInvestment}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">Risk Level</p>
                    <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <p className="text-lg font-semibold text-gray-900">{riskLevel}</p>
                    </div>
                </div>
            </div>

            {/* Performance Metric */}
            <div className="mb-8 p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Performance</p>
                <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <p className="text-lg font-semibold text-green-600">{performanceMetric}</p>
                </div>
            </div>

            {/* CTA Button */}
            <Button 
                className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 group"
            >
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
        </motion.div>
    );
};

export default Card;