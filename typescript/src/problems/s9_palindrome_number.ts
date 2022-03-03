/**
 * @link https://leetcode.com/problems/palindrome-number/
 * @param x
 */
export function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const nums = x.toString().split('');
  const len = nums.length;
  for (let i = 0; i < len / 2; i++) {
    if (nums[i] !== nums[len - i - 1]) {
      return false;
    }
  }
  return true;
}

export function isPalindromeTwo(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let y = x.toString().split('').reverse().join('');
  return y === x.toString();
}
