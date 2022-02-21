/**
 * 设 a = 6 -> 0110
 *    b = 3 -> 0011
 *  a+b = 9 -> 1001
 *
 * a + b 可以转换为二进制加减，通过位运算 ^ 和 & 进行。
 * 1、通过 & 可知道两数相加后需要进位的部分（a & b -> 0010）然后我们进位 (a & b) << 1 -> 0100，记结果为 i
 * 2、通过 ^ 可知两数相加后无需进位的部分(a ^ b -> 0101)，记结果为 j
 *
 * 故 a + b 可转为 i + j，其中 i = 0100, j = 0101，重复前两步操作
 * 1、i & j -> 0100 & 0101 = 0100 , 当其不为 0 时, 进位 (i & j) << 1 -> 1000， 记结果为 i
 * 2、i ^ j -> 0100 ^ 0101 = 0001 , 记结果为 j
 *
 * 重复前两步操作，其中 i = 1000, j = 0001：
 * 1、i & j -> 1000 & 0001 = 0000 , 由于其为 0，跳出循环
 * 2、i ^ j -> 1000 ^ 0001 = 1001 , 结果为 9, 此为最终结果
 *
 * @link https://leetcode.com/problems/sum-of-two-integers/
 * @param a
 * @param b
 * @return
 */
export function getSum(a: number, b: number): number {
  while ((a & b) !== 0) {
    const carry = (a & b) << 1;
    b = a ^ b;
    a = carry;
  }
  return a ^ b;
}
