var Name = "ziad";
console.log(Name)
 
let greeting;
greeting = "hello"
console.log(greeting);
let isValid = true;
console.log("typeof isValid");

let message0= " Hello from javaScript bootcamp";
let message1= " Hello from javaScript bootcamp";
let message2= " Hello from 'javaScript bootcamp' ";
let message3= ' Hello from "javaScript" bootcamp';

console.log(message0)
console.log(message1)
console.log(message2)
console.log(message3)


let path = "ziad"- "ziad";
console.log(path);


let test = "50"-"10";
console.log(test);
console.log(typeof test);

let country = "riyadh city is the best";
let continent = " asia";
let countrylenth=country.length
console.log(` lenth is $ {country.length}`)
console.log(countrylenth)
country.slice

let sentence = `${country }is located in
${continent}.;`
console.log(sentence)


let testObj = {
    nr:600,
    str:"text"
};
console.log(testObj.nr);
console.log(testObj.str);



let user1={
    name1 : "ziad",
 NickName1 : "barrak",
 age1 : 2222,
 email1 : "ziadalbarrak@gmail.com",


}

console.log(user1.age);

let user2={
    name2 : "mohamed",
    nickname2 :"barrak",
    age2 : 3333,
    email2 : "mohamedalbarrak@gmail.com",

}
console.log(user2.email2);



let days=["sun","monday","tuseday","wednsday" ]
console.log(days[2]);
days[0]="sunday"
console.log(days);

days[3]="tue"
console.log(days);
console.log(days[2][2]);
console.log(days.indexOf(100));