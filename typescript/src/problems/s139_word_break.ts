/**
 * @link https://leetcode.com/problems/word-break/
 * @param s
 * @param wordDict
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i]) {
        break;
      }
      if (!dp[j]) {
        continue;
      }
      const sub = s.slice(j, i);
      // console.log('dp[%s] = %s, dp[%s] = %s, sub = %s', i, dp[i], j, dp[j], sub);
      if (dp[j] && words.has(sub)) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}