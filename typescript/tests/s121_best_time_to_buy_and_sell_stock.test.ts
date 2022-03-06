import { maxProfit } from '~/problems/s121_best_time_to_buy_and_sell_stock';
import { name } from './utils';

describe('Best Time to Buy and Sell Stock', () => {
  const examples: Array<{
    input: number[];
    output: number;
  }> = [
    {
      input: [7, 1, 5, 3, 6, 4],
      output: 5,
    },
    {
      input: [7, 6, 4, 3, 1],
      output: 0,
    },
  ];
  for (const example of examples) {
    test(name(example), () => {
      expect(maxProfit(example.input)).toEqual(example.output);
    })
  }
});
