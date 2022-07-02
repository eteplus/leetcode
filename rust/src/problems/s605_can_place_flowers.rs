struct Solution;

impl Solution {
    pub fn can_place_flowers(flowerbed: Vec<i32>, n: i32) -> bool {
        if n == 0 {
            return true;
        }
        let mut prev_index = 0;
        let len = flowerbed.len();
        let mut count = if flowerbed[0] == 0 && (len <= 2 || (len > 2 && flowerbed[1] == 0)) {
            1
        } else {
            0
        };
        // println!("{}", count);
        if len <= 2 {
            return count == n;
        }
        if flowerbed[1] == 1 && count == 1 {
            count -= 1;
        }
        for i in 1..len {
            // println!("{}, {}, {}, {}", prev_index, i, i + 1 < len, count);
            if i + 1 < len {
                if i - 1 != prev_index
                    && flowerbed[i - 1] == 0
                    && flowerbed[i] == 0
                    && flowerbed[i + 1] == 0
                {
                    count += 1;
                    prev_index = i;
                }
            } else {
                if i - 1 != prev_index && flowerbed[i - 1] == 0 && flowerbed[i] == 0 {
                    count += 1;
                    prev_index = i;
                }
            }
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
