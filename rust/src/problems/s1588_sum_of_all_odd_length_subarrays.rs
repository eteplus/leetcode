struct Solution;

impl Solution {
    pub fn sum_odd_length_subarrays(arr: Vec<i32>) -> i32 {
        let mut prefix_sum = vec![0; arr.len() + 1];
        for i in 0..arr.len() {
            prefix_sum[i + 1] = prefix_sum[i] + arr[i];
        }
        let mut sum = 0;
        for i in 0..arr.len() {
            let mut j = 1;
            while j + i <= arr.len() {
                sum += prefix_sum[j + i] - prefix_sum[i];
                j += 2;
            }
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
            input: vec![1, 4, 2, 5, 3],
            output: 58,
        },
        Example {
            input: vec![1, 2],
            output: 3,
        },
        Example {
            input: vec![10, 11, 12],
            output: 66,
        },
    ];
    for example in examples {
        assert_eq!(Solution::sum_odd_length_subarrays(example.input), example.output);
    }
}
