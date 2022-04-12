/**
 * @link https://leetcode.com/problems/plus-one/
 * @param digits
 */
export function plusOne(digits: number[]): number[] {
  const result: number[] = [];
  let num = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    num = digits[i] + num;
    result.push(num % 10);
    num = num >= 10 ? 1 : 0;
  }
  if (num !== 0) {
    result.push(num);
  }
  return result.reverse();
}