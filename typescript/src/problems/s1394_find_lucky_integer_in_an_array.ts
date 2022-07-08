/**
 * @link https://leetcode.com/problems/find-lucky-integer-in-an-array/
 * @param arr
 */
export function findLucky(arr: number[]): number {
  let lucky = -1;
  // let prefix = -1;
  let count = 1;
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count += 1;
    } else {
      if (arr[i - 1] === count) {
        lucky = arr[i - 1];
      }
      count = 1;
    }
    if (i === arr.length -1 && count === arr[i]) {
      lucky = arr[i];
    }
  }
  // const map = new Map<number, number>();
  // for (const num of arr) {
  //   const count = (map.get(num) ?? 0) + 1;
  //   map.set(num, count);
  //   if (count === num && num > lucky) {
  //     prefix = lucky;
  //     lucky = num;
  //   } else if (count !== num && lucky === num) {
  //     lucky = prefix;
  //   }
  // }
  // for (const num of arr) {
  //   if (map.get(num) === num) {
  //     lucky = Math.max(lucky, num);
  //   }
  // }
  return lucky;
}
