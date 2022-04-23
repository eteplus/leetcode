/**
 * @link
 * @param arr1
 * @param arr2
 */
export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], (map.get(arr1[i]) ?? 0) + 1);
  }
  const result: number[] = [];
  for (let i = 0; i < arr2.length; i++) {
    const count = map.get(arr2[i]) ?? 0;
    for (let j = 0; j < count; j++) {
      result.push(arr2[i]);
    }
    if (count > 0) {
      map.delete(arr2[i]);
    }
  }
  const sorted = [...map.entries()].sort((a, b) => a[0] - b[0]);
  for (const [key, value] of sorted) {
    for (let i = 0; i < value; i++) {
      result.push(key);
    }
  }
  return result;
}
