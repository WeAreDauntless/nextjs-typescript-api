import axios from "axios";

export const fetchCoin = async (symbol: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/coins/${symbol}`
  );

  return data;
};
