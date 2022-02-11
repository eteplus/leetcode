/**
 * @link https://leetcode.com/problems/merge-intervals/
 */
export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = result[result.length - 1];
    if (last[1] >= current[0]) {
      last[1] = Math.max(last[1], current[1]);
      result[result.length - 1] = last;
    } else {
      result.push(current);
    }
  }
  return result;
}