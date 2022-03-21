export function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = [0];
  nums.sort((a, b) => a - b);
  for (let i = 1; i <= target; i++) {
    if (dp[i] === undefined) {
      dp[i] = 0;
    }
    for (const num of nums) {
      if (num > target) {
        break;
      }
      if (num <= target && !dp[num]) {
        dp[num] = 1;
      }
      if (i - num >= 0) {
        // console.log('i: %s, num: %s', i, num, dp[i], dp[i - num]);
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
}
