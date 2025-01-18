"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { GoalIcon } from 'lucide-react';

interface Goal {
    name: string;
    description: string;
}

interface Principle {
    name: string;
    description: string;
}

const goals: Goal[] = [
    {
        name: "Lead Generation",
        description:
            "Strategically attract and convert high-net-worth individuals seeking sophisticated investment solutions. Our targeted approach includes personalized consultations, wealth planning seminars, and exclusive investment workshops to establish meaningful relationships with qualified prospects.",
    },
    {
        name: "Brand Credibility",
        description:
            "Establish our firm as an industry leader through demonstrated expertise in wealth management, backed by our track record of successful portfolio management and client satisfaction. We showcase our team's combined 50+ years of experience and proven investment methodologies.",
    },
    {
        name: "Client Education",
        description:
            "Empower investors with comprehensive resources including market insights, investment strategies, and portfolio management principles. Our educational approach combines webinars, detailed case studies, and personalized investment roadmaps to help clients make informed financial decisions.",
    }
];



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: {
        y: 100,
        opacity: 0,
        scale: 0.8
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100
        }
    }
};

const GoalsAndPrinciples = () => {
    return (
        <motion.section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-800"
                >
                    Our Goals and Principles
                </motion.h2>

                {/* Goals Section */}
                <article className="mb-16">
                    <motion.h3
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl font-semibold mb-8 text-gray-700 text-center"
                    >
                        <GoalIcon size={24} className="inline-block mr-2" /> 
                    </motion.h3>
                    <motion.ul
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {goals.map((goal, index) => (
                            <motion.li
                                key={index}
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <h4 className="text-xl font-semibold mb-3 text-blue-600">
                                    {goal.name}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {goal.description}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </article>

            </div>
        </motion.section>
    );
};

export default GoalsAndPrinciples;