struct Solution;

impl Solution {
    pub fn minimum_abs_difference(mut arr: Vec<i32>) -> Vec<Vec<i32>> {
        arr.sort_unstable();
        let mut result = vec![];
        let mut min_diff = std::i32::MAX;
        for i in 1..arr.len() {
            let diff = arr[i] - arr[i - 1];
            if diff < min_diff {
                min_diff = diff;
                result.clear();
                result.push(vec![arr[i - 1], arr[i]]);
            } else if diff == min_diff {
                result.push(vec![arr[i - 1], arr[i]]);
            }
        }
        result
    }
}

struct Example {
    input: Vec<i32>,
    output: Vec<Vec<i32>>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![4, 2, 1, 3],
            output: vec![vec![1, 2], vec![2, 3], vec![3, 4]],
        },
        Example {
            input: vec![1, 3, 6, 10, 15],
            output: vec![vec![1, 3]],
        },
        Example {
            input: vec![3, 8, -10, 23, 19, -4, -14, 27],
            output: vec![vec![-14, -10], vec![19, 23], vec![23, 27]],
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::minimum_abs_difference(example.input),
            example.output
        );
    }
}
