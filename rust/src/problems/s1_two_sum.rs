use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<i32, i32> = HashMap::with_capacity(nums.len());
        for (index, &num) in nums.iter().enumerate() {
            let complement = target - num;
            match map.get(&complement) {
                None => map.insert(num, index as i32),
                Some(v) => return vec![*v as i32, index as i32],
            };
        }
        vec![]
    }
}

struct Example {
    input: (Vec<i32>, i32),
    output: Vec<i32>,
}

#[test]
pub fn test() {
    Solution::two_sum(vec![2, 7, 11, 15], 9);
    let examples = vec![
        Example {
            input: (vec![2, 7, 11, 15], 9),
            output: vec![0, 1],
        },
        Example {
            input: (vec![3, 2, 4], 6),
            output: vec![1, 2],
        },
        Example {
            input: (vec![3, 3], 6),
            output: vec![0, 1],
        },
        Example {
            input: (vec![-1, -2, -3, -4, -5], -8),
            output: vec![2, 4],
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::two_sum(example.input.0, example.input.1),
            example.output
        );
    }
}
