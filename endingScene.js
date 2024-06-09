/* class EndingScene {
    constructor() {
        this.images = EndingScene.images;
        /*
        this.texts = [
          "눈을 뜨면, 똑같은 하루가 또다시 시작된다.",
          "특별할 것 없는 길을 걸어, 학교에 간다.",
          "과제와 공부에 치여, 학교에서의 시간이 빠르게 흘러간다.",
          "피곤에 절어 터덜터덜, 집으로 향한다.",
          "집에 도착하면 벌써 늦은 밤. 생각할 여유 없이 잠에 든다.",
          "지루하게 반복되는 일상, 나의 행복은 어디에 있을까?"
        ];
        */
       /*
        this.currentImageIndex = 0;
        //this.currentTextIndex = 0;
        this.alpha = 0;
        this.fadeIn = true;
        //this.displayedText = ""; // 현재 표시되는 텍스트
        //this.textAnimationSpeed = 5; // 애니메이션 속도
        //this.textAnimationCounter = 0; // 애니메이션 카운터
        this.lastChangeTime = 0; // 마지막으로 이미지가 변경된 시간
        this.changeInterval = 3000;
        this.graphicsArray = [];
        this.createGraphicsTool() ;
        this.images = [
            imgHomeMorning,
            [imgWayToSchool,
            wayToSchool.wtsStoreSelected,
            wayToSchool.wtsFlowerSelected,
            wayToSchool.wtsCatSelected,
            wayToSchool.wtsCycleSelected,
            wayToSchool.wtsBGSelected]
            ,
            imgSchool,
            [imgWayToHome,
            wayToHome.wthWallSelected,
            wayToHome.wthPosterSelected,
            wayToHome.wthMountainSelected,
            wayToHome.wthBirdSelected,
            wayToHome.wthBusStopSelected
            ]
            ,
            imgHomeNight
          ];

      }
      

    static preload() {
        imgHomeMorning =loadImage('assets/images/backgrounds/homeMorningFullColor.png');
        imgWayToSchool = loadImage('assets/images/backgrounds/wayToSchoolColor.png');
        imgSchool = loadImage('assets/images/backgrounds/SchoolColor.png');
        imgWayToHome = loadImage('assets/images/backgrounds/wayToHomeColor.png');
        imgHomeNight = loadImage('assets/images/backgrounds/homeNightFullColor.png');
        

        //여기에 이미지 로드하기 ex. MainMenu.imageName = loadImage()
        /*
        EndingScene.images = [
            loadImage('assets/images/backgrounds/homeMorningColor.png'),
            loadImage('assets/images/backgrounds/homeMorningColor.png'), 
            loadImage('assets/images/backgrounds/wayToSchoolColor.png'),
            loadImage('assets/images/backgrounds/SchoolColor.png'),
            loadImage('assets/images/backgrounds/wayToHomeColor.png'),
            loadImage('assets/images/backgrounds/homeNightColor.png',)
        ] ;
*/
/*
    }

    createGraphicsTool() {
        const imageConfigurations = [
            { count: 1, positions: [{ x: 80, y: 200, w: 480, h: 270 }] },
            { count: 6, positions: [
                { x: 80, y: 200, w: 480, h: 270 }, 
                { x: 80 + 60 * 0.375, y: 200 + 60 * 0.375, w: 60 * 0.375, h: 60 * 0.375 },
                { x: 80 + 110 * 0.375, y: 200 + 110 * 0.375, w: 110 * 0.375, h: 110 * 0.375 }, 
                { x: 80 + 160 * 0.375, y: 200 + 160 * 0.375, w: 160 * 0.375, h: 160 * 0.375 },
                { x: 80 + 210 * 0.375, y: 200 + 210 * 0.375, w: 210 * 0.375, h: 210 * 0.375 }, 
                { x: 80 + 260 * 0.375, y: 200 + 260 * 0.375, w: 260 * 0.375, h: 260 * 0.375 }
              ] 
            },
            { count: 1, positions: [{ x: 0, y: 0, w: 1280, h: 720 }] },
            { count: 6, positions: [
                { x: 80, y: 200, w: 480, h: 270 }, 
                { x: 80 + 65 * 0.375, y: 200 + 65 * 0.375, w: 65 * 0.375, h: 65 * 0.375 },
                { x: 80 + 115 * 0.375, y: 200 + 115 * 0.375, w: 115 * 0.375, h: 115 * 0.375 }, 
                { x: 80 + 165 * 0.375, y: 200 + 165 * 0.375, w: 165 * 0.375, h: 165 * 0.375 },
                { x: 80 + 215 * 0.375, y: 200 + 215 * 0.375, w: 215 * 0.375, h: 215 * 0.375 }, 
                { x: 80 + 265 * 0.375, y: 200 + 265 * 0.375, w: 265 * 0.375, h: 265 * 0.375 }
              ] 
            },
            { count: 1, positions: [{ x: 0, y: 0, w: 1280, h: 720 }] }
        ];
        let imageIndex = 0;
    
        for (let i = 0; i < imageConfigurations.length; i++) {
          let compositeGraphics = createGraphics(1280, 720);
          for (let j = 0; j < imageConfigurations[i].count; j++) {
            let pos = imageConfigurations[i].positions[j];
            compositeGraphics.image(this.images[imageIndex], pos.x, pos.y); // 이미지를 지정된 위치에 그리기
            imageIndex++;
          }
          this.graphicsArray.push(compositeGraphics);
        }
      }
    
    
    display() {
        background(0);
        //여기에 디스플레이 설정하기
        //각 오브젝트 변수에 따라 다르게 디스플레이 할 것!
        
         if (this.images.length > 0) {
                // 이미지 변경 타이밍 체크
                if (millis() - this.lastChangeTime > this.changeInterval) {
                    if (this.currentImageIndex < this.images.length - 1) {
                        this.currentImageIndex++;
                        this.lastChangeTime = millis();
                        this.alpha = 0; // 새 이미지로 변경 시 페이드 인 효과 초기화
                        this.fadeIn = true;
                    }
                }
                    this.images[this.currentImageIndex] ; 
                    tint(255, this.alpha); // 이미지에 알파 값 적용
                    image(this.images[this.currentImageIndex], 80, 200, 480, 270);
                    noTint();
                
                if (this.fadeIn) {
                    this.alpha += 10;
                    if (this.alpha >= 255) {
                         this.alpha = 255;
                         this.fadeIn = false; // 페이드인 효과
                     }
                    }
            }
    }


    handleClick() {
        //클릭 시 이벤트 여기에다가!
        
    }
}
//컬러로 다 바꾼 5개의 사진 차례대로 

알겠습니다. 말씀하신 `this.images` 배열을 포함하여 코드를 다시 조정하겠습니다. 각 인덱스가 같은 `compositeGraphics`로 구성되고, `display()` 함수에서 각 인덱스에 해당하는 그래픽이 화면에 표시될 수 있도록 조정하겠습니다. 모든 위치와 크기는 새로운 캔버스 설정 `(80, 200, 480, 270)`에 맞게 조정하겠습니다.

### 수정된 코드

```javascript
*/

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
