struct Solution;

impl Solution {
    pub fn eliminate_maximum(dist: Vec<i32>, speed: Vec<i32>) -> i32 {
        let mut result = dist
            .iter()
            .enumerate()
            .map(|(i, &d)| (d as f32 / speed[i] as f32).ceil() as i32)
            .collect::<Vec<i32>>();
        result.sort_unstable();
        // println!("{:?}", result);
        let len = result.len();
        for i in 1..len {
            if result[i] < (i + 1) as i32 {
                return i as i32;
            }
        }
        len as i32
    }
}

struct Example {
    input: (Vec<i32>, Vec<i32>),
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: (vec![3, 5, 7, 4, 5], vec![2, 3, 6, 3, 2]),
            output: 2,
        },
        Example {
            input: (vec![1, 3, 4], vec![1, 1, 1]),
            output: 3,
        },
        Example {
            input: (vec![1, 1, 2, 3], vec![1, 1, 1, 1]),
            output: 1,
        },
        Example {
            input: (vec![3, 2, 4], vec![5, 3, 2]),
            output: 1,
        },
    ];
    for example in examples {
        let (dist, speed) = example.input;
        assert_eq!(Solution::eliminate_maximum(dist, speed), example.output);
    }
}
