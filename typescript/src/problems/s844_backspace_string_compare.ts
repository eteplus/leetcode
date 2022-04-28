/**
 * @link https://leetcode.com/problems/backspace-string-compare/
 * @param s
 * @param t
 */
export function backspaceCompare(s: string, t: string): boolean {
  const ss = [];
  const tt = [];
  let i = 0;
  let j = 0;
  while (i < s.length || j < t.length) {
    if (i < s.length) {
      if (s[i] === '#') {
        if (ss.length > 0) {
          ss.pop();
        }
      } else {
        ss.push(s[i]);
      }
      i += 1;
    }
    if (j < t.length) {
      if (t[j] === '#') {
        if (tt.length > 0) {
          tt.pop();
        }
      } else {
        tt.push(t[j]);
      }
      j += 1;
    }
  }

  if (ss.length !== tt.length) {
    return false;
  }
  return ss.join('') === tt.join('');
}
