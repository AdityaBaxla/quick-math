// interface genNumber {
//     level : number,

//     addition : boolean,
//     mulitplication : boolean,
//     substraction : boolean,
//     division : boolean,

//     time? : number,
//     amount? : number,
// }

const randomRange = (a:number, b:number) => Math.ceil(Math.random() * (b - a) + 1)

// not generate the same numbers consequtively
// makeNumbers.ts

const usedNumbers: Set<number> = new Set();
const maxPossibleNumbers = 10;
// Generate a random integer within a specified range, ensuring it's not in the usedNumbers set
function getRandomNonConsecutiveInt(min: number, max: number): number {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedNumbers.has(num));

  usedNumbers.add(num);
  return num;
}

// Example usage for addition questions
export function makeNumbers(): [number, number] {
  if (usedNumbers.size === maxPossibleNumbers) {
    // Reset used numbers if needed to ensure variety (maxPossibleNumbers is the upper limit)
    usedNumbers.clear();
  }

  const num1 = getRandomNonConsecutiveInt(1, 10); // Example: Generate numbers between 1 and 10
  const num2 = getRandomNonConsecutiveInt(1, 10);
  return [num1, num2];
}
