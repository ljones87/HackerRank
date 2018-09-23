/*
Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints

 where
Output Format

Print the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output
3

*/

function sockMerchant(n, ar) {
  const matches = {};
  let matchCounter = 0;

  ar.forEach(sock => {
    if (!matches[sock]) matches[sock] = [sock];
    else matches[sock].push(sock);
  });

  for (let key of Object.keys(matches)) {
    const numSocks = matches[key].length;
    matchCounter += Math.floor(numSocks / 2);
  }
  return matchCounter;
}
