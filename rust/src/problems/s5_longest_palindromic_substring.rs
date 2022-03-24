struct Solution;

impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let mut start = 0;
        let mut end = 0;
        for i in 0..s.len() {
            let len1 = Solution::find_palindrome(s.as_str(), i, i);
            let len2 = Solution::find_palindrome(s.as_str(), i, i + 1);
            let len = std::cmp::max(len1, len2);
            if len > (end - start + 1) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        s[start..=end].to_string()
    }

    pub fn find_palindrome(s: &str, mut left: usize, mut right: usize) -> usize {
        let bytes = s.as_bytes();
        while right < bytes.len() {
            if bytes[left] != bytes[right] {
                break;
            }
            if left > 0 {
                left -= 1;
                right += 1;
            }
            if left == 0 && right < bytes.len() && bytes[left] == bytes[right] {
                return right - left + 1;
            }
        }
        if right - left > 0 { right - left - 1 } else { 0 }
    }
}

struct Example {
    input: String,
    output: String,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "babad".to_string(),
            output: "bab".to_string(),
        },
        Example {
            input: "babbad".to_string(),
            output: "abba".to_string(),
        },
        Example {
            input: "cbbd".to_string(),
            output: "bb".to_string(),
        },
    ];
    for example in examples {
        assert_eq!(Solution::longest_palindrome(example.input), example.output);
    }
}
