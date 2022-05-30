struct Solution;

impl Solution {
    pub fn can_be_increasing(nums: Vec<i32>) -> bool {
        if nums.len() <= 1 {
            return true;
        }
        let mut i = 1;
        let mut prev = nums[0];
        let mut removed = false;
        while i < nums.len() {
            if nums[i] <= prev {
                if removed {
                    return false
                }
                removed = true;
                if i == 1 || nums[i] > nums[i - 2] {
                    prev = nums[i];
                }
            } else {
                prev = nums[i]
            }
            i += 1;
        }
        true
    }
}
struct Example {
    input: Vec<i32>,
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![1, 2, 10, 5, 7],
            output: true,
        },
        Example {
            input: vec![2, 3, 1, 2],
            output: false,
        },
        Example {
            input: vec![1, 1, 1],
            output: false,
        },
    ];
    for example in examples {
        assert_eq!(Solution::can_be_increasing(example.input), example.output);
    }
}
