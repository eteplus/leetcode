/**
 * @link https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/
 * @param nums
 */
export function findLonely(nums: number[]): number[] {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const result: number[] = [];
  for (const num of nums) {
    if (map.get(num) === 1 && !map.has(num - 1) && !map.has(num + 1)) {
      result.push(num);
    }
  }
  return result;
}