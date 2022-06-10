/**
 * @link https://leetcode.com/problems/majority-element-ii/
 * @param nums
 */
export function majorityElement(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }
  const map: { [key: number]: number } = {};
  const max = Math.floor(nums.length / 3);
  const result = new Set<number>();
  for (const num of nums) {
    map[num] = ( map[num] ?? 0) + 1;
    if (map[num] > max) {
      result.add(num);
    }
  }
  return [...result];
}

export function majorityElementII(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }
  nums.sort((a, b) => a - b);
  const max = Math.floor(nums.length / 3);
  const result: number[] = [];
  let prefix = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === prefix) {
      count += 1;
    } else {
      if (count > max) {
        result.push(prefix);
      }
      prefix = nums[i];
      count = 1;
    }
    if (i === nums.length - 1 && count > max) {
      result.push(prefix);
    }
  }
  return result;
}