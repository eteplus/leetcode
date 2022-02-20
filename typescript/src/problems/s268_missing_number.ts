/**
 * @link https://leetcode.com/problems/missing-number/
 */
export function missingNumber(nums: number[]): number {
  let sum = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return n * (n + 1) / 2 - sum;
}