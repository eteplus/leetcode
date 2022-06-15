export function frequencySort(nums: number[]): number[] {
  const result: number[] = [];
  const map: Map<number, number> = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const sorted = [...map.entries()].sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return a[1] - b[1];
  });
  for (const [num, count] of sorted) {
    for (let i = 0; i < count; i++) {
      result.push(num);
    }
  }
  return result;
}
