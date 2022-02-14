use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut mapper = HashMap::new();
        for num in nums1 {
            mapper.insert(num, true);
        }
        let mut result: Vec<i32> = vec![];
        for num in nums2 {
            if mapper.contains_key(&num) {
                mapper.remove(&num);
                result.push(num);
            }
        }
        result
    }
}

struct Example {
    input: (Vec<i32>, Vec<i32>),
    output: Vec<i32>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 2, 2, 1], vec![2, 2]),
            output: vec![2],
        },
        Example {
            input: (vec![4, 9, 5], vec![9, 4, 9, 8, 4]),
            output: vec![4, 9],
        },
    ];
    for example in examples {
        let (nums1, nums2) = example.input;
        let mut output = Solution::intersection(nums1, nums2);
        output.sort();
        assert_eq!(output, example.output);
    }
}
