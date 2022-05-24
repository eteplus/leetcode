/**
 * @link https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
 * @param cost
 * @returns
 */
export function minimumCost(cost: number[]): number {
  cost.sort((a, b) => a - b);
  let sum = 0;
  let i = cost.length - 1;
  while (i >= 2) {
    sum += cost[i] + cost[i - 1];
    i -= 3;
  }
  while (i >= 0) {
    sum += cost[i];
    i -= 1;
  }
  return sum;
}