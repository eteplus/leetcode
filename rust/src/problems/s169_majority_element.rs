struct Solution;

impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut candidate = -1;
        let mut count = 0;
        for num in nums {
            if count == 0 {
                candidate = num;
            }
            if num == candidate {
                count += 1;
            } else {
                count -= 1;
            }
        }
        candidate
    }
}

struct Example {
    input: Vec<i32>,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![3, 2, 3],
            output: 3,
        },
        Example {
            input: vec![2, 2, 1, 1, 1, 2, 2],
            output: 2,
        },
    ];
    for example in examples {
        assert_eq!(Solution::majority_element(example.input), example.output);
    }
}
