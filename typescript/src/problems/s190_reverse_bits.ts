/**
 * @link https://leetcode.com/problems/reverse-bits/
 * @param n
 */
export function reverseBits(n: number): number {
  let num = 0;
  for (let i = 0; i < 32 && n > 0; i++) {
    num += (n & 1) << (31 - i);
    n >>>= 1;
  }
  return num >>> 0;
}