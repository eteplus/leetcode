/**
 * @link https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * @param s
 */
export function reverseWords(s: string): string {
  const words = s.split(' ').map((word) => {
    return word.split('').reverse().join('');
  });
  return words.join(' ');
}