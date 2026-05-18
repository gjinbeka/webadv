function showsms(){
    alert("ky eshte vetem nje message")


}


showsms();


function sum(nr1,nr3){
    return nr1 +nr3;


}
console.log(sum(2,4));
document.write(sum(3,4));


function localvariable(){
    var vl="Digital school";
    alert(vl);
}


localvariable();


var car={
    name:"Audi",
    color:"red",
    year:2000,
    kilometers:10,
    starEngine:function(){
        alert("vroom");
    },
    get getkilometers(){
        return this.kilometers;
    },
    set setkilometers(km){
        this.kilometers=km;
    }


};


console.log(car.getkilometers);


car.setkilometers=100;


console.log(car.getkilometers);


alert(car.name);
alert(car['color']);



car.starEngine();


function Computuer(name,cpu,ram,rom){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.rom=rom;
   
}

var comp1=new Computuer("macbook1","i7","8gb","8gb");
var comp2=new Computuer("macbook2","i5","8gb","8 gb");

function Car(name, model, year, color){
    this.name=name;
    this.model=model;
    this.year=year;
    this.color=color;
}

var car1=new Car("BMW","X5",2020,"red");