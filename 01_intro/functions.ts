function addTwo(num:number):number{
    return num+2;
}

let res1=addTwo(5);
console.log(res1);



function toUpper(val:string){
    return val.toUpperCase();
}

toUpper("mindpath");


function signUpUser(name:string,email:string,isPaid:boolean) {
    
}

let loginUser=(name:string,email:string,isPaid:boolean=false)=>{
 
}

signUpUser("gsr","gsr@de.com",false);
loginUser("gsr","haer@gmail.conm");





// function getValue(myval:number):boolean{
//     if(myval>5){
//         return true;
//     }
//     return "200ok";
// }


const getHello=(s:string):string=>{
    return "";
}


const heros=["thor","spiderman","ironman"]

heros.map(hero=>{
    return `hero is ${hero}`
})

export {}