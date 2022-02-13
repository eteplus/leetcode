use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn intersect(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut mapper: HashMap<i32, i32> = HashMap::new();
        for num in nums1 {
            let count = mapper.entry(num).or_insert(0);
            *count += 1;
        }
        let mut result: Vec<i32> = vec![];
        for num in nums2 {
            if let Some(count) = mapper.get_mut(&num) {
                if *count > 0 {
                    result.push(num);
                    *count -= 1;
                }
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
            output: vec![2, 2],
        },
        Example {
            input: (vec![4, 9, 5], vec![9, 4, 9, 8, 4]),
            output: vec![4, 9],
        },
        Example {
            input: (vec![3, 1, 2], vec![1, 1]),
            output: vec![1],
        },
    ];
    for example in examples {
        let (nums1, nums2) = example.input;
        let mut output = Solution::intersect(nums1, nums2);
        output.sort();
        assert_eq!(output, example.output);
    }
}
