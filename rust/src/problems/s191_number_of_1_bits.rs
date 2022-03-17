struct Solution;

impl Solution {
    pub fn hamming_weight(mut n: u32) -> i32 {
        let mut count = 0;
        while n > 0 {
            if n & 1 == 1 {
                count += 1;
            }
            n >>= 1;
        }
        count
    }
}

struct Example<'a> {
    input: &'a str,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "1011",
            output: 3,
        },
        Example {
            input: "10000000",
            output: 1,
        },
        Example {
            input: "11111111111111111111111111111101",
            output: 31,
        },
    ];
    for example in examples {
        let n = u32::from_str_radix(example.input, 2).unwrap();
        assert_eq!(Solution::hamming_weight(n), example.output);
    }
}
