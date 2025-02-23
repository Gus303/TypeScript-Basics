"use strict";
// Interface:
// interface Car {
//     parts: Array<string>
//     assembly()
// }
// Example:
// class CarModelA implements Car {
//     parts: string[] = ["engine1.0", "manual_transmission"]
//     assembly() {
//         const car = this.parts.joint(".")
//     }
// }
// class CarModelB implements Car {
//     parts: string[] = ["engine2.0", "automatic_transmission"]
//     assembly() {
//         const car = this.parts.joint(",")
//     }
// }
// const modelA = new CarModelA()
// const modelB = new CarModelB()
// function assemblyCars(cars: Array<Car>) {
//     cars.forEach((car) => car.assembly())
// }
// assemblyCars([modelA, modelB])
