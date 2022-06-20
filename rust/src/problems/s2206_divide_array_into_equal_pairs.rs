struct Solution;

impl Solution {
    pub fn divide_array(nums: Vec<i32>) -> bool {
        let mut map = std::collections::HashMap::new();
        for num in nums {
            *map.entry(num).or_insert(0) += 1;
        }
        map.iter().all(|(_, v)| v % 2 == 0)
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
            input: vec![3, 2, 3, 2, 2, 2],
            output: true,
        },
        Example {
            input: vec![1, 2, 3, 4],
            output: false,
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::divide_array(example.input),
            example.output
        );
    }
}