struct Solution;

impl Solution {
    pub fn maximum_swap(num: i32) -> i32 {
        let mut nums: Vec<char> = num.to_string().chars().collect();
        let mut map = vec![usize::MAX; 10];
        for (i, num) in nums.iter().enumerate() {
            let value = *num as usize - '0' as usize;
            map[value] = i;
        }
        for i in 0..nums.len() {
            let value = nums[i] as usize - '0' as usize;
            let mut j = 9;
            while j > value {
                if map[j] != usize::MAX && map[j] > i {
                    nums.swap(i, map[j]);
                    return nums.iter().collect::<String>().parse::<i32>().unwrap();
                }
                j -= 1;
            }
        }
        num
    }
}

struct Example {
    input: i32,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: 9972,
            output: 9972,
        },
        Example {
            input: 1993,
            output: 9913,
        },
        Example {
            input: 2736,
            output: 7236,
        },
        Example {
            input: 1010000,
            output: 1100000,
        },
        Example {
            input: 98368,
            output: 98863,
        },
    ];
    for example in examples {
        assert_eq!(Solution::maximum_swap(example.input), example.output);
    }
}
