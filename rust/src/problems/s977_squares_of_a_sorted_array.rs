struct Solution;

impl Solution {
    pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
        if nums.is_empty() {
            return vec![];
        }

        let mut result = vec![];
        let mut i = 0;
        let mut j = nums.len() - 1;
        while i != j && i < j {
            let a = nums[i].pow(2);
            let b = nums[j].pow(2);
            result.push(a);
            result.push(b);
            i += 1;
            j -= 1;
        }
        if i == j && i < nums.len() {
            result.push(nums[i].pow(2));
        }
        result.sort_unstable();
        result
    }
}

struct Example {
    input: Vec<i32>,
    output: Vec<i32>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![-4, -1, 0, 3, 10],
            output: vec![0, 1, 9, 16, 100],
        },
        Example {
            input: vec![-7, -3, 2, 3, 11],
            output: vec![4, 9, 9, 49, 121],
        },
        Example {
            input: vec![-5,-3,-2,-1],
            output: vec![1, 4, 9, 25],
        }
    ];
    for example in examples {
        assert_eq!(Solution::sorted_squares(example.input), example.output);
    }
}
