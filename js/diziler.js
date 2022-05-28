var marka = ["opel", "toyota", "mazda", "renault"]
var model = new Array("corsa", "yaris", "cx", "clio")

console.log(marka[2]);
console.log(model[2]);

model[0] = "Astra";

console.log(model);


var auris = ["toyota", "auris", 42, true];

auris.push('blue'); // son ekle
auris.unshift('hb'); //başa ekle
auris.pop(); // son siler
auris.shift(); // baştan siler

console.log(auris);

for (var i = 0; i < marka.length; i++) {
    console.log(marka[i]);
}

auris.forEach(function(element){ //for döngüsüne alternatif
    console.log(element);

});

if (marka.indexOf('mazda') !== -1) {
    console.log(marka[marka.indexOf('mazda')])
}

if (marka.indexOf('mazda') !== -1) {
    console.log("Bulundu.")
} else {
    console.log("Bulunamadı.")
}

if (marka.indexOf('mercedes') !== -1) {
    console.log("Bulundu.")
} else {
    console.log("Bulunamadı.")
}


