var numSquares = 9;
var count = 0;
var NUM = 0;
var squares = document.getElementsByClassName("square");
var colors = generateRandomColor(numSquares);
var playAgain = document.querySelector("button");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor(squares.length);
var colorDisplay = document.querySelector("span");
var gameMode = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

function changeColor(color, num)
{
    console.log("FUNCTION OF CHANGING COLORS CALLED with COLOR : " + color + "  num:" + num)
    for(var j = 0; j < num; j++)
    {
        squares[j].style.backgroundColor = color;
    }
}

function pickColor(num)
{
    //pick random number from 1 and 6
    //Math.floor(Math.random * limit)
    var randomNumber = Math.floor(Math.random() * num );
    console.log(randomNumber)
    return colors[randomNumber];  
}

function generateRandomColor(num)
{
    var arr = [];
    for(var i = 0 ; i< num ; i++)
    {
        //get random color and store it 
        arr[i] = randomColor() 
    }
    return arr;
}

function randomColor()
{
    // pick a red ,green,blue
    var r =Math.floor(Math.random() * 256 );
    var g =Math.floor(Math.random() * 256 );
    var b =Math.floor(Math.random()* 256 );
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function check(num)
{
    count = count + 1;
    if(numSquares === 3)
    {
        if(numSquares-num <= 1)
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }
    else if(numSquares === 6)
    {
        if(numSquares-num <= 2)
        {
           return 0;
        }
        else
        {
            return 1;
        }
    }
    else
    {
        if(numSquares-num <= 3)
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }
 
}

function call()
{
    if(check(count))
    {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            document.querySelector("div").style.backgroundColor = clickedColor ;
            messageDisplay.textContent = "Correct!!";
            changeColor(clickedColor, squares.length);
            playAgain.textContent = "PLAY AGAIN?";
            NUM = NUM + 1;
            if(NUM == 1)
            alert("CONGRATULATIONS YOU WON!!!!");
            else
            alert("PLAY AGAIN!! YOU WON!!")
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    }
    else
    {
        if(NUM  == 0)
        {
            messageDisplay.textContent = "YOU LOST!!!!";
            alert("YOU LOST!!!! TRY AGAIN!!!  CORRECT OPTION IS");
            playAgain.textContent = "PLAY AGAIN?";
            changeColor(pickedColor, squares.length);
            document.querySelector("div").style.backgroundColor = pickedColor ;
        }
        else{
            alert("PLAY AGAIN!! YOU WON!!!");
        }
    }
}

function PlayAgain()
{
    count = 0;
    NUM = 0;
    messageDisplay.textContent = "";   
    document.querySelector("div").style.backgroundColor = "lightseagreen";
    playAgain.textContent = "NEW COLORS";
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor(numSquares);    
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length ; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",call)
    }
}

playAgain.addEventListener("click",PlayAgain);

for(var i = 0; i<squares.length ; i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",call)
}

for(var i = 0 ; i < gameMode.length ; i++)
{
    gameMode[i].addEventListener("click",function()
{
    if(this.textContent === "EASY")
    {
        numSquares = 3;
        alert("FOR EASY MODE YOU CAN GUESS 2 TIMES!!!");
    }
    else if(this.textContent === "NORMAL")
    {
        numSquares = 6;
        alert("FOR NORMAL MODE YOU CAN GUESS 4 TIMES!!!");
    }
    else
    {
        alert("FOR HARD MODE YOU CAN GUESS 6 TIMES!!!");
        numSquares = 9;
    }
    for(var j = 0 ; j<squares.length; j++)
    {
        if(this.textContent === "EASY")
        {
            j < 3 ?  squares[j].style.display = "block" : squares[j].style.display = "none";
        }
        else if(this.textContent === "NORMAL")
        {
            j < 6 ?  squares[j].style.display = "block" : squares[j].style.display = "none";
        }
        else
        {
            squares[j].style.display = "block";
        }
    }
    PlayAgain();
    for(var j = 0 ; j < gameMode.length ; j++)
    {
        gameMode[j].classList.remove("difficulty");
    }
    this.classList.add("difficulty");
})
}