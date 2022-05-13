struct Solution;

impl Solution {
    pub fn construct2_d_array(original: Vec<i32>, m: i32, n: i32) -> Vec<Vec<i32>> {
        let m = m as usize;
        let n = n as usize;
        if original.len() != m * n {
            return vec![];
        }
        let mut result = vec![];
        for i in 0..m {
            let mut row = vec![];
            for j in 0..n {
                row.push(original[i * n + j]);
            }
            result.push(row);
        }
        result
    }
}

struct Example {
    input: (Vec<i32>, i32, i32),
    output: Vec<Vec<i32>>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 2, 3, 4], 2, 2),
            output: vec![vec![1, 2], vec![3, 4]],
        },
        Example {
            input: (vec![1, 2, 3], 1, 3),
            output: vec![vec![1, 2, 3]],
        },
        Example {
            input: (vec![1, 2], 1, 1),
            output: vec![],
        },
    ];
    for example in examples {
        let (original, m, n) = example.input;
        assert_eq!(Solution::construct2_d_array(original, m, n), example.output);
    }
}
