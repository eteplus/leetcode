struct Solution;

impl Solution {
    pub fn array_pair_sum(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();
        let mut sum = 0;
        // nums.chunks(2).for_each(|chunk| {
        //     sum += chunk[0];
        // });
        // sum
        let mut i = 0;
        while i < nums.len() {
            sum += nums[i];
            i += 2;
        }
        sum
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
            input: vec![1, 4, 3, 2],
            output: 4,
        },
        Example {
            input: vec![6, 2, 6, 5, 1, 2],
            output: 9,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::array_pair_sum(example.input),
            example.output
        );
    }
}