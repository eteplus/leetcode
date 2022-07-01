struct Solution;

impl Solution {
    pub fn max_ascending_sum(nums: Vec<i32>) -> i32 {
        let mut result = nums[0];
        let mut sum = nums[0];
        let mut i = 1;
        while i < nums.len() {
            if nums[i] > nums[i - 1] {
                sum += nums[i];
            } else {
                result = result.max(sum);
                sum = nums[i];
            }
            i += 1;
        }
        result = result.max(sum);
        result
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
            input: vec![10, 20, 30, 5, 10, 50],
            output: 65,
        },
        Example {
            input: vec![10, 20, 30, 40, 50],
            output: 150,
        },
        Example {
            input: vec![12, 17, 15, 13, 10, 11, 12],
            output: 33,
        },
        Example {
            input: vec![3, 6, 10, 1, 8, 9, 9, 8, 9],
            output: 19,
        },
    ];
    for example in examples {
        assert_eq!(Solution::max_ascending_sum(example.input), example.output);
    }
}
