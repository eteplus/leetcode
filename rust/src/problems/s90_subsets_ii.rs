struct Solution;

impl Solution {
    pub fn subsets_with_dup(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut nums = nums;
        let mut result = Vec::new();
        nums.sort_unstable();
        let mut temp = Vec::new();
        Self::backtrack(&mut result, &mut temp, &nums, 0, nums.len());
        result
    }

    fn backtrack(result: &mut Vec<Vec<i32>>, temp: &mut Vec<i32>, nums: &Vec<i32>, start: usize, end: usize) {
        result.push(temp.to_vec());
        for i in start..end {
            if i > start && nums[i] == nums[i - 1] {
                continue;
            }
            temp.push(nums[i]);
            Self::backtrack(result, temp, nums, i + 1, end);
            temp.pop();
        }
    }
}

struct Example {
    input: Vec<i32>,
    output: Vec<Vec<i32>>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: vec![1, 2, 2],
            output: vec![
                vec![],
                vec![1],
                vec![1, 2],
                vec![1, 2, 2],
                vec![2],
                vec![2, 2],
            ],
        },
        Example {
            input: vec![1],
            output: vec![vec![], vec![1]],
        },
    ];
    for example in examples {
        assert_eq!(Solution::subsets_with_dup(example.input), example.output);
    }
}
