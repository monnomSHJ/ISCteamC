let currentScene; //현재 장면
let day = 1; //현재 일차

let fontNeo;
let cursorImage1;
let cursorImage2;
let openingScene;

function preload() {
  fontNeo = loadFont('assets/fonts/neoMo.TTF');
  cursorImage1 = loadImage('assets/images/mouseCursor1.png');
  cursorImage2 = loadImage('assets/images/mouseCursor2.png');
  OpeningScene.preload();
}

function setup() {
  createCanvas(1280, 720);
  //currentScene = new MainMenu();
  noCursor();
  openingScene = new OpeningScene();
}

function draw() {
  background(220);
  //currentScene.display();
  openingScene.display();
  openingScene.updateDisplayedText();
  image(cursorImage1, mouseX, mouseY);
}

function mouseClicked() {
  //currentScene.handleClick();
  openingScene.handleClick();
}
