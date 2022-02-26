/**
 * time: O(n)
 * Space: O(n)
 * @link https://leetcode.com/problems/climbing-stairs/
 * @param n
 */
export function climbStairs(n: number): number {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

export function climbStairsO1(n: number): number {
  let dp1 = 1;
  let dp2 = 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = dp1 + dp2;
    dp1 = dp2;
    dp2 = result;
  }
  return result;
}
