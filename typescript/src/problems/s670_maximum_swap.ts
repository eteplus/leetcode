/**
 * @link https://leetcode.com/problems/maximum-swap/
 */
export function maximumSwap(num: number): number {
  const digits: { [key: number]: number } = {};
  const nums = num.toString().split('');
  for (let i = 0; i < nums.length; i++) {
    const value = Number(nums[i]);
    digits[value] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const value = Number(nums[i]);
    for (let j = 9; j > value; j--) {
      if (digits[j] !== undefined && digits[j] > i) {
        nums[i] = j.toString();
        nums[digits[j]] = value.toString();
        return Number(nums.join(''));
      }
    }
  }
  return num;
}
