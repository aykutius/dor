

//----------------if - else-------------------



// if
// if else
// if else if else
// switch
// ternary operator


// if (condition) {
//     //this part of code runs for truthy condition
//   }


// let num = 3
// if (num > 0) { // koşul true ise kod çalışır.
//   console.log(`${num} is a positive number`)
// }
// //  3 is a positive number

// if (condition) { // true ise if false ise else çalışır.
//     // this part of code runs for truthy condition
//   } else {
//     // this part of code runs for false condition
//   }

// let result = prompt(`2 + 5 kaç yapar?`, `2 + 5`)

// if (result === `7`) {
//     console.log(`Doğru`)
// } else {
//     console.log(`hatalı!!`)
// }

// // syntax
// if (condition) {
//     // code
// } else if (condition) {
//   // code
// } else if (condition) {
//   // code
// } else {
//    //  code

// }

// let a = 0
// if (a > 0) {
//   console.log(`${a} is a positive number`)
// } else if (a < 0) {
//   console.log(`${a} is a negative number`)
// } else if (a == 0) {
//   console.log(`${a} is zero`)
// } else {
//   console.log(`${a} is not a number`)
// }



// switch(caseValue){
//     case 1:
//       // code
//       break // koşul yerine gelirse çalışmayı durdurur.
//     case 2:
//      // code
//      break
//     case 3:
//      // code
//      break
//     default: // yukardaki caseler çalışmadığı taktirde geçerli.
//      // code
//   }

// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }

// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }

let result = `7` //prompt(`2 + 5 kaç yapar?`, `2 + 5`)
if (result === '7' ) {
    console. log(' Dogru cevab1 verdin!')
} else {
    console.log('Hatal1 cevap verdin, dogru cevap 7 olmaliyd1!')
}
console.log(
    result === 7 ? ' DOGRU CEVAP ' : 'YANLIS CEVAP'
)


//--------------workworkwork



let youAge = prompt(`Age ?`)

if (youAge >= 18) {
    console.log(`yes`)
} else {
    console.log(`nocknock !!! ${18-youAge} years to drive`)
}


let youAgeT = prompt(`Age ?`)
let youAgeTenary = youAgeT >= 18
youAgeTenary
    ? console.log(`yes`)
    : console.log(`nooooooooooooo ${18-youAgeT}`)
