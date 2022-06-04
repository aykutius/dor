var opel = ['opel', 'corsa', '2015']
var toyota = ['toyota', 'yaris', '2014']
var seat = ['seat', 'leon', '2011']

console.log(opel)


var opel = {
    marka: 'opel',
    model: 'corsa',
    renk: 'mavi',
    otomatik: true
};

console.log(opel.marka)
console.log(opel.model)
console.log(opel['renk'])
console.log(opel.otomatik)



var toyota = new Object();
toyota.marka = 'toyota';
toyota.yil = '2014';
toyota.model = 'yaris';

console.log(toyota);



var arabalar = [
    {
        marka: 'opel',
        model: 'corsa',
        renk: 'mavi',
        otomatik: true
    },
    {
        marka: 'seat',
        model: 'leon',
        renk: 'siyah',
        otomatik: true
    }

]

console.log(arabalar)

console.log(arabalar[1].model)


for (var i = 0; i < arabalar.length; i++) {
    console.log(arabalar[i]);
}