class WayToSchool {
  constructor() {
    this.wtsBGSelected = WayToSchool.wtsBGM; // 기본 배경 이미지 설정
    this.wtsBSSelected = WayToSchool.wtsBSM; // 기본 버스 정류장 이미지 설정
    this.wtsStoreSelected = WayToSchool.wtsStore; // 기본 가게 이미지 설정
    this.wtsFlowerSelected = WayToSchool.wtsFlower; // 기본 꽃 이미지 설정
    this.wtsCatSelected = WayToSchool.wtsCat; // 기본 고양이 이미지 설정
    this.wtsCycleSelected = WayToSchool.wtsCycle; // 기본 자전거 이미지 설정
    this.eventOccur = false; // 이벤트 발생 스위치
    this.blackBar = 0; // 상하단 흑색 바 애니메이션
    this.blackBarAnimation = 0; //흑색 바 애니메이션 설정 (0: 없음, 1: 올라오기, 2: 고정, 3: 내려가기)
    this.Reading = false; // 출력된 텍스트를 읽고 있는가
    this.Reading2 = false; // 선택 후 텍스트 읽고 있는가
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
      ["이런 곳에 가게가 있었나?", "주위를 둘러보질 않으니 이런 게 생겼는지도 몰랐네.", "뭐하는 곳이지?"],
      ["이런 좁은 골목에 꽃이 피어있다.", "이렇게 삭막한 곳에서도 튼튼히 자라는구나.", "이 꽃 이름이 뭐더라?"],
      ["그냥 털뭉치인 줄 알았는데... 움직인다.", "뭐야, 고양이잖아?", "이 고양이... 뭔가 닮았는데..."],
      ["이런 데에 자전거가 세워져 있다.", "이렇게 아무 데나 두면 누가 훔쳐가지 않으려나?", "가만 보니 내가 어릴 때 타던 자전거랑 비슷하게 생겼다.", "어떤 자전거였더라?"],
      ["매일 걷는 길인데도 오늘은 뭔가 색다르다.", "내 할 일에만 몰두하느라 주위를 둘러보는 법을 잊었던 것 같다.", "오늘 하늘이 정말..."]
    ];

    this.afterText = [
      [["오랜만에 맡는 빵냄새, 기분 좋다.", "어렸을 때는 왜 그렇게 빵이 맛있게 느껴졌지?", "빵 하나를 샀다.", "이제 버스를 타고 학교로 가자."],
      ["커피 향이 원래 이렇게 좋았나?", "시험 공부하느라 아무 생각 없이 마실 때는 몰랐는데.", "커피 한 잔을 샀다.", "이제 버스를 타고 학교로 가자."],
      ["날이 더워서 그런지 확실히 사람이 많은 것 같네.", "어렸을 때에는 여름방학에 수박 먹는 게 제일 좋았는데.", "수박 주스를 한 잔 샀다.", "이제 버스를 타고 학교로 가자."]],
      [["정말 열정적인 색이네.", "나도 이렇게 열정적인 사람이 될 수 있을까?", "...", "이제 버스를 타고 학교로 가자."],
      ["정말 시원한 색이네.", "나도 이렇게 쿨한 사람이 될 수 있을까?", "...", "이제 버스를 타고 학교로 가자."],
      ["정말 순수한 색이네.", "나도 이렇게 순수한 사람이 될 수 있을까?", "...", "이제 버스를 타고 학교로 가자."]],
      [["아이스크림 같은 고양이다.", "웃는 모습이 귀엽다.", "네 웃는 얼굴 덕분에 나도 행복해졌어. 고마워.", "이제 버스를 타고 학교로 가자."],
      ["고등어 같은 고양이다.", "웃는 모습이 귀엽다.", "네 웃는 얼굴 덕분에 나도 행복해졌어. 고마워.", "이제 버스를 타고 학교로 가자."],
      ["치즈 같은 고양이다.", "웃는 모습이 귀엽다.", "네 웃는 얼굴 덕분에 나도 행복해졌어. 고마워.", "이제 버스를 타고 학교로 가자."]],
      [["두발 자전거를 타려고 피나는 노력을 했었지.", "그때는 넘어지는 게 무섭지 않았었나?", "그래, 새로운 도전에도 겁없이 뛰어들었던 때가 있었지.", "이제 버스를 타고 학교로 가자."],
      ["두발 자전거는 무서워서 네발 자전거만 타고 다녔었지.", "그래도 나름 재미있었어.", "그래, 남들보다 느려도 불안에 떨지 않았던 때가 있었지.", "이제 버스를 타고 학교로 가자."],
      ["무슨 생각에서인지 외발 자전거를 타고 싶어했지.", "나름 특별한 사람이 되고 싶었어.", "그래, 주위의 시선에 위축되지 않고 내가 원하는 것을 하던 때가 있었지.", "이제 버스를 타고 학교로 가자."]],
      [[""],
      ["하늘이 어떤 색이었는지도 잊고 있었나보다.", "하루하루가 이렇게 다채로운데...", "앞으로 고개 좀 들고 다녀야겠네.", "이제 버스를 타고 학교로 가자."],
      [""]]
    ];

