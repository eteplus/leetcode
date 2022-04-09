/**
 * @link https://leetcode.com/problems/longest-common-prefix/
 * @param strs
 * @returns
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (j >= strs[i].length || strs[i][j] !== prefix[j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
    if (prefix === '') {
      return prefix;
    }
  }
  return prefix;
}