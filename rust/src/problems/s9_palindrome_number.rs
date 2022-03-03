struct Solution;

impl Solution {
    /**
     * Runtime 0ms
     * Memory 2.1MB
     */
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 {
            return false
        }
        if x < 10 {
            return true;
        }
        if x % 10 == 0 {
            return false;
        }
        let s = x.to_string();
        s.chars().rev().collect::<String>() == s
    }

    /**
     * Runtime 24ms
     * Memory 2.2MB
     */
    pub fn is_palindrome_two(x: i32) -> bool {
        if x < 0 {
            return false;
        }
        let nums = x.to_string().chars().collect::<Vec<char>>();
        let len = nums.len();
        for i in 0..len / 2 {
            if nums[i] != nums[len - i - 1] {
                return false;
            }
        }
        true
    }

    /**
     * Runtime 27ms
     * Memory 2.1MB
     */
    pub fn is_palindrome_three(x: i32) -> bool {
        if x < 0 {
            return false;
        }
        if x < 10 {
            return true;
        }
        if x % 10 == 0 {
            return false;
        }
        let mut y = x;
        let mut z = 0;
        while y != 0 {
            z = z * 10 + y % 10;
            y /= 10;
            if z == y {
                return true
            }
        }
        z == x
    }
}

struct Example {
    input: i32,
    output: bool,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: 21120,
            output: false,
        },
        Example {
            input: 121,
            output: true,
        },
        Example {
            input: -121,
            output: false,
        },
        Example {
            input: 10,
            output: false,
        },
        Example {
            input: 0,
            output: true,
        },
    ];
    for example in examples {
        assert_eq!(Solution::is_palindrome(example.input), example.output);
    }
}
