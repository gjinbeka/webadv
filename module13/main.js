 function showsms(){
    alert("Hello World!");
 }

 showsms();

 function sum(nr1, nr3){
    return nr1 + nr3;
 }

 console.log(sum(2, 4));
 document.write(sum(2, 4));

    function localvariable(){
        var vl = "digitalschool";
        alert(vl);
    }

localvariable();

var car={
    name: "BMW",
    model: "X5",
    year: 2020,
    kilometers: 5000,
    startengine: function(){
        alert("Engine started");
    }
}

get getkilonometers(){
    return this.kilometers;
}

set setkilometers(km){
    this.kilometers = km;}

console.log(car.kilometers)
car.setkilometers = 6000;
console.log(car.kilometers);

alert(car.name);

    