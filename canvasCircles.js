const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
    return Math.floor(Math.random()*number);
}

function draw() {
    document.body.style.backgroundColor = color(255,255,255,0.9);
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for(let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = color(255,100,100,0.5); //'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}

function color(red,green,blue,opacity) {
    let randomColor = 'rgb('+random(red)+','+random(green)+','+random(blue)+','+opacity+')';
    return randomColor;
}

btn.addEventListener('click',draw);