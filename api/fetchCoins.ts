import axios from "axios";

export const fetchCoins = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/coins`
  );

  return data;
};

