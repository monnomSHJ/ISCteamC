class WayToHome {
  constructor() {
    this.wthBGSelected = WayToHome.wthBGM; // 기본 배경 이미지 설정
    this.wthBSSelected = WayToHome.wthBSM; // 기본 버스 정류장 이미지 설정
    this.wthWallSelected = WayToHome.wthWall; // 기본 낙서 이미지 설정
    this.wthPosterSelected = WayToHome.wthPoster; // 기본 포스터 이미지 설정
    this.wthMountainSelected = WayToHome.wthMountainM  ; // 기본 산 이미지 설정
    this.wthBirdSelected = WayToHome.wthBird; // 기본 새 이미지 설정
    this.wthBusStopSelected = WayToHome.wthBusStopM; // 기본 버정(요소) 이미지 설정
    this.wthWallBGSelected = WayToHome.wthWallBGM; //기본 벽(배경) 이미지 설정
    this.wthRoadSelected = WayToHome.wthBGRM; //기본 길(배경) 이미지 설정
    this.eventOccur = false; // 이벤트 발생 스위치
    this.blackBar = 0; // 상하단 흑색 바 애니메이션
    this.Reading = false; // 출력된 텍스트를 읽고 있는가
    this.Reading2 = false; //선택 후 텍스트 읽고 있는가
    this.finishRead = false; // 출력된 텍스트를 다 읽었는가
    this.choosing = false; // 선택지를 고르고 있는가
    this.chosen = 0; // 선택지에서 몇 번을 선택했는가. 전역변수로 값이 나갈 예정
    this.selected = false; // 선택을 했는가.

    this.flashAlpha = 0; // 플래시의 투명도
    this.isFlashing = false; // 플래시 켜져있나?

    this.captureImage;
    this.isCapturing = false;
    this.capturePosition = [0, 0];

    this.discoveryText = [
      ["벽을 자세히 살펴보니 누가 낙서를 해놓았다.", "책상에 낙서하던 때가 떠오른다.", "어떤 낙서지?"],
      ["무슨 포스터인가 했더니, 동아리 홍보 포스터구나.", "입학할 때는 이런저런 동아리에 관심이 많았었는데.", "내가 뭘 좋아했더라?"],
      ["학교에 오면 강의실에만 머무르다보니 주변을 볼 일이 없었네.", "학교가 산에 있으니 좋기도 하고... 불편하기도 하고...", "이제 보니, 산이 정말..."],
      ["웬 새가 도로 위에 서있다.", "날개도 있으면서 왜 걸어다니는 거야?", "그러고보니 저 새 이름이 뭐더라?"],
      ["문득, 정류장 유리에 무언가 비쳐 보였다.", "어딘가 익숙하지만 한동안 잃어버렸던 무언가.", "유리에 비친 모습이 점차 뚜렷해졌다."]
    ];

    this.afterText = [
      [["귀여운 낙서네.", "모두에게 웃음을 전하고 싶었던 걸까?", "생각보다 우리는 웃음을 쉽게 잃어버리니까.", "이제 버스를 타고 집으로 가자."],
      ["사랑 가득한 낙서네.", "모두에게 사랑의 의미를 전하고 싶었던 걸까?", "생각보다 우리는 사랑의 의미를 쉽게 잊어버리니까.", "이제 버스를 타고 집으로 가자."],
      ["교훈이 담긴 낙서네.", "모두에게 삶의 가르침을 주고 싶었던 걸까?", "생각보다 우리는 배운 것을 쉽에 잊어버리니까.", "이제 버스를 타고 집으로 가자."]],
      [["춤 잘 추는 사람들이 항상 멋져 보였지.", "여유가 생기면 춤을 좀 배워볼까?", "이제 버스를 타고 집으로 가자."],
      ["노래 잘 부르는 사람들이 항상 멋져 보였지.", "여유가 생기면 노래를 좀 배워볼까?", "이제 버스를 타고 집으로 가자."],
      ["요리 잘 하는 사람들이 항상 멋져 보였지.", "여유가 생기면 요리를 좀 배워볼까?", "이제 버스를 타고 집으로 가자."]],
      [["푸른 색이 긴장완화와 피로회복에 도움이 된다고 했던가?", "앞으로는 오고가는 길에 자주 봐야겠다.", "이제 버스를 타고 집으로 가자."],
      ["개강하면 다리가 더 튼튼해지는 느낌이야.", "이렇게라도 운동을 할 수 있어서 다행인가.", "이제 버스를 타고 집으로 가자."],
      ["자연은 칙칙한 도시에 생기를 더해주는 것 같아.", "...집에다 화분 몇 개만 가져다 둘까.", "이제 버스를 타고 집으로 가자."]],
      [["요즘 비둘기들이 나는 걸 본 적이 없네.", "도시에 너무 익숙해진 탓인가?", "...스스로 나는 법을 잊어버린 것 같다.", "이제 버스를 타고 집으로 가자."],
      ["차도 위에 있으니 평소보다 훨씬 작아보인다.", "혼자 날아가는 게 무서운 걸까?", "...하지만 언제까지고 차도 위에서 지낼 순 없어.", "이제 버스를 타고 집으로 가자."],
      ["요즘도 사람들이 까치밥을 남겨 놓나?", "그래도 까치라면, 까치밥 없는 도시의 삶에 금방 적응했을 테지만.", "...적응한다는 건 어떤 의미일까?", "이제 버스를 타고 집으로 가자."]],
      [[""],
      ["'나를 위해'라는 말로 하루하루를 꿋꿋이 버텨왔지만,", "결국 '지금의 나'에게 남아있던 것은 무엇이었을까.", "잃어버렸던 나의 모습을 다시 되찾은 것 같다.", "이제 버스를 타고 집으로 가자."],
      [""]]
    ];

    this.textAnimations = null;

    this.button1;
    this.button2;
    this.button3;

    this.button1Text = [
      "웃는 낙서",
      "춤 동아리",
      "정말 푸르다.",
      "비둘기",
      ""
    ];

    this.button2Text = [
      "연인의 낙서",
      "노래 동아리",
      "운동이 되는 걸.",
      "참새",
      "...오랜만이야."
    ];

    this.button3Text = [
      "명언",
      "요리 동아리",
      "자연친화적이다.",
      "까치",
      ""
    ];
  }

  static preload() {
    // 이미지 로드
    WayToHome.wthBG = loadImage('assets/images/backgrounds/wayToHomeSkyColor.png');
    WayToHome.wthBGR = loadImage('assets/images/backgrounds/wayToHomeRoadColor.png');
    WayToHome.wthBGM = loadImage('assets/images/backgrounds/wayToHomeSkyMono.png');
    WayToHome.wthBGRM = loadImage('assets/images/backgrounds/wayToHomeRoadMono.png');
    WayToHome.wthWallBG = loadImage('assets/images/backgrounds/wayToHomeWallBG.png');
    WayToHome.wthWallBGM = loadImage('assets/images/backgrounds/wayToHomeWallBGMono.png')

    WayToHome.wthBS = loadImage('assets/images/objects/wayBusStopColor.png');
    WayToHome.wthBSM = loadImage('assets/images/objects/wayBusStopMono.png');
    
    WayToHome.wthWall = loadImage('assets/images/objects/wayToHomeWall0.png');
    WayToHome.wthWallFun = loadImage('assets/images/objects/wayToHomeWall1.png');
    WayToHome.wthWallLove = loadImage('assets/images/objects/wayToHomeWall2.png');
    WayToHome.wthWallSeize = loadImage('assets/images/objects/wayToHomeWall3.png');

    WayToHome.wthPoster = loadImage('assets/images/objects/wayToHomePoster0.png');
    WayToHome.wthPosterDance = loadImage('assets/images/objects/wayToHomePoster1.png');
    WayToHome.wthPosterSong = loadImage('assets/images/objects/wayToHomePoster2.png');
    WayToHome.wthPosterCook = loadImage('assets/images/objects/wayToHomePoster3.png');

    WayToHome.wthMountain = loadImage('assets/images/objects/wayToHomeMountainColor.png');
    WayToHome.wthMountainM = loadImage('assets/images/objects/wayToHomeMountainMono.png');

    WayToHome.wthBird = loadImage('assets/images/objects/wayToHomeBird0.png');
    WayToHome.wthBirdDove = loadImage('assets/images/objects/wayToHomeBird1.png');
    WayToHome.wthBirdSmall = loadImage('assets/images/objects/wayToHomeBird2.png');
    WayToHome.wthBirdBlack = loadImage('assets/images/objects/wayToHomeBird3.png');
    
    WayToHome.wthBusStop = loadImage('assets/images/objects/wayToHomeBusStopColor.png');
    WayToHome.wthBusStopM = loadImage('assets/images/objects/wayToHomeBusStopMono.png');

    WayToHome.pCam = loadImage('assets/images/objects/phoneCamera.png');
    WayToHome.pCamClean = loadImage('assets/images/objects/phoneCamera2transparent.png');

    WayToHome.blurImage = loadImage('assets/images/backgrounds/blurImage.png');
  }

  setup() {
    this.button1 = new ChoosingButton(0, this.button1Text[day-1], ",");
    this.button2 = new ChoosingButton(1, this.button2Text[day-1], ",");
    this.button3 = new ChoosingButton(2, this.button3Text[day-1], ",");

    this.textAnimations = new TextAnimation(this.discoveryText[day-1], 640, 637, 50);

    if (day === 5) {
      this.wthBGSelected = WayToHome.wthBG;
      this.wthBSSelected = WayToHome.wthBS;
      this.wthRoadSelected = WayToHome.wthBGR;
      this.wthWallBGSelected = WayToHome.wthWallBG;
    }
  }

  display() {
    
    this.capturePositioning();
    image(this.wthBGSelected, 0, 0);
    image(this.wthMountainSelected, 0, 0);
    image(this.wthRoadSelected, 0, 0);
    image(this.wthWallBGSelected, 880, -230);
    image(this.wthWallSelected, 880, 20);
    image(this.wthPosterSelected, 1050, 210); 
    image(this.wthBirdSelected, 1000, 520);
    image(this.wthBusStopSelected, 300, 140);
    this.busStopDisplay();

    this.blackBarDisplay();

    if (this.eventOccur) {
      if (this.isCapturing == false) {
        image(WayToHome.blurImage, 0, 0, 1280, 720);

        rectMode(CENTER);
        fill(0, 220);
        rect(width/2, height/2, 730, 340);
        rectMode(CORNER);

        image(this.captureImage, 345, 190, 520, 340);
  
        image(WayToHome.pCam, width/2 - 370, height/2 - 174, 740, 348);

        this.cameraFlash();

        if (this.Reading) {
          this.textAnimations.update();
          this.textAnimations.display();
          if (this.textAnimations.isComplete()) {
            this.finishRead = true;
          }
  
        } else if (this.choosing) {
          if (day === 5) {
            this.button2.display();
            this.button2.update();
          } else {
          this.button1.display();
          this.button1.update();
          this.button2.display();
          this.button2.update();
          this.button3.display();
          this.button3.update(); 
          }
          
  
        } else if (this.Reading2) {
  
          this.textAnimations.update();
          this.textAnimations.display();
          if (this.textAnimations.isComplete()) {
            this.selected = true;
          } 
        }
      }
    }
  }

  handleClick() {

    if (!this.textAnimations.isComplete() && (this.Reading || this.chosen > 0)) {
      clickSound.play();
      this.textAnimations.nextLine();
    }

    if (this.over() == day && !this.eventOccur) {  /// 이벤트 발생 트리거: this.over = 날짜
      this.textAnimations = new TextAnimation(this.discoveryText[day-1], 640, 637, 50);
      this.blackBarAnimation = 1;
      cameraSound.play();
      this.captureTool();
      this.eventOccur = true;

      setTimeout(() => {
        this.Reading = true;
      }, 800);
    }

    if (this.eventOccur && this.finishRead){ /// 이벤트 발생 시작 후
      this.Reading = false;
      this.finishRead = false;
      clickSound.play();

      setTimeout(() => {
        this.choosing = true; // 마우스 클릭 시 읽기
      }, 100);
    } 

    if (this.choosing) {
      if (day !== 5 && (this.button1.isMouseOver() || this.button2.isMouseOver() || this.button3.isMouseOver())) {

        if (this.button1.isMouseOver()) {
          this.chosen = 1;
  
        } else if (this.button2.isMouseOver()) {
          this.chosen = 2;
  
        } else if (this.button3.isMouseOver()) {
          this.chosen = 3;
        }
        
        clickSound.play();
        this.captureTool();
        this.choosing = false;
        this.updateSelections();
        this.textAnimations = new TextAnimation(this.afterText[day-1][this.chosen-1], 640, 637, 50);

        setTimeout(() => {
          this.Reading2 = true;
        }, 800);

      } else if (day === 5 && this.button2.isMouseOver()) {

        this.chosen = 2;

        clickSound.play();
        this.captureTool();
        this.choosing = false;
        this.updateSelections();
        this.textAnimations = new TextAnimation(this.afterText[day-1][this.chosen-1], 640, 637, 50);

        setTimeout(() => {
          this.Reading2 = true;
        }, 800);
      }
    
  }

    if (this.selected){ /// 선택이 완료되었다면
      this.blackBarAnimation = 3;
      this.eventOccur = false; /// 이벤트 발생 스위치를 off
      this.Reading2 = false;
    }

    if (this.over() == 'go'){
      this.selected = false;
      this.blackBarAnimation = 0;
      clickSound.play();
      busSound.setVolume(0.5);
      busSound.play();
      changePage(homeNight, 'Loading...');
    }
  }

  updateSelections() {
    // day와 chosen 값에 따라 이미지 업데이트
    if (day == 1) {
      wthWall = this.chosen;
      if (this.chosen == 1) this.wthWallSelected = WayToHome.wthWallFun;
      else if (this.chosen == 2) this.wthWallSelected = WayToHome.wthWallLove;
      else if (this.chosen == 3) this.wthWallSelected = WayToHome.wthWallSeize;

    } else if (day == 2) {
      wthPoster = this.chosen;
      if (this.chosen == 1) this.wthPosterSelected = WayToHome.wthPosterDance;
      else if (this.chosen == 2) this.wthPosterSelected = WayToHome.wthPosterSong;
      else if (this.chosen == 3) this.wthPosterSelected = WayToHome.wthPosterCook;

    } else if (day == 3) {
      wthMountain = 1;
      this.wthMountainSelected = WayToHome.wthMountain;

    } else if (day == 4) {
      wthBird = this.chosen;
      if (this.chosen == 1) this.wthBirdSelected = WayToHome.wthBirdDove;
      else if (this.chosen == 2) this.wthBirdSelected = WayToHome.wthBirdSmall;
      else if (this.chosen == 3) this.wthBirdSelected = WayToHome.wthBirdBlack;

    } else if (day == 5) {
      wthBusStop = this.chosen;
      this.wthBusStopSelected = WayToHome.wthBusStop;
    }
  }

  cameraFlashTrigger() {
    this.flashAlpha = 255;
    this.isFlashing = true;
  }

  cameraFlash() {
    if(this.isFlashing) {
        this.flashAlpha -= 10;
      if(this.flashAlpha <= 0) {
        this.flashAlpha = 0;
        this.isFlasing = false;
      }
    }

    if(this.flashAlpha > 0) {
      fill(255, this.flashAlpha);
      rect(0, 0, width, height);
      this.blcakBar = 120;
      
    }
  }

  blackBarDisplay() {
    
    if (this.blackBarAnimation == 0) {
      this.blackBar = 0;
    } else if (this.blackBarAnimation == 1) {
      if (this.blackBar < 120) {
        this.blackBar += 3;
      } else {
        this.blackBarAnimation = 2;
      }
    } else if (this.blackBarAnimation == 2) {
      this.blackBar = 120;
    } else if (this.blackBarAnimation == 3) {
      if (this.blackBar > 0) {
        this.blackBar -= 3;
      } else {
        this.blackBarAnimation = 0;
      }
    }
    
    fill(0);
    rectMode(CORNER);
    rect(0, height, 1280, - this.blackBar);
    rect(0, 0, 1280, this.blackBar);
  }

  capturePositioning() { //캡처 위치 설정
    if(day == 1){
      this.capturePosition[0] = 700;
      this.capturePosition[1] = 0;
    } else if (day == 2) {
      this.capturePosition[0] = 800;
      this.capturePosition[1] = 160;
    } else if (day == 3) {
      this.capturePosition[0] = 20;
      this.capturePosition[1] = 50;
    } else if (day == 4) {
      this.capturePosition[0] = 820;
      this.capturePosition[1] = 450;
    } else if (day == 5) {
      this.capturePosition[0] = 240;
      this.capturePosition[1] = 50;
    }
  }

  captureTool() { //캡처 도구
    let captureSizeW;
    let captureSizeH;

    if (day == 1) {
      captureSizeW = 520;
      captureSizeH = 340;

    } else if (day == 2) {
      captureSizeW = 468;
      captureSizeH = 306;

    } else if (day == 3) {
      captureSizeW = 780;
      captureSizeH = 510;

    } else if (day == 4) {
      captureSizeW = 364;
      captureSizeH = 238;

    } else if (day == 5) {
      captureSizeW = 780;
      captureSizeH = 510;
    }

    this.isCapturing = true;
    this.blackBarAnimation = 0;

    setTimeout(() => {
      this.captureImage = get(this.capturePosition[0], this.capturePosition[1], captureSizeW, captureSizeH);
      this.saveCaptureToDiary();
    }, 100);

    setTimeout(() => {
      this.cameraFlashTrigger();
      this.isCapturing = false;
      this.blackBarAnimation = 1;
    }, 100);
  }

  busStopDisplay() {

    if(this.selected && (this.selected && 50 < mouseX && mouseX < 50+132 && 260 < mouseY && mouseY < 260+230)) {
      imageMode(CENTER);
      image(this.wthBSSelected, 50+66, 260+115, 158.4, 276);
      imageMode(CORNER);

      rectMode(CENTER);
      fill(0, 100);
      noStroke();
      rect(50+66, 260+115, 200, 40);

      fill(255);
        textSize(32);
        textFont(fontNeo);
        textAlign(CENTER, CENTER);
        text("버스타기", 50+66, 260+115);

    } else {
      imageMode(CENTER);
      image(this.wthBSSelected, 50+66, 260+115, 132, 230);
      imageMode(CORNER);
    }
  }

  over() {
    if(!this.selected && !this.eventOccur) {
      if ((day == 1) && (880 < mouseX && mouseX < 880+194 && 20 < mouseY && mouseY < 20+194)) {
        return 1;
      } else if ((day == 2) && (1050 < mouseX && mouseX < 1050+218 && 210 < mouseY && mouseY < 210+254)) {
        return 2;
      } else if ((day == 3) && (0 < mouseX && mouseX < 880 && 150 < mouseY && mouseY < 480)) {
        return 3;
      } else if ((day == 4) && (1000 < mouseX && mouseX < 1000+164 && 520 < mouseY && mouseY < 520+147)) {
        return 4;
      } else if ((day == 5) && (300 < mouseX && mouseX < 300 + 679 && 140 < mouseY && mouseY < 140+385)) {
        return 5;
      } else { return 0 };
    } else if (this.selected && 50 < mouseX && mouseX < 50+132 && 260 < mouseY && mouseY < 260+230) {
      return 'go';
    } else { return 0; } 
  }

  saveCaptureToDiary() {
    if (day == 1) {
      diaryPictures[1] = this.captureImage;
    } else if (day == 2) {
      diaryPictures[3] = this.captureImage;
    } else if (day == 3) {
      diaryPictures[5] = this.captureImage;
    } else if (day == 4) {
      diaryPictures[7] = this.captureImage;
    } else if (day == 5) {
      diaryPictures[9] = this.captureImage;
    }
  }

  changeCursor() {
    if (this.over() != 0) return 2;
    else return 1;
  }
}
