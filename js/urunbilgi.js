// toyota 2015 model ve 3 yaşında bir araçtır
//mazda 2012 model ve 6 yaşında bir araçtır
//mercedes 2016 mode ve  2 yaşında bir araçtır
//opel 2015 model ve 4 yaşında bir araçtır.




var now = 2018;
var models = ['toyota', 'mazda', 'mercedes', 'opel'];
var years = ['2015', '2012', '2016', '2014']

var model = prompt("Model Giriniz :")
var year = prompt("Model yılı Giriniz :")

models.push(model);
years.push(year);




for (var i = 0; i < models.length; i++) {
    console.log(models[i] + ' ' + years[i] + ' model ve ' + (now-years[i]) + 'yaşında bir araçtır.');
}
