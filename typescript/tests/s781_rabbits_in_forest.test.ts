import { numRabbits } from '~/problems/s781_rabbits_in_forest';

test('Rabbits in Forest', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [1],
      output: 2,
    },
    {
      input: [1, 1, 2],
      output: 5,
    },
    {
      input: [1, 1, 1, 2],
      output: 7,
    },
    {
      input: [10, 10, 10],
      output: 11,
    },
    {
      input: [1, 1, 1, 2, 2, 2, 2],
      output: 10,
    },
    {
      input: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      output: 22,
    }
  ];
  for (let example of examples) {
    let output = numRabbits(example.input);
    expect(output).toEqual(example.output);
  }
});
