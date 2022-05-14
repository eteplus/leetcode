/**
 * @link https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * @param arr
 */
export function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return - 1;
}