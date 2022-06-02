/**
 * @link https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 * @param students
 * @param sandwiches
 */
export function countStudents(students: number[], sandwiches: number[]): number {
  const counter: { [key: number]: number } = {};
  for(const num of students) {
    counter[num] = (counter?.[num] ?? 0) + 1;
  }
  for (let i = 0; i < sandwiches.length; i++) {
    if (counter[sandwiches[i]] > 0) {
      counter[sandwiches[i]] -= 1;
    } else {
      return sandwiches.length - i;
    }
  }
  return 0;
}