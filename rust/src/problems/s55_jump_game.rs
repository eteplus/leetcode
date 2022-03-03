struct Solution;

impl Solution {
    pub fn can_jump(nums: Vec<i32>) -> bool {
        let len = nums.len();
        let mut max_reach = 0;
        let mut i = 0;
        while i <= max_reach && i < len {
            max_reach = max_reach.max(i + nums[i] as usize);
            i += 1;
        }
        max_reach >= len - 1
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
            input: vec![3, 2, 1, 0, 4],
            output: false,
        },
        Example {
            input: vec![1],
            output: true,
        },
        Example {
            input: vec![2, 3, 1, 1, 4],
            output: true,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::can_jump(example.input),
            example.output
        );
    }
}