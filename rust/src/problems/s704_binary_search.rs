struct Solution;

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = (nums.len() - 1) as i32;
        while left <= right {
            let mid = left + ((right - left) >> 1);
            if nums[mid as usize] == target {
                return mid;
            }
            if nums[mid as usize] < target {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        -1
    }
}

struct Example {
    input: (Vec<i32>, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        // Example {
        //     input: (vec![-1, 0, 3, 5, 9, 12], 9),
        //     output: 4,
        // },
        // Example {
        //     input: (vec![-1, 0, 3, 5, 9, 12], 13),
        //     output: -1,
        // },
        // Example {
        //     input: (vec![-1, 0, 3, 5, 9, 12], 2),
        //     output: -1,
        // },
        // Example {
        //     input: (vec![1, 3, 5, 6], 7),
        //     output: -1,
        // },
        // Example {
        //     input: (vec![5], -5),
        //     output: -1,
        // },
        // Example {
        //     input: (vec![2,5], 0),
        //     output: -1,
        // },
        Example {
            input: (vec![2,5], 5),
            output: 1,
        }
    ];
    for example in examples {
        let (nums, target) = example.input;
        assert_eq!(Solution::search(nums, target), example.output);
    }
}
