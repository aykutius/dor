var k_username = "guest";
var k_password = "12345";
var loggedin = false;

while (loggedin == false) {
// while (!loggedin) {

    var username = prompt("Kullanıcı adı :");
    var password = prompt("Şifre :");

    if ((k_username == username) && (k_password == password)) {
        console.log("Giriş Yapıldı.")
        loggedin=true; 
    } else {
        console.log("Hatalı kullanıcı adı veya şifre!!!")
    }
}

