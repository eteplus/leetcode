struct Solution;

impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let n = s.len();
        let chars = s.chars().collect::<Vec<char>>();
        if n == 0 || chars[0] == '0' {
            return 0;
        }
        if n == 1 {
            return 1;
        }
        let mut dp = vec![0; n];
        dp[0] = 1;
        for i in 1..n {
            let x = chars[i] as i32 - '0' as i32;
            let y = chars[i - 1] as i32 - '0' as i32;
            let y = y * 10 + x;
            if x <= 0 && (y <= 0 || y > 26) {
                return 0;
            }
            if x > 0 {
                if y >= 10 && y <= 26 {
                    dp[i] = dp[i - 1] + if i < 2 { 1 } else { dp[i - 2] };
                } else {
                    dp[i] = dp[i - 1]
                }
            } else {
                dp[i] = if i < 2 { 1 } else { dp[i - 2] };
            }
        }
        dp[n - 1]
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
            input: "11106".to_string(),
            output: 2,
        },
        Example {
            input: "1123".to_string(),
            output: 5,
        },
        Example {
            input: "1011".to_string(),
            output: 2,
        },
        Example {
            input: "12".to_string(),
            output: 2,
        },
        Example {
            input: "10".to_string(),
            output: 1,
        },
        Example {
            input: "226".to_string(),
            output: 3,
        },
        Example {
            input: "06".to_string(),
            output: 0,
        },
        Example {
            input: "60".to_string(),
            output: 0,
        },
    ];
    for example in examples {
        assert_eq!(Solution::num_decodings(example.input), example.output);
    }
}
