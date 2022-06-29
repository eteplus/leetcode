/**
 * @link https://leetcode.com/problems/subsets-ii/
 * @param nums
 */
export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  function backtrack(temp: number[], start: number, end: number) {
    result.push([...temp]);
    for (let i = start; i < end; i++) {
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }
      temp.push(nums[i]);
      backtrack(temp, i + 1, end);
      temp.pop();
    }
  }
  backtrack([], 0, nums.length);
  return result;
}
