struct Solution;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut map = std::collections::HashMap::new();
        for s in strs {
            let mut chars: Vec<char> = s.chars().collect();
            chars.sort_unstable();
            let key = chars.iter().collect::<String>();
            let v = map.entry(key).or_insert_with(Vec::new);
            v.push(s);
        }
        let mut anagrams = map
            .into_iter()
            .map(|(_, mut v)| {
                v.sort_unstable();
                v
            })
            .collect::<Vec<Vec<String>>>();
        anagrams.sort_unstable_by_key(|a| a.len());
        anagrams
    }
}
struct Example {
    input: Vec<String>,
    output: Vec<Vec<String>>,
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
            output: vec![
                vec!["bat".to_string()],
                vec!["nat".to_string(), "tan".to_string()],
                vec!["ate".to_string(), "eat".to_string(), "tea".to_string()],
            ],
        },
        Example {
            input: vec!["".to_string()],
            output: vec![vec!["".to_string()]],
        },
        Example {
            input: vec!["a".to_string()],
            output: vec![vec!["a".to_string()]],
        },
    ];
    for example in examples {
        assert_eq!(Solution::group_anagrams(example.input), example.output);
    }
}
