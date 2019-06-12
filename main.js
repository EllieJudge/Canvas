//get&draw canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2; //draw corner? x axis
let dy = -2; //draw corner? y axis

let ballRadius = 10; //defining size of ball to make easier for calulations such as not hitting walls etc
//this is added to drawBall

//a paddle to hit the ball
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth) / 2;

//keypresses
let rightPressed = false;//start false as not immediately pressed
let leftPressed = false;

//event listeners KDH/HUHfuncs fired when key events happen
//!IMPORTANT! "keyup"&"keydown" NO CAPSLOCKS/camelCase or wont work
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
 
//event listeners^^ start these funcs when keys hit
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key =="Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

//drawBall func
function drawBall() { //draw ball func
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2); //draws circle + its x y start position (variables defined above)
    ctx.fillStyle = "#0095DD"; //color wanted
    ctx.fill(); //fill func?
    ctx.closePath();
}

//drawPaddle func
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath;
}


//draw func
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas before every new draw/gets rid of trail effect

    drawBall(); //calling drawBall+Padd funcs
    drawPaddle();
    
    //defining where drawBall should stop/edges of canvas
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx; //??
    }
    //if y/x axis + drawYaxis greater than canvas height
    //or less than zero, drawY = -drawY (so dont do it?)
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy; //??
    }

    x += dx; //start position to plus 2 moves/places?
    y += dy; //start position to -2 moves/places?


    //paddle movement through keypresses
    //code after&&stops paddle going off right edge of canvas
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX += 7;//number of px it will move by
    }
    //i think the left side axis starts at 0? 
    //hence why we add >0 to stop paddle disappearing off left side of canvas
    else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }

}

setInterval(draw, 10); //this func will be called 10milliseconds forever



