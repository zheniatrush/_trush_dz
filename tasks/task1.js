// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u)
// на певний символ, наприклад *.

function replaceVowels(str) {
   const validWord = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
   let array = str.split("");
   let res = array.map((arr) => {
      if (validWord.includes(arr)) {
         return "*";
      }
      return arr;
   });
   return res.join("");
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript")); // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;
