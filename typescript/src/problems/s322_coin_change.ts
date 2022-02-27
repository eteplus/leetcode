/**
 * @link https://leetcode.com/problems/coin-change/
 * @param coins
 * @param amount
 */
export function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin < 0) {
        continue;
      }
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}