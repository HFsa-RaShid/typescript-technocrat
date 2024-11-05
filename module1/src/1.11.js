"use strict";
var _a, _b;
{
    // ternary operator || optional || nullish coalescing
    const age = 15;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("Not adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log(isAdult);
    // nullish coalescing operator
    // null or undefined ===> decision making  otherwise use ternary
    // const isAuthenticated = null;
    // const result1 = isAuthenticated ?? 'Guest'
    // console.log({result1});
    const isAuthenticated = undefined;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log({ result1 });
    const student1 = {
        name: "Hafsa",
        age: 22,
        contact: "2135436",
        gender: "female",
        address: {
            city: "Barishal",
            road: "C & B",
        },
    };
    const result = (_b = (_a = student1 === null || student1 === void 0 ? void 0 : student1.address) === null || _a === void 0 ? void 0 : _a.permanent) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ result });
}
