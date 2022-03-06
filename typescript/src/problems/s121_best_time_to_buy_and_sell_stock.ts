/**
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param prices
 */
export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
}
