/**
 * @link https://leetcode.com/problems/maximum-ascending-subarray-sum/
 * @param nums
 */
export function maxAscendingSum(nums: number[]): number {
  let result = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i];
    } else {
      result = Math.max(result, sum);
      sum = nums[i];
    }
  }
  result = Math.max(result, sum);
  return result;
}