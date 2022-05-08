var rahide = 5;
const deger = 5;


//Primite================//primitvler object deyil
let nezrin = 3;
const zakir = 0;
let toplama = nezrin + " " + zakir;
console.log(toplama)
const dataTypess = true;
// null
var nulum = null;
var serdar;
console.log(serdar);
console.log(Math.random(zakir))



//=======================


//Non primite===============================//object

//function,array

var arry = ["rahide", "nezrin", 3]
var arry = ["nuray", "resad", 4]
console.log(arry)
console.log(arry.length)
console.log(arry[1])

//====================



let age = 19;
let voteable = (age !== 18) ?
    true : //true
    false; //false//ternary opeartors

console.log(voteable)

//!== beraber deyilse


//array methods

let arrMethod = ["rahide", "nazrin", "zakir"]
    // arrMethod.push("amil", "elgun");//arrayin icine push edir gonderir melumati sona
    // arrMethod.unshift("alma")//en qabag elavee edir datanii
    // arrMethod.pop(); //en axirinci elemti cixardir
    // arrMethod.shift()//shif en basdan datani cixardir
    // arrMethod.sort()  elifba sirasi ile dzur

console.log(arrMethod)

//esc5
// const arry = [1, 3, 4, 5, 7, 9, 61, 64, 55];
// const filterArry = arry.filter(function(e) {
//     return e % 2 == 0;
// });
// console.log(filterArry)


//filter esc6
// let filterArryESC6 = arry.filter(e => e % 1 == 0);
// console.log(filterArry)


let text = "";
var arrrrr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 1; i < arrrrr.length; i++) {
    arrrrr.filter(function(e) {
        return i > 3;
    });
    text += (" " + i);
}
console.log(text)