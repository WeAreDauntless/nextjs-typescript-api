import { renderHook, waitFor } from "@testing-library/react";
import { useCoins } from "./useCoins";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchCoins } from "../api/fetchCoins";
import { mockCoins } from "../mocks/mockCoins"

jest.mock("../api/fetchCoins");


beforeEach(() => {
  (fetchCoins as jest.Mock).mockResolvedValue(mockCoins);
});

it("fetches and returns coins data", async () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={ queryClient }> { children } < /QueryClientProvider>;
  };

  const { result } = renderHook(() => useCoins(), { wrapper });
  await waitFor(() => result.current.data !== undefined);

  // Check if the data has the expected structure
  expect(result.current.data?.[0]).toHaveProperty("id");
  expect(result.current.data?.[0]).toHaveProperty("symbol");
});
