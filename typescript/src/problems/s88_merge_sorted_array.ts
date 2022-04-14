/**
 * @link https://leetcode.com/problems/merge-sorted-array/
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 || j >= 0) {
    let num = -1;
    if (i < 0) {
      num = nums2[j];
      j -= 1;
    } else if (j < 0) {
      num = nums1[i];
      i -= 1;
    } else if (nums1[i] > nums2[j]) {
      num = nums1[i];
      i -= 1;
    } else {
      num = nums2[j];
      j -= 1;
    }
    nums1[k] = num;
    k -= 1;
  }
}