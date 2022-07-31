
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
images.player.onload = function () {

}
//Link to image: https://www.artstation.com/artwork/3dwbWA
images.background.src = 'Green-hill-background.jpg';
function drawBackG(img, sX, sY, sW, sH) {
    ctx.drawImage(img, sX, sY, sW, sH);
}

//background movement
let scroll = 0
function back() {
    scroll -= .1
    drawBackG(images.background, scroll, 0, canvas.width, canvas.height)
    // draw image 2
    drawBackG(images.background, 0, 1400 - canvas.width);
    imgWidth += scrollSpeed;

    //Draw second background offest first one
    //scroll + canvas.width
}

//Draw second background offest first one
//scroll + canvas.width

images.ground.src = 'Ground flat.png';
function drawFlatG(img, sX, sY, sW, sH) {
    ctx.drawImage(img, sX, sY, sW, sH);
}

function floor() {
    drawFlatG(images.ground, 0, 400, canvas.width, 400)
}

// function onGround(){
//    if(images.ground.height = playerY){

// }
// }
images.player.src = 'Sonic-Sprite3.png';

const playerWidth = 126.5;
const playerHeight = 160;
let playerFrameX = 0;
let playerFrameY = 2;
let playerX = 0;
let playerY = 435;
const playerSpeed = 30;
// const playerAnimations = {
//     idle: {
//         startX: 0, 
//         startY: 0,
//         frames: 16,
//         width: 40
//     },
//     run: {
//         startX: 0, 
//         startY: 2,
//         frames: 3,
//         width: 126
//     }
// }
// const playerAnimation = 'run'
//input Logic
window.addEventListener("keydown", e => {
    if (e.key === ' ') playerUp = true
    else if (e.key === 'ArrowRight') playerRight = true
    else if (e.key === 'ArrowLeft') playerLeft = true
    else if (e.key === 'ArrowDown') playerDown = true
});
window.addEventListener("keyup", e => {
    if (e.key === ' ') playerUp = false
    else if (e.key === 'ArrowRight') playerRight = false
    else if (e.key === 'ArrowLeft') playerLeft = false
    else if (e.key === 'ArrowDown') playerDown = false
});

// let sonicCurrentFrame = 0;
// const playerWidth = 123.8;
// const playerHeight = 183;
// let playerFrameX = 12.55;
// let playerFrameY =  1;
// let playerX = 0;
// let playerY = 435;
// const playerSpeed = 6;
// let sonicCurrentFrame = 0;

//if()


//Video that helped me get the sprite https://youtu.be/GVuU25pGaYo
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}

// function walk(){
let playerUp = false;
let playerDown = false;
let playerRight = false;
let playerLeft = false;
let gravityForce = 0
function gravity() {
    if (playerY >= groundLevel) {
        playerY = groundLevel;
        gravityForce = 0
    } else {
        gravityForce += .5
        playerY += gravityForce;

    }

}
const groundLevel = 450

function movement() {
    if (playerUp) {
        // gravityForce = 0
        playerY += -50;
    }
    if (playerDown) {
        playerY += -100;
    }
    if (playerRight) {
        playerX += 10;
    }
    if (playerLeft) {
        playerX += -10;
    }
    // switch (e.keyCode) {
    //     case 37:
    //         playerX -= 10;
    //         break;
    //     case 39:
    //         playerX += 10;
    //         break;
    //     case 32:

    // break;

    //rest, when no button is pressed him standing still
    // if (button pressed === false){
    // playerFrameX = 0 && playerFrameY = 0 }
    // Jump animaition
    // if (Up pressed === True){
    // playerFrameX <= 4 && playerFrameY = 3 }
    // if (Down pressed === True){
    // playerFrameX <= 3 && playerFrameY = 5 }


}



function animate() {

    // ctx.clearRect(0,0,canvas.Width, canvas.height);

    back()

    ctx.font = '40px arial  '
    ctx.strokeText('Score: 00000', 70, 70)


    floor()
    movement()
    gravity()

    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY,
        playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);

    //animate sprtes
    if (playerFrameX < 3 && playerFrameY <= 2) playerFrameX++;
    else if (playerFrameX = 0);
    // //   //move player
    // else if (playerX < canvas.width + playerWidth) playerX +=
    //     playerSpeed;
    // else playerX = 0 - playerWidth;
    //trying to create idle frame
    // else if( playerUp === false & playerDown === false & playerRight === false & playerLeft === false){
    //     playerFrameX = 0 && playerFrameY = 0;
    // }



}

window.onload = setInterval(animate, 1000 / 30);




animate()

