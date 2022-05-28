var dogum = prompt("Doğum Tarihini Giriniz :");
var yil = 2022;
var yas = yil - dogum;

if(yas<18){
    console.log("Ehliyet Alamazsınız.");

    console.log("Ehliyet alabilmek için " + (18-yas) + " yıl beklemelisiniz")

}
else if(yas>=18){
    console.log("Ehliyet Alabilirsiniz.");
    
}

else{
    console.log("Yanlış bir değer girdiniz.");

}


var ay = prompt("Ay bilgisini giriniz.")

switch(ay){
    case '1':
    case '2':
    case '12':
        console.log("Kış Mevsimi");
        break;
    case '3':  
    case '4':  
    case '5':  
        console.log("İlkbahar Mevsimi"); 
        break;
    case '6':  
    case '7':  
    case '8':  
        console.log("Yaz Mevsimi"); 
        break;
    case '9':  
    case '10':  
    case '11':  
        console.log("Yaz Mevsimi"); 
        break;
    default:
        console.log("Yanlış bir ay girdiniz.")
}
