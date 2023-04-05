/* 

----------------Primitive data types--------------


strings / numbers / boolean / null / undefined --(ilkel veri türleri DEĞİŞTİRİLEMEZ.)


    örnek : değiştirilmez.
    let word = `JavaScript`;
    word[0] = `y`;
    console.log(word)
*/
    // let numOne = 3
    // let numTwo = 3
    // console.log(numOne == numTwo) //veri değerine göre karşılaştırılır.

// ----------------Non-Primitive data types--------------

//ilkel olmayan veri türleri karşılaştıralamaz.
// Object / Functions / Arrays --(ilkel veri türleri DEĞİŞTİRİLİR.)

// --------------Array-------------- dize verilerden çoklu veri tipi bulunabilen bir listedir.

// let nums = [1, "aykut", true, null, undefined, [77,80]]

// örnek : değiştirilir.
// let nums3 = [1, 2, 3]
// nums3[0] = "aykut"
// console.log(nums3)

// let nums2 = [1, 2, 3]
// let nums21 = nums2
// console.log(nums2 == nums21) //değişkenine göre karşılaştırılır.


//--------Math Object--------


// const PI = Math.PI
// let piRound = Math.round(PI)
//               //  .floor() // aşağı
//               //  .ceil() // yukarı
//               //  .min()  // en küçük
//               //  .max()  // en büyük
//               //  .random() //0-0.99999 arası sayı üretir. 
// console.log(piRound)


//-------string concatenation------

// let name = `aykut`
// let surname = `dal`
// let space = ` `
// let fullName = name + space + ` ` + surname
// console.log(fullName)

// const paragraph = " ddeneme ddeneme ddeneme ddeneme ddeneme\ 
//                     ddeneme ddeneme\ 
//                     ddeneme ddeneme "
// Yukarıdaki işlem gerçerli olması için ters slash cümle sonuna ya da backtick ile yazmak.



//------------string verinin içerisinde kullanılacak kaçış operatörleri

// \n / new line yeni satır
// \t /8 space tab
// \\ back slash / satır için slash görünmesi için
// \ karakter kaçırır
// \" \' kaçırır.


//----es6--templateScript----

// yazı içerisinde js kullanacaksak backtick ${variable} içerisinde kullanılmalıdır.

// let name = `aykut`
//     surname = `dal`
//     fullName = ` merhaba adım ${name} soyadım ${surname}`
// console.log(fullName)


//----- verinin uzunluğunu bulup -1 ile sayma sayılarında son harfi bulma.

// let js = `javascript`
// console.log(js.length)

// js[js.length -1]
// console.log(js[js.length -1])

// let lastindex = js.length -1
// console.log(js[lastindex])


// let js = `javascript`;
// let lastindex = js.toUpperCase();
//               //  .tolowercase();
// console.log(lastindex)


// let string = `javascript`
// console.log(string.substr(4,9))

// let strings = `javascript`
// console.log(strings.substring(4,9))


let name = `merhaba ben aykut`
// console.log(name.split('')) //tek harf parçalama

// console.log(name.split(' ')) //bütün kelime parçalama

// let names = `  merhaba ben aykut            `;
// console.log(names.trim())   //boşluk kaldırma

let namess = [`merhaba`, `ben`, `aykut`]; 

// console.log(namess.includes(`aykut`)); // değer kontrol

// console.log(name.includes(`aykut`));

// let lastindex = name.length -1
// console.log(name.charAt(lastindex)) // son karakteri verir.
//                 .charCodeAt // ascıı kodu verir.


// console.log(name.indexOf(`ben`)) // aramada kaçıncı sırada olduğunu söyler
//                 .lastindexof // sonuncuyu verir.



//----------------regex-------match-------------------------------------



// console.log(name.replace(`aykut`, `baykut`))
//                 .replaceAll //aynı olan hepsi değişir.
                //    .startsWith(`merhaba`) / true başlayanları bulur
                //    .endsWith / şununla bitiyormu
                //    .search / kelimenin konumunu döndürür.
                //    .search(/merhaba/gi) // kelimeyi global ve büyük küçük duyarsız

// let pattern = /ben/gi
// console.log(name.match(pattern))

// let txt = `ben 1941 yılında doğdum. Yıl 2023 ve hala yaşıyorum.`
// let regEx = /\d+/
// console.log(txt.match(regEx)) // ilk sayıyı çıkartıyor
// console.log(txt.match(/\d+/g)) // Bütüm sayıları çıkartıyor

// .parseInt() -- .number() ya da string verisini number çevirmek yanına + koyun.
// .parseFloat() virgüllü sayıları cevirir.





//---------------RandomNumber-------------------



let randomNum = Math.random() // randomNum değişkeni için random 0 - 0.999 arası sayı oluşturma.
let numTenZero = randomNum * 11  // oluşan randomNum sayısını 11 ile çarpıp numTenZero veri girmesi.
let numTenZeroFloor = Math.floor(numTenZero) /* numTenZero aşağı yuvarlama 11 ile çarpmamızın sebebi
tam sayı elde edip aşağı yuvarlaması ve console çıktısı için numTenZeroFloor değişkeni oluşturulması*/
console.log(numTenZeroFloor) // arrivederciiii



