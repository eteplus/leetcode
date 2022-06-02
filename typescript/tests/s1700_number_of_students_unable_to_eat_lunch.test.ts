import { countStudents } from '~/problems/s1700_number_of_students_unable_to_eat_lunch';
import { name } from './utils';

describe('Number of Students Unable to Eat Lunch', () => {
  const examples: Array<{
    input: [number[], number[]];
    output: number;
  }> = [
    {
      input: [
        [1, 1, 0, 0],
        [0, 1, 0, 1],
      ],
      output: 0,
    },
    {
      input: [
        [1, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 1],
      ],
      output: 3,
    },
    {
      input: [[1, 1], [0, 1]],
      output: 2
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(countStudents(...example.input)).toEqual(example.output);
    });
  }
});
