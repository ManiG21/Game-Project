const canvas = document.getElementById('greenHill-zone');
const ctx = canvas.getContext("2d");
// load images
const images = {};
images.player = new Image();
images.player.onload = function(){
    
}
images.player.src = 'Sonic.png';
const playerWidth = '31.25'
const playerHeight = '45.77'
let playerFrameX = 3;
let playerFrameY = 3;
let playerX = 0;
let playerY = 0;
const playerSpeed = 6;



function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}
 
function animate(){
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height);
    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY,
        playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);
}

window.onload = setInterval(animate, 1000/30);

// let offset = 0
// let ground = canvas.height / 3
// ctx.beginPath();
// ctx.rect(0, 535, 1400, ground);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

animate()