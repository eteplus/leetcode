/**
 * @link https://leetcode.com/problems/contains-duplicate-iii/
 * @param nums
 * @param k
 * @param t
 */
export function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  const getIdx = (x: number, w: number) => x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const id = getIdx(num, t + 1);
    if (map.has(id)) {
      return true;
    }
    if (map.has(id - 1) && Math.abs((map.get(id - 1) ?? 0) - num) <= t) {
      return true;
    }
    if (map.has(id + 1) && Math.abs((map.get(id + 1) ?? 0) - num) <= t) {
      return true;
    }
    map.set(id, num);
    if (i >= k) {
      map.delete(getIdx(nums[i - k], t + 1));
    }
  }
  return false;
}