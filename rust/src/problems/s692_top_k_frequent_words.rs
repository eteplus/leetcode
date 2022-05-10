struct Solution;

impl Solution {
    pub fn top_k_frequent(words: Vec<String>, k: i32) -> Vec<String> {
        let mut ans = vec![];
        let mut map = std::collections::HashMap::new();
        for word in words {
            *map.entry(word).or_insert(0) += 1;
        }
        let mut heap = std::collections::BinaryHeap::<(i32, String)>::new();
        for entry in map.into_iter() {
            heap.push((-entry.1, entry.0));
            if heap.len() as i32 > k {
                heap.pop();
            }
        }

        while !heap.is_empty() {
            ans.push(heap.pop().unwrap().1);
        }
        ans.reverse();
        ans
    }
}
struct Example {
    input: (Vec<String>, i32),
    output: Vec<String>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (
                vec![
                    "i".to_string(),
                    "love".to_string(),
                    "leetcode".to_string(),
                    "i".to_string(),
                    "love".to_string(),
                    "coding".to_string(),
                ],
                2,
            ),
            output: vec!["i".to_string(), "love".to_string()],
        },
        Example {
            input: (
                vec![
                    "the".to_string(),
                    "day".to_string(),
                    "is".to_string(),
                    "sunny".to_string(),
                    "the".to_string(),
                    "the".to_string(),
                    "the".to_string(),
                    "sunny".to_string(),
                    "is".to_string(),
                    "is".to_string(),
                ],
                4,
            ),
            output: vec![
                "the".to_string(),
                "is".to_string(),
                "sunny".to_string(),
                "day".to_string(),
            ],
        },
    ];
    for example in examples {
        let (words, k) = example.input;
        assert_eq!(Solution::top_k_frequent(words, k), example.output);
    }
}