    this.textAnimations = null;

    this.button1;
    this.button2;
    this.button3;

    this.button1Text = [
      "빵집",
      "빨간 장미",
      "오레오냥",
      "두발 자전거",
      ""
    ];

    this.button2Text = [
      "카페",
      "파란 수국",
      "고등어냥",
      "네발 자전거",
      "푸르네."
    ];

    this.button3Text = [
      "주스가게",
      "하얀 백합",
      "치즈냥",
      "외발 자전거",
      ""
    ];
  }

  static preload() {
    // 이미지 로드
    WayToSchool.wtsBG = loadImage('./assets/images/backgrounds/wayToSchoolColor.png');
    WayToSchool.wtsBGM = loadImage('./assets/images/backgrounds/wayToSchoolMono.png');
    WayToSchool.wtsBS = loadImage('./assets/images/objects/wayBusStopColor.png');
    WayToSchool.wtsBSM = loadImage('./assets/images/objects/wayBusStopMono.png');
    WayToSchool.wtsStore = loadImage('./assets/images/objects/wayToSchoolStore0.png');
    WayToSchool.wtsStoreBakery = loadImage('./assets/images/objects/wayToSchoolStore1.png');
    WayToSchool.wtsStoreCafe = loadImage('./assets/images/objects/wayToSchoolStore2.png');
    WayToSchool.wtsStoreJuice = loadImage('./assets/images/objects/wayToSchoolStore3.png');
    WayToSchool.wtsFlower = loadImage('./assets/images/objects/wayToSchoolFlower0.png');
    WayToSchool.wtsFlowerRose = loadImage('./assets/images/objects/wayToSchoolFlower1.png');
    WayToSchool.wtsFlowerHydrangea = loadImage('./assets/images/objects/wayToSchoolFlower2.png');
    WayToSchool.wtsFlowerLily = loadImage('./assets/images/objects/wayToSchoolFlower3.png');
    WayToSchool.wtsCat = loadImage('./assets/images/objects/wayToSchoolCat0.png');
    WayToSchool.wtsCatCookie = loadImage('./assets/images/objects/wayToSchoolCat3.png');
    WayToSchool.wtsCatFish = loadImage('./assets/images/objects/wayToSchoolCat1.png');
    WayToSchool.wtsCatCheese = loadImage('./assets/images/objects/wayToSchoolCat2.png');
    WayToSchool.wtsCycle = loadImage('./assets/images/objects/wayToSchoolCycle0.png');
    WayToSchool.wtsCycleRed = loadImage('./assets/images/objects/wayToSchoolCycle1.png');
    WayToSchool.wtsCycleChild = loadImage('./assets/images/objects/wayToSchoolCycle2.png');
    WayToSchool.wtsCycleUni = loadImage('./assets/images/objects/wayToSchoolCycle3.png');
    WayToSchool.pCam = loadImage('./assets/images/objects/phoneCamera.png');
    WayToSchool.pCamClean = loadImage('./assets/images/objects/phoneCamera2transparent.png');
    WayToSchool.blurImage = loadImage('./assets/images/backgrounds/blurImage.png');
  }

  setup() {
    this.button1 = new ChoosingButton(0, this.button1Text[day-1], ",");
    this.button2 = new ChoosingButton(1, this.button2Text[day-1], ",");
    this.button3 = new ChoosingButton(2, this.button3Text[day-1], ",");

    this.textAnimations = new TextAnimation(this.discoveryText[day-1], 640, 637, 50);
  }

  display() {
    this.capturePositioning();

    image(this.wtsBGSelected, 0, 0);
    image(this.wtsStoreSelected, 650, 200);
    image(this.wtsFlowerSelected, 200, 380);
    image(this.wtsCatSelected, 550, 420);
    image(this.wtsCycleSelected, 1100, 390);
    this.busStopDisplay();

    this.blackBarDisplay();

    if (this.eventOccur) {

      if (this.isCapturing == false) {
        image(WayToSchool.blurImage, 0, 0, 1280, 720);
  
        rectMode(CENTER);
        fill(0, 220);
        rect(width/2, height/2, 730, 340);
        rectMode(CORNER);
  
        image(this.captureImage, 345, 190, 520, 340);
  
        image(WayToSchool.pCam, width/2 - 370, height/2 - 174, 740, 348);
      }

      this.cameraFlash(); //플래시 이펙트

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
      }, 200);
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
      changePage(school, 'Loading...');
    }
  }

  updateSelections() {
    // day와 chosen 값에 따라 이미지 업데이트
    if (day == 1) {
      wtsStore = this.chosen;
      if (this.chosen == 1) this.wtsStoreSelected = WayToSchool.wtsStoreBakery;
      else if (this.chosen == 2) this.wtsStoreSelected = WayToSchool.wtsStoreCafe;
      else if (this.chosen == 3) this.wtsStoreSelected = WayToSchool.wtsStoreJuice;

    } else if (day == 2) {
      wtsFlower = this.chosen;
      if (this.chosen == 1) this.wtsFlowerSelected = WayToSchool.wtsFlowerRose;
      else if (this.chosen == 2) this.wtsFlowerSelected = WayToSchool.wtsFlowerHydrangea;
      else if (this.chosen == 3) this.wtsFlowerSelected = WayToSchool.wtsFlowerLily;

    } else if (day == 3) {
      wtsCat = this.chosen;
      if (this.chosen == 1) this.wtsCatSelected = WayToSchool.wtsCatCookie;
      else if (this.chosen == 2) this.wtsCatSelected = WayToSchool.wtsCatFish;
      else if (this.chosen == 3) this.wtsCatSelected = WayToSchool.wtsCatCheese;

    } else if (day == 4) {
      wtsCycle = this.chosen;
      if (this.chosen == 1) this.wtsCycleSelected = WayToSchool.wtsCycleRed;
      else if (this.chosen == 2) this.wtsCycleSelected = WayToSchool.wtsCycleChild;
      else if (this.chosen == 3) this.wtsCycleSelected = WayToSchool.wtsCycleUni;

    } else if (day == 5) {
      wtsBG = 1;
      wtsBS = 1;
      wthBG = 1;
      wthBS = 1;
      wthRoad = 1;
      this.wtsBGSelected = WayToSchool.wtsBG;
      this.wtsBSSelected = WayToSchool.wtsBS;
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
      this.capturePosition[0] = 470;
      this.capturePosition[1] = 80;
    } else if (day == 2) {
      this.capturePosition[0] = 15;
      this.capturePosition[1] = 270;
    } else if (day == 3) {
      this.capturePosition[0] = 350;
      this.capturePosition[1] = 280;
    } else if (day == 4) {
      this.capturePosition[0] = 900;
      this.capturePosition[1] = 310;
    } else if (day == 5) {
      this.capturePosition[0] = 90;
      this.capturePosition[1] = 0;
    }
  }

  captureTool() { //캡처 도구
    let captureSizeW;
    let captureSizeH;

    if (day == 1) {
      captureSizeW = 780;
      captureSizeH = 510;

    } else if (day == 2) {
      captureSizeW = 520;
      captureSizeH = 340;

    } else if (day == 3) {
      captureSizeW = 468;
      captureSizeH = 306;

    } else if (day == 4) {
      captureSizeW = 364;
      captureSizeH = 238;

    } else if (day == 5) {
      captureSizeW = 1100;
      captureSizeH = 720;
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

    if(this.selected && (1040 < mouseX && mouseX < 1040+132 && 265 < mouseY && mouseY < 265+230)) {
      imageMode(CENTER);
      image(this.wtsBSSelected, 1040+66, 265+115, 158.4, 276);
      imageMode(CORNER);

      rectMode(CENTER);
      fill(0, 100);
      noStroke();
      rect(1040+66, 265+115, 200, 40);

      fill(255);
        textSize(32);
        textFont(fontNeo);
        textAlign(CENTER, CENTER);
        text("버스타기", 1040+66, 265+115);

    } else {
      imageMode(CENTER);
      image(this.wtsBSSelected, 1040+66, 265+115, 132, 230);
      imageMode(CORNER);
    }
  }

  over() {
    if(!this.selected && !this.eventOccur) {
      if ((day == 1) && (650 < mouseX && mouseX < 1040 && 200 < mouseY && mouseY < 511)) {
        return 1;
      } else if ((day == 2) && (200 < mouseX && mouseX < 322 && 380 < mouseY && mouseY < 503)) {
        return 2;
      } else if ((day == 3) && (550 < mouseX && mouseX < 673 && 420 < mouseY && mouseY < 551)) {
        return 3;
      } else if ((day == 4) && (1100 < mouseX && mouseX < 1273 && 370 < mouseY && mouseY < 496)) {
        return 4;
      } else if (day == 5) {
        return 5;
      } else { return 0 };
    } else if (this.selected && (1040 < mouseX && mouseX < 1040+132 && 265 < mouseY && mouseY < 265+230)) {
      return 'go';
    } else { return 0;}
  }

  saveCaptureToDiary() {
    if (day == 1) {
      diaryPictures[0] = this.captureImage;
    } else if (day == 2) {
      diaryPictures[2] = this.captureImage;
    } else if (day == 3) {
      diaryPictures[4] = this.captureImage;
    } else if (day == 4) {
      diaryPictures[6] = this.captureImage;
    } else if (day == 5) {
      diaryPictures[8] = this.captureImage;
    }
  }

  changeCursor() {
    if (this.over() != 0) return 2;
    else return 1;
  }

  showSelectedStore(){
    return this.wtsStoreSelected;
  }

  showSelectedFlower(){
    return this.wtsFlowerSelected;
  }

  showSelectedCat(){
    return this.wtsCatSelected;
  }

  showSelectedCycle(){
    return this.wtsCycleSelected;
  }
}
