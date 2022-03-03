/**
 * @link https://leetcode.com/problems/jump-game/
 * @param nums
 */
export function canJump(nums: number[]): boolean {
  let len = nums.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (i > max) {
      return false;
    }
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
    }
    if (max >= len - 1) {
      return true;
    }
  }
  return max >= len - 1;
}