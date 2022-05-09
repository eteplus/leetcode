/**
 * @link https://leetcode.com/problems/top-k-frequent-words/
 * @param words
 * @param k
 */
export function topKFrequent(words: string[], k: number): string[] {
  const map = new Map<string, number>();
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  const sorted = [...map.entries()].sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1]
    }
    return a[0].localeCompare(b[0]);
  });
  return sorted.slice(0, k).map(([word]) => word);
}