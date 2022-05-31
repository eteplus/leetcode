/**
 * @link https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
 * @param nums
 */
export function canBeIncreasing(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }
  let prev = nums[0];
  let removed = false;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] <= prev) {
      if (removed) {
        return false;
      }
      removed = true;
      if (i === 1 || nums[i] > nums[i - 2]) {
        prev = nums[i];
      }
    } else {
      prev = nums[i];
    }
  }
  return true;
}
