export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  market_data: {
    current_price: {
      usd: number;
    };
    ath: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
  market_cap_rank?: number;
};
