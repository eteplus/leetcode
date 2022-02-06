export function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let cur = prev < 0 ? nums[i] : nums[i] + prev;
    prev = cur;
    max = Math.max(max, cur);
  }
  return max;
}
