/**
 * @link https://leetcode.com/problems/majority-element/
 * @param nums
 */
export function majorityElement(nums: number[]): number {
  let candidate: number = -1;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
}
