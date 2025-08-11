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



// Arrays starts

let names = ["keshav","keshav1","keshav2","keshav3","keshav4","keshav5","keshav6"]
// console.log(names)
document.getElementById("arrayOutput").innerHTML = "Names :" + names;


// Loops

function getColors(){
    let colors = [];
    for (let i=0; i<3; i++){
        let color = prompt("Enter color " + (i + 1) + ":");
        colors.push(color);
    }
    // console.log(colors)
    // document.getElementById("loops").innerHTML = " Your Fav Colors :" + colors ;

let orignalList = "";
for(let i = 0; i < colors.length; i++){
    orignalList += "color" + (i+1) + ": <span style='color:" + colors[i] + "'>" + colors[i] + "</span><br>";
}


document.getElementById("loops").innerHTML = " <b> Your Fav Colors : </b>" + orignalList;
}


