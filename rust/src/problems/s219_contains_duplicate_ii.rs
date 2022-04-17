struct Solution;

impl Solution {
    pub fn contains_nearby_duplicate(nums: Vec<i32>, k: i32) -> bool {
        let n = k as usize;
        let mut map = std::collections::HashMap::new();
        for (i, num) in nums.iter().enumerate() {
            if let Some(m) = map.get(num) {
                if i - *m <= n {
                    return true;
                }
            }
            map.insert(num, i);
        }
        false
    }
}

struct Example {
    input: (Vec<i32>, i32),
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 2, 3, 1], 3),
            output: true,
        },
        Example {
            input: (vec![1, 0, 1, 1], 1),
            output: true,
        },
        Example {
            input: (vec![1, 2, 3, 1, 2, 3], 2),
            output: false,
        }
    ];
    for example in examples {
        let (nums, k) = example.input;
        assert_eq!(Solution::contains_nearby_duplicate(nums, k), example.output);
    }
}