import { coinChange } from '~/problems/s322_coin_change';
import { name } from './utils';

describe('Coin Change', () => {
  const examples: Array<{
    input: [number[], number],
    output: number
  }> = [
    {
      input: [[1, 2, 5], 11],
      output: 3,
    },
    {
      input: [[2], 3],
      output: -1,
    },
    {
      input: [[1], 0],
      output: 0
    }
  ];
  for (const example of examples) {
    const [coins, amount] = example.input;
    test(name(example), () => {
      expect(coinChange(coins, amount)).toEqual(example.output);
    })
  }
})