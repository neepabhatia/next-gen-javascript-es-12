// In the example, the ??= will check if the lastname is null or undefined. If null or undefined, then the right value will be assigned to the left variable.
// If any other value is present , then the right value will not change.
let userDetails = {firstname: 'Katina', age: 24}
userDetails.lastname ??= 'Dawson';
console.log(userDetails); // This will print: {firstname: 'Katina', age: 24, lastname: 'Dawson'}
userDetails.lastname ??= 'Dawon';
console.log(userDetails); // This will print: {firstname: 'Katina', age: 24, lastname: 'Dawson'}
