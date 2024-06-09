

class EndingScene {
  constructor(wayToSchool, wayToHome) {
    this.images = [
        EndingScene.imgHomeMorning,
        EndingScene.imgHomeMorning,
      [
        EndingScene.imgWayToSchool,
        wayToSchool.showSelectedStore(),
        wayToSchool.showSelectedFlower(),
        wayToSchool.showSelectedCat(),
        wayToSchool.showSelectedCycle(),

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
        wayToHome.wthWallSelected,
        wayToHome.wthPosterSelected,
        wayToHome.wthBirdSelected
        //wayToHome.wthBusStopSelected
      ],
      EndingScene.imgHomeNight
    ];
    this.currentImageIndex = 0;
    this.alpha = 0;
    this.fadeIn = true;
    this.lastChangeTime = 0;
    this.changeInterval = 3000;
    this.graphicsArray = [];
    this.createGraphicsTool();
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

  display() {
    background(0);
    //clip(80, 200, 480, 270);
    if (!EndingScene.bgm.isPlaying()) {
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
    //noClip();
    fill(0);
    noStroke();
    rect(0,0,width,200);
    rect(560,200,600,200);
  }

  handleClick() {
    //클릭 시 이벤트 여기에다가!
  }
}
