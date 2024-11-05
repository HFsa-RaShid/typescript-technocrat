{
    // interface

    interface User {
        name: string;
        age: number,
    }



    interface UserWithRole extends User {
        role: string,
    }

    
    const user1: UserWithRole = {
        name: "Hafsa",
        age: 22,
        role: "admin",
    };

    // array using interface
    interface Roll1{
        [index: number]: number
    }

    const roll1: Roll1 = [1,2,3]



    // 
    interface Add {
        (num1: number, num2: number): number
    }
    const result: Add = (num1, num2) => num1+num2;














    // 
}