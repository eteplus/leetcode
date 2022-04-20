struct Solution;

impl Solution {
    pub fn reverse_words(s: String) -> String {
        s.split_whitespace()
            .into_iter()
            .map(|word| word.chars().rev().collect::<String>())
            .collect::<Vec<String>>()
            .join(" ")
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
            input: "Let's take LeetCode contest".to_string(),
            output: "s'teL ekat edoCteeL tsetnoc".to_string(),
        },
        Example {
            input: "God Ding".to_string(),
            output: "doG gniD".to_string(),
        },
    ];
    for example in examples {
        assert_eq!(Solution::reverse_words(example.input), example.output);
    }
}
