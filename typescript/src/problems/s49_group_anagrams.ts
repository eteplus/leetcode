/**
 * @link https://leetcode.com/problems/group-anagrams/
 * @param strs
 */
export function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (map.has(sortedStr)) {
      map.get(sortedStr)?.push?.(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }
  return Array.from(map.values())
    .map((item) => item.sort())
    .sort((a, b) => a.length - b.length);
}
