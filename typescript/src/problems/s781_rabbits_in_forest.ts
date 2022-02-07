/**
 * @link https://leetcode.com/problems/rabbits-in-forest/
 */
export function numRabbits(answers: number[]): number {
  const mapper: { [key: number]: number } = {};
  let count = 0;
  for (const num of answers) {
    if (!mapper[num]) {
      mapper[num] = 1;
      count += num + 1;
    } else if (mapper[num] <= num) {
      mapper[num]++;
    } else if (mapper[num] > num) {
      mapper[num] = 1;
      count += num + 1;
    }
  }
  return count;
}