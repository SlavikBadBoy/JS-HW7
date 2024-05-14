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
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);
// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const fiveNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < fiveNumbers.length; i++) {
  console.log(fiveNumbers[i]);
}
// Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
const fiveStrings = ["Один", "два", "три", "чотири", "п'ять"];
for (let i = 0; i < fiveStrings.length; i++) {
  if (fiveStrings[i].length > 5) {
    console.log(fiveStrings[i]);
  }
}
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max = Math.max(...tenNumbers);
console.log(max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
for (let i = 0; i < tenNumbers.length; i++) {
  if (tenNumbers[i] % 2 === 0) {
    console.log(tenNumbers[i]);
  }
}
