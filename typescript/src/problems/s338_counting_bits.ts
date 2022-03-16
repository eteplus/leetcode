/**
 * @link https://leetcode.com/problems/counting-bits/
 * @param n
 */
export function countBits(n: number): number[] {
  const result: number[] = [];
  result[0] = 0;
  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }
  return result;
}