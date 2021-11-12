// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const even_or_odd = (number) => {
  if (number % 2 === 0) {
    console.log("Even");
    return "Even";
  } else {
    console.log("Odd");
    return "Odd";
  }
};

// const even_or_odd = (number) => {
//   number % 2 ? "Odd" : "Even";
// };

even_or_odd(7);
