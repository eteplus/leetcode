struct Solution;

impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let total = ((n + 1) * n / 2) as i32;
        let sum = nums.iter().sum::<i32>();
        total - sum
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
            input: vec![3, 0, 1],
            output: 2,
        },
        Example {
            input: vec![0, 1],
            output: 2,
        },
        Example {
            input: vec![9, 6, 4, 2, 3, 5, 7, 0, 1],
            output: 8,
        },
    ];
    for example in examples {
        assert_eq!(Solution::missing_number(example.input), example.output);
    }
}
