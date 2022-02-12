import { maximumSwap } from '~/problems/s670_maximum_swap';
import { name } from './utils';

describe('Maximum Swap', () => {
  const examples: Array<{
    input: number;
    output: number;
  }> = [
    {
      input: 9972,
      output: 9972,
    },
    {
      input: 2736,
      output: 7236,
    },
    {
      input: 1010000,
      output: 1100000,
    },
    {
      input: 1993,
      output: 9913,
    },
    {
      input: 98368,
      output: 98863,
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      expect(maximumSwap(example.input)).toEqual(example.output);
    });
  }
});
