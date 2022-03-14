
/**
 * @link https://leetcode.com/problems/non-overlapping-intervals/
 * @param intervals
 */
export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let length = intervals.length;
  let prev = intervals[length - 1];
  let count = 0;
  for (let i = length - 2; i >= 0; i--) {
    const curr = intervals[i];
    if (prev[0] >= curr[1]) {
      prev = curr;
    } else {
      count += 1;
      prev = [Math.max(prev[0], curr[0]), Math.max(prev[1], curr[1])];
    }
  }
  return count;
}