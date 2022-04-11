/**
 * @link https://leetcode.com/problems/length-of-last-word/
 * @param s
 */
export function lengthOfLastWord(s: string): number {
  const words = s.trim().split(' ');
  return words[words.length - 1]?.length ?? 0;
}