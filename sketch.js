let currentScene; // 현재 장면
let cursorImage; // 커서 이미지
let day = 1; // 현재 일차

let fontNeo;
let cursorImage1;
let cursorImage2;
let cursorImage3;

let cameraSound;
let clickSound;
let busSound;
let schoolSound;
let bookSound;

let mainMenu; // 메인화면
let openingScene; // 오프닝
let homeMorning; // 집(아침)
let wayToSchool; // 등굣길
let school; // 학교
let wayToHome; // 하굣길
let homeNight; // 집(밤)
let endingScene; // 엔딩

//등굣길 변수
let wtsBG = 0; //배경 이미지
let wtsBS = 0; //버스 정류장 이미지
let wtsStore = 0; //가게 이미지(1: 빵, 2: 카페, 3: 주스)
let wtsFlower = 0; //꽃 이미지(1: 장미, 2: 수국, 3: 백합)
let wtsCat = 0; // 고양이 이미지(1: Cookie, 2: Fish, 3: Cheeze)
let wtsCycle = 0; // 자전거 이미지(1: 빨강, 2: 어린이, 3: 외발)

//하굣길 변수
let wthBG = 0; //기본 배경 이미지
let wthBS = 0; //버스 정류장 이미지
let wthWall = 0; //낙서 이미지(1: Fun, 2: Love, 3: Seize)
let wthPoster = 0; //포스터 이미지(1: Dance, 2: Song, 3: Cook)
let wthMountain = 0; //산 이미지
let wthBird = 0; //새 이미지(1: Dove, 2: Small, 3: Black)
let wthBusStop = 0; //버스 정류장(상호작용 가능)
let wthRoad = 0; //길(배경 요소)

let diaryPictures = [];
let diary;

let bgmDay = [];

//다이어리 이미지

let wtsStoreForEnding = 0;
function preload() {
  fontNeo = loadFont('./assets/fonts/neoMo.TTF');
  cursorImage1 = loadImage('./assets/images/mouseCursor3.png');
  cursorImage2 = loadImage('./assets/images/mouseCursor2.png');
  cursorImage3 = loadImage('./assets/images/objects/mousePencil.png');
  cameraSound = loadSound('./assets/sounds/cursorClickSound.mp3');
  clickSound = loadSound('./assets/sounds/objectClickSound.mp3');
  busSound = loadSound('./assets/sounds/busSound.mp3');
  schoolSound = loadSound('./assets/sounds/schoolSound.mp3');
  bookSound = loadSound('./assets/sounds/bookOpenSound.mp3');

  MainMenu.preload();
  OpeningScene.preload();
  HomeMorning.preload();
  WayToSchool.preload();
  School.preload();
  WayToHome.preload();
  HomeNight.preload();
  EndingScene.preload();
  ChoosingButton.preload();
  Diary.preload();

  bgmDay = [
    loadSound('./assets/sounds/wayBgmDay1.mp3'),
    loadSound('./assets/sounds/wayBgmDay2.mp3'),
    loadSound('./assets/sounds/wayBgmDay3.mp3'),
    loadSound('./assets/sounds/wayBgmDay4.mp3'),
    loadSound('./assets/sounds/wayBgmDay5.mp3')
  ]
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

  diary = new Diary();
}

function draw() {
  background(220);
  noStroke();
  currentScene.display();

  //사운드
  if (currentScene instanceof HomeMorning ||
    currentScene instanceof WayToSchool ||
    currentScene instanceof School ||
    currentScene instanceof WayToHome ||
    (currentScene instanceof HomeNight && currentScene.status < 5)) {

      if (!bgmDay[day-1].isPlaying()) {
        bgmDay[day-1].setVolume(0.15);
        bgmDay[day-1].play();
      }

    } else if (currentScene instanceof HomeNight && currentScene.status > 4) {
      bgmDay[day-1].stop();
    }

  //현재 일차 및 장소 확인
  if ((currentScene instanceof HomeMorning || currentScene instanceof WayToSchool || currentScene instanceof School || currentScene instanceof WayToHome || currentScene instanceof HomeNight)
    && !currentScene.isCapturing) {
    fill(255);  
    textFont(fontNeo);
    textSize(24);
    textAlign(LEFT, CENTER);
    text("DAY "+day+" "+currentScene.constructor.name, 30 , 80);

    push();
    translate(30, 50);
    rectMode(CENTER);
    for(let d = 1; d < 6; d++) {
      if(d == day) {fill(255)} else {fill(80)}
      rect(d*20 - 15, 0, 10, 10);
    }
    pop();

    textFont(fontNeo);
    textSize(16);
    fill(255, 150);
    textAlign(RIGHT, CENTER);
    text("처음으로 돌아가려면 'f5'를 눌러 새로고침하세요.", width-30, 20);
  }

  if (currentScene instanceof EndingScene) {
    textFont(fontNeo);
    textSize(16);
    fill(255);
    textAlign(RIGHT, CENTER);
    text("처음으로 돌아가려면 'f5'를 눌러 새로고침하세요.", width-30, 20);
  }

  // 커서 이미지 조건문
  if (((currentScene instanceof WayToSchool || currentScene instanceof WayToHome)&& (currentScene.changeCursor() === 2))
    || (currentScene instanceof OpeningScene && currentScene.textComplete == true)
    || currentScene instanceof MainMenu
    || (currentScene instanceof HomeMorning && currentScene.textComplete && mouseX > width/2 - 150 && mouseX < width/2 + 150 && mouseY > height/2 - 150 && mouseY < height/2 + 150)
    || (currentScene instanceof HomeNight && currentScene.textComplete && mouseX > width - 250 && mouseX < width -30 && mouseY > height - 300 && mouseY < height - 80)) {
    cursorImage = cursorImage2; // 상호작용 가능한 물체 위에 있을 때 커서 이미지를 빨간색으로
  } else if (currentScene instanceof HomeNight && currentScene.status === 2) {
    cursorImage = cursorImage3;
  } else {
    cursorImage = cursorImage1; // 그 외의 경우 검은색으로
  }

  //커서 이미지 적용
  if(currentScene instanceof EndingScene == false) {
    if((currentScene instanceof WayToSchool || currentScene instanceof WayToHome) && currentScene.isCapturing == true) {
  } else {
    if(cursorImage == cursorImage2) {
      push();
      translate(mouseX, mouseY);
      scale(0.55);
      image(cursorImage, -60, -60, 120, 120);
      pop();
    } else if (cursorImage == cursorImage3) {
      push();
      translate(mouseX, mouseY);
      image(cursorImage3, 0, -193, 114, 193);
      pop();
    }
    else {
      push();
      translate(mouseX, mouseY);
      scale(0.55);
      image(cursorImage, -50, -50, 100, 100);
      pop();
    }
  }
  }
}

function mouseClicked() {
  currentScene.handleClick();
}

// 테스트용 키패드 입력 
/*
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
    changePage(new EndingScene, 'Loading...');
  } else if (key === '9') {
    day += 1;
  }

  currentScene.test();

}
    */

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
