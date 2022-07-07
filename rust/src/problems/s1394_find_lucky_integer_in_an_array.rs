struct Solution;

impl Solution {
    pub fn find_lucky(arr: Vec<i32>) -> i32 {
        let mut map = std::collections::HashMap::new();
        let mut lucky_num = -1;
        for num in arr {
            let count = map.entry(num).or_insert(0);
            *count += 1;
        }
        for (num, count) in map.into_iter() {
            if num == count {
                lucky_num = lucky_num.max(num);
            }
        }
        lucky_num
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
            input: vec![2, 2, 3, 4],
            output: 2,
        },
        Example {
            input: vec![1, 2, 2, 3, 3, 3],
            output: 3,
        },
        Example {
            input: vec![2, 2, 2, 3, 3],
            output: -1,
        },
    ];
    for example in examples {
        assert_eq!(Solution::find_lucky(example.input), example.output);
    }
}
