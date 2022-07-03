/**
 * @link https://leetcode.com/problems/can-place-flowers/
 * @param flowerbed
 * @param n
 */
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }
  const len = flowerbed.length;
  if (len === 1) {
    return flowerbed[0] === 0 && len === n;
  }
  let count = flowerbed[0] === 0 && flowerbed[1] === 0 ? 1 : 0;
  let prevIndex = 0;
  for (let i = 1; i < len; i++) {
    if (
      i - 1 === prevIndex ||
      flowerbed[i - 1] !== 0 ||
      flowerbed[i] !== 0 ||
      (i + 1 < len && flowerbed[i + 1] !== 0)
    ) {
      continue;
    }
    count += 1;
    prevIndex = i;
  }
  return count >= n;
}
