var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#newColor");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
   //generate all new colors
    colors = generateRandomColors(6);    
    //pick a new random colors from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change colors of square
    for(var i = 0; i <squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background= "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i <squares.length; i++) {
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];
    
    //
    squares[i].addEventListener("click", function(){
       //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent= "Play Again!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            
        } else {
            this.style.background = "#232323"   
            messageDisplay.textContent = "Try Again!";
        }                      
    });
}



function changeColors (color){
    // loop through all squares
    for(var i = 0; i< squares.length; i++) {
        // change each color to match color  
        squares[i].style.background = color;
    }
}


function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to arr
    for(var i = 0; i < num; i++){
        // get random color - push to array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    // pick a red to 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green to 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a blue to 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}