// operator working

// console.log(2+1)
// console.log(2-1)
// console.log(2*1)
// console.log(2**1)   // 2 power 2
// console.log(2/1)
// console.log(2%1)
// console.log(1)


let str ="hello"

let str2 = "sonam"

let str3 = str + " "  +  str2

console.log(str3);


// output
// hello sonam



/// main complex situation



// let assume we have on string and one number and adding togather

console.log("1" + 2)     // but here we want 3 not 12
console.log(1 + "2")    // 
console.log("1" + "2")   // it is okey if we got 12 in her
//output
// 12
// 12
// 12

//another problem it is not the correct way to write this kind code 
console.log("1" + 2 + 3);  // her is initial is string then all the add portion is in string
console.log(2 + 5 + "7");  // if initial is number then it try to solve all the number and if there is string and it just add at the end 

//but it is good for problem solving questions
//output

// 123
// 77


console.log(2 + 5 + "7" + 4 + 5 + 6); 
// output
// 77456  // her 5 and 2 = 7 after string 7 all the number becames string also


// special type of operator  conversion
console.log(+true)
// output 
// 1


/// incremment 
// it is postfix
let GamePoint = 200
GamePoint++;          
console.log(GamePoint)
// output
// 201

// it is prefix
let GameScore = 200
++GameScore;
console.log(GameScore)
// output
// 201


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



// my example
let box = 45;
let bigBox = box++;
console.log(`${box} and  ${bigBox}`);
//output
// 46 and  45


let box1 = 45;
let bigBox1 = ++box1;
console.log(`${box1} and  ${bigBox1}`);
// output
// 46 and  46



let box2 = 45;
let bigBox2 = box2--;
console.log(`${box2} and  ${bigBox2}`);
//output
// 44 and  45


let box3 = 45;
let bigBox3 = --box3;
console.log(`${box3} and  ${bigBox3}`);
//output
// 44 and  45