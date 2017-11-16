var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#newColor");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i =0 ; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
       modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected"); 
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
    }  
}

function setupSquares(){
for(var i = 0; i <squares.length; i++) {
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
}

function reset (){
    colors = generateRandomColors(numSquares);    
    //pick a new random colors from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //change colors of square
    messageDisplay.textContent= "";
    for(var i = 0; i <squares.length; i++) {
        if(colors[i]){
            squares[i].style.display= "block"
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background= "steelblue";
}

    resetButton.addEventListener("click", function(){
        reset();
});


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
