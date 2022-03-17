/**
 * @link https://leetcode.com/problems/number-of-1-bits/
 * @param n
 */
export function hammingWeight(n: number): number {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n = ~~(n / 2);
  }
  return count;
}

export function hammingWeightTwo(n: number): number {
  return n.toString(2).match(/1/g)?.length ?? 0;
}

export function hammingWeightThree(n: number): number {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    // will be negative
    // n = n >> 1;
    n >>>= 1;
  }
  return count;
}
