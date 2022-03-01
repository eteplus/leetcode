/**
 * @link https://leetcode.com/problems/maximum-product-subarray/
 * @param nums
 */
export function maxProduct(nums: number[]): number {
  let max = nums[0];
  let iMax = 1;
  let iMin = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      [iMax, iMin] = [iMin, iMax];
    }
    iMax = Math.max(nums[i], nums[i] * iMax);
    iMin = Math.min(nums[i], nums[i] * iMin);
    max = Math.max(max, iMax);
  }
  return max;
}