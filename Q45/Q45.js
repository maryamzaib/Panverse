"use strict";
function make_car(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model,
    };
    if (options != undefined) {
        car.options = options;
    }
    return car;
}
console.log(make_car("Toyota", "corolla"));
console.log(make_car("Toyota", "corolla", { color: "blue" }, { features: "GPS, BlueTooth" }));
