struct Solution;

impl Solution {
    pub fn max_number_of_balloons(text: String) -> i32 {
        let mut map: std::collections::HashMap<char, i32> =
            "balon".chars().map(|c| (c, 0)).collect();
        for c in text.chars() {
            if c == 'b' || c == 'a' || c == 'l' || c == 'o' || c == 'n' {
                *map.entry(c).or_insert(0) += 1;
            }
        }
        let mut res = std::i32::MAX;
        for (k, v) in map {
            match k {
                'b' | 'a' | 'n' => {
                    res = res.min(v);
                }
                'l' | 'o' => {
                    res = res.min(v / 2);
                }
                _ => {}
            }
        }
        res
    }
}

struct Example {
    input: String,
    output: i32,
}

#[test]
pub fn test() {
    let examples = vec![
        Example {
            input: "nlaebolko".to_string(),
            output: 1,
        },
        Example {
            input: "loonbalxballpoon".to_string(),
            output: 2,
        },
        Example {
            input: "leetcode".to_string(),
            output: 0,
        },
        Example {
            input: "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw".to_string(),
            output: 10,
        }
    ];
    for example in examples {
        assert_eq!(
            Solution::max_number_of_balloons(example.input),
            example.output
        );
    }
}
