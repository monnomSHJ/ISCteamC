let currentScene; //현재 장면
let day = 1; //현재 일차

let fontNeo;
let cursorImage1;
let cursorImage2;

let mainMenu; //메인화면
let openingScene; //오프닝
let homeMorning; //집(아침)
let wayToSchool; //등굣길
let school; //학교
let wayToHome; //하굣길
let homeNight; //집(밤)
let endingScene; //엔딩

function preload() {
  fontNeo = loadFont('assets/fonts/neoMo.TTF');
  cursorImage1 = loadImage('assets/images/mouseCursor1.png');
  cursorImage2 = loadImage('assets/images/mouseCursor2.png');

  MainMenu.preload();
  OpeningScene.preload();
  HomeMorning.preload();
  /*
  WayToSchool.preload();
  School.preload();
  WayToHome.preload();
  HomeNight.preload();
  EndingScene.preload();
  */
}

function setup() {
  createCanvas(1280, 720);
  noCursor();

  mainMenu = new MainMenu();
  openingScene = new OpeningScene();
  homeMorning = new HomeMorning();
  wayToSchool = new WayToSchool();
  school = new School();
  wayToHome = new WayToHome();
  homeNight = new HomeNight();
  endingScene = new EndingScene();

  currentScene = mainMenu;

}

function draw() {
  background(220);
  currentScene.display();
  //openingScene.display(); //오프닝씬
  //openingScene.updateDisplayedText(); //오프닝씬

  //커서 이미지 적용
  push();
  translate(mouseX, mouseY);
  scale(0.5);
  image(cursorImage1, 0, 0);
  pop();

  //테스트용: 현재 장면
  textFont(fontNeo);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(currentScene.constructor.name, 10, 30);
}

function mouseClicked() {
  currentScene.handleClick();
  //currentScene.transitionToNextScene();//오프닝씬->아침씬
}

//테스트용 키패드 입력 
function keyPressed() {
  if (key === '1') {
    changePage(mainMenu);
  } else if (key === '2') {
    changePage(openingScene);
  } else if (key === '3') {
    changePage(homeMorning);
  } else if (key === '4') {
    changePage(wayToSchool);
  } else if (key === '5') {
    changePage(school);
  } else if (key === '6') {
    changePage(wayToHome);
  } else if (key === '7') {
    changePage(homeNight);
  } else if (key === '8') {
    changePage(endingScene);
  }
}

// 페이지 전환 함수
function changePage(newPage) {
  currentScene = newPage;
}
