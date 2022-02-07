/**
 * @link https://leetcode.com/problems/two-sum
 */
export function twoSum(nums: number[], target: number): number[] {
  const length = nums.length;
  const map: { [key:number]: number } = {};
  for (let i = 0; i < length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
  return [];
}
