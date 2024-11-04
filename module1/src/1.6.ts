function add(num1 : number, num2 : number):number {
    return num1 + num2;
}

add(2,5);

const addArrow= (num1 : number, num2 : number):number => num1 + num2



const poorUser = {
    name: "Hafsa",
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance is : ${this.balance+balance}`;
    },
};


const arr: number[] = [1,2,3];

const newArray: number[] = arr.map((elem: number): number =>elem*elem);