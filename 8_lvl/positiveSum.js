// You get an array of numbers, return the sum of all of the positives ones.

const positiveSum = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  console.log(total);
  return total;
};

positiveSum([2, 5, 8, 2, 3, -4, 5, -20]);
