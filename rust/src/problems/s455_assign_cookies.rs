struct Solution;

impl Solution {
    pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
        let mut childrens = g;
        let mut cookies = s;
        childrens.sort_unstable();
        cookies.sort_unstable();
        let mut i = 0;
        let mut j = 0;
        let mut count = 0;
        while i < childrens.len() && j < cookies.len() {
            match cookies[j] >= childrens[i] {
                true => {
                    i += 1;
                    j += 1;
                    count += 1;
                }
                false => {
                    j += 1;
                }
            }
        }
        count
    }
}

struct Example {
    input: (Vec<i32>, Vec<i32>),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 2, 3], vec![1, 1]),
            output: 1,
        },
        Example {
            input: (vec![1, 2], vec![1, 2, 3]),
            output: 2,
        },
    ];
    for example in examples {
        let (g, s) = example.input;
        assert_eq!(Solution::find_content_children(g, s), example.output);
    }
}
