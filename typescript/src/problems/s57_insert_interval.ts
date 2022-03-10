/**
 * @link https://leetcode.com/problems/insert-interval/
 */
export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let [left, right] = newInterval;
  let i = 0;
  while (i < intervals.length) {
    const current = intervals[i];
    if (right < current[0]) {
      break;
    }
    if (left > current[1]) {
      result.push(current);
    } else {
      left = Math.min(left, current[0]);
      right = Math.max(right, current[1]);
    }
    i += 1;
  }
  result.push([left, right]);
  while (i < intervals.length) {
    result.push(intervals[i]);
    i += 1;
  }
  return result;
}