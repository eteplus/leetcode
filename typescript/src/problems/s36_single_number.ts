/**
 * @link https://leetcode.com/problems/single-number/
 * @param nums
 */
export function singleNumber2(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    } else {
      map.set(nums[i], 1);
    }
  }
  return [...map.keys()][0];
}

export function singleNumber(nums: number[]): number {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
}