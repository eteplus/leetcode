struct Solution;

impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {
        let mut i = 0;
        let mut j = s.len() - 1;
        while i < j {
            s.swap(i, j);
            i += 1;
            j -= 1;
        }
    }
}

struct Example {
    input: Vec<char>,
    output: Vec<char>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec!['h', 'e', 'l', 'l', 'o'],
            output: vec!['o', 'l', 'l', 'e', 'h'],
        },
        Example {
            input: vec!['H', 'a', 'n', 'n', 'a', 'h'],
            output: vec!['h', 'a', 'n', 'n', 'a', 'H'],
        },
    ];
    for mut example in examples {
        Solution::reverse_string(example.input.as_mut());
        assert_eq!(example.input, example.output);
    }
}
