"use client";

import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import { CryptoData } from "@/Typing/types/cryptoData";
import Image from "next/image";



const CryptoTicker: FC = () => {


  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [priceChanged, ] = useState<{ [key: string]: boolean }>({});




  

  useEffect(() => {
    let isMounted = true;

    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 40,
              page: 1,
              sparkline: false,
            },
          }
        );

        if (isMounted) {
          const abbreviatedData = response.data.map((coin: CryptoData) => ({
            id: coin.id,
            symbol: coin.symbol,
            name: coin.symbol.toUpperCase() + "/USDT",
            image: coin.image,
            current_price: coin.current_price,
            price_change_percentage_24h: coin.price_change_percentage_24h,
          }));

          setCryptoData(abbreviatedData);
          setError(null);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching cryptocurrency data:", error);
          setError("Failed to fetch crypto data");
          setIsLoading(false);
        }
      }
    };

    fetchCryptoData();
    
    const priceInterval = setInterval(() => {
      fetchCryptoData();
    }, 70000);

    return () => {
      isMounted = false;
      clearInterval(priceInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-16 bg-gray-900/80 backdrop-blur-lg flex items-center justify-center">
        <div className="animate-pulse w-4 h-4 bg-blue-500 rounded-full mx-1"></div>
        <div className="animate-pulse w-4 h-4 bg-blue-500 rounded-full mx-1 delay-150"></div>
        <div className="animate-pulse w-4 h-4 bg-blue-500 rounded-full mx-1 delay-300"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-16 bg-gray-900/80 backdrop-blur-lg flex items-center justify-center">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-xl"></div>

      <div className="relative py-4">
        <div className="flex whitespace-nowrap animate-scroll ">

          {/* First set of items */}

          {
            cryptoData.map((crypto, index) => (
                <div
                key={`original-${index}`}
                className={`inline-flex items-center px-6 py-2 rounded-lg bg-white/5 backdrop-blur-md
                   border border-white/10 hover:border-blue-500/50 transition-all duration-300
                   transform hover:scale-105 hover:bg-white/10 mx-4 ${priceChanged[crypto.id] ? 'text-blue-400' : ''}`}
                >
                <Image
                  src={crypto.image}
                  alt={crypto.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-3"
                />
                <span className="font-medium text-white">
                  {crypto.symbol.toUpperCase()}
                </span>
                <span
                  className={`ml-3 ${crypto.price_change_percentage_24h > 0
                      ? "text-green-400"
                      : "text-red-400"
                    }`}
                >
                  ${crypto.current_price.toLocaleString()}
                  <span className="ml-2 text-sm">
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </span>
              </div>
            ))}
          {/* Duplicate set for seamless loop */}
        
        </div>
      </div>
    </div>
  );
}; 

export default CryptoTicker;
