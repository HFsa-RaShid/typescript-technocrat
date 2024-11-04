"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
const addArrow = (num1, num2) => num1 + num2;
const poorUser = {
    name: "Hafsa",
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3];
const newArray = arr.map((elem) => elem * elem);
