struct Solution;

impl Solution {
    pub fn reverse_str(s: String, k: i32) -> String {
        let mut chars = s.chars().collect::<Vec<char>>();
        let k = k as usize;
        let mut i = 0;
        while i < chars.len() {
            let mut left = i;
            let mut right = std::cmp::min(i + k - 1, chars.len() - 1);
            while left < right {
                chars.swap(left, right);
                left += 1;
                right -= 1;
            }
            i += 2 * k;
        }
        chars.iter().collect()
    }
}
struct Example {
    input: (String, i32),
    output: String,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: ("abcdefg".to_string(), 2),
            output: "bacdfeg".to_string(),
        },
        Example {
            input: ("abcd".to_string(), 2),
            output: "bacd".to_string(),
        },
    ];
    for example in examples {
        let (s, k) = example.input;
        assert_eq!(Solution::reverse_str(s, k), example.output);
    }
}
