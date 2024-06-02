let currentScene; //현재 장면
let day = 1; //현재 일차

let fontNeo;
let cursorImage1;
let cursorImage2;
let openingScene;
let homeMorning;

function preload() {
  fontNeo = loadFont('assets/fonts/neoMo.TTF');
  cursorImage1 = loadImage('assets/images/mouseCursor1.png');
  cursorImage2 = loadImage('assets/images/mouseCursor2.png');
  OpeningScene.preload();
  HomeMorning.preload();
}

function setup() {
  createCanvas(1280, 720);
  currentScene = new MainMenu();
  noCursor();
  openingScene = new OpeningScene();
  homeMorning = new HomeMorning();
  openingScene.setNextScene(homeMorning);
  currentScene = openingScene;
}

function draw() {
  background(220);
  currentScene.display();
  //openingScene.display(); //오프닝씬
  //openingScene.updateDisplayedText(); //오프닝씬
  image(cursorImage1, mouseX, mouseY);
}

function mouseClicked() {
  currentScene.handleClick();
  //currentScene.transitionToNextScene();
}
