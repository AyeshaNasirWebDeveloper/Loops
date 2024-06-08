// Loops

// Reversing Loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// // Normal Loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// // Table of 5
for (let i = 1; i <= 10; i++) {
console.log(`5 x ${i} = ` + 5*i);    
}

// // Reverse Table
for (let i = 10; i >= 1; i--) {
    console.log(`5 x ${i} = ` + 5*i);    
    }

// Array Loop
let names = ["Ayesha", "Amna", "Afshan", "Afreen", "Aiza"];
for (let i = 0; i < names.length; i++) {
    console.log(names); 
}

// Reverse Array Loop
let name = ["Ayesha", "Amna", "Afshan", "Afreen", "Aiza"];
for (let i = name.length-1; i >= 0; i--) {
    console.log(name[i]); 
}

// Array Loop Index Get
let users = ["Ayesha", "Amna", "Afshan", "Aiman"];
for (let i = 0; i < users.length; i++) {
console.log(users)   
console.log(users[0])  
console.log(users[1]) 
console.log(users[2]) 
}

// Loop Of Numbers Array
let num = [1,2,3,4,5];
for (let i = 0; i < num.length; i++) {
    console.log(`Index Number is: ${i} & Length is: ${num[i]}`); 
}

// Reverse Loop Of Numbers Array
let numb = [1,2,3,4,5];
for (let i = numb.length-1; i >= 0; i--) {
    console.log(`Index Number is: ${i} & Length is: ${numb[i]}`); 
}