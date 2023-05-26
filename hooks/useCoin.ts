import { useQuery } from "@tanstack/react-query";
import { Coin } from "../types";
import { fetchCoin } from "../api/fetchCoin"

export const useCoin = (symbol: string) => {
  const { data, isLoading, error } = useQuery<Coin, Error>(
    ["coin", symbol],
    () => fetchCoin(symbol),
    {
      enabled: !!symbol,
    }
  );

  return { data, isLoading, error };
};
