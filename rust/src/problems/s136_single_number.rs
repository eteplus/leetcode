struct Solution;

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        for num in nums {
            result ^= num;
        }
        result
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
            input: vec![2, 2, 1],
            output: 1,
        },
        Example {
            input: vec![1],
            output: 1,
        },
        Example {
            input: vec![4, 1, 2, 1, 2],
            output: 4,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::single_number(example.input),
            example.output
        );
    }
}