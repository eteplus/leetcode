/**
 * @link https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
export function intersect(nums1: number[], nums2: number[]): number[] {
  const mapper: { [key: number]: number } = {};
  for (const num of nums1) {
    if (mapper[num]) {
      mapper[num] += 1;
    } else {
      mapper[num] = 1;
    }
  }
  const result: number[] = [];
  for (const num of nums2) {
    if (mapper[num]) {
      mapper[num] -= 1;
      result.push(num);
    }
  }
  return result;
}
