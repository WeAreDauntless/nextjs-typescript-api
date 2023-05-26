import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Currency from "./[symbol]";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchCoin } from "../../api/fetchCoin";
import { mockCoin } from "../../mocks/mockCoin";

jest.mock("../../api/fetchCoin");

// mock the next/router module
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: { symbol: "ethereum" },
    asPath: "currency/ethereum",
    route: "currency/[symbol]",
  })
}))

beforeEach(() => {
  (fetchCoin as jest.Mock).mockResolvedValue(mockCoin);
});

it("renders Currency page and fetches coin data", async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <Currency />
    </QueryClientProvider>
  );

  await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

  expect(screen.getByText(mockCoin.name)).toBeInTheDocument();
  expect(screen.getByText(/Market Cap:/)).toBeInTheDocument();
});
