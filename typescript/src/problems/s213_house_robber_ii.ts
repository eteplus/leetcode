/**
 * @link https://leetcode.com/problems/house-robber-ii/
 * @param nums
 */
export function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(...nums);
  }
  const getMax = (start: number, end: number) => {
    let pre = 0;
    let cur = 0;
    for (let i = start; i <= end; i++) {
      let temp = cur;
      cur = Math.max(pre + nums[i], cur);
      pre = temp;
    }
    return cur;
  };
  return Math.max(getMax(0, nums.length - 2), getMax(1, nums.length - 1));
}
