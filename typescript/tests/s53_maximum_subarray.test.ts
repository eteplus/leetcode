import { maxSubArray } from '~/problems/s53_maximum_subarray';

test('Maximum Subarray', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      output: 6,
    },
    {
      input: [1],
      output: 1,
    },
    {
      input: [5, 4, -1, 7, 8],
      output: 23,
    },
  ];
  for (let example of examples) {
    let output = maxSubArray(example.input);
    expect(output).toEqual(example.output);
  }
});
