import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api/fetchCoins"
import { Coin } from "../types";

export const useCoins = () => {
  const { data, isLoading, error } = useQuery<Coin[], Error>(["coins"], fetchCoins);

  return { data, isLoading, error };
};
