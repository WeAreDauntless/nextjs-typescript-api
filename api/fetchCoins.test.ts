import { fetchCoins } from "./fetchCoins";
import axios from "axios";

jest.mock("axios");

it("fetches coins data from API", async () => {
  // Mock API response
  const mockedResponse = { data: [{ id: "bitcoin" }] };
  axios.get.mockResolvedValue(mockedResponse);

  const result = await fetchCoins();
  expect(axios.get).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_URL}/api/coins`);
  expect(result).toEqual(mockedResponse.data);
});
