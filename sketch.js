let currentScene; //현재 장면
let cursorImage; //커서 이미지
let day; //현재 일차

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
  WayToSchool.preload();
  School.preload();
  WayToHome.preload();
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
  if (currentScene instanceof WayToSchool && currentScene.changeCursor() === 2) { // WayToSchool과 연계, 상호작용 가능한 물체 위에 커서를 올릴 때 카메라 아이콘을 빨갛게 변화시키기
    cursorImage = cursorImage2; // 상호작용 가능한 물체 위에 있을 때 커서 이미지를 빨간색으로
  } else {
    cursorImage = cursorImage1; // 그 외의 경우 검은색으로
  }

  push();
  translate(mouseX, mouseY);
  scale(0.5);
  image(cursorImage, 0, 0); // 커서이미지로 사용하는 이미지 << 를 따로 변수로 지정
  pop();
  // 등하굣길에서 상호작용 가능한 오브젝트 위에서 커서 색을 변경하는 코드를 추가했는데, 코드가 꼬이면 일단 삭제해두셔도 됩니다

  //테스트용: 현재 장면
  textFont(fontNeo);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(currentScene.constructor.name, 10, 30);
}

function mouseClicked() {
  currentScene.handleClick();
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
  if (currentScene.setup) {
    currentScene.setup();
  }
}