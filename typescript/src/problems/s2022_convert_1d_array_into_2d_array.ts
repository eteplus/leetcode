/**
 * @link
 * @param original
 * @param m
 * @param n
 */
export function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) {
    return [];
  }

  const result: number[][] = [];
  for (let i = 0; i < m; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      result[i].push(original[i * n + j]);
    }
  }
  return result;
}