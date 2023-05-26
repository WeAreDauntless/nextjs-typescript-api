import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { Coin } from "../../types";
import axios from "axios";
import Link from "next/link";

const fetchCoin = async (symbol: string) => {
  const { data } = await axios.get(
    `/api/coins/${symbol}`
  );

  return data;
};

const Currency: React.FC = () => {
  const router = useRouter();
  const { symbol } = router.query;

  const { data: coin, isLoading, error } = useQuery<Coin>(
    ["coin", symbol],
    () => fetchCoin(symbol as string),
    {
      enabled: !!symbol,
    }
  );

  if (isLoading || !coin) {
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      Loading...
    </div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      Error fetching data: {error.message}
    </div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{coin.name}</h1>
      <ul className="list-disc pl-5 mb-8">
        <li>Current Price: {coin.market_data.current_price.usd.toFixed(2)}</li>
        <li>
          All time high price: {coin.market_data.ath.usd.toFixed(2)}
        </li>
        <li>Market Cap: {coin.market_data.market_cap.usd.toFixed(2)}</li>
        <li>Market Cap Rank: {coin.market_cap_rank}</li>
      </ul>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Currency;
