struct Solution;

impl Solution {
    pub fn minimum_difference(mut nums: Vec<i32>, k: i32) -> i32 {
        nums.sort_unstable();
        let mut res = std::i32::MAX;
        let k = k as usize - 1;
        for i in 0..nums.len() {
            if i + k >= nums.len() {
                break;
            }
            res = std::cmp::min(res, nums[i + k] - nums[i]);
        }
        res
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
            input: (vec![90], 1),
            output: 0,
        },
        Example {
            input: (vec![9, 4, 1, 7], 2),
            output: 2,
        },
        Example {
            input: (vec![9, 4, 1, 7], 4),
            output: 8,
        },
    ];
    for example in examples {
        let (nums, val) = example.input;
        assert_eq!(
            Solution::minimum_difference(nums, val),
            example.output
        );
    }
}
