/**
 * @link https://leetcode.com/problems/longest-increasing-subsequence/
 * @param nums
 */
export function lengthOfLIS(nums: number[]): number {
  const dp: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (!dp[i]) {
      dp[i] = 1;
    }
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  let max = 0;
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i]);
  }
  return max;
}
