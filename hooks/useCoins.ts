import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Coin } from "../types";

const fetchCoins = async () => {
  const { data } = await axios.get(
    "/api/coins"
  );

  return data;
};

export const useCoins = () => {
  const { data, isLoading, error } = useQuery<Coin[], Error>(["coins"], fetchCoins);

  return { data, isLoading, error };
};
