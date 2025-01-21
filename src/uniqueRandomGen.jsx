import { random } from "lodash";

export function uniqueRandomNumArrayGenerator() {
  let AlreadyArray = [];
  let NewArray = [];
  for (let i = 0; NewArray.length < 28; i++) {
    let randomNumber = Math.floor(Math.random() * 28);
    console.log(randomNumber);
    AlreadyArray.push(randomNumber);
    AlreadyArray.forEach((number, index) => {
      if (number !== randomNumber) {
        NewArray.push(number);
      }
    });
  }

  return NewArray;
}
