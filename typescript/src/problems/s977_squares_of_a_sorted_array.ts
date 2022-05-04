/**
 * @link https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param nums
 */
export function sortedSquares(nums: number[]): number[] {
  let i = 0;
  let j = nums.length - 1;
  const result = [];
  while (i <= j) {
    if (i !== j ) {
      const a = nums[i] * nums[i];
      const b = nums[j] * nums[j];
      result.push(a, b);
    } else {
      result.push(nums[i] * nums[i]);
    }
    i += 1;
    j -= 1;
  }
  result.sort((a, b) => a - b);
  return result;
}