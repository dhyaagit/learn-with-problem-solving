// learning string and arrays in js.

/* 1. 🔤 Reverse a String
Input: "hello" → Output: "olleh"
Hint: .split(), .reverse(), .join()

2. 🔠 Capitalize First Letter of Each Word
Input: "hello world" → Output: "Hello World"
Hint: .split(" "), .charAt(0), .slice()

3. 🆔 Count Vowels in a String
Input: "javascript" → Output: 3
Hint: .includes(), .toLowerCase()

4. 🔍 Check for Palindrome
Input: "madam" → Output: true
Input: "car" → Output: false
Hint: Compare the string to its reverse.

5. 🪓 Remove Spaces from String
Input: " hello world " → Output: "helloworld"
Hint: .split(), .join(), or use .replace(/\s+/g, "")

✅ Array Practice Problems
6. 📏 Find the Longest Word in Array
Input: ["hi", "hello", "world"] → Output: "hello"
Hint: Use .reduce() or loop with .length

7. 🔁 Reverse an Array (Without .reverse())
Input: [1, 2, 3] → Output: [3, 2, 1]
Hint: Use a loop or .unshift()

8. 🔢 Find the Largest Number
Input: [5, 12, 9, 3] → Output: 12
Hint: .reduce() or Math.max(...arr)

9. 🎯 Filter Even Numbers
Input: [1, 2, 3, 4] → Output: [2, 4]
Hint: .filter()

10. ❌ Remove Duplicates
Input: [1, 2, 2, 3, 4, 4] → Output: [1, 2, 3, 4]
Hint: .filter(), .indexOf() or Set

✅ Mixed String + Array Practice
11. 🔣 Count Occurrences of Each Character
Input: "hello" → Output: { h: 1, e: 1, l: 2, o: 1 }
Hint: Use object, loop, .split()

12. 🪄 Replace All Vowels with *
Input: "javascript" → Output: "j*v*scr*pt"
Hint: .replace(/[aeiou]/g, "*")

13. 🔗 Join Array with Dash
Input: ["a", "b", "c"] → Output: "a-b-c"
Hint: .join("-")

14. 🔄 Swap First and Last Character of String
Input: "hello" → Output: "oellh"
Hint: Use .charAt(), .slice()

15. 💬 Count Words in a Sentence
Input: "I love JavaScript" → Output: 3
Hint: .split(" "), .length
*/




sol 1:
let name = "hello";
console.log(name.split("").reverse().join(""));





sol 2:
let words = "hello world";

words = words.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
console.log(words.join(" "));




sol 3:
let word = "javascript";
let count = 0;
let Vowels = "eaiou";
    
for (let i = 0; i < word.length; i++) {
    
    if (Vowels.includes(word[i])) {
        count++;
    }
    
}
console.log(count);




sol 4: 
let word = "madam";

let reversed = word.split("").reverse().join("");

if (reversed == word) {
    console.log("its polindrom");

}else{
    console.log("its not polindrom");
}




sol 5:
let words = "hello world"

let result = words.split(" ").join("");
// or        words.replace(/\s+/g, "");
console.log(result);




sol 6: 
let array = ["hi", "hello", "world"];
let maxLength = array[0];

for (let i = 1; i < array.length; i++) {
    if (maxLength.length < array[i].length) {
        maxLength = array[i];
    }
}
console.log(maxLength);




sol 7: 
let arr = [1, 2, 3];
let reversed = [];

for (let i = 0; i < arr.length; i++) {
  reversed.unshift(arr[i]); 
}
console.log(reversed); 




sol 8:
let array = [5, 12, 9, 3];
console.log( Math.max(...array));




sol 9: 
let arr = [1, 2, 3, 4, 5, 6];

let evenNumbers = arr.filter(function(numbers){
    if (numbers % 2 === 0) {
        return numbers;
    }
})
console.log(evenNumbers);




sol 10: 
let arr = [1, 2, 2, 3, 4, 4];

let result = arr.filter(function (value, index) {
    return arr.indexOf(value) === index;
})
console.log(result);




sol 11: 
let word = "hello";
let neword = {};

let arrOfWord = word.split("");

for (let i = 0; i < arrOfWord.length; i++) {
    let char = arrOfWord[i];

    if (neword[char]) {
        neword[char] += 1;
    }else{
       neword[char] = 1;

    }
}
console.log(neword);




