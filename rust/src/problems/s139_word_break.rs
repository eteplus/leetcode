struct Solution;

impl Solution {
    pub fn word_break(s: String, word_dict: Vec<String>) -> bool {
        let words = word_dict
            .iter()
            .map(|w| w.as_str())
            .collect::<std::collections::HashSet<&str>>();
        let mut dp = vec![false; s.len() + 1];
        dp[0] = true;
        for i in 1..=s.len() {
            for j in 0..i {
                if dp[i] {
                    break;
                }
                if !dp[j] {
                    continue;
                }
                if dp[j] && words.contains(&s[j..i]) {
                    dp[i] = true;
                    break;
                }
            }
        }
        dp[s.len()]
    }
}
struct Example {
    input: (String, Vec<String>),
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (
                "leetcode".to_string(),
                vec!["leet".to_string(), "code".to_string()],
            ),
            output: true,
        },
        Example {
            input: (
                "applepenapple".to_string(),
                vec!["apple".to_string(), "pen".to_string()],
            ),
            output: true,
        },
        Example {
            input: (
                "catsandog".to_string(),
                vec![
                    "cats".to_string(),
                    "dog".to_string(),
                    "sand".to_string(),
                    "and".to_string(),
                    "cat".to_string(),
                ],
            ),
            output: false,
        },
    ];
    for example in examples {
        let (s, word_dict) = example.input;
        assert_eq!(Solution::word_break(s, word_dict), example.output);
    }
}
