struct Solution;

impl Solution {
    pub fn maximum_difference(nums: Vec<i32>) -> i32 {
        let mut i = (nums.len() - 1) as i32;
        let mut max_diff = -1;
        let mut max_num = nums[i as usize];
        while i >= 0 {
            let num = nums[i as usize];
            if num >= max_num {
                max_num = num;
            } else {
                max_diff = max_diff.max(max_num - num);
            }
            i -= 1;
        }
        max_diff
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
            input: vec![7, 1, 5, 4],
            output: 4,
        },
        Example {
            input: vec![9, 4, 3, 2],
            output: -1,
        },
        Example {
            input: vec![1, 5, 2, 10],
            output: 9,
        }
    ];
    for example in examples {
        assert_eq!(Solution::maximum_difference(example.input), example.output);
    }
}
