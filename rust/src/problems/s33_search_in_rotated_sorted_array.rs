struct Solution;

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut i = 0;
        let mut j = nums.len() - 1;
        while i <= j {
            let mid = i + ((j - i) >> 1);
            if nums[mid] == target {
                return mid as i32;
            }
            if nums[i] == target {
                return i as i32;
            }
            if nums[j] == target {
                return j as i32;
            }
            if nums[i] <= nums[mid] {
                if nums[i] <= target && target < nums[mid] {
                    j = mid - 1;
                } else {
                    i = mid + 1;
                }
            } else if nums[mid] < target && target <= nums[j] {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        -1
    }
}

struct Example {
    input: (Vec<i32>, i32),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (
                vec![
                    266, 267, 268, 269, 271, 278, 282, 292, 293, 298, 6, 9, 15, 19, 21, 26, 33, 35,
                    37, 38, 39, 46, 49, 54, 65, 71, 74, 77, 79, 82, 83, 88, 92, 93, 94, 97, 104,
                    108, 114, 115, 117, 122, 123, 127, 128, 129, 134, 137, 141, 142, 144, 147, 150,
                    154, 160, 163, 166, 169, 172, 173, 177, 180, 183, 184, 188, 198, 203, 208, 210,
                    214, 218, 220, 223, 224, 233, 236, 241, 243, 253, 256, 257, 262, 263,
                ],
                177,
            ),
            output: 60,
        },
        Example {
            input: (vec![3, 4, 5, 1, 2], 1),
            output: 3,
        },
        Example {
            input: (vec![11, 13, 15, 17], 15),
            output: 2,
        },
        Example {
            input: (vec![4, 5, 6, 7, 8, 0, 1, 2], 0),
            output: 5,
        },
        Example {
            input: (vec![1], 0),
            output: -1,
        },
    ];
    for example in examples {
        let (nums, target) = example.input;
        assert_eq!(Solution::search(nums, target), example.output);
    }
}
