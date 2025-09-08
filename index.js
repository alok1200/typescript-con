"use strict";
// let x: number = 10;
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(x);
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("akash");
// greet(1);   // according to function declaration that will not allow number as argument
// Interface
function great(user) {
    console.log("hello" + user.name);
}
great({
    name: "aloks",
    age: 21,
});
function isLigal(user) {
    if (user.age > 18) {
        return "you will dreive";
    }
    else {
        return " you will not drive";
    }
}
const user1 = {
    firstname: "best",
    lastname: "abc",
    age: 2,
    email: "abc@gmail.com",
};
let ans = isLigal(user1);
console.log(ans);
//# sourceMappingURL=index.js.map