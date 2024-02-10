// Lecture 1
const userName: string = "Alex";
const userAge: number = 34;
const userBool: boolean = false;
// All the types in typescript
// string, number, boolean,

// Lecture 2
// using "|" can combine union types
let userID: string | number = "abc1";
userID = 123;

// Lecture 3
// If we don't initialize a type it will let us know
let userPerson: {
  firstName: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
userPerson = {
  firstName: "Milo",
  age: 34,
  isAdmin: true,
  id: 1,
};
// Lecture 4
// you can choose which way to write your arrays
// let hobbies: Array<string | number>;
let hobbies: string[] | number[];
// another alternative: {name: string; age: number}[]
hobbies = ["sports", "cooking", "reading"];
hobbies = [1, 2, 3];
// Lecture 5
const API_KEY = "abc456";
// You can use "void" if the function is not returning a value
function add(num1: number, num2: number) {
  console.log(num1 + num2);
  return num1 + num2;
}
// Lecture 6
// In calcFn we said that a function can receive two arguments and result will be a number value with this it mimics the same as the "add" function we have above
// custom Types
type AddFn = (a: number, b: number) => number;
function calculate(calc1: number, calc2: number, calcFn: AddFn) {
  calcFn(calc1, calc2);
}
calculate(2, 5, add);
// Lecture 7
// interface is usually for creating objects
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;
creds = {
  password: "alex",
  email: "ainga@gmail.com",
};
// Lecture 8
type Admin = {
  permission: string[];
};
type AppUser = {
  userName: string;
};
// This will merge the two types that will come in handy
type AppAdmin = Admin & AppUser;

// Lecture 9
// This is being specific with what string
type Role = "admin" | "user" | "editor";
let role: Role; // "admin" or "user" or "editor"
// This helps with additional type guards
function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    console.log(`Hi am the admin`);
  }
}

// Lecture 10
// This is an example of a generic type
// generic types that work together with another type.
// "Works together" simply means that a type (like "array") needs extra information eg the type of the values that should be stored in the array.
let mission: Array<Role>;

type DataStorage<T> = {
  // needs a placeholder for the storage since we are unsure of what we will receive
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<AppUser> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Alex" },
  { age: 25 }
);
