struct Solution;

impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.len() <= 1 {
            return nums.len() as i32;
        }
        let mut n = nums[0];
        let mut i = 1;
        let mut j = 1;
        while i < nums.len() {
            if nums[i] != n {
                n = nums[i];
                nums[j] = nums[i];
                j += 1;
            }
            i += 1;
        }
        j as i32
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
            input: vec![2, 2, 3],
            output: 2,
        },
        Example {
            input: vec![1, 1, 1, 2, 2, 2, 2],
            output: 2,
        },
        Example {
            input: vec![1, 1, 2],
            output: 2,
        },
        Example {
            input: vec![0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
            output: 5,
        },
    ];
    for mut example in examples {
        assert_eq!(Solution::remove_duplicates(example.input.as_mut()), example.output);
    }
}
