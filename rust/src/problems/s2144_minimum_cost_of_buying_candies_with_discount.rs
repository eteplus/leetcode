struct Solution;

impl Solution {
    pub fn minimum_cost(mut cost: Vec<i32>) -> i32 {
        if cost.len() == 1 {
            return cost[0];
        }
        cost.sort_unstable();
        let mut sum = 0;
        let mut i = cost.len() - 1;
        while i >= 2 {
            sum += cost[i] + cost[i - 1];
            if i > 2 {
                i -= 3;
                if i == 0 {
                    sum += cost[i];
                }
            } else {
                i -= 2;
            }
        }
        while i > 0 {
            sum += cost[i];
            i -= 1;
            if i == 0 {
                sum += cost[i];
            }
        }
        sum
    }
}

struct Example {
    input: Vec<i32>,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![1, 2, 3],
            output: 5,
        },
        Example {
            input: vec![1, 2, 3, 4],
            output: 8,
        },
        Example {
            input: vec![6, 5, 7, 9, 2, 2],
            output: 23,
        },
        Example {
            input: vec![5, 5],
            output: 10,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::minimum_cost(example.input),
            example.output
        );
    }
}