struct Solution;

impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        let mut left = 0;
        let mut right = numbers.len() - 1;
        while left < right {
            match numbers[left] + numbers[right] {
                x if x == target => return vec![left as i32 + 1, right as i32 + 1],
                x if x < target => left += 1,
                _ => right -= 1,
            }
        }
        vec![-1, -1]
    }
}

struct Example {
    input: (Vec<i32>, i32),
    output: Vec<i32>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![2, 7, 11, 15], 9),
            output: vec![1, 2],
        },
        Example {
            input: (vec![2, 3, 4], 6),
            output: vec![1, 3],
        },
        Example {
            input: (vec![-1, 0], -1),
            output: vec![1, 2],
        },
        Example {
            input: (vec![-5, -4, -3, -2, -1], -8),
            output: vec![1, 3],
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::two_sum(example.input.0, example.input.1),
            example.output
        );
    }
}
