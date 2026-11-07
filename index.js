// 1. What is an Array?
// An array is a variable that can store multiple values.

// 2. Creating an Array
let arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]
// 3. Array Index
let firstElement = arr[0];
console.log(firstElement); // Output: 1
let secondElement = arr[1];
console.log(secondElement); // Output: 2
// 4. Changing an Array Item
arr[0] = 10;
console.log(arr); // Output: [10, 2, 3, 4, 5]
// 5. .length
console.log(arr.length); // Output: 5
// 6. Adding Items — push()
arr.push(6);
console.log(arr);  // Output: [10, 2, 3, 4, 5, 6]
// 7. Removing the Last Item — pop()
arr.pop();
console.log(arr); // Output: [10, 2, 3, 4, 5]
// 8. Adding at the Beginning — unshift()
arr.unshift(0);
console.log(arr); // Output: [0, 10, 2, 3, 4, 5]
// 9. Removing the First Item — shift()
arr.shift();
console.log(arr); // Output: [10, 2, 3, 4, 5]
// 10. Finding an Item
let index = arr.indexOf(3);
console.log(index); // Output: 2
// 11. Finding the Index — indexOf()
let indexOfFour = arr.indexOf(4);
console.log(indexOfFour); // Output: 3 
// 12. Arrays + Loops 🔥
let fruits=["apple", "banana", "cherry", "mango"];
for ( let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 13. for...of
let vegetables = ["carrot", "broccoli", "spinach"];
for (let vegetable of vegetables) {
    console.log(vegetable);
}
// 14. join()
let colors = ["red", "green", "blue"];
let colorString = colors.join(" and ");
console.log(colorString); // Output: red and green and blue
// 15. slice()
console.log(colors.slice(0, 2)); // Output: ["red", "green"]
// 16. splice() 
console.log(colors.splice(0, 3)); // Output: ["red", "green", "blue"]
// 17. Arrays Can Contain Objects
let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];
console.log(people); // Output: [{ name: "John", age: 30 }, { name: "Jane", age: 25 }]
console.log(people[0].name); // Output: John
console.log(people[1].age); // Output: 25
console.log(people[0]); // Output: { name: "John", age: 30 }
// exercise 1
    let names_of_students = ["John", "Jane", "Jack", "Jill", "Alice"];
    console.log(names_of_students.splice(0, 3)); // Output: ["John", "Jane", "Jack"]
// exercise 2
    let numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
// Exercise 3
    let fruits1 = ["apple", "banana", "cherry", "mango"];
    fruits1.push("orange");
    console.log(fruits1);
// Exercise 4
    let vegetables1 = ["carrot", "broccoli", "spinach"];
    vegetables1.pop();
    console.log(vegetables1);
// Exercise 5
let arrnumbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arrnumbers.length; i++) {
    sum += arrnumbers[i];
}
console.log(sum);
