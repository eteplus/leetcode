struct Solution;

impl Solution {
    pub fn busy_student(start_time: Vec<i32>, end_time: Vec<i32>, query_time: i32) -> i32 {
        let mut i = 0;
        let mut count = 0;
        while i < start_time.len() {
            if query_time >= start_time[i] && query_time <= end_time[i] {
                count += 1;
            }
            i += 1;
        }
        count
    }
}

struct Example {
    input: (Vec<i32>, Vec<i32>, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 2, 3], vec![3, 2, 7], 4),
            output: 1,
        },
        Example {
            input: (vec![4], vec![4], 4),
            output: 1,
        },
    ];
    for example in examples {
        let (start_time, end_time, query_time) = example.input;
        assert_eq!(Solution::busy_student(start_time, end_time, query_time), example.output);
    }
}
