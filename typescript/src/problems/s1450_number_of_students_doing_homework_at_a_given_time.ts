/**
 * @link https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 * @param startTime
 * @param endTime
 * @param queryTime
 */
export function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      count += 1;
    }
  }
  return count;
}