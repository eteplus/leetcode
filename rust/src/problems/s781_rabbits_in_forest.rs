use std::collections::HashMap;
struct Solution;

impl Solution {
    pub fn num_rabbits(answers: Vec<i32>) -> i32 {
        let mut mapper = HashMap::new();
        let mut count = 0;
        for num in answers {
            let c = mapper.entry(num).or_insert(0);
            *c += 1;
            if *c == 1 {
                count += num + 1;
            }
            if *c % (num + 1) == 0 {
                *c = 0;
            }
        }
        count
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
            input: vec![1],
            output: 2,
        },
        Example {
            input: vec![1, 1, 2],
            output: 5,
        },
        Example {
            input: vec![1, 1, 1, 2],
            output: 7,
        },
        Example {
            input: vec![10, 10, 10],
            output: 11,
        },
        Example {
            input: vec![1, 1, 1, 2, 2, 2, 2],
            output: 10,
        },
        Example {
            input: vec![10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            output: 22,
        },
        Example {
            input: vec![1, 0, 1, 0, 0],
            output: 5,
        },
    ];
    for example in examples {
        assert_eq!(Solution::num_rabbits(example.input), example.output);
    }
}
