/**
 * @link https://leetcode.com/problems/valid-anagram/
 * @param s
 * @param t
 */
 export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map.get(t[i])) {
      return false;
    }
    map.set(t[i], (map.get(t[i]) ?? 0) - 1);
    if (map.get(t[i]) === 0) {
      map.delete(t[i]);
    }
  }
  return map.size === 0;
}

export function isAnagramTwo(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const s1 = s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  const s2 = t.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }
  return true;
}