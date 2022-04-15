struct Solution;

impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut i = m - 1;
        let mut j = n - 1;
        let mut k = (m + n - 1) as usize;
        while i >= 0 || j >= 0 {
            if i < 0 && j >= 0 {
                nums1[k] = nums2[j as usize];
                j -= 1;
            } else if i >= 0 && j < 0 {
                nums1[k] = nums1[i as usize];
                i -= 1;
            } else if i >= 0 && j >= 0 {
                if nums1[i as usize] > nums2[j as usize] {
                    nums1[k] = nums1[i as usize];
                    i -= 1;
                } else {
                    nums1[k] = nums2[j as usize];
                    j -= 1;
                }
            }
            if k > 0 {
                k -= 1;
            }
        }
    }
}

struct Example {
    input: (Vec<i32>, i32, Vec<i32>, i32),
    output: Vec<i32>,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![1, 2, 4, 5, 6, 0], 5, vec![3], 1),
            output: vec![1, 2, 3, 4, 5, 6],
        },
        Example {
            input: (vec![4, 0, 0, 0, 0, 0], 1, vec![1, 2, 3, 5, 6], 5),
            output: vec![1, 2, 3, 4, 5, 6],
        },
        Example {
            input: (vec![4, 5, 6, 0, 0, 0], 3, vec![1, 2, 3], 3),
            output: vec![1, 2, 3, 4, 5, 6],
        },
        Example {
            input: (vec![1, 2, 3, 0, 0, 0], 3, vec![2, 5, 6], 3),
            output: vec![1, 2, 2, 3, 5, 6],
        },
        Example {
            input: (vec![1], 1, vec![], 0),
            output: vec![1],
        },
        Example {
            input: (vec![0], 0, vec![1], 1),
            output: vec![1],
        },
    ];
    for example in examples {
        let (mut nums1, m, mut nums2, n) = example.input;
        Solution::merge(nums1.as_mut(), m, nums2.as_mut(), n);
        assert_eq!(nums1, example.output);
    }
}
