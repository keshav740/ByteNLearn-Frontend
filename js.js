function show() {
  alert("Welcome to my class");
}
function change() {
  document.getElementById("pera").innerHTML = "New Text";
}

var name = "keshav";
var age = "21";
var study = "yes";
console.log("name", name);
console.log("age", age);
console.log("study", study);


let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum :" , sum);


function askName(){
    let name =  prompt("Please enter your name");
    // console.log(name)
    if (name === null || name.trim() === ""){
        document.getElementById("output").innerHTML="You did't enter your name";
    }else{
        document.getElementById("output").innerHTML = "hello," + name + "!";
    }
}

function yesOrno(){
    let choice = confirm("Are you sure you want to delete this file")
    // console.log(choice)
    if(choice === true){
        document.getElementById("result").innerHTML = "File is Deleted"
    } else {
        document.getElementById("result").innerHTML = "File is not deleted"
    }
}




