'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const FAQ = () => {


    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is an investment firm?",
            answer: "An investment firm is a company that invests its clients' pooled capital into financial securities. These firms employ financial experts who analyze market trends, economic conditions, and individual securities to make informed investment decisions. The goal of an investment firm is to generate returns for its clients, which can include individuals, corporations, and institutions. Investment firms offer a range of services, including portfolio management, financial planning, and advisory services. They may also provide access to a variety of investment products such as stocks, bonds, mutual funds, and exchange-traded funds (ETFs)."
        },
        {
            question: "How do I start investing?",
            answer: "You can start investing by opening an account with us and choosing an investment plan that suits your goals. The first step is to assess your financial situation, including your income, expenses, savings, and debt. Next, determine your investment objectives, such as saving for retirement, buying a home, or funding education. Once you have a clear understanding of your goals, you can select an investment plan that aligns with your risk tolerance and time horizon. Our team of financial advisors is available to help you create a personalized investment strategy. We offer a variety of account types, including individual brokerage accounts, retirement accounts (IRAs), and education savings accounts (ESAs). After opening your account, you can fund it through bank transfers, direct deposits, or rollovers from other accounts. Our online platform provides tools and resources to help you monitor and manage your investments."
        },
        {
            question: "What are the risks involved?",
            answer: "All investments carry some level of risk, including the potential loss of principal invested. It's important to understand these risks before investing. Market risk refers to the possibility that the value of your investments will fluctuate due to changes in market conditions. This can be influenced by economic factors, political events, and changes in interest rates. Credit risk is the risk that a bond issuer will default on its payments, leading to a loss of principal and interest. Liquidity risk is the risk that you may not be able to sell your investments quickly at a fair price. Additionally, there are specific risks associated with different types of investments. For example, stocks are subject to company-specific risks, while real estate investments may be affected by changes in property values and rental income. Diversification, or spreading your investments across different asset classes, can help mitigate some of these risks. Our financial advisors can help you understand the risks associated with your investment choices and develop a strategy to manage them."
        },
        {
            question: "How can I track my investments?",
            answer: "You can track your investments through our online portal, which provides real-time updates and detailed reports. Our platform offers a user-friendly interface where you can view your account balances, transaction history, and performance metrics. You can also set up customized alerts to notify you of significant changes in your portfolio. In addition to the online portal, we provide regular account statements and performance reports, which offer a comprehensive overview of your investments. These reports include information on asset allocation, investment returns, and fees. Our mobile app allows you to access your account on the go, making it easy to stay informed about your investments anytime, anywhere. If you have any questions or need assistance, our customer support team is available to help you navigate the platform and interpret your investment data."
        },
        {
            question: "What fees do you charge?",
            answer: "Our fees vary depending on the investment plan you choose. Please refer to our fee schedule for detailed information. We offer a range of pricing options to accommodate different investment needs and preferences. Our fee structure may include management fees, which are a percentage of the assets under management, and performance fees, which are based on the returns generated by your investments. Additionally, there may be transaction fees for buying and selling securities, as well as account maintenance fees. We are committed to transparency and will provide you with a clear breakdown of all fees associated with your account. Our financial advisors can help you understand the cost implications of different investment options and choose a plan that aligns with your budget and goals. We believe in providing value through our services and strive to ensure that our fees are competitive and fair."
        }
    ];



    const toggleAccordion = (index: number) => {

        setActiveIndex(activeIndex === index ? null : index);

    };




    return (

        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mb-20">
            <header className="relative h-screen w-full">
                <Image
                    src="https://img.freepik.com/premium-photo/two-young-black-people-discuss-their-business-using-diagrams-sitting-desk_88135-8026.jpg"
                    alt="InvestFirm Office"
                    layout="fill"
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
                    <div className="container mx-auto h-full flex items-center">
                        <motion.div
                            className="max-w-2xl text-white space-y-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <nav className="text-sm text-gray-300 flex items-center space-x-2">
                                <Link href="/" className="hover:underline hover:text-white transition duration-300">
                                    Home
                                </Link>
                                <span>/</span>
                                <span className="text-white">Faq</span>
                            </nav>
                            <h1 className="text-5xl font-bold">Got Questions? We’ve Got Answers</h1>
                            <p className="text-lg text-gray-200">
                                At InvestFirm, we recognize that navigating financial planning can be daunting. Our goal is to make it straightforward and transparent for you. Browse through our frequently asked questions for immediate answers to typical queries, and feel free to contact us for tailored support.
                            </p>
                            <Link href="/sign-in">
                                <Button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300 flex justify-center mt-5 ">
                                    Get Started
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </header>

            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-3 text-gray-800 mt-12">
                    Frequently Asked Questions
                </h1>
                <h2 className="text-xl font-semibold text-center mb-8 text-gray-700">
                    What We Usually Get Asked About
                </h2>


                <div className="space-y-4">

                    {
                        faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={false}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="text-lg font-medium text-gray-800">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {
                                        activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 py-4 text-gray-600 bg-gray-50">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;