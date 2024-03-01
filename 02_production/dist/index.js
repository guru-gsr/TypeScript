"use strict";
class User {
    constructor(email, name) {
        this.courseCount = 1;
        this.email = email;
        this.name = name;
    }
    get count() {
        return this.courseCount;
    }
    set count(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("course count should be more than 1");
        }
        this.courseCount = courseNumber;
    }
}
const obj = new User("ha@g.com", "gsr");
