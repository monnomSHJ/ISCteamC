class EndingScene {
  constructor() {
    this.images = EndingScene.images;

    this.currentSceneIndex = 0;
    this.nextSceneIndex = 1;

    this.alpha = 255;
    this.lastChangeTime = 0;
    this.changeInterval = 10000;
    this.fadeSpeed = 10;

    this.imageConfigurations = [];

    this.initialDelay = 5000; // 이미지 표시 시작 전 지연 시간 (밀리초 단위)
    this.startTime = 1000;

    this.currentScene = null;
    this.nextScene = null;

    this.texts = [
      "평범해 보이는 무채색의 하루에도",
      "",
      "작은 행복은 언제나 존재합니다.",
      "",
      "일상의 공간을 둘러보고",
      "",
      "일상의 소리에 귀를 기울이며",
      "",
      "나만의 이야기와 색으로",
      "",
      "삶을 채워보세요.",
      "",
      "오늘도 당신의 행복을 응원합니다.",
      "",
      "플레이해주셔서 감사합니다.",
      "",
      "by 2024-1 정보문화기술입문 C조"
    ];

    this.displayedTexts = [];
    this.currentTextIndex = 0;
    this.displayedText = "";
    this.textAnimationCounter = 0;
    this.textAnimationSpeed = 6;
    this.textComplete = false;

    this.finalMessageDisplayed = false;
  }

  static preload() {
    let imagePaths = [
      { key: 'homeMorningMono', path: './assets/images/backgrounds/homeMorningFullMono.png' },
      { key: 'homeMorningColor', path: './assets/images/backgrounds/homeMorningFullColor.png' },

      { key: 'wtsBackgroundMono', path: './assets/images/backgrounds/wayToSchoolMono.png' },
      { key: 'wtsBackgroundColor', path: './assets/images/backgrounds/wayToSchoolColor.png' },
      { key: 'wtsBusStopMono', path: './assets/images/objects/wayBusStopMono.png' },
      { key: 'wtsBusStopColor', path: './assets/images/objects/wayBusStopColor.png' },
      { key: 'wtsStore0', path: './assets/images/objects/wayToSchoolStore0.png' },
      { key: 'wtsStore1', path: './assets/images/objects/wayToSchoolStore1.png' },
      { key: 'wtsStore2', path: './assets/images/objects/wayToSchoolStore2.png' },
      { key: 'wtsStore3', path: './assets/images/objects/wayToSchoolStore3.png' },
      { key: 'wtsFlower0', path: './assets/images/objects/wayToSchoolFlower0.png' },
      { key: 'wtsFlower1', path: './assets/images/objects/wayToSchoolFlower1.png' },
      { key: 'wtsFlower2', path: './assets/images/objects/wayToSchoolFlower2.png' },
      { key: 'wtsFlower3', path: './assets/images/objects/wayToSchoolFlower3.png' },
      { key: 'wtsCat0', path: './assets/images/objects/wayToSchoolCat0.png' },
      { key: 'wtsCat1', path: './assets/images/objects/wayToSchoolCat1.png' },
      { key: 'wtsCat2', path: './assets/images/objects/wayToSchoolCat2.png' },
      { key: 'wtsCat3', path: './assets/images/objects/wayToSchoolCat3.png' },
      { key: 'wtsCycle0', path: './assets/images/objects/wayToSchoolCycle0.png' },
      { key: 'wtsCycle1', path: './assets/images/objects/wayToSchoolCycle1.png' },
      { key: 'wtsCycle2', path: './assets/images/objects/wayToSchoolCycle2.png' },
      { key: 'wtsCycle3', path: './assets/images/objects/wayToSchoolCycle3.png' },

      { key: 'schoolMono', path: './assets/images/backgrounds/School1.png' },
      { key: 'schoolColor', path: './assets/images/backgrounds/SchoolColor.png' },

      { key: 'wthBackgroundMono', path: './assets/images/backgrounds/wayToHomeSkyMono.png' },
      { key: 'wthBackgroundColor', path: './assets/images/backgrounds/wayToHomeSkyColor.png' },
      { key: 'wthBackgroundRoadMono', path: './assets/images/backgrounds/wayToHomeRoadMono.png' },
      { key: 'wthBackgroundRoadColor', path: './assets/images/backgrounds/wayToHomeRoadColor.png' },
      { key: 'wthBackgroundWallMono', path: './assets/images/backgrounds/wayToHomeWallBGMono.png' },
      { key: 'wthBackgroundWallColor', path: './assets/images/backgrounds/wayToHomeWallBG.png' },
      { key: 'wthBusStopMono', path: './assets/images/objects/wayBusStopMono.png' },
      { key: 'wthBusStopColor', path: './assets/images/objects/wayBusStopColor.png' },
      { key: 'wthWall0', path: './assets/images/objects/wayToHomeWall0.png' },
      { key: 'wthWall1', path: './assets/images/objects/wayToHomeWall1.png' },
      { key: 'wthWall2', path: './assets/images/objects/wayToHomeWall2.png' },
      { key: 'wthWall3', path: './assets/images/objects/wayToHomeWall3.png' },
      { key: 'wthPoster0', path: './assets/images/objects/wayToHomePoster0.png' },
      { key: 'wthPoster1', path: './assets/images/objects/wayToHomePoster1.png' },
      { key: 'wthPoster2', path: './assets/images/objects/wayToHomePoster2.png' },
      { key: 'wthPoster3', path: './assets/images/objects/wayToHomePoster3.png' },
      { key: 'wthMountainMono', path: './assets/images/objects/wayToHomeMountainMono.png' },
      { key: 'wthMountainColor', path: './assets/images/objects/wayToHomeMountainColor.png' },
      { key: 'wthBird0', path: './assets/images/objects/wayToHomeBird0.png' },
      { key: 'wthBird1', path: './assets/images/objects/wayToHomeBird1.png' },
      { key: 'wthBird2', path: './assets/images/objects/wayToHomeBird2.png' },
      { key: 'wthBird3', path: './assets/images/objects/wayToHomeBird3.png' },
      { key: 'wthStationMono', path: './assets/images/objects/wayToHomeBusStopMono.png' },
      { key: 'wthStationColor', path: './assets/images/objects/wayToHomeBusStopColor.png' },

      { key: 'homeNightMono', path: './assets/images/backgrounds/homeNightFullMono.png' },
      { key: 'homeNightColor', path: './assets/images/backgrounds/homeNightFullColor.png' },

      { key: 'mainMenuMono', path: './assets/images/backgrounds/mainImageMono.png' },
      { key: 'mainMenuColor', path: './assets/images/backgrounds/mainMenuColor.png' }
    ]

    EndingScene.images = {};

    for(let img of imagePaths) {
      EndingScene.images[img.key] = loadImage(img.path);
    }

    EndingScene.bgm = loadSound('./assets/sounds/endingSceneBgm.mp3');
  }

  setup() {
    createCanvas(1280, 720);

    this.imageConfigurations = [
      [ { key: 'homeMorningMono', x: 0, y: 0 } ],
      [ { key: 'homeMorningColor', x: 0, y: 0 } ],
      [
        { key: 'wtsBackgroundMono', x: 0, y: 0 },
        { key: 'wtsStore0', x: 650, y: 200 },
        { key: 'wtsFlower0', x: 200, y: 380 },
        { key: 'wtsCat0', x: 550, y: 420 },
        { key: 'wtsCycle0', x: 1100, y: 390 },
        { key: 'wtsBusStopMono', x: 1040, y: 265 }
      ],
      [
        { key: 'wtsBackgroundColor', x: 0, y: 0 },
        { key: 'wtsStore${wtsStore}', x: 650, y: 200 },
        { key: 'wtsFlower${wtsFlower}', x: 200, y: 380 },
        { key: 'wtsCat${wtsCat}', x: 550, y: 420 },
        { key: 'wtsCycle${wtsCycle}', x: 1100, y: 390 },
        { key: 'wtsBusStopColor', x: 1040, y: 265 }
      ],
      [ { key: 'schoolMono', x: 0, y: 0 } ],
      [ { key: 'schoolColor', x: 0, y: 0 } ],
      [
        { key: 'wthBackgroundMono', x: 0, y: 0 },
        { key: 'wthMountainMono', x: 0, y: 0 },
        { key: 'wthBackgroundRoadMono', x: 0, y: 0 },
        { key: 'wthBackgroundWallMono', x: 880, y: 0 },
        { key: 'wthWall0', x: 880, y: 20 },
        { key: 'wthPoster0', x: 1050, y: 210 },
        { key: 'wthBird0', x: 1000, y: 520 },
        { key: 'wthStationMono', x: 300, y: 140 },
        { key: 'wthBusStopMono', x: 50, y: 260 }
      ],
      [
        { key: 'wthBackgroundColor', x: 0, y: 0 },
        { key: 'wthMountainColor', x: 0, y: 0 },
        { key: 'wthBackgroundRoadColor', x: 0, y: 0 },
        { key: 'wthBackgroundWallColor', x: 880, y: 0 },
        { key: 'wthWall${wthWall}', x: 880, y: 20 },
        { key: 'wthPoster${wthPoster}', x: 1050, y: 210 },
        { key: 'wthBird${wthBird}', x: 1000, y: 520 },
        { key: 'wthStationColor', x: 300, y: 140 },
        { key: 'wthBusStopColor', x: 50, y: 260 }
      ],
      [ { key: 'homeNightMono', x: 0, y: 0 } ],
      [ { key: 'homeNightColor', x: 0, y: 0 } ],
      [ { key: 'mainMenuMono', x: 0, y: 0 } ],
      [ { key: 'mainMenuColor', x: 0, y: 0 } ]
    ]
  }

  display() {
    background(0);

    if (!EndingScene.bgm.isPlaying()) {
      EndingScene.bgm.setVolume(0.5);
      EndingScene.bgm.loop();
    }

    this.currentScene = this.imageConfigurations[this.currentSceneIndex];
    this.nextScene = this.imageConfigurations[this.nextSceneIndex];

    let currentTime = millis();
    let elapsedTime = currentTime - this.startTime;

    if (elapsedTime < this.initialDelay) {
      this.nextSceneIndex = 0;
    } else {
      this.changeInterval = 5000;
    }

    if (currentTime - this.lastChangeTime > this.changeInterval) {
      this.lastChangeTime = currentTime;
      this.currentSceneIndex = this.nextSceneIndex;
      this.nextSceneIndex = (this.nextSceneIndex + 1) % this.imageConfigurations.length;
      this.alpha = 0; // 알파 값을 초기화하여 페이드 인 효과를 시작
    }

    this.alpha += this.fadeSpeed;
    if (this.alpha > 255) {
      this.alpha = 255;
    }

    push();
    translate(width/2 - 512, height/2 - 144);
    scale(0.4);

    rectMode(CORNER);
    stroke(255, 100);
    strokeWeight(40);
    fill(255);
    rect(0, 0, 1280, 720);



    // 현재 씬 이미지 표시
    for (let imgConfig of this.currentScene) {
      let imgKey = imgConfig.key.includes('${') ? eval('`' + imgConfig.key + '`') : imgConfig.key; // 동적 키 생성
      let img = this.images[imgKey];
      tint(255, 255 - this.alpha);
      image(img, imgConfig.x, imgConfig.y);
    }

    // 다음 씬 이미지 표시
    for (let imgConfig of this.nextScene) {
      let imgKey = imgConfig.key.includes('${') ? eval('`' + imgConfig.key + '`') : imgConfig.key; // 동적 키 생성
      let img = this.images[imgKey];
      tint(255, this.alpha);
      image(img, imgConfig.x, imgConfig.y);
    }

    pop();

    noTint();

    this.updateDisplayedText();

    fill(255);
    textSize(18);
    textAlign(LEFT, CENTER);
    let combinedText = this.displayedTexts.concat(this.displayedText).join("\n");
    text(combinedText, width/2 + 100, height/2 - 40);
  }

  updateDisplayedText() {
    if (this.textAnimationCounter < this.textAnimationSpeed) {
      this.textAnimationCounter++;
    } else {
      if (this.currentTextIndex < this.texts.length) {
        if (this.displayedText.length < this.texts[this.currentTextIndex].length) {
            this.displayedText = this.texts[this.currentTextIndex].substring(0, this.displayedText.length + 1);
        } else {
            this.displayedTexts.push(this.displayedText);
            this.displayedText = "";
            this.currentTextIndex++;
            if (this.currentTextIndex >= this.texts.length) {
                this.textComplete = true; // 모든 텍스트가 출력 완료
            }
        }
        this.textAnimationCounter = 0;
      }
    }
  }
}