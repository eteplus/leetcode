/**
 * @link https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
 * @param nums
 * @param key
 */
export function mostFrequent(nums: number[], key: number): number {
  const map = new Map();
  let maxCount = 0;
  let result = nums[0];
  for(let i = 0; i <= nums.length - 2; i++) {
    if (nums[i] === key) {
      const count = (map.get(nums[i + 1]) ?? 0) + 1;
      if (count > maxCount) {
        maxCount = count;
        result = nums[i + 1];
      }
      map.set(nums[i + 1], count);
    }
  }
  return result;
}