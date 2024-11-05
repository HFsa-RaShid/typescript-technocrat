"use strict";
{
    //type assertion
    let anything;
    anything = "wfcegv dfvf";
    // (anything as number).
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convert = parseFloat(value) * 1000;
            // console.log(`The converted value: ${convert}`);
            return `The converted value: ${convert}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result = kgToGm(1000);
    const result1 = kgToGm("1000");
    // 
}
