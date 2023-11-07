// interface genNumber {
//     level : number,

//     addition : boolean,
//     mulitplication : boolean,
//     substraction : boolean,
//     division : boolean,

//     time? : number,
//     amount? : number,
// }

const randomRange = (a:number, b:number) => Math.ceil(Math.random() * (b - a) + 1)



export const generateNums = (amount: number) => {
    const output = []

    for (let i = 0 ; i < amount; i++ ){
        const x : number  = randomRange(1,10)
        const y : number = randomRange(1,10)
        output.push( [ x, y, x + y ] )
    }
    return output;
}