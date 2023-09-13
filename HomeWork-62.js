var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//N-1
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.square = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRectangle = new Rectangle(5, 10);
console.log("Square of Rectangle:", myRectangle.square());
//N-2
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.about = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age, " year(s)"));
        console.log("Gender: ".concat(this.gender));
    };
    return Person;
}());
var person = new Person("Alen", 30, "Male");
person.about();
//N-3
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, gender, grade) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.about = function () {
        _super.prototype.about.call(this);
        console.log("Grade: ".concat(this.grade));
    };
    return Student;
}(Person));
var student = new Student("Jane", 20, "Female", "Good");
student.about();
//N-4
var Book = /** @class */ (function () {
    function Book(author, title, public_year) {
        this.author = author;
        this.title = title;
        this.public_year = public_year;
    }
    Book.prototype.year = function () {
        var current_year = new Date().getFullYear();
        var years_since_publication = current_year - this.public_year;
        console.log("Title: ".concat(this.title));
        console.log("Author: ".concat(this.author));
        console.log("".concat(years_since_publication, " year(s) have/has passed since publication"));
    };
    return Book;
}());
var book = new Book("John Ronald Reuel Tolkien", "Lord Of The Rings", 1949);
book.year();
//N-5
function Cases_Count(input_string) {
    var uppercase_count = 0;
    var lowercase_count = 0;
    for (var i = 0; i < input_string.length; i++) {
        var char = input_string[i];
        if (char >= 'A' && char <= 'Z') {
            uppercase_count++;
        }
        else if (char >= 'a' && char <= 'z') {
            lowercase_count++;
        }
    }
    return { uppercase: uppercase_count, lowercase: lowercase_count };
}
var input_string = "Hello World";
var counts = Cases_Count(input_string);
console.log("Count of UpperCases:", counts.uppercase);
console.log("Count of LowerCases:", counts.lowercase);
//N-6
function Find_Numbers(start, end) {
    var numbers = [];
    var i = 1;
    while (i <= start / 2) {
        var square = i * i;
        if (square >= start && square <= end) {
            numbers.push(i);
        }
        i++;
    }
    if (numbers.length === 0) {
        return "None";
    }
    return numbers;
}
var start = 15;
var end = 40;
var result = Find_Numbers(start, end);
console.log("Numbers that squares between ".concat(start, " and ").concat(end, ":"), result);
start = 5;
end = 8;
result = Find_Numbers(start, end);
console.log("Numbers that squares between ".concat(start, " and ").concat(end, ":"), result);
//N-7
function count_numbers(arr) {
    var total_count = arr.length;
    if (total_count === 0) {
        return [0, 0, 0];
    }
    var negative_count = 0;
    var zero_count = 0;
    var positive_count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num < 0) {
            negative_count++;
        }
        else if (num === 0) {
            zero_count++;
        }
        else {
            positive_count++;
        }
    }
    return [
        +(negative_count / total_count).toFixed(3),
        +(zero_count / total_count).toFixed(3),
        +(positive_count / total_count).toFixed(3)
    ];
}
var numbers = [1, 2, 3, -1, -2, 0];
var count = count_numbers(numbers);
console.log("Percent of negative numbers:", count[0]);
console.log("Percent of zeros:", count[1]);
console.log("Percent of positive numbers:", count[2]);
