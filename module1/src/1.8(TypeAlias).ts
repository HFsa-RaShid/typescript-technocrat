{
    
    

    // Type Alias

type Student ={
    name: string;
    age: number;
    contact?: string;
    gender: string;
}

const student1: Student ={
    name: "Hafsa",
    age: 22,
    contact: "2135436",
    gender: "female",
};

const student2: Student ={
    name: "Mou",
    age: 23,
    gender: "female",
};

const student3: Student ={
    name: "Rafat",
    age: 15,
    contact: "2135436",
    gender: "male",
};



type Add = (num1:number, num2:number) => number;
const add: Add = (num1,num2) =>num1+num2;



}