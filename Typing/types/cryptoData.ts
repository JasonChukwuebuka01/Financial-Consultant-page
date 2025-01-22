export interface CryptoData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number; // Changed from price_change_24h
  }
  