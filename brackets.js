const validCurley = (c2) => c2 === '}';
const validParen = (p2) => p2 === ')';
const validBracket = (b2) => b2 === ']';

const braceCheck = (b1, b2) => {
  if (b1 === '{') return validCurley(b2);
  if (b1 === '(') return validParen(b2);
  if (b1 === '[') return validBracket(b2);
};

const checkHalves = (string) => {
  let half = string.length / 2;
  let end = string.length;
  let left = string.slice(0, half);
  let right = string.slice(half, end);
  let match = 'NO';
  let i = 0;
  let j = right.length - 1;

  while (i < left.length && j >= 0) {
    if (!braceCheck(left[i], right[j])) {
      return match;
    }
    i++;
    j--;
  }
  match = 'YES';
  return match;
};

const pairs = (string) => {
  let match = 'NO';
  for (let i = 0; i < string.length; i += 2) {
    if (!braceCheck(string[i], string[i + 1])) {
      return match;
    }
  }
  match = 'YES';
  return match;
};

function braces(values) {

  return values.map((brStr, i) => {

    if (brStr.length % 2 !== 0) {return 'NO';}
    //if the first two pairs match, it means the string would have to be in pair format to match
    else if (braceCheck(brStr[0], brStr[0 + 1])) {
      return pairs(brStr);
    }
    //otherwise the only other match option is they are out to in match/ '{ [ () ] }
    else if (braceCheck(brStr[0], brStr[brStr.length - 1])){
        return checkHalves(brStr);
    } else return 'NO';
  });
}

