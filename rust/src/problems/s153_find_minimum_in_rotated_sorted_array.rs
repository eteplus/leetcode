struct Solution;

impl Solution {
    pub fn find_min(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 {
            return nums[0];
        }
        if nums.len() == 2 {
            return nums[0].min(nums[1]);
        }
        let mut i = 0;
        let mut j = nums.len() - 1;
        while i <= j {
            let mid = i + (j - i) / 2;
            match nums[mid] {
                num if num > nums[mid + 1] => return nums[mid + 1],
                num if num < nums[mid - 1] => return nums[mid],
                num if num < nums[i] => j = mid - 1,
                num if num > nums[j] => i = mid + 1,
                _ => return nums[i],
            }
        }
        nums[i]
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
            input: vec![
                266, 267, 268, 269, 271, 278, 282, 292, 293, 298, 6, 9, 15, 19, 21, 26, 33, 35, 37,
                38, 39, 46, 49, 54, 65, 71, 74, 77, 79, 82, 83, 88, 92, 93, 94, 97, 104, 108, 114,
                115, 117, 122, 123, 127, 128, 129, 134, 137, 141, 142, 144, 147, 150, 154, 160,
                163, 166, 169, 172, 173, 177, 180, 183, 184, 188, 198, 203, 208, 210, 214, 218,
                220, 223, 224, 233, 236, 241, 243, 253, 256, 257, 262, 263,
            ],
            output: 6,
        },
        Example {
            input: vec![3, 4, 5, 1, 2],
            output: 1,
        },
        Example {
            input: vec![11, 13, 15, 17],
            output: 11,
        },
        Example {
            input: vec![4, 5, 6, 7, 8, 0, 1, 2],
            output: 0,
        },
        Example {
            input: vec![3, 1, 2],
            output: 1,
        },
    ];
    for example in examples {
        assert_eq!(Solution::find_min(example.input), example.output);
    }
}
