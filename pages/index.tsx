import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useCoins } from "../hooks/useCoins";
import { QueryClient, dehydrate } from "@tanstack/react-query"
import { fetchCoins } from "../api/fetchCoins"
import { Coin } from "../types";
import { GetServerSideProps } from "next";

const Home: React.FC = () => {
  const { data, isLoading, error } = useCoins();

  if (isLoading) {
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
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Market Pairs (USD)
            </h1>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* End hero unit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data?.map((coin) => (
              <div key={coin.id} className="flex flex-col">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={200}
                  height={200}
                  className="object-cover object-center"
                />
                <div className="flex-1 p-4">
                  <h2 className="text-xl font-semibold mb-2">{coin.name}</h2>
                  <ul className="list-disc pl-5">
                    <li>Current Price: {coin.current_price.toFixed(2)}</li>
                    <li>24h High: {coin.high_24h.toFixed(2)}</li>
                    <li>24h Low: {coin.low_24h.toFixed(2)}</li>
                  </ul>
                </div>
                <div className="p-4">
                  <Link href={`/currency/${coin.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  // prefetch data on the server
  await queryClient.fetchQuery<Coin[], Error>(["coins"], fetchCoins)

  return {
    props: {
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Home;
