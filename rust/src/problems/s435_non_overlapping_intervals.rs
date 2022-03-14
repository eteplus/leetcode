struct Solution;

impl Solution {
    pub fn erase_overlap_intervals(mut intervals: Vec<Vec<i32>>) -> i32 {
        intervals.sort_unstable_by(|a, b| {
            if a[0] == b[0] {
                b[1].cmp(&a[1])
            } else {
                b[0].cmp(&a[0])
            }
        });
        let mut prev = intervals[0].clone();
        let mut count = 0;
        for curr in intervals.iter().skip(1) {
            if prev[0] >= curr[1] {
                prev = curr.clone();
            } else {
                count += 1;
                prev = vec![
                    std::cmp::max(prev[0], curr[0]),
                    std::cmp::max(prev[1], curr[1]),
                ];
            }
        }
        count
    }
}

struct Example {
    input: Vec<Vec<i32>>,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![vec![1, 3], vec![2, 6], vec![6, 8], vec![8, 10], vec![15, 18]],
            output: 1,
        },
        Example {
            input: vec![vec![1, 2], vec![2, 3], vec![3, 4], vec![1, 3]],
            output: 1,
        },
        Example {
            input: vec![vec![1, 2], vec![1, 2], vec![1, 2]],
            output: 2,
        },
        Example {
            input: vec![vec![1, 2], vec![2, 3]],
            output: 0,
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::erase_overlap_intervals(example.input),
            example.output
        );
    }
}
