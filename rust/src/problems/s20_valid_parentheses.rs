struct Solution;

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack = vec![];
        for c in s.chars() {
            match c {
                '(' | '[' | '{' => stack.push(c),
                ')' => if stack.pop() != Some('(') { return false; },
                ']' => if stack.pop() != Some('[') { return false; },
                '}' => if stack.pop() != Some('{') { return false; },
                _ => ()
            }
        }
        stack.is_empty()
    }
}

struct Example {
    input: String,
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "()".to_string(),
            output: true,
        },
        Example {
            input: "()[]{}".to_string(),
            output: true,
        },
        Example {
            input: "(]".to_string(),
            output: false,
        },
        Example {
            input: "([)]".to_string(),
            output: false,
        },
        Example {
            input: "{{}[][[[]]]}".to_string(),
            output: true,
        },
    ];
    for example in examples {
        assert_eq!(Solution::is_valid(example.input), example.output);
    }
}
