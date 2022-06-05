struct Solution;

impl Solution {
    pub fn slowest_key(release_times: Vec<i32>, keys_pressed: String) -> char {
        use std::cmp::Ordering;
        let keys = keys_pressed.chars().collect::<Vec<_>>();
        let mut max_time = release_times[0];
        let mut max_key = keys[0];
        for i in 1..release_times.len() {
            let diff = release_times[i] - release_times[i - 1];
            match diff.cmp(&max_time) {
                Ordering::Greater => {
                    max_time = diff;
                    max_key = keys[i];
                }
                Ordering::Equal => {
                    max_key = std::cmp::max(max_key, keys[i]);
                }
                Ordering::Less => {}
            }
        }
        max_key
    }
}

struct Example {
    input: (Vec<i32>, String),
    output: char,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![9, 29, 49, 50], "cbcd".to_string()),
            output: 'c',
        },
        Example {
            input: (vec![12, 23, 36, 46, 62], "spuda".to_string()),
            output: 'a',
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::slowest_key(example.input.0, example.input.1),
            example.output
        );
    }
}
