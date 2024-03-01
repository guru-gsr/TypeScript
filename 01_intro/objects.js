"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name;
    return { name: "reactjs" };
}
var newUser = { name: "gsr", age: 22 };
createUser(newUser);
var myUser = {
    _id: "123",
    name: "gsr",
    email: "h@h.com",
    isActive: false
};
myUser.email = "g@g.com";
