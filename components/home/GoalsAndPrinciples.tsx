"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Goal {
    name: string;
    description: string;
    icon: any;
}

const goals: Goal[] = [
    {
        name: "Lead Generation",
        description:
            "Strategically attract and convert high-net-worth individuals seeking sophisticated investment solutions.",
        icon: Target
    },
    {
        name: "Brand Credibility",
        description:
            "Establish our firm as an industry leader through demonstrated expertise in wealth management.",
        icon: Award
    },
    {
        name: "Client Education",
        description:
            "Empower investors with comprehensive resources including market insights and investment strategies.",
        icon: BookOpen
    }
];

const GoalsAndPrinciples = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our <span className="text-primaryNew">Goals</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Building lasting relationships through strategic growth and unwavering commitment to excellence.
                    </p>
                </motion.div>

                {/* Goals Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {goals.map((goal, index) => (
                        <motion.div
                            key={goal.name}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                                <goal.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{goal.name}</h3>
                            <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Learn More About Our Approach
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default GoalsAndPrinciples;