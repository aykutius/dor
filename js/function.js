function topla(a,b) {
    return a+b;
}

var sonuc = topla(10,20);


console.log(sonuc);

console.log(topla(40,50));
console.log('**********************');





//yas hesapla 

var now = 2022

function yashesapla(yas){
    return now-yas
}


var ahmet = yashesapla(1990);
var ali = yashesapla(1991);

console.log(ali);
console.log(ahmet);



//emeklilik hesap


function emeklilikhesapla(ad,yas){
    var k_yas = yashesapla(yas);
    var emeklilik = 65 - k_yas;



    if(emeklilik>0) {
        console.log(ad + ' ' + emeklilik + ' yıl sonra olabilir.');

    }else{
        console.log(ad + ' ' + (emeklilik*-1) + ' yıl önce olmuş.');
    }
}

emeklilikhesapla('çınar','1998');
emeklilikhesapla('ali','1950');