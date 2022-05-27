/**
 * @link https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 * @param nums
 * @param k
 * @returns
 */
export function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let res = Number.MAX_VALUE;
  let p = k - 1;
  for (let i = 0; i < nums.length; i++) {
    if (i + p >= nums.length) {
      break;
    }
    res = Math.min(res, nums[i + p] - nums[i]);
  }
  return res;
}