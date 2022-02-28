/**
 * Runtime: 133ms
 * Memory Usage: 43.7 MB
 * @link https://leetcode.com/problems/decode-ways/
 * @param s
 */
export function numDecodingsTwo(s: string): number {
  if (s.length === 0 || s[0] === '0') {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  const dp: number[] = [];
  dp[0] = 1;
  for (let i = 1; i < s.length; i++) {
    let x = Number(s[i]);
    let y = Number(s[i - 1] + s[i]);
    if (x <= 0 && (y <= 0 || y > 26)) {
      return 0;
    }
    if (x > 0) {
      if (y >= 10 && y <= 26) {
        dp[i] = dp[i - 1] + (i - 2 < 0 ? 1 : dp[i - 2]);
      } else {
        dp[i] = dp[i - 1];
      }
    } else {
      dp[i] = i - 2 < 0 ? 1 : dp[i - 2];
    }
  }
  return dp[s.length - 1];
}

/**
 * Runtime: 78ms
 * Memory Usage: 44.7 MB
 */
export function numDecodings(s: string): number {
  if (s.length === 0 || s[0] === '0') {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  const dp: number[] = [];
  dp[0] = 1;
  for (let i = 1; i < s.length; i++) {
    let prev = s[i - 1];
    let curr = s[i];
    if (curr === '0') {
      if (!['1', '2'].includes(prev)) {
        // 00, 60 is not allowed
        return 0;
      }
      // 10, 20
      dp[i] = i - 2 < 0 ? 1 : dp[i - 2]
    } else {
      if (prev === '1' || (prev === '2' && ['1', '2', '3', '4', '5', '6'].includes(curr))) {
        // 11 - 26
        dp[i] = dp[i - 1] + (i - 2 < 0 ? 1 : dp[i - 2]);
      } else {
        // 30 - 99
        dp[i] = dp[i - 1];
      }
    }
  }
  return dp[s.length - 1];
}

/**
 * Runtime: 126ms
 * Memory Usage: 46.4 MB
 */
export function numDecodingsWithMap(s: string): number {
  const map = new Map<string, string>();
  let c = 'A';
  for (let i = 1; i <= 26; i++) {
    map.set(String(i), String.fromCharCode(c.charCodeAt(0) + i - 1));
  }
  if (s.length === 0 || s[0] === '0') {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  const dp: number[] = [];
  dp[0] = 1;
  for (let i = 1; i < s.length; i++) {
    if (!map.has(s[i]) && !map.has(s[i - 1] + s[i])) {
      return 0;
    }
    if (map.has(s[i])) {
      if (map.has(s[i - 1] + s[i])) {
        dp[i] = dp[i - 1] + (i - 2 < 0 ? 1 : dp[i - 2]);
      } else {
        dp[i] = dp[i - 1];
      }
    } else {
      dp[i] = i - 2 < 0 ? 1 : dp[i - 2];
    }
  }
  return dp[s.length - 1];
}