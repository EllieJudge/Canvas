
ctx.beginPath();//istructions between here and closePath
ctx.rect(20, //top left corner of rect on canvas
    40, //where on the canvas
    50, //width and...
    50);//height of rect
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240,//x y coordinates of arcs center
    160,
    20,
    Math.PI*2,
    false
);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath;


ctx.beginPath;
ctx.rect(160,
    10,
    100,
    40);
ctx.strokeStyle = "black" ; 
ctx.stroke();
ctx.closePath;

