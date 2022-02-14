import { reverseBetween } from '~/problems/s92_reverse_linked_list_ii';
import { createLinkNode, parseLinkNode } from '~/libs/link_node';
import { name } from './utils';

describe('Reverse Linked List II', () => {
  const examples: Array<{
    input: [number[], number, number];
    output: number[];
  }> = [
    {
      input: [[1, 2, 3, 4, 5], 2, 4],
      output: [1, 4, 3, 2, 5],
    },
    {
      input: [[1, 2, 3, 4, 5], 2, 5],
      output: [1, 5, 4, 3, 2],
    },
  ];
  for (let example of examples) {
    test(name(example), () => {
      const head = createLinkNode(example.input[0]);
      const output = reverseBetween(head, example.input[1], example.input[2]);
      expect(parseLinkNode(output)).toEqual(example.output);
    })
  }
});
