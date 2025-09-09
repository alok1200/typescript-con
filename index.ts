// let x: number = 10;

// console.log(x);

function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("akash");
// greet(1);   // according to function declaration that will not allow number as argument

// Interface

function great(user: { name: string; age: number }) {
  console.log("hello" + user.name);
}

great({
  name: "aloks",
  age: 21,
});

// assigment #1

// interface User {
//   firstname: string;
//   lastname: string;
//   age: number;
//   email: string;
// }

// function isLigal(user: User) {
//   if (user.age > 18) {
//     return "you will dreive";
//   } else {
//     return " you will not drive";
//   }
// }

// const user1: User = {
//   firstname: "best",
//   lastname: "abc",
//   age: 2,
//   email: "abc@gmail.com",
// };

// let ans = isLigal(user1);

// console.log(ans);

// diferance between interface and type

// interface User {
//   name: string;
//   age: number;
// }

// type UserType = {
//   name: string;
//   age: number;
// };

// let user: UserType = {
//   name: "akash",
//   age: 21,
// };

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

type Status = "success" | "error" | "loading";

type Employee = {
  id: number;
  name: string;
};

type Manager = {
  role: string;
};

type ManagerEmployee = Employee & Manager;

const boss: ManagerEmployee = { id: 1, name: "Alok", role: "Team Lead" };