sol 12: 
let word = "javascript"

let result = word.replace(/[aeiou]/g, "*");
console.log(result);




sol 13:
let array =['a', 'b', 'c'];

let result = array.join("-");
console.log(result);




sol 14:
let word = "hello";

if (word.length <= 1) {
    console.log(word);
    
} else {
    let first = word.charAt(0);
let last = word.charAt(word.length -1);
let middle = word.slice(1, word.length -1);

let result = last + middle + first;
console.log(result);
}




sol 15: 
let sentence = "I love JavaScript";

let result = sentence.split(" ");
console.log(result.length);





//learn object in js

/* ✅ 1. Create a Simple Object
Task: Create an object called person with properties: name, age, and city. Print each property using dot notation.

✅ 2. Add and Delete Properties
Task:
Add a property job to the person object.
Then delete the city property.

✅ 3. Check if Key Exists
Task:
Write a function that checks if a given key exists in an object using the in operator or hasOwnProperty().
// Object.hasOwn(obj, prop)	
// obj.hasOwnProperty(prop)	


let user = { name: "Dhiaa", age: 18 };
checkKey(user, "name");  // true
checkKey(user, "email"); // false

✅ 4. Loop Through Object
Task:
Loop through the properties of an object and print both the keys and their values.

✅ 5. Count Object Properties
Task:
Write a function that counts how many properties an object has.

✅ 6. Convert Object to Array
Task:
Convert the object { a: 1, b: 2, c: 3 } to an array of key-value pairs:


[["a", 1], ["b", 2], ["c", 3]]
Hint: Use Object.entries().

✅ 7. Nested Objects
Task:
Access and modify values in a nested object.


let student = {
  name: "Ahmed",
  scores: {
    math: 80,
    science: 90
  }
};
Update the math score to 95.

✅ 8. Object Inside Array
Task:
You have an array of users:


let users = [
  { name: "Ali", age: 20 },
  { name: "Mona", age: 25 }
];
Loop through the array and print each user's name and age.

✅ 9. Merge Two Objects
Task:
Write a function that merges two objects into one.


merge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
Hint: Use the spread operator.

✅ 10. Object with Methods
Task:
Create an object with a method that returns a greeting using the object's properties.


let user = {
  name: "Sarah",
  greet: function () {
    return "Hello, my name is " + this.name;
  }
};
*/





//1
/* let person = {
    name: 'dhyaa',
    age: 19,
    city: "alger"
}; */
//console.log(person);

//2
/* 
person.job = "developer";
console.log(person.job);

console.log(person);

delete person.city;
console.log(person); */

//3
/* function chekprop() {
   if (person.hasOwnProperty("age")) {
        return true;
   }else{
    return false;
   }
}
console.log(chekprop()); */


//4
/* for (let key in person) {
   console.log(person);
} */

//5
/* function countProp() {
    
    let count = 0
    for (let key in person) {
        count++;
    }
    return count;
}
console.log(countProp()); */ 

//6
/* let output = Object.entries(person);
console.log(output); */

//7
/* let student = {
  name: "Ahmed",
  scores: {
    math: 80,
    science: 90
  }
};
student.scores.math = 95;
console.log(student.scores.math);
 */

//8
/* let users = [
  { name: "Ali", age: 20 },
  { name: "Mona", age: 25 }
];
for (const x of users) {
    console.log(x.name, x.age);
} */

//9
/* let obj1 = {
    a: 1
};
let obj2 = {
    b: 1
};
function mergeObj() {
    let obj = Object.assign({}, obj1, obj2);
    return obj;
    
}
console.log(mergeObj()); */

//10
/* let user = {
  name: "Sarah",
  greet: function () {
    return "Hello, my name is " + this.name;
  }
};
console.log(user.greet());
 */


//mini project 
 let library = {
  books: [
    { title: "The Alchemist", author: "Paulo Coelho", status: "read" },
    { title: "1984", author: "George Orwell", status: "unread" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", status: "unread" }
  ],
  
   showUnreadBooks: function () {
    console.log("Unread books:");
    for (let book of this.books) {
      if (book.status === "unread") {
        console.log(` ${book.title} by ${book.author}`);
      }
    }
  }
};

library.showUnreadBooks(); 
