// TYPESCRIPT FUNCTION


//Type aliases 

type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]


////////////////////////////////////////////////////////////////
type Guitarist = {
    name ?: string,
    active : boolean,
    albums : stringOrNumberArray
}

type UserId = stringOrNumber 


/* However type aliases are not used with the interface keyword */
//LITERAL TYPES
/* Literal types are helpul in situations where you want to explicitly define and limit the possible values that a variable or property can take. They enhance the type safety of your code by preventing unintended values from being assigned */

//Examples of String literals

let myName : 'Dave' | 'any '| 'Kahwai'
myName = 'Kahwai' //valid code 
myName = 'Dave' //valid code 
//myName = 'Kevin' // not valid  TS code

//Examples of Number literals

let myNum : 1 | 2 | 3
myNum = 1 //valid code 
myNum = 2 //valid code 
//myNum = 5 // not valid  TS code

//Examples of Boolean literals

let myBool : false|true
//myBool = 'false' // not valid code 
myBool = false //valid code 
myBool = true //  valid  TS code 

console.log(myName,myBool,myNum)


//FUNCTIONS

const add = (a:number ,b :  number) :  number => {
    return a + b
}

const logMsg = (message : any) : void =>
    //void type is for functions that do not return anything as they have been assigned the any data type
    {
    console.log(message)
}

logMsg("Hello");//console prints hello
logMsg(add(2,3));//console prints 5
logMsg(add(1 , 3));//console prints 4


/* An alternative to the arrow function is using the function keyword */

let subtract = function ( c : number, d : number ) : number {
    return c - d
}

//Function Type aliases
type mathFunc = (a : number, b : number) => number

let multiply : mathFunc = (c,d) =>{
    return c * d
}

logMsg(multiply(1,8))//console returns 8

//FUNCTION INTERFACE

/* interface mathFuncA  {
    (a : number, b : number): number
}

let multiplyA : mathFunc = (c,d) =>{
    return c * d
}

logMsg(multiplyA(8,8)) */ //CONSOLE RETURNS 64

//OPTIONAL PARAMETERS - this can be done by putting a type guard statetemt

const addAll = (a : number, b : number, c?: number): number => {
    if (typeof c !== 'undefined'){
    return a + b + c //this is the guard staementt
    }
    return a + b
}

console.log(addAll(1,2,2))//console returns 5
console.log(addAll(1,2,2))//console returns 5

//Note: if you have an optional parameter ,it need to come last in the list after the required parameters

//Default parameters

const addAllB = (a : number, b : number, c: number = 8): number => {
    //no need for this if statement

    /* if (typeof c !== 'undefined'){
    return a + b + c //this is the guard staementt
    } */
    return a + b + c
}

console.log(addAllB(7,2))//console returns 17 , the default value of c which is 8 is added to 7 nad 2
console.log(addAllB(8,2))//console returns 18,the default value of c which is 8 is added to 7 nad 2

//Function with Rest Parameters

const total = ( a: number, ... nums : number[]): number => {
    return a + nums.reduce((previous, current) => previous + current)
}

console.log(total(1,2,3,4,5))//console returns 15

//Note that the rest operator should come at the end.

//THE NEVER TYPE
/* In TypeScript, the never type represents values that never occur. It is often used in situations where an operation or function is expected to throw an exception, enter an infinite loop, or have some other behavior that prevents it from producing a normal value or completing successfully. */

const createError = (errMsg : string):never => {
    throw new Error(errMsg)
}

//Functions that enter into infinite loops without returning a value also have a return type of 'never'

const infinite = () => {
    let i : number = 1
    while (true){
        i ++ // this makes yhis infinite function a never type
        if (i ===10) break//this makes this infinite funcytion a void type as there is this else statement that breaks the loop.
    }
}

//Benefits of the 'never' type.
/* The never type is a powerful tool in TypeScript for expressing situations where values are unreachable or where a function will never complete normally. It helps improve type safety by allowing developers to catch potential issues at compile-time. */

//examples 
//the fn below is used to identify a number or a string

const numberOrString = (value : number | string): string => {
    //This are typeguards used to check the type of our value
    if (typeof value === 'string')  return "String"
    if (typeof value === 'number') return "number"
    return createError('This should not happen')
}

console.log(numberOrString(44))// console returns number as the parameter fed was number 44
console.log(numberOrString("44"))// console returns String as parameter fed is string "44"
console.log(numberOrString('never'))// console returns String as parameter fed is string "never"

//CUSTOM TYPE GUARD
