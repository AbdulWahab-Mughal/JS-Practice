// const Name = "Qadir"; //approach 1: for declaring string
// console.log(Name);
// const repo = 50;
// console.log(Name + " " + repo); //Bad Practice

// // use backtick `` (String INterpolation) which is good practice

// console.log(`my name is ${Name} and my number of repo's are ${repo}`);

const newName = new String("qadirHafeez"); //approach 2: for declaring string
const newName2 = new String("qadir Hafeez"); //approach 2: for declaring string
console.log(newName);
// for textCapitalize
const textName = newName[0];
console.log(textName);
console.log(newName.replace(textName, textName.toUpperCase()));

////////////////
console.log(newName2.split(" ")); //for converting string into array
console.log(newName2.indexOf("f")); //for finding the index number of the character
console.log(newName2.charAt(3)); //for finding the value throught index number of the character
console.log(newName.slice(0, -1));//for slicing
console.log(newName.substring(0, 5));//for slicing

