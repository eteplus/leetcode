/**
 * @link https://leetcode.com/problems/array-partition-i/
 * @param nums
 */
export function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += Math.min(nums[i], nums[i + 1]);
  }
  return sum;
}