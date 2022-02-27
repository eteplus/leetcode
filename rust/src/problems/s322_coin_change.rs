use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
        let n = (amount + 1) as usize;
        let mut dp = vec![amount + 1; n];
        dp[0] = 0;
        for i in 1..n {
            for coin in &coins {
                let k = *coin as usize;
                if i >= k {
                    dp[i] = std::cmp::min(dp[i], dp[i - k] + 1);
                }
            }
        }
        if dp[n - 1] > amount {
            -1
        } else {
            dp[n - 1]
        }
    }
}

struct Example {
    input: (Vec<i32>, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 2, 5], 11),
            output: 3,
        },
        Example {
            input: (vec![2], 3),
            output: -1,
        },
        Example {
            input: (vec![1], 0),
            output: 0,
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::coin_change(example.input.0, example.input.1),
            example.output
        );
    }
}
