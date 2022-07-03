import { canPlaceFlowers } from '~/problems/s605_can_place_flowers';
import { name } from './utils';

describe('Can Place Flowers', () => {
  const examples: Array<{
    input: [number[], number];
    output: boolean;
  }> = [
    {
      input: [[0, 0, 1, 0, 0], 1],
      output: true,
    },
    {
      input: [[0], 1],
      output: true,
    },
    {
      input: [[0, 0, 0], 2],
      output: true,
    },
    {
      input: [[0, 1, 0], 1],
      output: false,
    },
    {
      input: [[0, 0], 1],
      output: true,
    },
    {
      input: [[0, 0], 2],
      output: false,
    },
    {
      input: [[1, 0], 1],
      output: false,
    },
    {
      input: [[1, 0, 0, 0, 1], 1],
      output: true,
    },
    {
      input: [[1, 0, 0, 0, 1], 2],
      output: false,
    }
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(canPlaceFlowers(...example.input)).toEqual(example.output);
    });
  }
});
