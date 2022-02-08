struct Solution;

impl Solution {
    pub fn contains_duplicate(mut nums: Vec<i32>) -> bool {
        nums.sort();
        let mut i = 1;
        while i < nums.len() {
            if nums[i] == nums[i - 1] {
                return true;
            }
            i += 1;
        }
        false
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
            input: vec![1, 2, 3, 1],
            output: true,
        },
        Example {
            input: vec![1, 1, 2],
            output: true,
        },
        Example {
            input: vec![1, 2, 3, 4],
            output: false,
        },
        Example {
            input: vec![1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
            output: true,
        }
    ];
    for example in examples {
        assert_eq!(Solution::contains_duplicate(example.input), example.output);
    }
}