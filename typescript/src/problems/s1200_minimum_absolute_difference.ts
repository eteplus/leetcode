/**
 * https://leetcode.com/problems/minimum-absolute-difference/
 * @param arr
 */
export function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let result: number[][] = [];
  let minDiff = Number.MAX_VALUE;
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < minDiff) {
      minDiff = diff;
      result = [[arr[i - 1], arr[i]]];
    } else if (diff === minDiff) {
      result.push([arr[i - 1], arr[i]]);
    }
  }
  return result;
}
