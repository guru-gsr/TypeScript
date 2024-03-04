function identityOne<Type>(val:Type):Type{
    return val;
}


interface Bottle{
    brand:string,
    type:number
}

//identityTwo<Bottle>({})


function getSerchProducts<T>(products:T[]):T{
    return products[3];
}

//Arrow function

const getMore=<T>(products:T[]):T =>{
    const myIndex=4;
    return products[myIndex];
}


function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3,"4")






interface Quiz{
    name:String,
    type:String
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}

export {}