class Student{
    name: string;
 private age:number;
  courseId:number;
  
  constructor(name:string,age:number,courseId:number){
      this.name=name;
      this.age=age;
      this.courseId=courseId;
  }

  get getAge():number{
      return this.age;
  }

  set setAge(newAge: number){
        if(newAge>25){
          throw new Error("error");
        }
        this.age=newAge;
  }

  private deleteToken(){
      console.log("token deleted");
      
  }
  
  }