let currentScene; //현재 장면
let day = 1; //현재 일차

let fontNeo;
let cursorImage;

function preload() {
  fontNeo = loadFont('assets/fonts/neoMo.TTF');
}

function setup() {
  createCanvas(1280, 720);
  currentScene = new MainMenu();
}

function draw() {
  background(220);
  currentScene.display();
}

function mouseClicked() {
  currentScene.handleClick();
}