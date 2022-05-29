import { minMovesToSeat } from '~/problems/s2037_minimum_number_of_moves_to_seat_everyone';
import { name } from './utils';

describe('Minimum Number of Moves to Seat Everyone', () => {
  const examples: Array<{
    input: [number[], number[]];
    output: number;
  }> = [
    {
      input: [
        [3, 1, 5],
        [2, 7, 4],
      ],
      output: 4,
    },
    {
      input: [
        [4, 1, 5, 9],
        [1, 3, 2, 6],
      ],
      output: 7,
    },
    {
      input: [
        [2, 2, 6, 6],
        [1, 3, 2, 6],
      ],
      output: 4
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(minMovesToSeat(...example.input)).toEqual(example.output);
    });
  }
});
