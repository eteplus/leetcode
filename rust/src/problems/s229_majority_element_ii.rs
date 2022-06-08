struct Solution;

impl Solution {
    pub fn majority_element(mut nums: Vec<i32>) -> Vec<i32> {
        if nums.len() < 2 {
            return nums;
        }
        nums.sort_unstable();
        let mut result = vec![];
        let max = nums.len() / 3;
        let mut count = 0;
        let mut prefix = nums[0];
        for i in 0..nums.len() {
            if nums[i] == prefix {
                count += 1;
            } else {
                if count > max {
                    result.push(prefix);
                }
                prefix = nums[i];
                count = 1;
            }

            if i == nums.len() - 1 && count > max {
                result.push(prefix);
            }
        }
        result
    }
}

struct Example {
    input: Vec<i32>,
    output: Vec<i32>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![2, 2],
            output: vec![2],
        },
        Example {
            input: vec![3, 2, 3],
            output: vec![3],
        },
        Example {
            input: vec![1],
            output: vec![1],
        },
        Example {
            input: vec![1, 2],
            output: vec![1, 2],
        }
    ];
    for example in examples {
        assert_eq!(Solution::majority_element(example.input), example.output);
    }
}
