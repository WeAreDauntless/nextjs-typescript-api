import { renderHook, waitFor } from "@testing-library/react";
import { useCoin } from "./useCoin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchCoin } from "../api/fetchCoin";
import { mockCoin } from "../mocks/mockCoin"

jest.mock("../api/fetchCoin")

beforeEach(() => {
  (fetchCoin as jest.Mock).mockResolvedValue(mockCoin);
});

it("fetches and returns coin data for a given symbol", async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={ queryClient }> { children } < /QueryClientProvider>;
  };

  const { result } = renderHook(() => useCoin("bitcoin"), { wrapper });
  await waitFor(() => result.current.data !== undefined);

  // Check if the data has the expected structure
  expect(result.current.data).toHaveProperty("id");
  expect(result.current.data).toHaveProperty("symbol");
});
