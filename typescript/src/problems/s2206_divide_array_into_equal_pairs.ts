/**
 * @link https://leetcode.com/problems/divide-array-into-equal-pairs/
 * @param nums
 */
export function divideArray(nums: number[]): boolean {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const values = [...map.values()];
  for (const value of values) {
    if (value % 2 !== 0) {
      return false;
    }
  }
  return true;
}