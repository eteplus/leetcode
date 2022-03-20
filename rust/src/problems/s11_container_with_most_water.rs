struct Solution;

impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut left = 0;
        let mut right = height.len() - 1;
        let mut result = 0;
        while left < right {
            let area = (right - left) as i32 * (height[left].min(height[right]));
            result = result.max(area);
            if height[left] < height[right] {
                left += 1;
            } else {
                right -= 1;
            }
        }
        result
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
            input: vec![1, 8, 6, 2, 5, 4, 8, 3, 7],
            output: 49,
        },
        Example {
            input: vec![1, 1],
            output: 1,
        },
        Example {
            input: vec![5, 4, 1, 7, 8],
            output: 20,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::max_area(example.input),
            example.output
        );
    }
}