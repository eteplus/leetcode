struct Solution;

impl Solution {
    pub fn find_lonely(nums: Vec<i32>) -> Vec<i32> {
        let mut result = vec![];
        let mut map = std::collections::HashMap::new();
        for num in &nums {
            *map.entry(num).or_insert(0) += 1;
        }
        for num in &nums {
            let left = num - 1;
            let right = num + 1;
            if let (None, Some(1), None) = (map.get(&left), map.get(&num), map.get(&right)) {
                result.push(*num);
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
            input: vec![10, 6, 5, 8],
            output: vec![10, 8],
        },
        Example {
            input: vec![1, 3, 5, 3],
            output: vec![1, 5],
        },
    ];
    for example in examples {
        assert_eq!(Solution::find_lonely(example.input), example.output);
    }
}
