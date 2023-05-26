
import { fetchCoin } from "./fetchCoin";
import axios from "axios";

jest.mock("axios");

it("fetches coin data from API for a given symbol", async () => {
  const symbol = "bitcoin";
  const mockedResponse = { data: { id: symbol } };
  axios.get.mockResolvedValue(mockedResponse);

  const result = await fetchCoin(symbol);
  expect(axios.get).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_URL}/api/coins/${symbol}`);
  expect(result).toEqual(mockedResponse.data);
});
