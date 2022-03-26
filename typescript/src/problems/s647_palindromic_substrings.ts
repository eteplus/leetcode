
/**
 * @link https://leetcode.com/problems/palindromic-substrings/
 * @param s
 */
export function countSubstrings(s: string): number {
  const findPalindromes = (left: number, right: number): number => {
    let count = 0;
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) {
        break;
      }
      count += 1;
      left -= 1;
      right += 1;
    }
    return count;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += findPalindromes(i, i);
    count += findPalindromes(i, i + 1);
  }
  return count;
}