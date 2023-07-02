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
images.player2 = new Image();
images.boss = new Image();
images.ground = new Image();
images.ring = new Image();
images.background = new Image();
images.player.onload = function () {

}

// images.rings.src = 'sonic-rings.png';
// function drawRing(img, sX, sY, sW, sH) {
//     ctx.drawImage(img, sX, sY, sW, sH);
// }

//Link to image: https://www.artstation.com/artwork/3dwbWA
// images.background.src = 'Son-back.gif';
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
let ring2 = new Rings(700, 300, 20, 0, Math.PI * 2)
let ring3 = new Rings(1150, 300, 20, 0, Math.PI * 2)




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
    else if (isColliding(sonic, ring2)) {
        ring2.x = Math.random() * canvas.width
        Score++
    }
    else if (isColliding(sonic, ring3)) {
        ring3.x = Math.random() * canvas.width
        Score++
    }
    if (isColliding(tails, ring)) {
        ring.x = Math.random() * canvas.width
        Score++
    }
    else if (isColliding(tails, ring2)) {
        ring2.x = Math.random() * canvas.width
        Score++
    }
    else if (isColliding(tails, ring3)) {
        ring3.x = Math.random() * canvas.width
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

// function ring(){
//     drawRing(images.rings, 300, 20, 0, 500)
// }

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
images.player2.src = 'Tails.png';
images.boss.src = 'Metal Sonic & Silver Sonic3.png';

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
        this.x = 100
        this.y = 435
        this.speed = 30
        this.frameY = 0
        this.frameX = 0
        this.w = 126.5
        this.h = 160
        this.gravityForce = 0
    }
}
const sonic = new Sonic
class Tails {
    constructor() {
        this.image = images.player2
        this.x = 0
        this.y = 435
        this.speed = 30
        this.frameY = 0
        this.frameX = 0
        this.w = 110
        this.h = 135
        this.gravityForce = 0
    }
}
const tails = new Tails
class MetalSonic {
    constructor() {
        this.image = images.boss
        this.x = 1100
        this.y = 435
        this.speed = 30
        this.frameY = 2.9
        this.frameX = 6
        this.w = 119
        this.h = 177
        this.gravityForce = 0
    }
}
const metal = new MetalSonic

// const jump = new Sonic(img.src.player,0,4)

let Score = 0
function ScoreCount() {

}
const playerAnimations = {
    idle: {
        // frameX: 0, 
        // startY: 0,
        // frames: 16,
        // width: 40
        image: images.player,
        // x : 0,
        // y :435,
        speed: 30,
        frameY: 0,
        frameX: 4,
        w: 40,
        h: 140,
        // gravityForce : 0
    },
    run: {
        frameX: 0,
        frameY: 2,
        frames: 3,
        width: 126
    },
    jump: {
        frameX: 0,
        frameY: 4,
        frames: 4,
        width: 60
    },
    crouch: {
        startX: 0,
        frameY: 5,
        frames: 3,
        width: 60
    },
    fall: {
        startX: 0,
        startY: 8,
        frames: 3,
        width: 60
    }
}
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


//Video that helped me get the sprite https://youtu.be/GVuU25pGaYo
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}

// input keys
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
function gravity2() {
    if (tails.y >= groundLevel) {
        tails.y = groundLevel;
        tails.gravityForce = 0
    } else {
        tails.gravityForce += .5
        tails.y += tails.gravityForce;

    }

}
function gravity3() {
    if (metal.y >= 475) {
        metal.y = 475;
        metal.gravityForce = 0
    } else {
        metal.gravityForce += .6
        metal.y += metal.gravityForce;

    }

}
// constant y axis for sonic
const groundLevel = 450

function movement() {
    if (playerUp) {
        // gravityForce = 0
        sonic.y += -20; tails.y += -20;
    }
    if (playerDown) {
        sonic.y = 450;
        tails.y = 450;
    }
    if (playerRight) {
        sonic.x += 12;
        tails.x += 12;
    }
    if (playerLeft) {
        sonic.x += -10;
        tails.x += -10;
    }
    if (playerUp && playerDown) {
        sonic.x += 30
        tails.x += 30
    }

}

