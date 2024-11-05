{
    // generic type: generalize kore fela

    type GenericArray<T> = Array<T>

    const rolls: GenericArray<number> = [1,2,4];

    const name: GenericArray<string> = ["ed","dfc","ewfg"];

    const boolArray: GenericArray<boolean> = [true, false, true];

// generic object
const user: GenericArray<{name: string; age: number}> =[
    {
        name: "sdfce",
        age: 21
    },
    {
        name: "dsfgv",
        age: 24
    },
];


// generic tuple

type GenericTuple<X,Y> = [X,Y];
const manush: GenericTuple<string, string> = ['mr. X', 'Miss Y']

const UserWithId: GenericTuple<number,{name: string; email: string}> =[123, {name: 'Hafsa', email: 'qa@gmail.com'}]









    // 
}