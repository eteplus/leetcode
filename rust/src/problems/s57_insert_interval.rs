struct Solution;

impl Solution {
    pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = vec![];
        let mut left = new_interval[0];
        let mut right = new_interval[1];
        let mut i = 0;
        let len = intervals.len();
        while i < len {
            if let [start, end] = intervals[i][..] {
                if right < start {
                    break;
                }
                if left > end {
                    result.push(intervals[i].clone());
                } else {
                    left = left.min(start);
                    right = right.max(end);
                }
                i += 1;
            }
        }
        result.push(vec![left, right]);
        while i < len {
            result.push(intervals[i].clone());
            i += 1;
        }
        result
    }
}

struct Example {
    input: (Vec<Vec<i32>>, Vec<i32>),
    output: Vec<Vec<i32>>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (
                vec![vec![1, 3], vec![2, 6], vec![8, 10], vec![15, 18]],
                vec![2, 5],
            ),
            output: vec![vec![1, 6], vec![8, 10], vec![15, 18]],
        },
        Example {
            input: (vec![vec![1, 3], vec![6, 9]], vec![2, 5]),
            output: vec![vec![1, 5], vec![6, 9]],
        },
        Example {
            input: (
                vec![
                    vec![1, 2],
                    vec![3, 5],
                    vec![6, 7],
                    vec![8, 10],
                    vec![12, 16],
                ],
                vec![4, 8],
            ),
            output: vec![vec![1, 2], vec![3, 10], vec![12, 16]],
        },
        Example {
            input: (vec![], vec![5, 7]),
            output: vec![vec![5, 7]],
        },
        Example {
            input: (vec![vec![1, 2]], vec![5, 7]),
            output: vec![vec![1, 2], vec![5, 7]],
        },
    ];
    for example in examples {
        let (intervals, new_interval) = example.input;
        assert_eq!(Solution::insert(intervals, new_interval), example.output);
    }
}
