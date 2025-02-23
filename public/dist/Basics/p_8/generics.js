"use strict";
// Generics:
// Simple:
// const names: Array<string> = ["Gustavo", "Alice"];
// Custom:
// const users: Array<User> = [
//     { name: "Gustavo", age: 19 },
//     { name: "Alice", age: 23 }
// ];
// Create one:
// type UserPage = {
//     list: Array<User>;
//     totalPages: number;
//     currentPages: number;
//     itemsPerPage: number;
//     totalItems: number;
// }
// OR
// type Page<T> = {
//     list: Array<T>;
//     totalPages: number;
//     currentPages: number;
//     itemsPerPage: number;
//     totalItems: number;
// }
