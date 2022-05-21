struct Solution;

impl Solution {
    pub fn reverse_only_letters(s: String) -> String {
        let mut left = 0;
        let mut right = s.len() - 1;
        let mut bytes = s.as_bytes().to_vec();
        while left < right {
            while left < right && !bytes[left].is_ascii_alphabetic() {
                left += 1;
            }
            while right > left && !bytes[right].is_ascii_alphabetic() {
                right -= 1;
            }
            bytes.swap(left, right);
            left += 1;
            right -= 1;
        }
        String::from_utf8(bytes).unwrap()
    }
}

struct Example {
    input: String,
    output: String,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "ab-cd".to_string(),
            output: "dc-ba".to_string(),
        },
        Example {
            input: "a".to_string(),
            output: "a".to_string(),
        },
        Example {
            input: "a-bC-dEf-ghIj".to_string(),
            output: "j-Ih-gfE-dCba".to_string(),
        },
        Example {
            input: "Test1ng-Leet=code-Q!".to_string(),
            output: "Qedo1ct-eeLg=ntse-T!".to_string(),
        },
    ];
    for example in examples {
        assert_eq!(Solution::reverse_only_letters(example.input), example.output);
    }
}
