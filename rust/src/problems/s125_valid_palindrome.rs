struct Solution;

impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let mut i = 0;
        let mut j = s.len() - 1;
        let chars = s.to_ascii_lowercase().chars().collect::<Vec<char>>();
        while i < j {
            if !chars[i].is_alphanumeric() {
                i += 1;
            } else if !chars[j].is_alphanumeric() {
                j -= 1;
            } else if chars[i] != chars[j] {
                return false;
            } else {
                i += 1;
                j -= 1;
            }
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
            input: "A man, a plan, a canal: Panama".to_string(),
            output: true,
        },
        Example {
            input: "121".to_string(),
            output: true,
        },
        Example {
            input: "race a car".to_string(),
            output: false,
        },
        Example {
            input: " ".to_string(),
            output: true,
        },
    ];
    for example in examples {
        assert_eq!(Solution::is_palindrome(example.input), example.output);
    }
}
