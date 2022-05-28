struct Solution;

impl Solution {
    pub fn min_moves_to_seat(mut seats: Vec<i32>, mut students: Vec<i32>) -> i32 {
        seats.sort_unstable();
        students.sort_unstable();
        let mut i = 0;
        let mut moves = 0;
        while i <  seats.len() {
            if seats[i] == students[i] {
                i += 1;
                continue;
            }
            moves +=  (seats[i] - students[i]).abs();
            i += 1;
        }
        moves
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
            input: (vec![3, 1, 5], vec![2, 7, 4]),
            output: 4,
        },
        Example {
            input: (vec![4, 1, 5, 9], vec![1, 3, 2, 6]),
            output: 7,
        },
        Example {
            input: (vec![2, 2, 6, 6], vec![1, 3, 2, 6]),
            output: 4,
        },
    ];
    for example in examples {
        let (seats, students) = example.input;
        assert_eq!(Solution::min_moves_to_seat(seats, students), example.output);
    }
}
