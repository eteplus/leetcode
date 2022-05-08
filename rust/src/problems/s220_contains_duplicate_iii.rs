struct Solution;

impl Solution {
    pub fn contains_nearby_almost_duplicate(nums: Vec<i32>, k: i32, t: i32) -> bool {
        if t < 0 {
            return false;
        }
        let k = k as usize;
        let t = t as i64;
        let nums: Vec<i64> = nums.iter().map(|x| *x as i64).collect();
        let mut tree = std::collections::BTreeSet::new();
        for i in 0..nums.len() {
            let n = nums[i];
            if tree.range((n - t)..=(n + t)).count() > 0 {
                return true;
            }
            tree.insert(n);
            if i >= k {
                tree.remove(&nums[i - k]);
            }
        }
        false

    }
}

struct Example {
    input: (Vec<i32>, i32, i32),
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 2, 3, 1], 3, 0),
            output: true,
        },
        Example {
            input: (vec![1, 0, 1, 1], 1, 2),
            output: true,
        },
        Example {
            input: (vec![1, 5, 9, 1, 5, 9], 2, 3),
            output: false,
        },
        Example {
            input: (vec![8, 7, 15, 1, 6, 1, 9, 15], 1, 3),
            output: true,
        },
        Example {
            input: (vec![2147483640, 2147483641], 1, 100),
            output: true,
        },
    ];
    for example in examples {
        let (nums, k, t) = example.input;
        assert_eq!(
            Solution::contains_nearby_almost_duplicate(nums, k, t),
            example.output
        );
    }
}
