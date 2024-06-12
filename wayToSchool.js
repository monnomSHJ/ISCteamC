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
    this.Reading = false; // 출력된 텍스트를 읽고 있는가
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
      ["이런 곳에 가게가 있었나?", "새로 생긴 것 같은데...", "뭐하는 곳이지?"],
      ["이런 곳에 가게가 있었나?", "새로 생긴 것 같은데...", "뭐하는 곳이지?"],
      ["이런 곳에 가게가 있었나?", "새로 생긴 것 같은데...", "뭐하는 곳이지?"],
      ["이런 곳에 가게가 있었나?", "새로 생긴 것 같은데...", "뭐하는 곳이지?"]
    ];

    this.afterText = [
      [["오랜만에 맡는 빵냄새, 기분 좋다.", "어렸을 때는 왜 그렇게 빵이 맛있게 느껴졌지?", "빵 하나를 샀다.", "이제 버스를 타고 학교로 가자."],
      ["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"]],
      [["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"]],
      [["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"]],
      [["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"]],
      [["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"],
      ["빵빵", "빵빵", "빵빵"]]
    ];

    this.textAnimations = null;

    this.button1;
    this.button2;
    this.button3;

    this.button1Text = [
      "빵집",
      "빵집",
      "빵집",
      "빵집",
      "빵집"
    ];

    this.button2Text = [
      "카페",
      "카페",
      "카페",
      "카페",
      "카페"
    ];

    this.button3Text = [
      "주스가게",
      "주스가게",
      "주스가게",
      "주스가게",
      "주스가게"
    ];
  }

  static preload() {
    // 이미지 로드
    WayToSchool.wtsBG = loadImage('assets/images/backgrounds/WayToSchoolColor.png');
    WayToSchool.wtsBGM = loadImage('assets/images/backgrounds/wayToSchoolMono.png');
    WayToSchool.wtsBS = loadImage('assets/images/objects/wayBusStopColor.png');
    WayToSchool.wtsBSM = loadImage('assets/images/objects/wayBusStopMono.png');
    WayToSchool.wtsStore = loadImage('assets/images/objects/wayToSchoolStore0.png');
    WayToSchool.wtsStoreBakery = loadImage('assets/images/objects/wayToSchoolStore1.png');
    WayToSchool.wtsStoreCafe = loadImage('assets/images/objects/wayToSchoolStore2.png');
    WayToSchool.wtsStoreJuice = loadImage('assets/images/objects/wayToSchoolStore3.png');
    WayToSchool.wtsFlower = loadImage('assets/images/objects/wayToSchoolFlower0.png');
    WayToSchool.wtsFlowerRose = loadImage('assets/images/objects/wayToSchoolFlower1.png');
    WayToSchool.wtsFlowerHydrangea = loadImage('assets/images/objects/wayToSchoolFlower2.png');
    WayToSchool.wtsFlowerLily = loadImage('assets/images/objects/wayToSchoolFlower3.png');
    WayToSchool.wtsCat = loadImage('assets/images/objects/wayToSchoolCat0.png');
    WayToSchool.wtsCatCookie = loadImage('assets/images/objects/wayToSchoolCat3.png');
    WayToSchool.wtsCatFish = loadImage('assets/images/objects/wayToSchoolCat1.png');
    WayToSchool.wtsCatCheese = loadImage('assets/images/objects/wayToSchoolCat2.png');
    WayToSchool.wtsCycle = loadImage('assets/images/objects/wayToSchoolCycle0.png');
    WayToSchool.wtsCycleRed = loadImage('assets/images/objects/wayToSchoolCycle1.png');
    WayToSchool.wtsCycleChild = loadImage('assets/images/objects/wayToSchoolCycle2.png');
    WayToSchool.wtsCycleUni = loadImage('assets/images/objects/wayToSchoolCycle3.png');
    WayToSchool.pCam = loadImage('assets/images/objects/phoneCamera.png');
    WayToSchool.pCamClean = loadImage('assets/images/objects/phoneCamera2transparent.png');
    WayToSchool.blurImage = loadImage('assets/images/backgrounds/blurImage.png');
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
    image(this.wtsCatSelected, 550, 370);
    image(this.wtsCycleSelected, 1100, 390);
    this.busStopDisplay();

    fill(0);
    rectMode(CORNER);
    rect(0, height, 1280, - this.blackBar);
    rect(0, 0, 1280, this.blackBar);

    if (this.eventOccur) {
      if (this.blackBar <= 120) {
        this.blackBar += 3;
      }

      if (this.isCapturing == false) {
        image(WayToSchool.blurImage, 0, 0, 1280, 720);
  
        rectMode(CENTER);
        fill(0, 220);
        rect(width/2, height/2, 730, 340);
        rectMode(CORNER);
  
        image(this.captureImage, width/2 - 370, height/2 - 174, 740, 348);
  
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
        this.button1.display();
        this.button1.update();
        this.button2.display();
        this.button2.update();
        this.button3.display();
        this.button3.update();

      } else if (this.chosen > 0) {
        this.textAnimations.update();
        this.textAnimations.display();
        if (this.textAnimations.isComplete()) {
          this.selected = true;
        } 
      }

    } else {
      if (this.blackBar >= 0) {
        this.blackBar -= 3;
    }
  }
}

  handleClick() {

    if (!this.textAnimations.isComplete() && (this.Reading || this.chosen > 0)) {
      this.textAnimations.nextLine();
    }

    if (this.over() == day && !this.eventOccur) {  /// 이벤트 발생 트리거: this.over = 날짜
      this.textAnimations = new TextAnimation(this.discoveryText[day-1], 640, 637, 50);
      cameraSound.play();
      this.captureTool();
      this.eventOccur = true;

      setTimeout(() => {
        this.Reading = true;
      }, 800);
    }

    if (this.eventOccur && this.finishRead){ /// 이벤트 발생 시작 후
      this.choosing = true; // 마우스 클릭 시 읽기
      this.Reading = false;
      this.finishRead = false;
      clickSound.play();
    } 

    if (this.choosing) {
      if (this.button1.isMouseOver()) {
        clickSound.play();
        this.captureTool();
        this.chosen = 1;
        this.choosing = false;
        this.updateSelections();

      } else if (this.button2.isMouseOver()) {
        clickSound.play();
        this.captureTool();
        this.chosen = 2;
        this.choosing = false;
        this.updateSelections();

      } else if (this.button3.isMouseOver()) {
        clickSound.play();
        this.captureTool();
        this.chosen = 3;
        this.choosing = false;
        this.updateSelections();
      }

    if (this.chosen > 0) {
      this.textAnimations = new TextAnimation(this.afterText[day-1][this.chosen-1], 640, 637, 50);
    }
  }

    if (this.selected){ /// 선택이 완료되었다면
      this.eventOccur = false; /// 이벤트 발생 스위치를 off
    }

    if (this.over() == 'go'){
      this.selected = false;
      this.blackBar = 0;
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
    }
  }

  capturePositioning() { //캡처 위치 설정
    if(day == 1){
      this.capturePosition[0] = 450;
      this.capturePosition[1] = 150;
    } else if (day == 2) {
      this.capturePosition[0] = 230;
      this.capturePosition[1] = 400;
    } else if (day == 3) {
      this.capturePosition[0] = 230;
      this.capturePosition[1] = 400;
    } else if (day == 4) {
      this.capturePosition[0] = 230;
      this.capturePosition[1] = 400;
    } else if (day == 5) {
      this.capturePosition[0] = 230;
      this.capturePosition[1] = 400;
    }
  }

  captureTool() { //캡처 도구
    this.isCapturing = true;
    setTimeout(() => {
      this.captureImage = get(this.capturePosition[0], this.capturePosition[1],888, 417.6);
    }, 80);

    setTimeout(() => {
      this.cameraFlashTrigger();
      this.isCapturing = false;
    },100);
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
      } else if ((day == 3) && (550 < mouseX && mouseX < 673 && 370 < mouseY && mouseY < 501)) {
        return 3;
      } else if ((day == 4) && (1100 < mouseX && mouseX < 1273 && 370 < mouseY && mouseY < 496)) {
        return 4;
      } else if (day == 5) {
        return 5;
      } else { return 0 };
    } else if (this.selected && (1040 < mouseX && mouseX < 1040+132 && 265 < mouseY && mouseY < 265+230)) {
      return 'go';
    } else if (this.Reading || (this.chosen > 0 && this.eventOccur)) {
      return 1;
    } else if (this.button1.isMouseOver() || this.button2.isMouseOver() || this.button3.isMouseOver()) {
      return 1;
    } else { return 0;}
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
