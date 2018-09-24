/*Function Description

Complete the function rotLeft in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

An array of integers a.
An integer d, the number of rotations.
Input Format

The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform.
The second line contains  space-separated integers .

Output Format

Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.

Sample Input
5 4
1 2 3 4 5
Sample Output

5 1 2 3 4

*/

function rotLeft(a, d) {
  const arrLength = a.length;
  let final, newEnd, newStart, i;
  if (d > arrLength) {
    const movesFromLeft = d % arrLength;
    i = arrLength - movesFromLeft;

    newStart = a.slice(i, arrLength);
    newEnd = a.slice(0, i);
    final = newStart.concat(newEnd);

  } else {
    newEnd = a.slice(0, d);
    newStart = a.slice(d, arrLength);
    final = newStart.concat(newEnd);
  }
  return final;
}
