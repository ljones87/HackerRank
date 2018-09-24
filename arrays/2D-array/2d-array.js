const addHourglass = (arr, I, i) => {
  const add = (a, b) => a + b;
  const top = arr[I].slice(i, i + 3).reduce(add);
  const middle = arr[I + 1][i + 1];
  const bottom = arr[I + 2].slice(i, i + 3).reduce(add);
  return top + middle + bottom;
};

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  const totals = [];
  for (let I = 0; I < arr.length - 2; I++) {
    let i = 0;
    while (i < arr[I].length - 2) {
      totals.push(addHourglass(arr, I, i));
      i++;
    }
  }
  console.log(totals);
  return totals.reduce((a, b) => Math.max(a, b));
}
