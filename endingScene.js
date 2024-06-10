class EndingScene {
  constructor() {
    
    
    this.currentImageIndex = 0;
    this.alpha = 0;
    this.fadeIn = true;
    this.lastChangeTime = 0;
    this.changeInterval = 5000;
    this.graphicsArray = [];
  

    this.selectedStore = null;
    this.selectedFlower = null;
    this.selectedCat = null;
    this.selectedCycle = null;
    this.wthWallSelected = null;
    this.wthPosterSelected = null;
    this.wthBirdSelected = null;

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
      "일상을 채워넣어보세요.",
      "",
      "오늘도 당신의 행복을 응원합니다.",
      "",
      "플레이해주셔서 감사합니다."
    ];

    this.displayedTexts = [];
    this.currentTextIndex = 0;
    this.displayedText = "";
    this.textAnimationCounter = 0;
    this.textAnimationSpeed = 8;
    this.textComplete = false;

    this.finalMessageDisplayed = false;
    
    if(wtsStore ==1 || wtsStore ==0){
      this.selectedStore =  EndingScene.wtsStore1;
    }else if(wtsStore ==2){
      this.selectedStore =  EndingScene.wtsStore2;
    }else if(wtsStore ==3){
      this.selectedStore =  EndingScene.wtsStore3;
    }

    if(wtsFlower ==1 || wtsFlower ==0){
      this.selectedFlower =  EndingScene.wtsFlower1;
    }else if(wtsFlower ==2){
      this.selectedFlower = EndingScene.wtsFlower2;
    }else if(wtsFlower ==3){
      this.selectedFlower = EndingScene.wtsFlower3;
    }

    if(wtsCat ==1 || wtsCat ==0){
      this.selectedCat = EndingScene.wtsCat1;
    }else if(wtsCat ==2){
      this.selectedCat = EndingScene.wtsCat2;
    }else if(wtsCat ==3){
      this.selectedCat = EndingScene.wtsCat3;
    }

    if(wtsCycle ==1 || wtsCycle ==0){
      this.selectedCycle = EndingScene.wtsCycle1;
    }else if(wtsCycle ==2){
      this.selectedCycle = EndingScene.wtsCycle2;
    }else if(wtsCycle ==3){
      this.selectedCycle = EndingScene.wtsCycle3;
    }

    if(wthWall ==1 || wthWall ==0){
      this.wthWallSelected = EndingScene.wthWall1;
    }else if(wthWall ==2){
      this.wthWallSelected = EndingScene.wthWall2;
    }else if(wthWall ==3){
      this.wthWallSelected = EndingScene.wthWall3;
    }

    if(wthPoster ==1 || wthPoster ==0){
      this.wthPosterSelected = EndingScene.wthPoster1;
    }else if(wthPoster ==2){
      this.wthPosterSelected = EndingScene.wthPoster2;
    }else if(wthPoster ==3){
      this.wthPosterSelected = EndingScene.wthPoster3;
    }

    if(wthBird ==1 || wthBird ==0){
      this.wthBirdSelected = EndingScene.wthBird1;
    }else if(wthBird ==2){
      this.wthBirdSelected = EndingScene.wthBird2;
    }else if(wthBird ==3){
      this.wthBirdSelected = EndingScene.wthBird3;
    }

    this.updateImages();
    this.createGraphicsTool();
    


    
  }

  


  updateImages(){
    this.images = [
      EndingScene.imgHomeMorning,
      EndingScene.imgHomeMorning,
    [
      EndingScene.imgWayToSchool,
      this.selectedStore,
      this.selectedFlower,
      this.selectedCat,
      this.selectedCycle

    ],
    EndingScene.imgSchool,
    [
      EndingScene.imgWayToHome,
      EndingScene.imgWayToHomeMountainColor,
      EndingScene.imgWayToHomeRoadColor,
      EndingScene.imgWayToHomeWallBg,
      EndingScene.imgWayToHomeBusStopColor,
      EndingScene.imgWayBusStopColor,
      //EndingScene.imgWayToHomeWallBg,
      this.wthWallSelected,
      this.wthPosterSelected,
      this.wthBirdSelected
      //wayToHome.wthBusStopSelected
    ],
    EndingScene.imgHomeNight,
    EndingScene.mainMenu
  ];

  }

  static preload() {
    EndingScene.imgHomeMorning = loadImage('assets/images/backgrounds/homeMorningFullColor.png');
    EndingScene.imgWayToSchool = loadImage('assets/images/backgrounds/wayToSchoolColor.png');
    EndingScene.imgSchool = loadImage('assets/images/backgrounds/SchoolColor.png');
    EndingScene.imgWayToHome = loadImage('assets/images/backgrounds/wayToHomeColor.png');
    EndingScene.imgHomeNight = loadImage('assets/images/backgrounds/homeNightFullColor.png');
    EndingScene.imgWayToHomeWallBg = loadImage('assets/images/backgrounds/wayToHomeWallBG.png');
    EndingScene.imgWayToHomeMountainColor = loadImage('assets/images/objects/wayToHomeMountainColor.png');
    EndingScene.imgWayToHomeBusStopColor = loadImage('assets/images/objects/wayToHomeBusStopColor.png');
    EndingScene.imgWayBusStopColor = loadImage('assets/images/objects/WayBusStopColor.png');
    EndingScene.imgWayToHomeRoadColor = loadImage('assets/images/backgrounds/WayToHomeRoadColor.png');
    EndingScene.bgm = loadSound('assets/sounds/endingSceneBgm.mp3');
    EndingScene.wtsStore1 = loadImage('assets/images/objects/wayToSchoolStore1.png');
    EndingScene.wtsStore2 = loadImage('assets/images/objects/wayToSchoolStore2.png');
    EndingScene.wtsStore3 = loadImage('assets/images/objects/wayToSchoolStore3.png');
    EndingScene.wtsFlower1 = loadImage('assets/images/objects/wayToSchoolFlower1.png');
    EndingScene.wtsFlower2 = loadImage('assets/images/objects/wayToSchoolFlower2.png');
    EndingScene.wtsFlower3 = loadImage('assets/images/objects/wayToSchoolFlower3.png');
    EndingScene.wtsCat1 = loadImage('assets/images/objects/wayToSchoolCat1.png');
    EndingScene.wtsCat2 = loadImage('assets/images/objects/wayToSchoolCat2.png');
    EndingScene.wtsCat3 = loadImage('assets/images/objects/wayToSchoolCat3.png');
    EndingScene.wtsCycle1 = loadImage('assets/images/objects/wayToSchoolCycle1.png');
    EndingScene.wtsCycle2 = loadImage('assets/images/objects/wayToSchoolCycle2.png');
    EndingScene.wtsCycle3 = loadImage('assets/images/objects/wayToSchoolCycle3.png');
    EndingScene.wthWall1 = loadImage('assets/images/objects/wayToHomeWall1.png');
    EndingScene.wthWall2 = loadImage('assets/images/objects/wayToHomeWall2.png');
    EndingScene.wthWall3 = loadImage('assets/images/objects/wayToHomeWall3.png');
    EndingScene.wthPoster1 = loadImage('assets/images/objects/wayToHomePoster1.png');
    EndingScene.wthPoster2 = loadImage('assets/images/objects/wayToHomePoster2.png');
    EndingScene.wthPoster3 = loadImage('assets/images/objects/wayToHomePoster3.png');
    EndingScene.wthBird1 = loadImage('assets/images/objects/wayToHomeBird1.png');
    EndingScene.wthBird2 = loadImage('assets/images/objects/wayToHomeBird2.png');
    EndingScene.wthBird3 = loadImage('assets/images/objects/wayToHomeBird3.png');
    EndingScene.mainMenu = loadImage('assets/images/backgrounds/mainMenuColor.png');




    
  }

  createGraphicsTool() {
    const imageConfigurations = [
      { count: 1, positions: [{ x: 80, y: 200, w: 480, h: 270 }] },
      { count: 1, positions: [{ x: 80, y: 200, w: 480, h: 270 }] },
      { count: 5, positions: [
          { x: 80, y: 200, w: 480, h: 270 },
          { x: 404, y: 275, w: 150, h: 113 },
          { x: 155, y: 343, w: 49, h: 49 },
          { x: 286, y: 339, w: 41, h: 41 },
          { x: 493, y: 339, w: 56, h: 38 }
        ]
      },
      { count: 1, positions: [{ x: 80, y: 200, w: 480, h: 270 }] },
      { count: 9, positions: [
          { x: 80, y: 200, w: 480, h: 270 }, //배경
          { x: 80, y: 200, w: 480, h: 270 }, //산
          { x: 80, y: 200, w: 480, h: 270 },
          { x:410, y:114, w:228, h:270}, //벽
          { x: 193, y: 252, w: 255, h: 144 },//버스정류장
          { x: 91, y: 290, w: 50, h: 86 }, //표지판
          
          { x: 410, y: 208, w: 68, h:68}, //벽 낙서
          { x: 474, y: 279, w: 68, h: 83 }, //포스터
          { x: 455, y: 395, w: 56, h: 45}, //새
          //{ x: 193, y: 252, w: 255, h: 144}
        ]
      },
      { count: 1, positions: [{ x: 80, y: 200, w: 480, h: 270}] },
      { count: 1, positions: [{ x: 80, y: 200, w: 480, h: 270}] }
    ];

    for (let i = 0; i < imageConfigurations.length; i++) {
      let compositeGraphics = createGraphics(1280, 720);
      if (Array.isArray(this.images[i])) {
        for (let j = 0; j < imageConfigurations[i].count; j++) {
          let pos = imageConfigurations[i].positions[j];
          compositeGraphics.image(this.images[i][j], pos.x, pos.y, pos.w, pos.h);
        }
      } else {
        let pos = imageConfigurations[i].positions[0];
        compositeGraphics.image(this.images[i], pos.x, pos.y, pos.w, pos.h);
      }
      this.graphicsArray.push(compositeGraphics);
    }
  } //각 단계별 이미지를 하나의 그래픽으로 묶어주는 코드 

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




  display() {
    background(0);
    //clip(80, 200, 480, 270);
    if (!EndingScene.bgm.isPlaying()) {
      EndingScene.bgm.setVolume(0.5);
      EndingScene.bgm.loop(); // 배경음악을 반복 재생 //수정
    }
    

    if (this.graphicsArray.length > 0) {
      if (millis() - this.lastChangeTime > this.changeInterval) {
        if (this.currentImageIndex < this.graphicsArray.length - 1) {
          this.currentImageIndex++;
          this.lastChangeTime = millis();
          this.alpha = 0; // 새 이미지로 변경 시 페이드 인 효과 초기화
          this.fadeIn = true;
        }
      }

      let currentGraphics = this.graphicsArray[this.currentImageIndex];
      tint(255, this.alpha); // 이미지에 알파 값 적용
      image(currentGraphics, 0, 0, 1280, 720); // 기본 크기로 이미지 그리기
      noTint();

      if (this.fadeIn) {
        this.alpha += 10;
        if (this.alpha >= 255) {
          this.alpha = 255;
          this.fadeIn = false; // 페이드인 효과
        }
      }
    }
  

    fill(0);
    noStroke();
    rect(0,0,width,200);
    rect(560,200,600,200);

  
    this.updateDisplayedText();

    fill(255);
    textSize(23);
    textAlign(CENTER, CENTER);
    let combinedText = this.displayedTexts.concat(this.displayedText).join("\n");
    text(combinedText, 900, 400);

 
  }
  

  handleClick() {
    //클릭 시 이벤트 여기에다가!
  }
}
