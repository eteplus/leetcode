/**
 * @link https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param nums
 */
export function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else if (nums[mid] < nums[left]) {
      right = mid - 1;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      break;
    }
  }
  return nums[left];
}
