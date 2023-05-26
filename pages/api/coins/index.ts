import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=45");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch coin data" });
  }
}
