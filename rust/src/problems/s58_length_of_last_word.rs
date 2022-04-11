struct Solution;

impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let word = s.trim_end().split_ascii_whitespace().last();
        if let Some(n) = word {
            n.len() as i32
        } else {
            0
        }
    }
}

struct Example {
    input: String,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "Hello World".to_string(),
            output: 5,
        },
        Example {
            input: "   fly me   to   the moon  ".to_string(),
            output: 4,
        },
        Example {
            input: "luffy is still joyboy".to_string(),
            output: 6,
        },
    ];
    for example in examples {
        assert_eq!(Solution::length_of_last_word(example.input), example.output);
    }
}