function animate() {
    //Adding my background
    back()
    //Showing Score count
    ctx.font = '40px arial'
    ctx.fillText(`Rings: ${Score}`, 70, 70)
    ring.beginPath()
    ring.arc()
    ring.fill()
    ring.stroke()
    ring.closePath()
    ring2.beginPath()
    ring2.arc()
    ring2.fill()
    ring2.stroke()
    ring2.closePath()
    ring3.beginPath()
    ring3.arc()
    ring3.fill()
    ring3.stroke()
    ring3.closePath()

    // Rings()
    //adding the ground he stands on
    floor()
    collRing()
    movement()
    gravity()
    gravity2()
    // ring()

    //https://youtu.be/GVuU25pGaYo   This video helped me find the sprite sheets
    // and taught me how to draw Sonic
    // Abe helped me get rid of background for the sprite, I figured out resize
    //animate sprtes
    if (playerUp === false && playerDown === false && playerRight === false && playerLeft === false) {
        sonic.frameY = 0; sonic.frameX = 0.7;
        tails.frameY = 0; tails.frameX = 0;
    } else if (playerRight === true) {
        sonic.frameY = 2; sonic.frameX <= 4;
        tails.frameY = 2;  tails.frameX <= 9;
    }
    else if (playerLeft === true) {
        sonic.frameY = 2; sonic.frameX++;
        tails.frameY = 2;  tails.frameX <= 9;
        
    }
    //Jump animation
    else if (playerUp === true) {
        sonic.frameY = 4; sonic.frameX++;
        tails.frameY = 4.2;tails.w = 124; tails.frameX <= 2;
    }
    // Trying to create Sonic's spin dash
    else if (playerUp === true && playerDown) {
        sonic.frameY = 4; sonic.frameX++; sonic.x + 60;
    }
    //Trying to get falling animation
    else if (playerUp === false && sonic.y > groundLevel) {
        sonic.frameY = 8; sonic.frameX <= 7; sonic.frameX++;
    }
    else if (playerDown === true) {
        sonic.frameY = 5; sonic.frameX++;
        tails.frameY = 5; 
    } else sonic.frameX = 0; tails.frameX = 0;

    if (sonic.frameX < 4 && sonic.frameY <= 0) sonic.frameX++;
    else if (sonic.frameX < 4 && sonic.frameY <= 4) sonic.frameX++;
    else if (sonic.frameX <= 2 && sonic.frameY <= 2) sonic.frameX++;
    else if (sonic.frameX < 7 && sonic.frameY >= 8) sonic.frameX++;
    else sonic.frameX = 0;
    //     if (tails.frameX < 9 && tails.frameY <= 0) tails.frameX++;
    //   else  if (tails.frameX < 4 && tails.frameY <= 4) tails.frameX++;
    //   else  if (tails.frameX <= 2 && tails.frameY <= 2) tails.frameX++;
    //   else  if (tails.frameX < 7 && tails.frameY >= 8) tails.frameX++;
    // else  tails.frameX = 0; 


    drawSprite(images.player, sonic.w * sonic.frameX, sonic.h * sonic.frameY,
        sonic.w, sonic.h, sonic.x, sonic.y, sonic.w, sonic.h);
    drawSprite(images.player2, tails.w * tails.frameX, tails.h * tails.frameY,
        tails.w, tails.h, tails.x, tails.y, tails.w, tails.h);
    drawSprite(images.boss, metal.w * metal.frameX, metal.h * metal.frameY,
        metal.w, metal.h, metal.x, metal.y, metal.w, metal.h);


    // drawSprite(images.player, playerWidth * playerFrameX, sonic.h * sonic.frameY,
    //     playerWidth, playerHeight, sonic.x, sonic.y, playerWidth, playerHeight);

}
//increased frames per second
window.onload = setInterval(animate, 1000 / 60);
animate()

// window.onload is an event that occurs when all the assets
// have been successfully loaded( in this case only the spacebg.png)
// window.onload = function() {


//     // the scroll speed
//     // an important thing to ensure here is that can.height
//     // is divisible by scrollSpeed


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