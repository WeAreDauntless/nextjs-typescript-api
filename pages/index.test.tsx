
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Home from "./index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchCoins } from "../api/fetchCoins";
import { mockCoins } from "../mocks/mockCoins";

jest.mock("../api/fetchCoins");

beforeEach(() => {
  (fetchCoins as jest.Mock).mockResolvedValue(mockCoins);
});

it("renders Home page and fetches coins data", async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );

  await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

  expect(screen.getByText("Market Pairs (USD)")).toBeInTheDocument();
  expect(screen.getAllByText(/Current Price:/).length).toBe(mockCoins.length);
});
