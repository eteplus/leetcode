struct Solution;

impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        if target < nums[0] {
            return 0;
        }
        let mut left = 0;
        let mut right = nums.len() - 1;
        while left <= right {
            let mid = left + ((right - left) >> 1);
            if nums[mid] == target {
                return mid as i32;
            }
            if nums[mid] < target {
                left = mid + 1;
            } else {
                right = mid - 1;
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
            input: (vec![1, 3, 5, 6], 5),
            output: 2,
        },
        Example {
            input: (vec![1, 3, 5, 6], 2),
            output: 1,
        },
        Example {
            input: (vec![1, 3, 5, 6], 7),
            output: 4,
        },
    ];
    for example in examples {
        let (nums, target) = example.input;
        assert_eq!(Solution::search_insert(nums, target), example.output);
    }
}
