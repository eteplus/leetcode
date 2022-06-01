struct Solution;

impl Solution {
    pub fn count_students(students: Vec<i32>, sandwiches: Vec<i32>) -> i32 {
        let mut map = std::collections::HashMap::new();
        for s in students {
            let count = map.entry(s).or_insert(0);
            *count += 1;
        }
        for (i, s) in sandwiches.iter().enumerate() {
            let count = map.entry(*s).or_insert(0);
            if *count > 0 {
                *count -= 1;
            } else {
                return (sandwiches.len() - i) as i32;
            }
        }
        0
    }
}

struct Example {
    input: (Vec<i32>, Vec<i32>),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 1, 0, 0], vec![0, 1, 0, 1]),
            output: 0,
        },
        Example {
            input: (vec![1, 1, 1, 0, 0, 1], vec![1, 0, 0, 0, 1, 1]),
            output: 3,
        },
    ];
    for example in examples {
        let (students, sandwiches) = example.input;
        assert_eq!(Solution::count_students(students, sandwiches), example.output);
    }
}
