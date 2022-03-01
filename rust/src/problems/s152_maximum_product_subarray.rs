struct Solution;

impl Solution {
    pub fn max_product(nums: Vec<i32>) -> i32 {
        let mut max = nums[0];
        let mut imax = 1;
        let mut imin = 1;
        for num in nums.iter() {
            if *num < 0 {
                std::mem::swap(&mut imax, &mut imin);
            }
            imax = std::cmp::max(*num, imax * num);
            imin = std::cmp::min(*num, imin * num);
            max = max.max(imax);
        }
        max
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
            input: vec![2, 3, -2, 4],
            output: 6,
        },
        Example {
            input: vec![-2, 0, -11],
            output: 0,
        },
        Example {
            input: vec![2, 3, -2, -3, -1, 4],
            output: 36,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::max_product(example.input),
            example.output
        );
    }
}