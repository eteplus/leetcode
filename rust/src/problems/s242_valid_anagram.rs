use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }
        let mut s1 = HashMap::new();
        let mut s2 = HashMap::new();
        for letter in s.chars() {
            *s1.entry(letter).or_insert(0) += 1;
        }
        for letter in t.chars() {
            *s2.entry(letter).or_insert(0) += 1;
        }
        s1 == s2
    }

    pub fn is_anagram_two(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }
        let mut s1 = s.chars().collect::<Vec<char>>();
        let mut s2 = t.chars().collect::<Vec<char>>();
        s1.sort_unstable();
        s2.sort_unstable();
        for i in 0..s1.len() {
            if s1[i] != s2[i] {
                return false;
            }
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
            input: ("anagram".to_string(), "nagaram".to_string()),
            output: true,
        },
        Example {
            input: ("aa".to_string(), "bb".to_string()),
            output: false,
        },
        Example {
            input: ("rat".to_string(), "car".to_string()),
            output: false,
        },
    ];
    for example in examples {
        let (s, t) = example.input;
        assert_eq!(Solution::is_anagram(s, t), example.output);
    }
}
