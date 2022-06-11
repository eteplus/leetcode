struct Solution;

impl Solution {
    pub fn can_three_parts_equal_sum(arr: Vec<i32>) -> bool {
        let sum = arr.iter().sum::<i32>();
        if sum % 3 != 0 {
            return false;
        }
        let target = sum / 3;
        let mut sum = 0;
        let mut count = 0;
        for &a in arr.iter() {
            sum += a;
            if sum == target {
                count += 1;
                sum = 0;
            }
        }
        count >= 3
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
            input: vec![0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1],
            output: true,
        },
        Example {
            input: vec![0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1],
            output: false,
        },
        Example {
            input: vec![3, 3, 6, 5, -2, 2, 5, 1, -9, 4],
            output: true,
        },
        Example {
            input: vec![0, 0, 0, 0],
            output: true,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::can_three_parts_equal_sum(example.input),
            example.output
        );
    }
}
