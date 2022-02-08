import { containsDuplicate } from '~/problems/s217_contains_duplicate';

test('Contains Duplicate', () => {
  const examples: Array<{
    input: number[];
    output: boolean;
  }> = [
    {
      input: [1, 2, 3, 1],
      output: true,
    },
    {
      input: [1, 1, 2],
      output: true,
    },
    {
      input: [1, 2, 3, 4],
      output: false,
    },
    {
      input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      output: true,
    },
  ];
  for (let example of examples) {
    let output = containsDuplicate(example.input);
    expect(output).toEqual(example.output);
  }
});
