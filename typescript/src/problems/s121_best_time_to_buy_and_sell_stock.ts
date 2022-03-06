
/**
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param prices
 */
export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices[0];
  let maxPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      maxPrice = prices[i];
    } else if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    }
    if (maxPrice - minPrice > maxProfit) {
      maxProfit = maxPrice - minPrice;
    }
  }
  return maxProfit;
}