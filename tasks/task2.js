// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
   let array = str.split("");
   const res = array
      .reverse()
      .filter((arr) => isNaN(parseInt(arr)))
      .join("");
   return res;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz")); // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;
