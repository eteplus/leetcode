struct Solution;

impl Solution {
    pub fn can_place_flowers(flowerbed: Vec<i32>, n: i32) -> bool {
        if n == 0 {
            return true;
        }
        let len = flowerbed.len();
        if len == 1 {
            return flowerbed[0] == 0 && len == n as usize;
        }
        let mut count = if flowerbed[0] == 0 && flowerbed[1] == 0 {
            1
        } else {
            0
        };
        let mut prev_index = 0;
        for i in 1..len {
            if i - 1 == prev_index || flowerbed[i - 1] != 0 || flowerbed[i] != 0 || (i + 1 < len && flowerbed[i + 1] != 0) {
                continue;
            }
            count += 1;
            prev_index = i;
        }
        count >= n
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
            input: (vec![0, 0, 1, 0, 0], 1),
            output: true,
        },
        Example {
            input: (vec![0], 1),
            output: true,
        },
        Example {
            input: (vec![0, 0, 0], 2),
            output: true,
        },
        Example {
            input: (vec![0, 1, 0], 1),
            output: false,
        },
        Example {
            input: (vec![0, 0], 1),
            output: true,
        },
        Example {
            input: (vec![1, 0], 1),
            output: false,
        },
        Example {
            input: (vec![1, 0, 0, 0, 1], 1),
            output: true,
        },
        Example {
            input: (vec![1, 0, 0, 0, 1], 2),
            output: false,
        },
    ];
    for example in examples {
        let (flowerbed, n) = example.input;
        assert_eq!(Solution::can_place_flowers(flowerbed, n), example.output);
    }
}
