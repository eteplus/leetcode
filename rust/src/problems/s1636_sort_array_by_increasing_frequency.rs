struct Solution;

impl Solution {
    pub fn frequency_sort(nums: Vec<i32>) -> Vec<i32> {
        let mut result = vec![];
        let mut map = std::collections::HashMap::new();
        for num in nums {
            *map.entry(num).or_insert(0) += 1;
        }
        let mut sorted = map.iter().collect::<Vec<(&i32, &i32)>>();
        sorted.sort_by(|a, b| {
            if a.1 == b.1 {
                return b.0.cmp(a.0);
            }
            a.1.cmp(b.1)
        });
        for (num, count) in sorted {
            for _ in 0..*count {
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
            input: vec![1, 1, 2, 2, 2, 3],
            output: vec![3, 1, 1, 2, 2, 2],
        },
        Example {
            input: vec![-1, 1, -6, 4, 5, -6, 1, 4, 1],
            output: vec![5, -1, 4, 4, -6, -6, 1, 1, 1],
        },
        Example {
            input: vec![2, 3, 1, 3, 2],
            output: vec![1, 3, 3, 2, 2],
        },
    ];
    for example in examples {
        assert_eq!(Solution::frequency_sort(example.input), example.output);
    }
}
