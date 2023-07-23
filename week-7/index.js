"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return "Hello " + person.name + "! Glad to have you here";
}
exports.greet = greet;
console.log(greet({
    name: "Abdullah",
    age: 20
}));
