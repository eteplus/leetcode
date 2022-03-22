struct Solution;

impl Solution {
    pub fn longest_common_subsequence(text1: String, text2: String) -> i32 {
        let n = text1.len();
        let m = text2.len();
        let mut dp = vec![vec![0; m + 1]; n + 1];
        let s1 = text1.as_bytes();
        let s2 = text2.as_bytes();
        for i in 1..=n {
            for j in 1..=m {
                if s1[i - 1] == s2[j - 1] {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = dp[i - 1][j].max(dp[i][j - 1]);
                }
            }
        }
        dp[n][m]
    }
}

struct Example {
    input: (String, String),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (
                "abcde".to_string(),
                "ace".to_string(),
            ),
            output: 3,
        },
        Example {
            input: (
                "abc".to_string(),
                "abc".to_string(),
            ),
            output: 3,
        },
        Example {
            input: (
                "abc".to_string(),
                "def".to_string(),
            ),
            output: 0,
        },
    ];
    for example in examples {
        let (text1, text2) = example.input;
        assert_eq!(Solution::longest_common_subsequence(text1, text2), example.output);
    }
}
