/**
 * @link https://leetcode.com/problems/valid-palindrome/
 * @param s
 */
export function isPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  const ss = s.toLowerCase();
  const isAlphaNumeric = (code: number) => (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
  while (i < j) {
    if (!isAlphaNumeric(ss.charCodeAt(i))) {
      i += 1;
    } else if (!isAlphaNumeric(ss.charCodeAt(j))) {
      j -= 1;
    } else {
      if (ss[i] !== ss[j]) {
        return false;
      }
      i += 1;
      j -= 1;
    }
  }
  return true;
}
