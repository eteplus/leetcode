struct Solution;

impl Solution {
    pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        intervals.sort_by(|a, b| a[0].cmp(&b[0]));
        let mut result = vec![intervals[0].clone()];
        for interval in intervals.iter().skip(1) {
            let last = result.last_mut().unwrap();
            if interval[0] <= last[1] {
                last[1] = std::cmp::max(last[1], interval[1]);
            } else {
                result.push(interval.clone());
            }
        }
        result
    }
}

struct Example {
    input: Vec<Vec<i32>>,
    output: Vec<Vec<i32>>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![vec![1, 3], vec![8, 10], vec![2, 6], vec![15, 18]],
            output: vec![vec![1, 6], vec![8, 10], vec![15, 18]],
        },
        Example {
            input: vec![
                vec![1, 3],
                vec![6, 8],
                vec![15, 18],
                vec![8, 10],
                vec![2, 6],
            ],
            output: vec![vec![1, 10], vec![15, 18]],
        },
        Example {
            input: vec![
                vec![2, 6],
                vec![7, 10],
                vec![1, 3],
                vec![15, 20],
                vec![8, 10],
            ],
            output: vec![vec![1, 6], vec![7, 10], vec![15, 20]],
        },
        Example {
            input: vec![vec![1, 4], vec![4, 5]],
            output: vec![vec![1, 5]],
        },
    ];
    for example in examples {
        assert_eq!(Solution::merge(example.input), example.output);
    }
}
