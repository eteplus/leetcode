struct Solution;

impl Solution {
    /**
     * Space: O(n)
     */
    pub fn climb_stairs(n: i32) -> i32 {
        let n = n as usize;
        let mut dp = vec![1; 2];
        for i in 2..=n {
            dp.push(dp[i - 1] + dp[i - 2]);
        }
        dp[n]
    }

    /**
     * Space: O(1)
     */
    pub fn climb_stairs_o_1(n: i32) -> i32 {
        let mut dp1 = 1;
        let mut dp2 = 1;
        let mut result = 1;
        for _ in 2..=n {
            result = dp1 + dp2;
            dp2 = dp1;
            dp1 = result;
        }
        result
    }
}

struct Example {
    input: i32,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: 1,
            output: 1,
        },
        Example {
            input: 2,
            output: 2,
        },
        Example {
            input: 3,
            output: 3,
        },
        Example {
            input: 4,
            output: 5,
        },
        Example {
            input: 6,
            output: 13,
        },
    ];
    for example in examples {
        assert_eq!(Solution::climb_stairs(example.input), example.output);
    }
}
