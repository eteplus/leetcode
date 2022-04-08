use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }
        let mut map = std::collections::HashMap::new();
        let mut map2 = std::collections::HashMap::new();
        let s_chars = s.chars().collect::<Vec<char>>();
        let t_chars = t.chars().collect::<Vec<char>>();
        for i in 0..s_chars.len() {
            let s_char = s_chars[i];
            let t_char = t_chars[i];
            if map.contains_key(&s_char) && map[&s_char] != t_char {
                return false;
            }
            if map2.contains_key(&t_char) && map2[&t_char] != s_char {
                return false;
            }
            map.insert(s_char, t_char);
            map2.insert(t_char, s_char);
        }
        true
    }
}

struct Example {
    input: (String, String),
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: ("egg".to_string(), "add".to_string()),
            output: true,
        },
        Example {
            input: ("foo".to_string(), "bar".to_string()),
            output: false,
        },
        Example {
            input: ("paper".to_string(), "title".to_string()),
            output: true,
        },
    ];
    for example in examples {
        let (s, t) = example.input;
        assert_eq!(Solution::is_isomorphic(s, t), example.output);
    }
}
