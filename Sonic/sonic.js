
const canvas = document.getElementById('greenHill-zone');
const ctx = canvas.getContext('2d');
const backImage = document.getElementById('ground-flat');
let offset = 0
let ground = canvas.height / 3
ctx.beginPath();
// ctx.rect(0, 535, 1400, ground);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// Drawing my flat ground 


// load images
const images = {};
images.player = new Image();
images.ground = new Image();
images.background = new Image();
images.player.onload = function(){

}
//Link to image: https://www.artstation.com/artwork/3dwbWA
images.background.src = 'Green-hill-background.jpg';
function drawBackG(img, sX, sY, sW, sH){ 
 ctx.drawImage(img, sX, sY, sW, sH);
}
function back(){
    drawFlatG(images.background, 0, 0, canvas.width, canvas.height)
}
images.ground.src = 'Ground flat.png';
function drawFlatG(img, sX, sY, sW, sH){ 
 ctx.drawImage(img, sX, sY, sW, sH);
}

function floor(){
    drawFlatG(images.ground, 0, 400, canvas.width, 400)
}

    
images.player.src = 'Sonic-Sprite3.png';
const playerWidth = 124;
const playerHeight = 160;
let playerFrameX = 0;
let playerFrameY =  2;
let playerX = 0;
let playerY = 435;
const playerSpeed = 6;

// let sonicCurrentFrame = 0;
// const playerWidth = 123.8;
// const playerHeight = 183;
// let playerFrameX = 12.55;
// let playerFrameY =  1;
// let playerX = 0;
// let playerY = 435;
// const playerSpeed = 6;
// let sonicCurrentFrame = 0;


//Video that helped me get the sprite https://youtu.be/GVuU25pGaYo
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    
}

// function walk(){

// }
 
function animate(){
   
    ctx.clearRect(0,0,canvas.Width, canvas.height);
    back()
    ctx.font = '40px arial  '
    ctx.strokeText('Score: 00000', 70, 70)
    
    movement()
    floor()
    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY,
        playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);
        
     //animate sprtes
        if (playerFrameX < 9 && playerFrameY  <= 2) playerFrameX++;
    //   else playerFrameX = 7;
    // //   //move player

    
    //  else if (playerX < canvas.width + playerWidth) playerX +=
    //   playerSpeed;
    //   else playerX = 0 - playerWidth;
     

    }

window.onload = setInterval(animate, 1000/30);
// let jump = false
// let forward = false
// let back = false
// let duck = false
function jUp(e) {
    if(e.keycode === 32){

    }
return
}

function movement(a) {
    if(a.keycode === 39){
   playerX += 30
    }
    else if(a.keycode === 37){
   playerX - 30 }
    // else (a.keycode === 40){

    // } return
}

// Crafty.init(200, 200);

// const dim1 = {x: 5, y: 5, w: 50, h: 50}
// const dim2 = {x: 20, y: 10, w: 60, h: 40}

// const rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

// const rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(2).attr(dim2).color("blue");

// rect2.bind("EnterFrame", function () {
//     if () {
//         // collision detected!
//         this.color("green");
//     } else {
//         // no collision
//         this.color("blue");
//     }
// });


animate()