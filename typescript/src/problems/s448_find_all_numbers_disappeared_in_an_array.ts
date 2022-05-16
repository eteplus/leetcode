/**
 * @link https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * @param nums
 */
export function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const result: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }
  return result;
}