struct Solution;

impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashSet;
        let n = nums.len();
        let set: HashSet<i32> = nums.into_iter().collect();
        let mut result = vec![];
        for i in 1..=n as i32 {
            if !set.contains(&i) {
                result.push(i);
            }
        }
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
            input: vec![4, 3, 2, 7, 8, 2, 3, 1],
            output: vec![5, 6],
        },
        Example {
            input: vec![1, 1],
            output: vec![2],
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::find_disappeared_numbers(example.input),
            example.output
        );
    }
}
