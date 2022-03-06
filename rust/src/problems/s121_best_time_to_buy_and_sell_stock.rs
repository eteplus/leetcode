struct Solution;

impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut max_profit = 0;
        let mut min_price = prices[0];
        prices.into_iter().for_each(|price| {
            max_profit = max_profit.max(price - min_price);
            min_price = min_price.min(price);
        });
        max_profit
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
            input: vec![7, 1, 5, 3, 6, 4],
            output: 5,
        },
        Example {
            input: vec![7, 6, 4, 3, 1],
            output: 0,
        },
    ];
    for example in examples {
        assert_eq!(Solution::max_profit(example.input), example.output);
    }
}
