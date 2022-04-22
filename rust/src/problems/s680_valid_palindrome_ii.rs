struct Solution;

impl Solution {
    pub fn valid_palindrome(s: String) -> bool {
        let bytes = s.as_bytes();
        let mut left = 0;
        let mut right = bytes.len() - 1;
        while left < right {
            if bytes[left] != bytes[right] {
                return Solution::is_palindrome(&bytes[left + 1..=right])
                    || Solution::is_palindrome(&bytes[left..=right - 1]);
            }
            if right == 0 {
                break;
            }
            left += 1;
            right -= 1;
        }
        true
    }

    pub fn is_palindrome(bytes: &[u8]) -> bool {
        if bytes.len() <= 1 {
            return true;
        }
        let mut left = 0;
        let mut right = bytes.len() - 1;
        while left < right {
            if bytes[left] != bytes[right] {
                return false;
            }
            if right == 0 {
                break;
            }
            left += 1;
            right -= 1;
        }
        true
    }
}

struct Example {
    input: String,
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "aba".to_string(),
            output: true,
        },
        Example {
            input: "abca".to_string(),
            output: true,
        },
        Example {
            input: "abc".to_string(),
            output: false,
        },
    ];
    for example in examples {
        assert_eq!(Solution::valid_palindrome(example.input), example.output);
    }
}