// --------------HomeWork----------------------------------



let daysOf = `30 Days Of JavaScript`

let my = `ben aykut`

console.log(my)

console.log(my.length-1)

console.log(my.toUpperCase())

console.log(my.toLowerCase())

console.log(my.substr(0,3))


console.log(my.includes(`Script`))

let myArray = my.split(` `)
console.log(myArray)

let daysOfArray = daysOf.split(` `)
console.log(daysOfArray)

let mafir = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`
let mafirArray = mafir.split(` `)
console.log(mafirArray)

let daysOfPython = daysOf.replace(`JavaScript`, `Python`)
console.log(daysOfPython)

console.log(daysOf.charAt(15))
console.log(daysOf.charCodeAt(9))
console.log(daysOf.indexOf(`Of`))
console.log(daysOf.lastIndexOf(`Of`))

let newData = `You cannot end with because because because`
console.log(newData.indexOf(`because`))
console.log(newData.lastIndexOf(`because`))
console.log(newData.search(`because`))
console.log(daysOf.trim())
console.log(daysOf.startsWith(30))
console.log(daysOf.endsWith(`JavaScript`))
console.log(daysOf.match(/a/gi))

let infoOne = `The quote 'There is no exercise better for the heart than 
reaching down and lifting people up.' by John Holmes teaches 
us to help one another.`


let infoTwo = `"Love is not patronizing and charity isn't about pity, 
it is about love. Charity and love are the same -- with charity you give love, 
so don't just give money but reach out your hand instead."`

let youAge = "10"
let myAge = 10

console.log(youAge == myAge)

let parse = `9.8`

console.log(parse == myAge)

let parseAdd = Math.round(parse)

console.log(parseAdd)

console.log(myAge == parseAdd)


let txtx = `python jargon`
let reg = /on/gi

console.log(txtx.match(reg))

let txt1 = `i hope this course is not full of jargon.`

console.log(txt1.indexOf(`jargon`))
// 1:28:38



let randomNo = Math.random()
let random101 = randomNo *101
let randomFloor = Math.floor(random101)
console.log(randomFloor)

let randoNo = Math.random()
let rando101 = randoNo *256
let randoFloor = Math.floor(rando101)
console.log(randoFloor)



//------



let jsIn = `javascript`  // değişkene değer verdik
let randomJs = Math.random()*11 //değer karakter sayısı kadar random sayı ürettik
let randomJsFloor = Math.floor(randomJs) // random sayıyı yuvarladık
console.log(randomJsFloor) // yazdırdık

let charAtRandom = jsIn.charAt(randomJsFloor) 
console.log(charAtRandom)



let infoKe = " 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 128"

console.log(infoKe)

let phrase = `You cannot end a sentence with because because because is a conjunction`

let regExx = /because/gi

console.log(phrase.match(regExx))

let infox = phrase.indexOf(`because`)

console.log(infox)

let infoxLast = phrase.lastIndexOf(`is`)

console.log(infoxLast)

let infoBecause = phrase.substring(infox,infoxLast)
console.log(infoBecause)


let infothr = `is the best Love thing in this world. Some found their 
               love and some are still looking for their love.`

console.log(infothr.search(/love/gi))


let sayinfo = infothr.match(/love/gi)
console.log(sayinfo)
let lengthInfo = sayinfo.length
console.log(lengthInfo)
    

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; 
&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re 
interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 
30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`

let sentencereg = sentence.replace(/[%$@&#]/g, ``)
console.log(sentencereg)


let sentencematch = sentence.match(/[%$@&#]/g)
console.log(sentencematch)




let sentence1 = sentence.match(/%/g)
console.log(sentence1)
let sentence11 = sentence1.length
console.log(sentence11)

let sentence2 = sentence.match(/[$]/g)
console.log(sentence2)
let sentence22 = sentence2.length
console.log(sentence22)

let sentence3 = sentence.match(/@/g)
console.log(sentence3)
let sentence33 = sentence3.length
console.log(sentence33)

let sentence4 = sentence.match(/&/g)
console.log(sentence4)
let sentence44 = sentence4.length
console.log(sentence44)

let sentence5 = sentence.match(/#/g)
console.log(sentence5)
let sentence55 = sentence5.length
console.log(sentence55)



let sentenceFullNumber = Math.max(sentence11, sentence22, sentence33, sentence44, sentence55)
console.log(sentenceFullNumber)

console.log(sentence11 == sentenceFullNumber)
console.log(sentence22 == sentenceFullNumber)
console.log(sentence33 == sentenceFullNumber)
console.log(sentence44 == sentenceFullNumber)
console.log(sentence55 == sentenceFullNumber)

console.log(sentenceFullNumber, sentence3[0])

let text =`He earns 5000 euro from salary per month, 
10000 euro annual bonus, 15000 euro online courses per month`

let text3 = text.match(/\d+/g)
console.log(text3)


console.log(`${(parseInt(text3[0])+parseInt(text3[1])+parseInt(text3[2]))}`)
