"use strict";
{
    // nullable type
    const Search = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    Search(null);
    // unknown type
    const getSpeed = (value) => {
        if (typeof value === "number") {
            const convert = (value * 1000) / 3600;
            console.log(`The speed is ${convert} ms^-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(convertSpeed);
        }
        else {
            console.log("wrong input");
        }
    };
    getSpeed(`5000 kmh^-1`);
    //   never type
    const throwErr = (msg) => {
        throw new Error(msg);
    };
    throwErr("Error");
}
