var ali = {
    ad: 'ali',
    soyad: 'yılmaz',
    ciinsiyet: 'erkek',
    adres: 'izmir',
    meslek: 'mühendis',
    diller: ['ingilizce,almanca'],
    hobiler: ['sinema,spor'],


};

console.log(ali);


console.log(ali.diller)


ali.hobiler.forEach(function (hobi) {
    console.log(hobi);

});


var personel = [
    {
        ad: 'ali',
        soyad: 'yılmaz',
        ciinsiyet: 'erkek',
        adres: 'izmir',
        meslek: 'mühendis',
        diller: ['ingilizce,almanca'],
        hobiler: ['sinema,spor'],


    },
    {
        ad: 'mehmet',
        soyad: 'okur',
        ciinsiyet: 'erkek',
        adres: 'izmir',
        meslek: 'mühendis',
        diller: ['ingilizce,almanca'],
        hobiler: ['sinema,spor'],


    },
    {
        ad: 'pınar',
        soyad: 'yılmaz',
        ciinsiyet: 'kadın',
        adres: 'izmir',
        meslek: 'mühendis',
        diller: ['ingilizce,almanca'],
        hobiler: ['sinema,spor'],


    }
];


console.log(personel.length);


personel.forEach(function (personel) {
    console.log(personel.ad + personel.soyad);



    personel.diller.forEach(function (dil) {
        console.log(dil);
    });

    console.log('*****************')

});

