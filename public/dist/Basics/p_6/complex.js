"use strict";
// Complex types:
// Custom:
// enum Gender {
//     Male,
//     Female,
// }
// enum Roles {
//     Admin,
//     NormalUser,
// }
// type User = {
//     name: string
//     age: number
//     gender: Gender
//     roles: Array<Roles>
// }
// const getUserNameAndAge =  (user: User): [string, number] => {
//     return [user.name, user.age]
// }
// getUserNameAndAge({
//     name: "Gustavo",
//     age: 19,
//     gender: Gender.Male,
//     roles: [Roles.Admin],
// })
// Optional:
// type User = {
//     name: string
//     age: number
//     gender: Gender
//     roles: Array<Roles>
//     hairColor?: string
// }
// const users: Array<User> = [
//     {
//         name: "Alice",
//         age: 23,
//         gender: GeneratedIdentifierFlags.Female,
//         roles: [Roles.NormalUser],
//     },
//     {
//         name: "Gustavo"
//         age: 19,
//         gender: Gender.Male,
//         roles: [Roles.Admin],
//         hairColor: "Dark Brown, Curly"
//     }
// ]
// Inline:
// const getUserNameAndAge = (user: {
//     name: string
//     age: number
//     gender: Gender
//     roles: Array<Roles>
//     hairColor?: string
// }): [string, number] => {
//     return [user.name, user.age]
// }
