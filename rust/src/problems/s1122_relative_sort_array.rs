struct Solution;

impl Solution {
    pub fn relative_sort_array(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
        let mut result = vec![];
        let mut map = std::collections::HashMap::new();
        for num in arr1 {
            *map.entry(num).or_insert(0) += 1;
        }
        for num in arr2 {
            let count = map.remove(&num).unwrap();
            for _ in 0..count {
                result.push(num);
            }
        }
        let mut sorted = map.iter().collect::<Vec<_>>();
        sorted.sort_by_key(|&(v, _) | v);
        for (num, count) in sorted {
            for _ in 0..*count {
                result.push(*num);
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
            input: (
                vec![2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
                vec![2, 1, 4, 3, 9, 6],
            ),
            output: vec![2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
        },
        Example {
            input: (vec![28, 6, 22, 8, 44, 17], vec![22, 28, 8, 6]),
            output: vec![22, 28, 8, 6, 17, 44],
        },
        Example {
            input: (
                vec![
                    2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31,
                ],
                vec![2, 42, 38, 0, 43, 21],
            ),
            output: vec![
                2, 42, 38, 0, 43, 21, 5, 7, 12, 12, 13, 23, 24, 24, 27, 29, 30, 31, 33, 48,
            ],
        },
        Example {
            input: (vec![1, 2, 3, 4, 5], vec![2, 4]),
            output: vec![2, 4, 1, 3, 5],
        },
    ];
    for example in examples {
        let (nums1, nums2) = example.input;
        assert_eq!(Solution::relative_sort_array(nums1, nums2), example.output);
    }
}
