// -----------------------JavaScript Assignment Operators


// https://www.w3schools.com/js/js_assignment.asp

// https://dorey.github.io/JavaScript-Equality-Table/



// ------------------------Logical Operators

// && ampersand operator example -----VE

// const check = 4 > 3 && 10 > 5         // true && true -> true
// const check = 4 > 3 && 10 < 5         // true && false -> false
// const check = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example ------YA DA

// const check = 4 > 3 ||)| 10 > 5         // true  || true -> true
// const check = 4 > 3 || 10 < 5         // true  || false -> true
// const check = 4 < 3 || 10 < 5         // false || false -> false

// // ! Negation examples ----------DEĞİLSE

// let check = 4 > 3                     // true
// let check = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true



//- ----------------Increment Operator (+) / Decrement Operator (-)------------


// Pre-increment
// let count = 0
// console.log(++count)        // 1
// console.log(count)          // 1
// Post-increment
// let count = 0
// console.log(count++)        // 0
// console.log(count)          // 1


//-------------Ternary Operators ---------------------


// let isRaining = true
// isRaining
//   ? console.log('You need a rain coat.') /true ise
//   : console.log('No need for a rain coat.') /değilse bunu
// isRaining = false

// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')






//-------windows methods

// alert('Welcome to 30DaysOfJavaScript')
// prompt('required text', 'optional text')
// let number = prompt('Enter number', 'number goes here')
// console.log(number)


// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

// let isDelete = confirm(`silmek istediğinize eminmisiniz?`)
//     console.log(
//         isDelete ? `silme başarılı` : `silme iptal edildi`
//     )


//--------------date object



const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    daynumber = date.getDay()




let months = [
    `Ocak`,
    `Şubat`,
    `Mart`,
    `Nisan`,
    `Mayıs`,
    `HAziran`,
    `Temmuz`,
    `Ağustos`,
    `Eylül`,
    `Ekim`,
    `Kasım`,
    `Aralık`

]

let days = [
    `Pazar`,
    `Pazartesi`,
    `Salı`,
    `Çarşamba`,
    `Perşembe`,
    `Cuma`,
    `Cumartesi`
]
// 28 Mart 2023, Salı 00:25:00
let timeKe = `${day} ${months[month]} ${year}, ${days[daynumber]}, ${hour}:${minute}:${minute}:${second} `
console.log(timeKe)







//----------------Exercises--------------------------------------------




let getFirstName = `Aykut`,
    lastName = `Dal`,
    country = `Turkey`,
    city = `İstanbul`,
    age = `50`,
    isMarried = false
year = 2023


console.log(
    typeof (getFirstName),
    typeof (lastName),
    typeof (country),
    typeof (age),
    typeof (city),
    typeof (isMarried),
    typeof (year)
)


let stringNumber = `10`,
    numberNo = 10

console.log(
    stringNumber == numberNo,
    stringNumber === numberNo

)

let parssay = parseInt(`9.8`),
    equalsay = 10

console.log(
    parssay == equalsay
)


let truevalue = [10 > 9 && 7 < 10 , 7 < 10 || 7 > 10 , 7 < 10 === 10 > 1 , 10 > 9 && 11 < 10 ,
    5 > 9 || 7 < 6 , 1 > 9 === 7 < 10]


console.log(truevalue)


let datamath = [
4 > 3, //true
4 >= 3,  // true
4 < 3, //false
4 <= 3, //false
4 == 4, // true
4 === 4, //true
4 != 4, // false
4 !== 4, // false
4 != '4', // false
4 == '4', // true
4 === '4', // false

]

console.log(datamath)


let pythoninfo = `python`,
    pythonlength = pythoninfo.length
console.log(pythonlength)
let jargoninfo = `jargon`,
    jargonlength = jargoninfo.length
console.log(jargonlength)

console.log(pythonlength === jargonlength)

let info2 = [
4 > 3 && 10 < 12, // true
4 > 3 && 10 > 12, // false
4 > 3 || 10 < 12, // true
4 > 3 || 10 > 12, // true
!(4 > 3), // false
!(4 < 3), // true
!(false), // true
!(4 > 3 && 10 < 12), // false
!(4 > 3 && 10 > 12), // true
!(4 === '4') // true

]

console.log(info2)


const date1 = new Date()
// 2023.03.29 çarşamba 02:47:56
let  year1 = date1.getFullYear(),
     month1 = date1.getMonth(),
     day1 = date1.getDate(),
     day1Number = date1.getDay(),
     hour1 = date1.getHours(),
     minute1 = date1.getMinutes(),
     second1 = date1.getSeconds()
     days2 = [
        `pazar`,
        `pazartesi`,
        `salı`,
        `çarşamba`,
        `perşembe`,
        `cuma`,
        `cumartesi`,
     ]
console.log(`${year}.${month1}.${day1} ${days2[day1Number]} ${hour1}:${minute1}:${second1}`)

const allsecond = Date.now()
console.log(allsecond)


let b = 5,//prompt(`Enter base:`),
    h = 10,//prompt(`Enter height`),
    area = 0.5 * b * h 

console.log(area)


let parimeter = [(a=5)+(b=4)+(c=3)]
console.log(parimeter)

let l = 10,//prompt(`Enter length:`),
    w = 7,//prompt(`Enter width`),
    areaA = l*w+((l+w)*2)
console.log(areaA) 

let hourWork = 45,//prompt(`Enter Work:`),
    hourCash = 15,//prompt(`Enter Cash`),
    hourFinal = hourWork * hourCash
console.log(hourFinal) 



let firstName = `aykut`,
    lastName2 = `dal`


let flength = firstName.length

let flast = (7 < flength)



console.log(flast)

































