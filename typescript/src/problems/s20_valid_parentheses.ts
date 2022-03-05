/**
 * @link https://leetcode.com/problems/valid-parentheses/
 * @param s
 */
export function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === '[' || c === '{' || c === '(') {
      stack.push(c);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    switch (c) {
      case ']': {
        if (stack.pop() !== '[') {
          return false;
        }
        break;
      }
      case '}': {
        if (stack.pop() !== '{') {
          return false;
        }
        break;
      }
      case ')': {
        if (stack.pop() !== '(') {
          return false;
        }
        break;
      }
    }
  }
  return stack.length === 0;
}