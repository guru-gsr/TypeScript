function createUser({name:string}):{name:String}{
    return {name:"reactjs"}
}

let newUser={name:"gsr",age:22}

createUser(newUser);

type Cordinate={   //aliases defining out own type
    x:number;
    y:number
}


type User={
    readonly _id:string    //readonly is keyword which doesn,t allows you to change the value
    name:string
    email:string
    isActive:boolean
    creditCardDetails?:number   //?  is optional 
}


let myUser:User={
    _id:"123",
    name:"gsr",
    email:"h@h.com",
    isActive:false

}

myUser.email="g@g.com";
export {}