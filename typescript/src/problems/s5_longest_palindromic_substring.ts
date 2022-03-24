/**
 * @link https://leetcode.com/problems/longest-palindromic-substring/
 * @param s
 */
export function longestPalindrome(s: string): string {
  let start = 0;
  let end = 0;
  const findPalindrome = (left: number, right: number): number => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left -= 1;
        right += 1;
      }
      // console.log('left: %s right:%s', left, right, right - left - 1);
      return right - left - 1;
  }
  for (let i = 0; i < s.length; i++) {
    let len1 = findPalindrome(i, i);
    let len2 = findPalindrome(i, i + 1);
    let len = Math.max(len1, len2);
    if (len > (end - start) + 1) {
      start = i - ((len - 1) >> 1);
      end = i + (len >> 1);
    }
  }
  return s.slice(start, end + 1);
}