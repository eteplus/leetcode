/**
 * @link https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 * @param arr
 */
export function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  if (sum % 3 !== 0) {
    return false;
  }
  const target = sum / 3;
  let count = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i];
    if (sum2 === target) {
      count += 1;
      sum2 = 0;
    }
  }
  return count >= 3;
}