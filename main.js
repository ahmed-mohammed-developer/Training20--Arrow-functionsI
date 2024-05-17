function addOne(num = 5){
  return num + 1;
}

console.log(addOne(1));
console.log(addOne());

function welcomeUser(name = "User"){
  return `Hello ${name}`;
}
console.log(welcomeUser());
console.log(welcomeUser("Ahmed Mo"));

function sum(a = 0, b = 0){
  return a + b;
}
console.log(sum(1, 5));
console.log(sum(1));
console.log(sum());

function logUser(userIds = []){
  userIds.forEach(function(userId){
    console.log(userId);
  })
};

logUser([41, 44, 41]);

const sum1 = function(a, b){
  return a + b;
};

const sum2 = (a, b) => {
  return a + b;
};

const triple = (value) => {
  return value * 3;
};

console.log(triple(5));

const triple2 = function(value){
  return value * 3;
}
console.log(triple2(5));

const sumTr = (a) => {
  return a * 3;
};
console.log(sumTr(4));

const grades = [18, 20];
grades.forEach(function(grade){
  console.log(grade)
});

grades.forEach((grade) => {
  console.log(grade)
});

grades.forEach(grade => {
  console.log(grade)
});

const num = grades.filter(grade => {
  return grade > 18;
});
console.log(num);

const sumg = (grades) => {
  let sum = 0;
  grades.forEach(grade => {
    sum += grade
  });
  return sum
};

console.log(sumg([10, 5, 15]));

console.log(sumg([]));

const gett = (temperatures) => {
  return temperatures.filter(temperature => {
    return temperature > 0;
  })
};

console.log(gett([-5, 12, 3])); // [12, 3]




