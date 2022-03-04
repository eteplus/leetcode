/**
 * @link https://leetcode.com/problems/unique-paths/
 */
export function uniquePaths(m: number, n: number): number {
  const dp: number[][] = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        dp[i][j] = 1;
      } else {
        let left = i - 1 >= 0 ? dp[i - 1][j] : 0;
        let top = j - 1 >= 0 ? dp[i][j - 1] : 0;
        dp[i][j] = left + top
      }
    }
  }
  return dp[m - 1][n - 1];
}
