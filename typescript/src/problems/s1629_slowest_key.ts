/**
 * @link https://leetcode.com/problems/slowest-key/
 * @param releaseTimes
 * @param keysPressed
 */
export function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let maxTime = releaseTimes[0];
  let maxKey = keysPressed[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    const diff = releaseTimes[i] - releaseTimes[i - 1];
    if (diff > maxTime) {
      maxTime = diff;
      maxKey = keysPressed[i];
    } else if (diff === maxTime) {
      maxKey = maxKey > keysPressed[i] ? maxKey : keysPressed[i];
    }
  }
  return maxKey;
}