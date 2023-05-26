export type Coin = {
  id: string;
  symbol: string;
  name: string;
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
  market_cap_rank: number;
};

