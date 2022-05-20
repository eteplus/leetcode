/**
 * @link https://leetcode.com/problems/reverse-only-letters/
 * @param s
 */
export function reverseOnlyLetters(s: string): string {
  let left = 0;
  let right = s.length - 1;
  const chars = s.split('');
  const isLetter = (char: string): boolean => /[a-zA-Z]/.test(char);
  while (left < right) {
    while (left < right && !isLetter(chars[left])) {
      left++;
    }
    while (left < right && !isLetter(chars[right])) {
      right--;
    }
    if (left < right) {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }
  return chars.join('');
}