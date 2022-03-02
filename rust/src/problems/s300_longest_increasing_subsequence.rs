struct Solution;

impl Solution {
    pub fn length_of_lis(nums: Vec<i32>) -> i32 {
        let mut dp = vec![1; nums.len()];
        for i in 0..nums.len() {
            for j in 0..i {
                if nums[i] > nums[j] {
                    dp[i] = std::cmp::max(dp[i], dp[j] + 1);
                }
            }
        }
        *dp.iter().max().unwrap()
    }
}

struct Example {
    input: Vec<i32>,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![2, 3, -2, 4],
            output: 3,
        },
        Example {
            input: vec![7, 7, 7, 7, 7, 7, 7],
            output: 1,
        },
        Example {
            input: vec![10, 9, 2, 5, 3, 7, 101, 18],
            output: 4,
        },
        Example {
            input: vec![0, 1, 0, 3, 2, 3],
            output: 4,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::length_of_lis(example.input),
            example.output
        );
    }
}