/**
 * @link https://leetcode.com/problems/assign-cookies/
 * @param g
 * @param s
 */
export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i += 1;
      j += 1;
      count += 1;
    } else {
      j += 1;
    }
  }
  return count;
}
