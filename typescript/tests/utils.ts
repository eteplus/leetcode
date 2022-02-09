
export function name(example: { input: any; output: any; }) {
  return `Input: ${JSON.stringify(example.input)} Output: ${JSON.stringify(example.output)}`;
}