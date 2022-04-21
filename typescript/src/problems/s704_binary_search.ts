/**
 * @link https://leetcode.com/problems/binary-search/
 * @param nums
 * @param target
 */
export function search(nums: number[], target: number): number {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    const mid = i + ((j - i) >> 1);
    if (nums[mid] === target) {
      return mid;
    }
    if (target > nums[mid]) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return -1;
}
