struct Solution;

impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let mut max_sum = nums[0];
        let mut prev = nums[0];
        for i in 1..nums.len() {
            let curr = if prev < 0 {
                nums[i]
            } else {
                nums[i] + prev
            };
            prev = curr;
            max_sum = max_sum.max(curr);
        }
        max_sum
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
            input: vec![-2, 1, -3, 4, -1, 2, 1, -5, 4],
            output: 6,
        },
        Example {
            input: vec![1],
            output: 1,
        },
        Example {
            input: vec![5, 4, -1, 7, 8],
            output: 23,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::max_sub_array(example.input),
            example.output
        );
    }
}