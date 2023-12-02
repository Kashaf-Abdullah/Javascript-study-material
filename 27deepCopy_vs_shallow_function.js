// Shallow Copy
// Shallow copy method creates a copy where the source and the copied variable reference remain the same. This means that modifications made in one place would affect both places.

// Here's an example to get a better understanding:
const first_person = {
name: "Jack",
age: 24,
}
const second_person = first_person;
second_person.age = 25;
console.log(first_person.age); // output: 25
console.log(second_person.age); // output: 25



// Deep Copy
// Deep copy method creates a copy where the source and the copied variable reference are completely different. This means that modifications made in one place would only affect the variable where we are making a change.

// Now let's look at the examples:

// If the objects/arrays are not nested, then we can achieve deep copy by using

// Spread (...) operator
// Using the spread syntax, we can create a deep copy if there is no nesting.
const first_persons = {
name: "Jack",
age: 24,
}
const second_persons = { ...first_persons };

second_persons.age = 25;

console.log(first_persons.age); // output: 24
console.log(second_persons.age); // output: 25