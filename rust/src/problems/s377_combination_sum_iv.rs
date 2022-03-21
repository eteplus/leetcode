struct Solution;

impl Solution {
    pub fn combination_sum4(nums: Vec<i32>, target: i32) -> i32 {
        let mut dp = vec![0; target as usize + 1];
        dp[0] = 1;
        for i in 1..=target {
            for num in nums.iter() {
                if i >= *num {
                    dp[i as usize] += dp[(i - *num) as usize];
                }
            }
        }
        dp[target as usize]
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
            input: (
                vec![
                   1, 2, 3
                ],
                4,
            ),
            output: 7,
        },
        Example {
            input: (vec![9], 3),
            output: 0,
        },
        Example {
            input: (vec![11, 13, 15, 17], 15),
            output: 1,
        },
        Example {
            input: (vec![1, 2, 3], 6),
            output: 24,
        },
        Example {
            input: (vec![3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 10),
            output: 9,
        },
    ];
    for example in examples {
        let (nums, target) = example.input;
        assert_eq!(Solution::combination_sum4(nums, target), example.output);
    }
}
