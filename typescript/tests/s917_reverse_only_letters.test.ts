import { reverseOnlyLetters } from '~/problems/s917_reverse_only_letters';
import { name } from './utils';

describe('Reverse Words in a String III', () => {
  const examples: Array<{
    input: string;
    output: string;
  }> = [
    {
      input: 'a-bC-dEf-ghIj',
      output: 'j-Ih-gfE-dCba',
    },
    {
      input: 'ab-cd',
      output: 'dc-ba',
    },
    {
      input: 'Test1ng-Leet=code-Q!',
      output: 'Qedo1ct-eeLg=ntse-T!'
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(reverseOnlyLetters(example.input)).toEqual(example.output);
    });
  }
});
