struct Solution;

impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        if nums.is_empty() {
            return 0;
        }
        let mut left = 0;
        let mut right = nums.len() - 1;
        while left <= right {
            if left == right {
                if nums[left] != val {
                    left += 1;
                }
                break;
            }
            if nums[left] == val {
                if nums[right] != val {
                    nums.swap(left, right);
                    left += 1;
                }
                right -= 1;
            } else {
                left += 1;
                if nums[right] == val {
                    right -= 1;
                }
            }
        }
        left as i32
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
            input: (vec![2], 2),
            output: 0,
        },
        Example {
            input: (vec![2, 2, 3], 2),
            output: 1,
        },
        Example {
            input: (vec![1, 1, 1, 2, 2, 2, 2], 1),
            output: 4,
        },
        Example {
            input: (vec![1, 1, 2], 2),
            output: 2,
        },
        Example {
            input: (vec![0, 1, 2, 2, 3, 0, 4, 2], 2),
            output: 5,
        },
    ];
    for example in examples {
        let (mut nums, val) = example.input;
        assert_eq!(Solution::remove_element(nums.as_mut(), val), example.output);
    }
}
