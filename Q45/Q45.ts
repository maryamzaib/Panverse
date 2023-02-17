function make_car(manufacturer:string,model:string,...options:any):car{
let car:car={
    manufacturer,
    model,
}
if(options!=undefined){
    car.options=options;
}
return car
}
type car = {
    manufacturer: string;
    model: string;
    options?: any;
  };

console.log(make_car("Toyota","corolla"));
console.log(make_car("Toyota","corolla",{color:"blue"},{features:"GPS, BlueTooth"}));
