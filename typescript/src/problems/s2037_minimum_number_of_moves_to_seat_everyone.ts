/**
 * @link
 * @param seats
 * @param students
 */
export function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let moves = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] !== students[i]) {
      moves += Math.abs(seats[i] - students[i]);
    }
  }
  return moves;
}