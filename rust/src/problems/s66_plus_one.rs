struct Solution;

impl Solution {
    pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
        let mut result = vec![];
        let mut carry = 1;
        for i in (0..digits.len()).rev() {
            let sum = digits[i] + carry;
            result.push(sum % 10);
            carry = sum / 10;
        }
        if carry > 0 {
            result.push(carry);
        }
        result.reverse();
        result
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
            input: vec![1, 2, 3],
            output: vec![1, 2, 4],
        },
        Example {
            input: vec![4, 3, 2, 1],
            output: vec![4, 3, 2, 2],
        },
        Example {
            input: vec![9],
            output: vec![1, 0],
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::plus_one(example.input),
            example.output
        );
    }
}