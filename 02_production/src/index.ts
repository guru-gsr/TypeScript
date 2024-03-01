class User{
    private courseCount=1
    email:string
    name:string
    constructor(email:string,name:string){
        this.email=email;
        this.name=name
    }
    

    get count():number{
        return this.courseCount
    }

    set count(courseNumber){
        if(courseNumber<=1){
            throw new Error("course count should be more than 1")
        }
        this.courseCount=courseNumber
    }

}


const obj=new User("ha@g.com","gsr")