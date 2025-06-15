//Call By Value : When passing primitive data types like numbers, strings, booleans, null, and undefined, a copy of the value is passed to the function. Any changes made to the parameter inside the function do not affect the original variable outside the function.
//Examples
function changeValue(value) {
  newValue = value + 5;
  console.log("Inside function:", newValue); // Output: Inside function: 10
}

let originalValue = 5;
changeValue(originalValue);
console.log("Outside function:", originalValue); // Output: Outside function: 5

//Call By Reference : When passing objects or arrays, a copy of the reference (or pointer) to the object or array is passed to the function. This means the parameter inside the function points to the same memory location as the original object or array. Consequently, any changes made to the object or array inside the function will affect the original object or array outside the function.
//Examples
///for Object
function changeObject(obj) {
  obj.property = "changed";
  console.log("Inside function:", obj); // Output: Inside function: { property: 'changed' }
}

let originalObject = { property: "unchanged" };
changeObject(originalObject);
console.log("Outside function:", originalObject); // Output: Outside function: { property: 'changed' }

///for Array
function changeArray(arr) {
  arr.push(4);
  console.log("Inside function:", arr); // Output: Inside function: [1, 2, 3, 4]
}

let originalArray = [1, 2, 3];
changeArray(originalArray);
console.log("Outside function:", originalArray); // Output: Outside function: [1, 2, 3, 4]

// primitive datatypes are used in call by value and have 7 types: String, Number, Boolean,Null,Undefined,Symbol and BigInt
//Non- Primitive(Reference type) DataTypes Are used in call by reference and have 3 types : function, Array and Objects

//Stack Memory (all primitive datatypes store in stack because it create the copy of the original value and update only in copy)
let Name = "AbdulWahab";
let newName = Name;
console.table([Name, newName]);
newName = "Qadir";
console.table([Name, newName]);

//Heap Memory (all non-primitive datatypes store in heap because it gave the reference of the value and when we change the value then original value also affect)
let obj = {
  email: "new@gmail.com",
};
let newObj = obj;

console.log(obj);
console.log(newObj);

newObj.email = "old@gmail.com";
console.log(obj);
console.log(newObj);
