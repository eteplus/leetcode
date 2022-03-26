struct Solution;

impl Solution {
    pub fn count_substrings(s: String) -> i32 {
        let mut count = 0;
        for i in 0..s.len() {
            count += Self::find_palindrome(s.as_bytes(), i, i);
            count += Self::find_palindrome(s.as_bytes(), i, i + 1);
        }
        count
    }

    pub fn find_palindrome(bytes: &[u8], mut left: usize, mut right: usize) -> i32 {
        let mut count = 0;
        while right < bytes.len() {
            if bytes[left] != bytes[right] {
                break;
            }
            count += 1;
            if left > 0 {
                left -= 1;
                right += 1;
            } else {
                break;
            }
        }
        count
    }
}

struct Example {
    input: String,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "babad".to_string(),
            output: 7,
        },
        Example {
            input: "babbad".to_string(),
            output: 9,
        },
        Example {
            input: "cbbd".to_string(),
            output: 5,
        },
        Example {
            input: "abc".to_string(),
            output: 3,
        },
        Example {
            input: "aaa".to_string(),
            output: 6,
        },
    ];
    for example in examples {
        assert_eq!(Solution::count_substrings(example.input), example.output);
    }
}
