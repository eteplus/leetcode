import { mostFrequent } from '~/problems/s2190_most_frequent_number_following_key_in_an_array';
import { name } from './utils';

describe('Most Frequent Number Following Key In an Array', () => {
  const examples: Array<{
    input: [number[], number];
    output: number;
  }> = [
    {
      input: [[1,100,200,1,100], 1],
      output: 100,
    },
    {
      input: [[2,2,2,2,3],2],
      output: 2,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(mostFrequent(...example.input)).toEqual(example.output);
    });
  }
});
