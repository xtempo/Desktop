// eg1
let score = "33"

console.log(typeof score);
console.log(typeof(score));

let point  = "34asfdg"

let valueInNumber = Number(point);

console.log(typeof(valueInNumber));
console.log(valueInNumber);

// output
//ion.js 
//string
//string
//number
//NaN

//eg2
let point1  = undefined

let valueInNumber1 = Number(point1);

console.log(typeof(valueInNumber1));
console.log(valueInNumber1);


//output
//number
//NaN   ===> NaN stands for non n numbers


// eg3
let point11  = true

let valueInNumber11 = Number(point11);

console.log(typeof(valueInNumber11));
console.log(valueInNumber11);

//output
// number
// 1

// eg 4
let point12  = false

let valueInNumber12 = Number(point12);

console.log(typeof(valueInNumber12));
console.log(valueInNumber12)


//output
// number
// 0


//eg 5
let isloggin = 1

let booleanIsLoggin = Boolean(isloggin);

console.log(booleanIsLoggin);
console.log(typeof(booleanIsLoggin));


// output
// true
// boolean

// eg 6
let getValue = ""

let options = Boolean(getValue);

console.log(options);
console.log(typeof(options));

// false
// boolean



//eg 7
let getValue1 = "soman"

let options1 = Boolean(getValue1);

console.log(options1);
console.log(typeof(options1));

// true
// boolean


// eg 8
let getValue2 = 33

let options2 = String(getValue2);

console.log(options2);
console.log(typeof(options2));

// 33
// string

