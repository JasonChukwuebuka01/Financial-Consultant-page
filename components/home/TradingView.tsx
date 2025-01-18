"use client"

import { useEffect } from "react";

const TradingView = () => {
  useEffect(() => {
    const container = document.getElementById("tradingview-ticker");
    if (!container) {
      console.error("Trading view container not found");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
      { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
      { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      { proName: "BINANCE:BNBUSDT", title: "Binance Coin" },
      { proName: "COINBASE:ADAUSD", title: "Cardano" },
      { proName: "BINANCE:XRPUSDT", title: "XRP" },
      { proName: "BINANCE:DOGEUSDT", title: "Dogecoin" },
      { proName: "BINANCE:DOTUSDT", title: "Polkadot" },
      { proName: "BINANCE:SOLUSDT", title: "Solana" },
      { proName: "BINANCE:MATICUSDT", title: "Polygon" },
      { proName: "BINANCE:AVAXUSDT", title: "Avalanche" },
      { proName: "BINANCE:LTCUSDT", title: "Litecoin" },
      { proName: "BINANCE:LINKUSDT", title: "Chainlink" },
      { proName: "BINANCE:UNIUSDT", title: "Uniswap" },
      { proName: "BINANCE:BCHUSDT", title: "Bitcoin Cash" },
      { proName: "BINANCE:VETUSDT", title: "VeChain" },
      { proName: "BINANCE:THETAUSDT", title: "Theta" },
      { proName: "BINANCE:TRXUSDT", title: "Tron" },
      { proName: "BINANCE:EOSUSDT", title: "EOS" },
      { proName: "BINANCE:ATOMUSDT", title: "Cosmos" },
      { proName: "BINANCE:FTTUSDT", title: "FTX Token" },
      { proName: "BINANCE:ALGOUSDT", title: "Algorand" },
      { proName: "BINANCE:XTZUSDT", title: "Tezos" },
      { proName: "BINANCE:NEOUSDT", title: "NEO" },
      { proName: "BINANCE:KSMUSDT", title: "Kusama" },
      { proName: "BINANCE:ZILUSDT", title: "Zilliqa" },
      { proName: "BINANCE:WAVESUSDT", title: "Waves" },
      { proName: "BINANCE:HBARUSDT", title: "Hedera Hashgraph" },
      { proName: "BINANCE:CHZUSDT", title: "Chiliz" },
      { proName: "BINANCE:ENJUSDT", title: "Enjin Coin" },
      { proName: "BINANCE:MANAUSDT", title: "Decentraland" },
      { proName: "BINANCE:SUSHIUSDT", title: "SushiSwap" },
      { proName: "BINANCE:1INCHUSDT", title: "1inch" },
      ],
      colorTheme: "dark",
      isTransparent: true,
      showSymbolLogo: true,
      locale: "en",
      width: "100%",
    });

    container.appendChild(script);

    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="ticker-wrapper">
      <div id="tradingview-ticker" className="ticker-container">
        {/* Trading view widget will render here */}
      </div>
      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .ticker-container {
          display: flex;
          animation: scroll 30s linear infinite;
          min-height: 72px;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TradingView;
