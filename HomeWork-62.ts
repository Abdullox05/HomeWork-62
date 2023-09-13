//N-1
class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public square(): number {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(5, 10);

console.log("Square of Rectangle:", myRectangle.square());

//N-2
class Person {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public about(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age} year(s)`);
    console.log(`Gender: ${this.gender}`);
  }
}

const person = new Person("Alen", 30, "Male");

person.about();

//N-3
class Student extends Person {
  private grade: string;

  constructor(name: string, age: number, gender: string, grade: string) {
    super(name, age, gender);
    this.grade = grade;
  }

  public about(): void {
    super.about();
    console.log(`Grade: ${this.grade}`);
  }
}

const student = new Student("Jane", 20, "Female", "Good");

student.about();

//N-4
class Book {
  private author: string;
  private title: string;
  private public_year: number;

  constructor(author: string, title: string, public_year: number) {
    this.author = author;
    this.title = title;
    this.public_year = public_year;
  }

  public year(): void {
    const current_year = new Date().getFullYear();
    const years_since_publication = current_year - this.public_year;
    
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`${years_since_publication} year(s) have/has passed since publication`);
  }
}

const book = new Book("John Ronald Reuel Tolkien", "Lord Of The Rings", 1949);

book.year();

//N-5
function Cases_Count(input_string: string): { uppercase: number, lowercase: number } {
  let uppercase_count = 0;
  let lowercase_count = 0;

  for (let i = 0; i < input_string.length; i++) {
    const char = input_string[i];

    if (char >= 'A' && char <= 'Z') {
      uppercase_count++;
    } else if (char >= 'a' && char <= 'z') {
      lowercase_count++;
    }
  }

  return {uppercase: uppercase_count, lowercase: lowercase_count};
}

const input_string = "Hello World";
const counts = Cases_Count(input_string);

console.log("Count of UpperCases:", counts.uppercase);
console.log("Count of LowerCases:", counts.lowercase);

//N-6
function Find_Numbers(start: number, end: number): number[] | string {
  const numbers: number[] = [];
  let i = 1;

  while (i <= start / 2) {
    const square = i * i;

    if (square >= start && square <= end) {
      numbers.push(i);
    }

    i++;
  }

  if (numbers.length === 0) {
    return "None"
  }

  return numbers;
}

let start = 15;
let end = 40;
let result = Find_Numbers(start, end);

console.log(`Numbers that squares between ${start} and ${end}:`, result);

start = 5;
end = 8;
result = Find_Numbers(start, end);

console.log(`Numbers that squares between ${start} and ${end}:`, result);

//N-7
function count_numbers(arr: number[]): number[] {
  const total_count = arr.length;
  if (total_count === 0) {
    return [0, 0, 0];
  }

  let negative_count = 0;
  let zero_count = 0;
  let positive_count = 0;

  for (const num of arr) {
    if (num < 0) {
      negative_count++;
    } else if (num === 0) {
      zero_count++;
    } else {
      positive_count++;
    }
  }

  return [
    +(negative_count / total_count).toFixed(3),
    +(zero_count / total_count).toFixed(3),
    +(positive_count / total_count).toFixed(3)
  ];
}

const numbers = [1, 2, 3, -1, -2, 0];
const count = count_numbers(numbers);

console.log("Percent of negative numbers:", count[0]);
console.log("Percent of zeros:", count[1]);
console.log("Percent of positive numbers:", count[2]);
