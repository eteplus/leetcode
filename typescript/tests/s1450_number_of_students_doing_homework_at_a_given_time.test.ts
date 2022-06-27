import { busyStudent } from '~/problems/s1450_number_of_students_doing_homework_at_a_given_time';
import { name } from './utils';

describe('Number of Students Doing Homework at a Given Time', () => {
  const examples: Array<{
    input: [number[], number[], number];
    output: number;
  }> = [
    {
      input: [
        [1, 2, 3],
        [3, 2, 7],
        4
      ],
      output: 1,
    },
    {
      input: [
        [4],
        [4],
        4
      ],
      output: 1,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(busyStudent(...example.input)).toEqual(example.output);
    });
  }
});
