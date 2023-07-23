interface Person {
    name:string,
    age: number
};
export function greet(person : Person):string {
    return "Hello " + person.name + "! Glad to have you here";
}

console.log(greet({
    name: "Abdullah",
    age: 20
}))