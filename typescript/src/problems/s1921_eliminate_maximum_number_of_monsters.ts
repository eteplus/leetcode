/**
 * @link https://leetcode.com/problems/eliminate-maximum-number-of-monsters/
 * @param dist
 * @param speed
 */
export function eliminateMaximum(dist: number[], speed: number[]): number {
  const result = dist.map((d, i) => Math.ceil(d / speed[i]));
  result.sort((a, b) => a - b);
  for (let i = 1; i < result.length; i++) {
    if (result[i] < i + 1) {
      return i;
    }
  }
  return result.length;
}