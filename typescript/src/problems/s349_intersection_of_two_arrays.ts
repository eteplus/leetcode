/**
 * @link https://leetcode.com/problems/intersection-of-two-arrays/
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
  const mapper: { [key: number]: boolean } = {};
  for (const num of nums1) {
    mapper[num] = true;
  }
  const result: number[] = [];
  for (const num of nums2) {
    if (mapper[num]) {
      result.push(num);
      mapper[num] = false;
    }
  }
  return result;
}
