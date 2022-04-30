/**
 * @link https://leetcode.com/problems/maximum-difference-between-increasing-elements/
 * @param nums
 */
export function maximumDifference(nums: number[]): number {
  let i = nums.length - 1;
  let maxDiff = -1;
  let maxNum = nums[i];
  while (i >= 0) {
    if (nums[i] >= maxNum) {
      maxNum = nums[i];
    } else {
      maxDiff = Math.max(maxDiff, maxNum - nums[i]);
    }
    i -= 1;
  }
  return maxDiff;
}