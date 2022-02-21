struct  Solution;

impl Solution {
    pub fn get_sum(mut a: i32, mut b: i32) -> i32 {
        while (a & b) != 0 {
            let t = (a & b) << 1;
            b = a ^ b;
            a = t;
        }
        a ^ b
    }
}

struct Example {
    input: (i32, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (1, 2),
            output: 3,
        },
        Example {
            input: (-2, -8),
            output: -10,
        },
        Example {
            input: (6, 3),
            output: 9,
        },
    ];
    for example in examples {
        let (a, b) = example.input;
        assert_eq!(Solution::get_sum(a, b), example.output);
    }
}