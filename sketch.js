let currentScene; // 현재 장면
let cursorImage; // 커서 이미지
let day = 1; // 현재 일차

let fontNeo;
let cursorImage1;
let cursorImage2;

let mainMenu; // 메인화면
let openingScene; // 오프닝
let homeMorning; // 집(아침)
let wayToSchool; // 등굣길
let school; // 학교
let wayToHome; // 하굣길
let homeNight; // 집(밤)
let endingScene; // 엔딩

function preload() {
  fontNeo = loadFont('assets/fonts/neoMo.TTF');
  cursorImage1 = loadImage('assets/images/mouseCursor1.png');
  cursorImage2 = loadImage('assets/images/mouseCursor2.png');

  MainMenu.preload();
  OpeningScene.preload();
  HomeMorning.preload();
  WayToSchool.preload();
  School.preload();
  //WayToHome.preload();
  HomeNight.preload();
  EndingScene.preload();
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
  if (currentScene.setup) {
    currentScene.setup();
  }
}

function draw() {
  background(220);
  currentScene.display();

  // 커서 이미지 적용
  if (currentScene instanceof WayToSchool && currentScene.changeCursor() === 2) {
    cursorImage = cursorImage2; // 상호작용 가능한 물체 위에 있을 때 커서 이미지를 빨간색으로
  } else {
    cursorImage = cursorImage1; // 그 외의 경우 검은색으로
  }

  push();
  translate(mouseX, mouseY);
  scale(0.5);
  image(cursorImage, 0, 0);
  pop();

  // 테스트용: 현재 장면 출력
  textFont(fontNeo);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(currentScene.constructor.name, 10, 30);
}

function mouseClicked() {
  currentScene.handleClick();
}

// 테스트용 키패드 입력 
function keyPressed() {
  if (key === '1') {
    changePage(mainMenu, 'Loading...');
  } else if (key === '2') {
    changePage(openingScene, 'Loading...');
  } else if (key === '3') {
    changePage(homeMorning, 'Loading...');
  } else if (key === '4') {
    changePage(wayToSchool, 'Loading...');
  } else if (key === '5') {
    changePage(school, 'Loading...');
  } else if (key === '6') {
    changePage(wayToHome, 'Loading...');
  } else if (key === '7') {
    changePage(homeNight, 'Loading...');
  } else if (key === '8') {
    changePage(endingScene, 'Loading...');
  }
}

function changePage(newPage, transitionText = 'Loading...') {
  if (newPage.constructor.name === 'HomeMorning') {
    homeMorning = new HomeMorning(); // 새로운 HomeMorning 인스턴스 생성
    newPage = homeMorning; // 새로운 인스턴스를 newPage로 설정
  } else if (newPage.constructor.name === 'HomeNight') {
    homeNight = new HomeNight();
    newPage = new HomeNight();
  }
  let transitionScene = new Transition(currentScene, newPage, transitionText); // 전환 장면을 거쳐서 다음 장면으로 전환
  transitionScene.setup();
  currentScene = transitionScene;
}
