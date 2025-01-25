"use client";

import React from 'react';

import HeaderBanner from '../home/HeaderBanner';

const offers = [
    {
        title: 'Wealth Management',
        description: 'Comprehensive wealth management services including investment advice, financial planning, and portfolio management to help you achieve your financial goals. Our team of experts will work with you to create a customized plan that fits your unique needs and objectives, ensuring that your wealth is managed effectively and efficiently.',
        imageUrl: 'https://img.freepik.com/free-photo/african-man-black-suit_1157-45559.jpg',
    },
    {
        title: 'Retire Planning',
        description: 'Plan your retirement with our expert advice, ensuring you have a secure and comfortable future. We offer personalized retirement plans tailored to your needs, taking into account your current financial situation, future goals, and risk tolerance. Our comprehensive approach ensures that you can enjoy your retirement years without financial worries.',
        imageUrl: 'https://img.freepik.com/free-photo/african-man-black-suit_1157-45559.jpg',
    },
    {
        title: 'Private Banking',
        description: 'Exclusive private banking services that provide personalized financial solutions, including wealth management, investment strategies, and estate planning for high-net-worth individuals. Our dedicated private bankers offer a high level of service and expertise, ensuring that your financial needs are met with discretion and professionalism.',
        imageUrl: 'https://img.freepik.com/free-photo/african-man-black-suit_1157-45559.jpg',
    },
];

const TradingOffers = () => {


    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
                <div className="grid grid-cols-1 gap-14">
                    {
                        offers.map((offer, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="p-6 flex-1">
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">{offer.title}</h3>
                                    <p className="mb-4">{offer.description}</p>
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                        onClick={() => window.open('https://docs.google.com/document', '_blank')}
                                    >
                                        Learn More
                                    </button>
                                </div>
                                <div className="flex-shrink-0 w-full md:w-1/3">
                                    <img src={offer.imageUrl} alt={offer.title} className="w-full h-32 md:h-auto object-cover" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default TradingOffers;