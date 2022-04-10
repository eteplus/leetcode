/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param nums
 */
export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length;
  }
  let num = nums[0];
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (num !== nums[i]) {
      num = nums[i];
      j += 1;
      nums[j] = num;
    }
  }
  return j + 1;
}
