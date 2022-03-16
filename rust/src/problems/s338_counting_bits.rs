struct Solution;

impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        let num = n as usize;
        let mut bits = vec![0; num + 1];
        for i in 1..=num {
            bits[i] = bits[i >> 1] + (i as i32 & 1);
        }
        bits
    }
}

struct Example {
    input: i32,
    output: Vec<i32>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: 6,
            output: vec![0, 1, 1, 2, 1, 2, 2],
        },
        Example {
            input: 5,
            output: vec![0, 1, 1, 2, 1, 2],
        },
        Example {
            input: 2,
            output: vec![0, 1, 1],
        },
    ];
    for example in examples {
        assert_eq!(Solution::count_bits(example.input), example.output);
    }
}
