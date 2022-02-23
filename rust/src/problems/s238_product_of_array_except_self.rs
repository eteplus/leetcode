struct Solution;

impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let mut answers = vec![1];
        let length = nums.len();
        for i in 1..length {
            answers.push(answers[i - 1] * nums[i - 1]);
        }
        let mut product = 1;
        for i in (0..length).rev() {
            answers[i] *= product;
            product *= nums[i];
        }
        answers
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
            input: vec![1, 2, 3, 4],
            output: vec![24, 12, 8, 6],
        },
        Example {
            input: vec![-1, 1, 0, -3, 3],
            output: vec![0, 0, 9, 0, 0],
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::product_except_self(example.input),
            example.output
        );
    }
}
