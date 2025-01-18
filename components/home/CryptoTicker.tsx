"use client";

import React, { useState, useEffect, FC } from "react";
import axios from "axios";

interface CoinData {
  id: string;
  name: string;
  image: string;
  current_price: number;
}

const CryptoTicker: FC = () => {
  const [cryptoData, setCryptoData] = useState<CoinData[] | []>([]);



  useEffect(() => {

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

        const abbreviatedData = response.data.map((coin: any) => ({
          id: coin.id,
          name: coin.symbol.toUpperCase() + "/USDT",
          image: coin.image,
          current_price: coin.current_price,
        }));

        setCryptoData(abbreviatedData);

        

      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptoData();



    // Optional: Refresh data every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);




  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        background: "#0A0E14",
        color: "#FFF",
        padding: "10px",
      }}
    >

      <div
        style={{
          display: "inline-block",
          marginRight: "20px",
          animation: "scroll 50s linear infinite",
        }}
      >
        {
          cryptoData.map((coin) => (
            <div
              key={coin.id}
              style={{
                display: "inline-block",
                marginRight: "20px",
              }}
            >
              <img
                src={coin.image}
                alt={coin.name}
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              <div>
                <span>{coin.name}: </span>
                <span>${coin.current_price.toFixed(2)}</span>
              </div>
            </div>
          ))

        }

      </div>

    </div>
  );
};

export default CryptoTicker;
