// it is simple comparison operator

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 = 1);
// console.log(2 != 1);
// console.log(2 === 1);




/// from here to the last code don't try this code in project work
/// it may cause lots of problem


// the main problem arises when we ha one string and one number 
// or one boolean and one string

// this kind of coding is not allowed 
// bcs in comparisong all the datatype should be same
console.log("2" > 1);
//output is
// true


//another eg

console.log("\nit is for null");

console.log(null > 0);
console.log(null >= 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null != 0);
console.log(null == 0);
console.log(null === 0);   // it is strick check which check strickly both datatype and all values also 

// output
// false
// true
// false
// true
// true
// false
// false

//reason: 
// the reason is that an equality check == and comparisons > < >= <= 
// works differnetly.
// Comparison convert null to a number, treating it as 0
// that's why null >= 0 is true and null > 0 is false


console.log("\nit is for undefined");
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined > 0);
console.log(undefined != 0);
console.log(undefined == 0);
console.log(undefined === 0);

//output
// it is for undefined
// false
// false
// false
// false
// true
// false
// false
