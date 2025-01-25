import ServicesPage from '@/components/about/ServicePage'
import TradingOffers from '@/components/about/TradingOffers';
import HeaderBanner from '@/components/home/HeaderBanner';
import React from 'react'



const TradingPlansPage = () => {


    return (
        <section>
            <HeaderBanner />
            <ServicesPage />
            <TradingOffers />
        </section>
    )
}

export default TradingPlansPage;