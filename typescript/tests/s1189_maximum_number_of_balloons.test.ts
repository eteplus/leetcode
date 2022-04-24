import { maxNumberOfBalloons } from '~/problems/s1189_maximum_number_of_balloons';
import { name } from './utils';

describe('Maximum Number of Balloons', () => {
  const examples: Array<{
    input: string;
    output: number;
  }> = [
    {
      input: 'nlaebolko',
      output: 1,
    },
    {
      input: 'loonbalxballpoon',
      output: 2,
    },
    {
      input: 'leetcode',
      output: 0,
    },
    {
      input: 'balon',
      output: 0,
    },
    {
      input:
        'krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw',
      output: 10,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(maxNumberOfBalloons(example.input)).toEqual(example.output);
    });
  }
});
