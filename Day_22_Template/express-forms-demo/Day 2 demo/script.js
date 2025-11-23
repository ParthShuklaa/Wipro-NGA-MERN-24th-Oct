

let num = 5;
let age =18;
// conditional statement

if (age>18) {
    console.log("you can drive");
}else {
    console.log("you cannot drive");
}
while (num > 0) {
    console.log("Number is: " + num);
    num--;
}
// array and loop

const colors = ["red", "green", "blue"];

function printColors(arr) {
    console.log("rgb:");
    // colors.forEach(function(color) {
    //     console.log("Color using anonymous function: " + color);
    // });
   colors.forEach(color=>
     {
   console.log("Color using forEach: " + color)
    });

}

printColors(colors);
for (let i = 0; i < colors.length; i++) {
    console.log("Color using for loop: " + colors[i]);
    
}

console.log(a);
var a =10;
// let a=10;

// functions and DOM manipulation
function seeMyPage(){
    document.getElementById("jsdemo").innerText="here is my js demo open console";
    // or we use innerhtml instead of Text
    // document.write("this is my js demo page");

    window.alert("welcome");
}

const maindiv = document.getElementById("maindiv");
maindiv.getElementsByTagName("h2")[0].textContent="Hello World";
function changeContent(){
    maindiv.getElementsByTagName("h2")[0].textContent="you clicked the button";
}



