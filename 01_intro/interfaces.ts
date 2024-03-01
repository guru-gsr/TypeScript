interface person{
    name:string,
    age:number
}


let newPerson:person={
    name:"john",
    age:30
}

function greet(newPerson:person): void{
    console.log(`hello ${newPerson.age}`);
    
}