const sun = (a, b) =>  a + b;
console.log(sun(1, 3));

const islegal = (age) => {
  return age >= 15;
}
console.log(islegal(18));

const islegal2 = (age) => age >= 15;

console.log(islegal2(18));
const islegal3 = age => age >= 15;

console.log(islegal3(18));

const triple = value => value * 25;
console.log(triple(5));

const multiply = (a, b) => a * b;
console.log(multiply(5, 5));

const numbers = [9, 5, 14, 3, 11];
const numbersAbersAboveten = numbers.filter(number => number > 10);
;

console.log(numbersAbersAboveten);

const names = ["Sam", "Alex", "Charlie"];
const result = names.find(function(name){
  return name === "Alex";
});
console.log(result);

const result2 = names.find(name => name === "Sam");
console.log(result2);

const numbers3 = [4, 2, 5, 8];
const doubled = numbers3.map(function(number){
  return number * 2;
});
console.log(doubled);
const doubled2 = numbers3.map(number => number * 2);
console.log(doubled2);

const get = Strings => {
  return Strings.map(String => {
    return String.length;
  })
};

console.log(get(["a", "abc"])); // [1, 3]


