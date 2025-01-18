import { FaChartLine, FaPiggyBank, FaUserTie, FaRegHandshake } from 'react-icons/fa';

import type { ServiceType } from '@/Typing/types/servicetype';




export const services: ServiceType[] = [
    {
        id: '1',
        title: 'Wealth Management',
        description: 'Comprehensive wealth management solutions tailored to your unique financial goals.',
        icon: FaChartLine,
        benefits: [
            'Personalized investment strategy',
            'Tax-efficient planning',
            'Regular portfolio rebalancing'
        ],
        minInvestment: '$250,000',
        riskLevel: 'Medium',
        performanceMetric: '12% avg. annual return'
    },
    {
        id: '2',
        title: 'Retirement Planning',
        description: 'Secure your future with our expert retirement planning services.',
        icon: FaPiggyBank,
        benefits: [
            '401(k) optimization',
            'IRA management',
            'Social Security maximization'
        ],
        minInvestment: '$100,000',
        riskLevel: 'Low',
        performanceMetric: '8% avg. annual return'
    },
    {
        id: '3',
        title: 'Private Banking',
        description: 'Elite banking services for high-net-worth individuals and families.',
        icon: FaUserTie,
        benefits: [
            'Dedicated personal banker',
            'Premium credit solutions',
            'Estate planning services'
        ],
        minInvestment: '$1,000,000',
        riskLevel: 'Low',
        performanceMetric: '6% guaranteed return'
    },
   
];