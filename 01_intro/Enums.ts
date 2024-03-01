
enum Roles{
    user,
    admin
 }

type loginDetails={
    name: string;
    email:string;
    password:string;
    role:Roles
}



const user1:loginDetails={
    name:"gsr",
    email:"gsr@gmail.com",
    password:"12344",
    role:Roles.admin
}

export {}