"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Roles;
(function (Roles) {
    Roles[Roles["user"] = 0] = "user";
    Roles[Roles["admin"] = 1] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "gsr",
    email: "gsr@gmail.com",
    password: "12344",
    role: Roles.admin
};
