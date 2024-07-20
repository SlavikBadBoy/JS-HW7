"use strict";
// Створив масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);
// Масив з трьох рядків
const stringsArray = ["Hello", "World", "!"];

stringsArray.push("JavaScript");

console.log(stringsArray);
// Створив скрипт який поверне суму всіх чисел в масиві.
let sumNumbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log(sum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const numbersArray = [2, 4, 6, 8, 10];

// Цикл for для виведення елементів
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
const stringsJsArray = ["Hello", "JavaScript", "World", "!", "Programming"];

for (const string of stringsJsArray) {
  if (string.length > 5) {
    console.log(string);
  }
}
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let tenNumbers = [1, 22, 3, 44, 5, 66, 7, 88, 9, 100];
const findMax = (numbers) => {
  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
};

const maxValue = findMax(tenNumbers);
console.log(maxValue);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const pairNumbersArray = [1, 5, 7, 3, 9, 2, 4, 6, 8, 10];

// Цикл for для пошуку парних чисел
for (const number of pairNumbersArray) {
  if (number % 2 === 0) {
    console.log(number);
  }
}
