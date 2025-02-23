// Inheritance:

// class Car {
//     totalSpeedy: number
//     speedy: number
//     private gears: number

//     constructor(totalSpeedy: number, speedy:number, gears: number) {
//         this.totalSpeedy = totalSpeedy
//         this.speedy = speedy
//         this.gears = gears
//     }

//     accelerate(): void{
//         if (this.speedy >= this.totalSpeedy) {
//             this.speedy += this.totalSpeedy / this.gears
//         }
//     }
// }

// class ModelA extends Car {
//     constructor() {
//         super(150, 6)
//     }
// }

// class modelB extends Car {
//     private sportMode: boolean = false

//     constructor() {
//         super(150, 6)
//     }
    
//     toggleSportMode() {
//         this.sportMode = !this.sportMode
//         this.totalSpeedy += this.sportMode ? 50 : -50
//     }
// }

// const modelA: ModelA = new ModelA()
// const modelB: ModelB = new ModelB()

// const cars: Array<Car> = [modelA, modelB]