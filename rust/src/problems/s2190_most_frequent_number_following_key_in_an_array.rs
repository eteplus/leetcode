struct Solution;

impl Solution {
    pub fn most_frequent(nums: Vec<i32>, key: i32) -> i32 {
        let mut map = std::collections::HashMap::new();
        let mut i = 0;
        let len = nums.len() - 2;
        while i <= len {
            if nums[i] == key {
                *map.entry(nums[i + 1]).or_insert(0) += 1;
            }
            i += 1;
        }
        let result = map.iter().max_by_key(|a| a.1).unwrap();
        *result.0
    }
}

struct Example {
    input: (Vec<i32>, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 100, 200, 1, 100], 1),
            output: 100,
        },
        Example {
            input: (vec![2, 2, 2, 2, 3], 2),
            output: 2,
        },
    ];
    for example in examples {
        let (nums, key) = example.input;
        assert_eq!(Solution::most_frequent(nums, key), example.output);
    }
}
