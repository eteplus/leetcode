/**
 * @link https://leetcode.com/problems/isomorphic-strings/
 * @param s
 * @param t
 */
export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map<string, string>();
  const map2 = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i)) && map.get(s.charAt(i)) !== t.charAt(i)) {
      return false;
    }
    if (map2.has(t.charAt(i)) && map2.get(t.charAt(i)) !== s.charAt(i)) {
      return false;
    }
    map.set(s.charAt(i), t.charAt(i));
    map2.set(t.charAt(i), s.charAt(i));
  }
  return true;
}