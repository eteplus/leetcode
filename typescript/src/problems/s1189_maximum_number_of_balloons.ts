/**
 * @link https://leetcode.com/problems/maximum-number-of-balloons/
 * @param text
 */
export function maxNumberOfBalloons(text: string): number {
  const map = new Map<string, number>();
  for (const char of text) {
    if (!'balloon'.includes(char)) {
      continue;
    }
    if (map.has(char)) {
      map.set(char, (map.get(char) ?? 0) + 1);
    } else {
      map.set(char, 1);
    }
  }
  if (map.size === 5 && map.has('l') && map.has('o')) {
    return Math.min(
      Math.floor((map.get('l') ?? 0) / 2),
      Math.floor((map.get('o') ?? 0) / 2),
      map.get('n') ?? 0,
      map.get('b') ?? 0,
      map.get('a') ?? 0
    );
  }
  return 0;
}
