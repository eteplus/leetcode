/**
 * @link https://leetcode.com/problems/reverse-string/
 * @param s
 */
export function reverseStr(s: string, k: number): string {
  const strs = s.split('');
  for (let i = 0; i < strs.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, strs.length - 1);
    while (left < right) {
      const temp = strs[left];
      strs[left] = s[right];
      strs[right] = temp;
      left += 1;
      right -= 1;
    }
  }
  return strs.join('');
}