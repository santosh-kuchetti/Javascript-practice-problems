// Write a program to find element occurence in array

const arr = [1, 2,2,2,2,2, 2, 3, 4, 5, 5, 3];
const count = {};

function reqAns(arr) {
    for (let element of arr) {
        if (count[element]) {
            count[element] += 1;
        }
        else {
            count[element] = 1;
        }
    }
    return count;
}

const ans = reqAns(arr);
console.log(ans);


// Given a string, reverse each word in the sentence.

let string = "Hii welcome to javascript"
let reverseEachWord = (string, separator) => {
    return string.split(separator).reverse().join(separator)
}

let reverseEntairString = reverseEachWord(string, '');
let answer = reverseEachWord(reverseEntairString, ' ');

console.log(answer)


// write a 'mul' function which will properly when invoked as below syntax
// console.log(mul(2)(3)(4));  output should be 24


const mul = function (a){
    return function (b) {
        return function (c) {
            return a * b * c;
                }
            }
}


console.log(mul(2)(3)(4));

// infinite curring in javasscript
// add(1)(2)(3)(4)(5)......(). It should give the output as 15.

const add = function (a) {
    return function (b) {
        if (b) {
            return add(a + b);
        } return a;
    }
}
console.log(add(1)(2)(3)(4)(5)(5)());


//  Write a function that would allow you to do this?
/*  
    let addSix = createBase(6);
    addSix(10); returns 16
    addSix(21); returns 27 
*/

function createbase(baseNumber){
    return function(n){
        return baseNumber + n;
    }
}

let addsix = createbase(6);
console.log(addsix(10));


//  Given two strings, return true if they are anagrams of one another

const firstString = 'Mary'
const secondString = 'Army'

function reqAnswer(first, second) {
    let a = first.toLowerCase();
    let b = second.toLowerCase();

    a = a.split('').sort().join('');
    b = b.split('').sort().join('');

    return a === b;
}

console.log(reqAnswer(firstString, secondString));


//  how does 'this' keyword works?


function foo() {
    console.log(this.bar)
}

let bar = "global"

let obj1 = {
    bar: 'obj1'
}

let obj2 = {
    bar:'obj2'
}

// foo();   //  "global"
// obj1.foo();   //  "obj1"
// foo.call(obj2);   //  "obj2"
// new foo();     //   undefined


// fibonacci number
//it's series is  0,1,1,2,3,5,8,13,21,34

function fibb(n) {
    if (n < 2) {
        return n;
    }
    return fibb(n-1) + fibb(n-2)

}

console.log(fibb(3))


//  chunked array problem

//  given: [1, 4, 12, 3, 2, 6, -9, 0], n=3;
//  Return: [ [1,4,12], [3,2,6], [-9, 0] ]

const chunks = function chunkedArray(arr, n) {
    const array = [1, 4, 12, 3, 2, 6, -9, 0]
    const chunked = [];
    
    for (let elm of arr) {
        let last = chunked[chunked.length - 1];
        if (!last || last.length === n) {
            chunked.push([elm])
        }
        else {
            last.push(elm)
        }
    }
    return chunked
}([1, 4, 12, 3, 2, 6, -9, 0],3)    //  this is a self calling function now

console.log(chunks)


//  isUnique

const given = [1, 5, 2, 6, 8];

const isUnique = function unique(arr) {
    const obj = {}
    for (let ele of arr) {
        if (obj[ele]) {
            obj[ele]++
        } else {
            obj[ele] = 1
        }
    }

    for (let ele in obj) {
        if (obj[ele] > 1) {
            return false
        } else {
            return true;
        }
    }
}(given)    //  this is a self calling function now

console.log(isUnique)



//  oneAway

/*    
    (pale,ple) -> true  -  insert 'a' into 'ple' to make 'pale'. since single change is needed its true
    (apple,pple)  -> true  -  insert 'a' into 'pple' to make 'apple'. since single change is needed its true
    (pale,bake)   -> false  -  replace 'p' with 'b'  and  'l'  with 'k'.  since two changes are required it's a flase

*/

/*
    1. if the strings are identical, return false -  zero edits are required
    2. create charecter maps of both strings
    3. check if each charecter are of same type and value.
        if they are not, increase the counter.
    if the counter is 2 or more, then return false
    4. return true
*/

const str1 = "bake"
const str2 = "pale"

function elements(string) {
    const obj = {}
    for (let ele of string) {
        if (obj[ele]) {
            obj[ele] ++
        } else {
            obj[ele] = 1
        }
    }

    return obj;
}

const req = function oneAway(string1, string2) {
    if (string1 === string2) {
        return false;
    }
    const obj1 = elements(string1)
    const obj2 = elements(string2)
    let counter = 0;
    for (let ele in obj1) {
        if (obj1[ele] !== obj2[ele]) {
            counter ++
        } else if (counter >= 2) {
            return false
        }
    }
    return true
    
}(str1, str2)   //  this is a self calling functcion now

console.log(req)

//  compressing the String

/*
    string = "aabbcccee"   --> we should return 'a2b2c3e2'

    string = 'abcde'   -->  we should return 'abcde'
    
*/

const stringCompressed = function (string) {
    let count = 1, output = '', uniqueCount = 0;
    const n = string.length;

    for (let i = 0; i < n; i++){
        if (string[i] === string[i + 1]) {
            count ++
        } else {
            output += string[i] + count
            count = 1
            uniqueCount++
        }
    }

    if (uniqueCount == n) {
        return string
    } else {
        return output
    }
}("aabbbcccdde")

console.log(stringCompressed)
