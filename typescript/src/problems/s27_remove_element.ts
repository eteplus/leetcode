/**
 * @link https://leetcode.com/problems/remove-element/
 * @param nums
 * @param val
 */
export function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) {
    return 0;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val && nums[right] === val) {
      right -= 1;
    } else if (nums[left] === val && nums[right] !== val) {
      nums[left] = nums[right];
      nums[right] = val;
      left += 1;
      right -= 1;
    } else if (nums[left] !== val && nums[right] === val) {
      left += 1;
      right -= 1;
    } else if (nums[left] !== val && nums[right] !== val) {
      left += 1;
    }
  }
  return left;
}