/**
 * @link https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * @param arr
 */
export function sumOddLengthSubarrays(arr: number[]): number {
  const prefixSum = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j + i <= arr.length; j += 2) {
      sum += prefixSum[j + i] - prefixSum[i];
    }
  }
  return sum;
}