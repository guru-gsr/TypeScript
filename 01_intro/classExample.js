var Student = /** @class */ (function () {
    function Student(name, age, courseId) {
        this.name = name;
        this.age = age;
        this.courseId = courseId;
    }
    Object.defineProperty(Student.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setAge", {
        set: function (newAge) {
            if (newAge > 25) {
                throw new Error("error");
            }
            this.age = newAge;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.deleteToken = function () {
        console.log("token deleted");
    };
    return Student;
}());
