"use strict";
// Створив масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);
// Створив масив із трьох рядків. Додати до масиву ще одну рядків.
const strings = ["Один", "два", "три"];
strings.push("чотири");
console.log(strings);
// Створив скрипт який поверне суму всіх чисел в масиві.
let sumNumbers = [1, 2, 3, 4, 5];
let valueSum = 0;
for (let i = 0; i <= sumNumbers.length; i += sumNumbers) {
  valueSum += sumNumbers[i];
}
console.log(valueSum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const fiveNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= fiveNumbers.length; i += fiveNumbers) {
  console.log(fiveNumbers[i]);
}
// Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
const fiveStrings = ["Один", "два", "три", "чотири", "п'ять"];
for (let i = 0; i <= fiveStrings.length; i+= fiveStrings) {
  if (fiveStrings[i].length > 5) {
    console.log(fiveStrings[i]);
  }
}
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let tenNumbers = [1, 22, 3, 44, 5, 66, 7, 88, 9, 100];
let maxNumbers = tenNumbers[0];
for (let i = 1; i <= tenNumbers.length; i += tenNumbers) {
  if (tenNumbers[i] > maxNumbers) {
    maxNumbers = tenNumbers[i];
  }
}
console.log(maxNumbers);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
for (let i = 0; i <= tenNumbers.length; i += tenNumbers) {
  if (tenNumbers[i] % 2 === 0) {
    console.log(tenNumbers[i]);
  }
}
