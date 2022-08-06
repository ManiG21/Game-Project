
const canvas = document.getElementById('greenHill-zone');
const ctx = canvas.getContext('2d');
const backImage = document.getElementById('ground-flat');
let offset = 0
let ground = canvas.height / 3
// Makes Score yellow
ctx.beginPath();
ctx.rect(0, 535, 1400, ground);
ctx.fillStyle = "yellow";
ctx.stroke();
ctx.closePath();



// Drawing my flat ground 


// load images
const images = {};
images.player = new Image();
images.ground = new Image();
images.ring = new Image();
images.background = new Image();
images.player.onload = function () {

}

images.ring.src = 'sonic-rings.png';
function drawRing(img, sX, sY, sW, sH) {
    ctx.drawImage(img, sX, sY, sW, sH);
}
//Link to image: https://www.artstation.com/artwork/3dwbWA
images.background.src = 'Green-hill-background.jpg';
function drawBackG(img, sX, sY, sW, sH) {
    ctx.drawImage(img, sX, sY, sW, sH);
}

class Rings {
    constructor(x, y, radius, startAngle, endAngle) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.w = radius;
        this.h = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;

    }
    beginPath() {
        return ctx.beginPath()
    }
    arc() {
        return ctx.arc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle

        )

    }
    fill() {
        return ctx.fill()
    }
    stroke() {
        return ctx.stroke()
    }
    closePath() {
        return ctx.closePath()

    }
    // ctx.arc(Math.floor(Math.random() * 1400), 300, 20, 0, Math.PI * 2, false);
    // ctx.fillStyle = "yellow";
    // ctx.fill();
    // ctx.stroke();
    // ctx.closePath()
}
let ring = new Rings(200, 300, 20, 0, Math.PI * 2)




function isColliding(obj1, obj2) {
    // obj.x = left bound
    // obj.x + obj.w = right bound
    // obj.y = top bound
    // obj.y + obj.h = bottom bound
    return obj1.x < obj2.x + obj2.w &&
        obj1.x + obj1.w > obj2.x &&
        obj1.y < obj2.y + obj2.h &&
        obj1.h + obj1.y > obj2.y
}





function collRing() {
    // if (sonic.x - ring.radius == ring.x && sonic.y - ring.radius == ring.y) {
    if (isColliding(sonic, ring)) {
        ring.x = Math.random() * canvas.width
        Score++
    }
}

// function Collision(){

// }
//background movement
let scroll = 0
function back() {

    drawBackG(images.background, scroll, 0, canvas.width, canvas.height)
    // draw image 2



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
// function floor() {
//     drawRing(images.ground, 0, 400, canvas.width, 400)
// }

// function onGround(){
//    if(images.ground.height = sonic.y){

// }
// }

//Adding Sonic sprite from image to my code
images.player.src = 'Sonic-Sprite3.png';

// const playerWidth = 126.5;
// const playerHeight = 160;
// let playerFrameX = 0;
// let playerFrameY = 2;
// let playerX = 0;
// let sonic.y = 435;
// const playerSpeed = 30;

class Sonic {
    constructor() {
        this.image = images.player
        this.x = 0
        this.y = 435
        this.speed = 30
        this.frameY = 2
        this.frameX = 0
        this.w = 126.5
        this.h = 160
        this.gravityForce = 0
    }
}
const sonic = new Sonic

// const jump = new Sonic(img.src.player,0,4)

let Score = 0
function ScoreCount() {

}
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
    if (sonic.y >= groundLevel) {
        sonic.y = groundLevel;
        sonic.gravityForce = 0
    } else {
        sonic.gravityForce += .5
        sonic.y += sonic.gravityForce;

    }

}
const groundLevel = 450

function movement() {
    if (playerUp) {
        // gravityForce = 0
        sonic.y += -50;
    }
    if (playerDown) {
        sonic.y += -100;
    }
    if (playerRight) {
        sonic.x += 10;
    }
    if (playerLeft) {
        sonic.x += -10;
    }

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




    //Adding my background
    back()
    //Showing Score count
    ctx.font = '40px arial'
    ctx.fillText(`Score: ${Score}`, 70, 70)
    ring.beginPath()
    ring.arc()
    ring.fill()
    ring.stroke()
    ring.closePath()

    // Rings()
    //adding the ground he stands on
    floor()
    collRing()

    movement()
    gravity()


    //https://youtu.be/GVuU25pGaYo   This video helped me find the sprite sheets
    // and taught me how to draw Sonic
    // Abe helped me get rid of background for the sprite, I figured out resize
    //animate sprtes
    if (sonic.frameX < 3 && sonic.frameY <= 2) sonic.frameX++;
    else if (sonic.frameX = 0);

    drawSprite(images.player, sonic.w * sonic.frameX, sonic.h * sonic.frameY,
        sonic.w, sonic.h, sonic.x, sonic.y, sonic.w, sonic.h);
    // drawSprite(images.player, playerWidth * playerFrameX, sonic.h * sonic.frameY,
    //     playerWidth, playerHeight, sonic.x, sonic.y, playerWidth, playerHeight);

    // //   //move player
    // else if (sonic.x < canvas.width + playerWidth) sonic.x +=
    //     playerSpeed;
    // else playerX = 0 - playerWidth;
    //trying to create idle frame
    // else if( playerUp === false & playerDown === false & playerRight === false & playerLeft === false){
    //     playerFrameX = 0 && playerFrameY = 0;
    // }



}
//increased frames per second
window.onload = setInterval(animate, 1000 / 50);
// window.onload is an event that occurs when all the assets
// have been successfully loaded( in this case only the spacebg.png)
// window.onload = function() {


//     // the scroll speed
//     // an important thing to ensure here is that can.height
//     // is divisible by scrollSpeed
//    let scroll = .1

//     // this is the primary animation loop that is called 60 times
//     // per second
//     function loop()
//     {
//         back()



//         // update image height
//         imgHeight += scrollSpeed;

//         //resetting the images when the first image entirely exits the screen
//         if (imgHeight == can.height)
//             imgHeight = 0;

//         // this function creates a 60fps animation by scheduling a
//         // loop function call before the
//         // next redraw every time it is called
//         window.requestAnimationFrame(loop);
//     }

//     // this initiates the animation by calling the loop function
//     // for the first time
//     loop();

// }
animate()





