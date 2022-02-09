import { twoSum } from '~/problems/s1_two_sum';
import { name } from './utils';

describe('Two Sum', () => {
  const examples: Array<{
    input: [number[], number],
    output: number[]
  }> = [
    {
      input: [[-1,-2,-3,-4,-5], -8],
      output: [2, 4],
    },
    {
      input: [[2, 7, 11, 15], 9],
      output: [0, 1],
    },
    {
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
  ];
  for (let example of examples) {
    const [nums, target] = example.input;
    test(name(example), () => {
      let output = twoSum(nums, target);
      expect(output).toEqual(example.output);
    })
  }
})