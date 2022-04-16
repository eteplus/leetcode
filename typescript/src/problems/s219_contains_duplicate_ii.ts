/**
 * @link https://leetcode.com/problems/contains-duplicate-ii/
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= k; j++) {
      if (i + j < nums.length && nums[i] == nums[i + j]) {
        return true;
      }
    }
  }
  return false;
}