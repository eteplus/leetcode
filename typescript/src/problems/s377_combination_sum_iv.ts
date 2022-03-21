/**
 * @link https://leetcode.com/problems/combination-sum-iv/
 * @param nums
 * @param target
 * @returns
 */
export function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i - num >= 0) {
        console.log('i: %s, num: %s', i, num, dp[i], dp[i - num]);
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
}
