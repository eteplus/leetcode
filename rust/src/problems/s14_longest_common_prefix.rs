struct Solution;

impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return "".to_string();
        }
        let mut prefix = strs[0].clone();
        for i in 1..strs.len() {
            while !strs[i].starts_with(&prefix) {
                prefix.pop();
                if prefix.is_empty() {
                    return prefix;
                }
            }
            if prefix.is_empty() {
                return prefix;
            }
        }
        prefix
    }
}
struct Example {
    input: Vec<String>,
    output: String,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![
                "eat".to_string(),
                "tea".to_string(),
                "tan".to_string(),
                "ate".to_string(),
                "nat".to_string(),
                "bat".to_string(),
            ],
            output: "".to_string(),
        },
        Example {
            input: vec!["".to_string()],
            output: "".to_string(),
        },
        Example {
            input: vec!["a".to_string()],
            output: "a".to_string(),
        },
        Example {
            input: vec!["ab".to_string(), "a".to_string()],
            output: "a".to_string(),
        },
        Example {
            input: vec!["flower".to_string(), "flow".to_string(), "flight".to_string()],
            output: "fl".to_string(),
        },
    ];
    for example in examples {
        assert_eq!(Solution::longest_common_prefix(example.input), example.output);
    }
}
