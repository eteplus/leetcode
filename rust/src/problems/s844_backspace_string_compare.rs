struct Solution;

impl Solution {
    pub fn backspace_compare(s: String, t: String) -> bool {
        let ss = s.as_bytes();
        let tt = t.as_bytes();
        let mut i = (ss.len() - 1) as i32;
        let mut j = (tt.len() - 1) as i32;
        while i >= 0 || j >= 0 {
            let mut skip = 0;
            while i >= 0 {
                if ss[i as usize] == b'#' {
                    skip += 1;
                } else if skip > 0 {
                    skip -= 1;
                } else {
                    break;
                }
                i -= 1;
            }

            let mut skip = 0;
            while j >= 0 {
                if tt[j as usize] == b'#' {
                    skip += 1;
                } else if skip > 0 {
                    skip -= 1;
                } else {
                    break;
                }
                j -= 1;
            }

            if (i >= 0) != (j >= 0) {
                return false;
            }

            if i >= 0 && j >= 0 && ss[i as usize] != tt[j as usize] {
                return false;
            }

            i -= 1;
            j -= 1;
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
            input: ("ab#c".to_string(), "ad#c".to_string()),
            output: true,
        },
        Example {
            input: ("ab##".to_string(), "ab##".to_string()),
            output: true,
        },
        Example {
            input: ("a#c".to_string(), "b".to_string()),
            output: false,
        },
        Example {
            input: ("xywrrmp".to_string(), "xywrrmu#p".to_string()),
            output: true,
        },
    ];
    for example in examples {
        let (s, t) = example.input;
        assert_eq!(Solution::backspace_compare(s, t), example.output);
    }
}
