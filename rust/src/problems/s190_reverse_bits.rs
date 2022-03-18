struct Solution;

impl Solution {
    pub fn reverse_bits(mut x: u32) -> u32 {
        let mut num = 0;
        for i in 0..32 {
            num |= (x & 1) << (31 - i);
            x >>= 1;
        }
        num
    }
}

struct Example<'a> {
    input: &'a str,
    output: u32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "00000010100101000001111010011100",
            output: 964176192,
        },
        Example {
            input: "00000000000000000000000010000000",
            output: 16777216,
        },
        Example {
            input: "11111111111111111111111111111101",
            output: 3221225471,
        },
        Example {
            input: "00000000000000000000000000001011",
            output: 3489660928,
        },
    ];
    for example in examples {
        let n = u32::from_str_radix(example.input, 2).unwrap();
        assert_eq!(Solution::reverse_bits(n), example.output);
    }
}
