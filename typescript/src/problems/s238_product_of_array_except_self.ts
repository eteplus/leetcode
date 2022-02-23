/**
 * @link https://leetcode.com/problems/product-of-array-except-self/
 */
export function productExceptSelf(nums: number[]): number[] {
  const answers = [1];
  for (let i = 1; i < nums.length; i++) {
    answers[i] = answers[i - 1] * nums[i - 1];
  }
  let product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answers[i] *= product;
    product *= nums[i];
  }
  return answers;
}
