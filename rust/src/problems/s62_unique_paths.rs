struct Solution;

impl Solution {
    pub fn unique_paths(m: i32, n: i32) -> i32 {
        let m = m as usize;
        let n = n as usize;
        let mut dp = vec![vec![0; n]; m];
        for i in 0..m {
            for j in 0..n {
                if i == 0 || j == 0 {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }
        }
        dp[m - 1][n - 1]
    }
}

struct Example {
    input: (i32, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (3, 2),
            output: 3,
        },
        Example {
            input: (3, 7),
            output: 28,
        },
    ];
    for example in examples {
        let (m, n) = example.input;
        assert_eq!(Solution::unique_paths(m, n), example.output);
    }
}
