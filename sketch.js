let currentScene; // 현재 장면
let cursorImage; // 커서 이미지
let day = 1; // 현재 일차

let resetDisplay = false; //리셋 하시겠습니까?

//폰트
let fontNeo;

//이미지
let cursorImage1;
let cursorImage2;
let cursorImage3;

//사운드
let cameraSound;
let clickSound;
let busSound;
let schoolSound;

//각 클래스 할당
let mainMenu; // 메인화면
let openingScene; // 오프닝
let homeMorning; // 집(아침)
let wayToSchool; // 등굣길
let school; // 학교
let wayToHome; // 하굣길
let homeNight; // 집(밤)
let endingScene; // 엔딩

//등굣길 오브젝트 변수 
let wtsBackGround = 0;
let wtsStore = 0; //가게 이미지(1: 빵, 2: 카페, 3: 주스)
let wtsFlower = 0; //꽃 이미지(1: 장미, 2: 수국, 3: 백합)
let wtsCat = 0; // 고양이 이미지(1: Cookie, 2: Fish, 3: Cheeze)
let wtsCycle = 0; // 자전거 이미지(1: 빨강, 2: 어린이, 3: 외발)

//하굣길 오브젝트 변수
let wthBackGround = 0;
let wthWall = 0; //낙서 이미지(1: Fun, 2: Love, 3: Seize)
let wthPoster = 0; //포스터 이미지(1: Dance, 2: Song, 3: Cook)
let wthMountain = 0;
let wthBird = 0; //새 이미지(1: Dove, 2: Small, 3: Black)
let wthBusStop = 0;

let diaryPictures = []; //촬영한 사진 저장
let diary; //다이어리 클래스 할당

let bgmDay = []; //일차별 브금 저장



function preload() {
  fontNeo = loadFont('./assets/fonts/neoMo.TTF');
  cursorImage1 = loadImage('./assets/images/mouseCursor3.png');
  cursorImage2 = loadImage('./assets/images/mouseCursor2.png');
  cursorImage3 = loadImage('./assets/images/objects/mousePencil.png');
  cameraSound = loadSound('./assets/sounds/cursorClickSound.mp3');
  clickSound = loadSound('./assets/sounds/objectClickSound.mp3');
  busSound = loadSound('./assets/sounds/busSound.mp3');
  schoolSound = loadSound('./assets/sounds/schoolSound.mp3');

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

  diary = new Diary();

  currentScene = mainMenu;
  if (currentScene.setup) {
    currentScene.setup();
  }
}



function draw() {
  background(220);
  noStroke();

  currentScene.display();

  //bgm 재생
  if (currentScene instanceof HomeMorning || currentScene instanceof WayToSchool ||
    currentScene instanceof School || currentScene instanceof WayToHome ||
    (currentScene instanceof HomeNight && currentScene.status < 5)) {

      if (!bgmDay[day-1].isPlaying()) {
        bgmDay[day-1].setVolume(0.15);
        bgmDay[day-1].play();
      }

    } else if (currentScene instanceof HomeNight && currentScene.status > 4) {
      bgmDay[day-1].stop();
    } //5일차 밤 -> preEnding 넘어갈 때 브금 중지


  //현재 일차 및 장소 확인
  if ((currentScene instanceof HomeMorning || currentScene instanceof WayToSchool ||
    currentScene instanceof School || currentScene instanceof WayToHome || currentScene instanceof HomeNight)
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
    text("새로 시작하려면 'r'을 눌러 처음으로 돌아가세요.", width-30, 30);
  }

  if (currentScene instanceof EndingScene) { //엔딩씬에서는 더 잘 보이도록
    textFont(fontNeo);
    textSize(16);
    fill(255);
    textAlign(RIGHT, CENTER);
    text("새로 시작하려면 'r'을 입력해 처음으로 돌아가세요.", width-30, 30);
  }

    //리셋 확인 창
    if(resetDisplay) {
      rectMode(CENTER);
      fill(0);
      stroke(255, 100);
      strokeWeight(8);
      rect(width/2, height/2, 1000, 200);
      rectMode(CORNER);

      textAlign(CENTER);
      fill(255);
      noStroke();
      textFont(fontNeo);
      textSize(20);
      text('현재 진행 상황을 모두 리셋하고 처음으로 돌아가시겠습니까?', width/2, height/2 - 40);
      text("리셋을 원하시면 'y'를, 현재 진행 상황으로 돌아가시려면 'n'을 입력해주세요.", width/2, height/2 - 10);

      fill(255, 180);
      textSize(16);
      text('처음으로 돌아가면 다시는 되돌릴 수 없습니다.', width/2, height/2 + 40)
    }

  // 커서 이미지 조건문
  if (currentScene instanceof HomeNight && currentScene.status === 2) {
    cursorImage = cursorImage3; //밤이면서 다이어리 사용 중일 때 펜슬로 변경
  } else if (((currentScene instanceof WayToSchool || currentScene instanceof WayToHome) && currentScene.changeCursor() === 2)
    || currentScene instanceof OpeningScene || currentScene instanceof MainMenu) {
    cursorImage = cursorImage2; //등하굣길 오브젝트 마우스오버 or 오프닝 or 메인화면에서 빨간 초점 이미지
  } else {
    cursorImage = cursorImage1; //이외의 경우에는 무조건 흰색 초점 이미지 
  }

  //커서 이미지 적용
  if(currentScene instanceof EndingScene == false) { //엔딩씬에서는 커서X
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
    } else {
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
  if(currentScene.handleClick()) {
    currentScene.handleClick();
  }
}


function keyPressed() {

  if (key === '1') {
    changePage(new MainMenu, 'Loading...');
  } else if (key === '2') {
    changePage(new OpeningScene, 'Loading...');
  } else if (key === '3') {
    changePage(new HomeMorning, 'Loading...');
  } else if (key === '4') {
    changePage(new WayToSchool, 'Loading...');
  } else if (key === '5') {
    changePage(new School, 'Loading...');
  } else if (key === '6') {
    changePage(new WayToHome, 'Loading...');
  } else if (key === '7') {
    changePage(new HomeNight, 'Loading...');
  } else if (key === '8') {
    changePage(new EndingScene, 'Loading...');
  } else if (key === '9') {
    day += 1;
  }

  if (!resetDisplay && currentScene instanceof Transition == false) {
    if (key === 'r' || key === 'R') {
      clickSound.play();
      resetDisplay = true;
    }
  } else {
    if (key === 'y' || key === 'Y') {
      clickSound.play();
      resetAll();
    } else if (key === 'n' || key === 'N') {
      clickSound.play();
      resetDisplay = false;
    }
  }

}



function changePage(newPage, transitionText = 'Loading...') { //화면 전환 function
  
  let transitionScene = new Transition(currentScene, newPage, transitionText);
  transitionScene.setup();
  currentScene = transitionScene;
}



function resetAll() {

  for (let bgm of bgmDay) {
    bgm.stop();
  }

  clickSound.stop();
  cameraSound.stop();
  busSound.stop();

  OpeningScene.bgm.stop();
  EndingScene.bgm.stop();

  mainMenu = new MainMenu();
  changePage(mainMenu, 'Restarting...');

  day = 1;
  resetDisplay = false;
  
  wtsBackGround = 0;
  wtsStore = 0;
  wtsFlower = 0;
  wtsCat = 0;
  wtsCycle = 0;

  wthBackGround = 0;
  wthWall = 0;
  wthPoster = 0;
  wthMountain = 0;
  wthBird = 0;
  wthBusStop = 0;

  diaryPictures = [];
  diary = new Diary();

}