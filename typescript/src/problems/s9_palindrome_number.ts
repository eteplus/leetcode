/**
 * @link https://leetcode.com/problems/palindrome-number/
 * @param x
 */
export function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  if (x % 10 === 0) {
    return false;
  }
  const nums = x.toString();
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
  if (x < 10) {
    return true;
  }
  if (x % 10 === 0) {
    return false;
  }
  let s = x.toString();
  let y = s.split('').reverse().join('');
  return y === s;
}
