struct Solution;

impl Solution {
    pub fn peak_index_in_mountain_array(arr: Vec<i32>) -> i32 {
        let mut left = 0;
        let mut right = arr.len() - 1;
        while left < right {
            let mid = left + ((right - left) >> 1);
            if mid >= 1 && mid + 1 < arr.len() && arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]
            {
                return mid as i32;
            }
            if mid + 1 < arr.len() && arr[mid] > arr[mid + 1] {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        -1
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
            input: vec![0, 1, 0],
            output: 1,
        },
        Example {
            input: vec![0, 2, 1, 0],
            output: 1,
        },
        Example {
            input: vec![0, 10, 5, 2],
            output: 1,
        },
    ];
    for example in examples {
        assert_eq!(
            Solution::peak_index_in_mountain_array(example.input),
            example.output
        );
    }
}
