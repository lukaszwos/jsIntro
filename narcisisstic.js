function narcissistic(number) {
  // cast the number to string
  let strNum = number.toString();
  // calculate the length of the number/string which is our power
  let power = strNum.length;

  let strArr = strNum.split("");

  // cast array of strings to array of numbers

  let numArr = strArr.map((element) => parseInt(element));

  // now raise each element of the array to the power of power

  let powArr = numArr.map((element) => element ** power);

  let sum = 0;
  for (let i = 0; i < powArr.length; i = i + 1) {
    sum = sum + powArr[i];
  }

  return sum === number;
}

console.log(narcissistic(153));
