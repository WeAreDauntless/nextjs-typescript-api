import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Coin } from "../types";

const fetchCoin = async (symbol: string) => {
  const { data } = await axios.get(
    `/api/coins/${symbol}`
  );

  return data;
};

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
