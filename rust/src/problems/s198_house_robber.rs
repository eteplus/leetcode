struct Solution;

impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 {
            return nums[0];
        }
        if nums.len() == 2 {
            return nums[0].max(nums[1]);
        }
        let mut prev = nums[0];
        let mut curr = nums[0].max(nums[1]);
        for num in nums.iter().skip(2) {
            let temp = curr;
            curr = curr.max(prev + num);
            prev = temp;
        }
        curr
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
            input: vec![2, 3, 1, 1, 4],
            output: 7,
        },
        Example {
            input: vec![2, 3, 1, 1, 4, 2, 5],
            output: 12,
        },
        Example {
            input: vec![2, 3, 2],
            output: 4,
        },
        Example {
            input: vec![1, 2, 3, 1],
            output: 4,
        },
        Example {
            input: vec![2, 1, 1, 2],
            output: 4,
        },
        Example {
            input: vec![1, 2, 3],
            output: 4,
        },
        Example {
            input: vec![200, 3, 140, 20, 10],
            output: 350,
        },
    ];
    for example in examples {
        assert_eq!(Solution::rob(example.input), example.output);
    }
}
