class WayToSchool {
  constructor() {
    this.wtsBGSelected = WayToSchool.wtsBGM; // 기본 배경 이미지 설정
    this.wtsBSSelected = WayToSchool.wtsBSM; // 기본 버스 정류장 이미지 설정
    this.wtsStoreSelected = WayToSchool.wtsStore; // 기본 가게 이미지 설정
    this.wtsFlowerSelected = WayToSchool.wtsFlower; // 기본 꽃 이미지 설정
    this.wtsCatSelected = WayToSchool.wtsCat; // 기본 고양이 이미지 설정
    this.wtsCycleSelected = WayToSchool.wtsCycle; // 기본 자전거 이미지 설정
    this.eventOccur = false;
    this.blackBar = 0;
    this.finishedText = false;
    this.textEnded = false;
    this.proceed = false;

    this.texts = [
      '새로 생긴 가게인가 보네... 뭐 하는 곳이지?',
      '좋은 냄새가 난다.',
      '향긋한 냄새가 난다.',
      '달콤한 냄새가 난다.'

    ];
    this.currentTextIndex = 0;
    this.displayedText = "";
    this.textAnimationSpeed = 5; // 애니메이션 속도
    this.textAnimationCounter = 0; // 애니메이션 카운터
    this.textComplete = false;
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
    WayToSchool.wtsCatCookie = loadImage('assets/images/objects/wayToSchoolCat1.png');
    WayToSchool.wtsCatFish = loadImage('assets/images/objects/wayToSchoolCat2.png');
    WayToSchool.wtsCatCheese = loadImage('assets/images/objects/wayToSchoolCat3.png');
    WayToSchool.wtsCycle = loadImage('assets/images/objects/wayToSchoolCycle0.png');
    WayToSchool.wtsCycleRed = loadImage('assets/images/objects/wayToSchoolCycle1.png');
    WayToSchool.wtsCycleChild = loadImage('assets/images/objects/wayToSchoolCycle2.png');
    WayToSchool.wtsCycleUni = loadImage('assets/images/objects/wayToSchoolCycle3.png');
    WayToSchool.pCam = loadImage('assets/images/objects/phoneCamerafilled.png');
    WayToSchool.pCamClean = loadImage('assets/images/objects/phoneCamera.png');
  }

  display() {
    image(this.wtsBGSelected, 0, 0);
    image(this.wtsBSSelected, 1040, 265);
    image(this.wtsStoreSelected, 650, 200);
    image(this.wtsFlowerSelected, 200, 380);
    image(this.wtsCatSelected, 550, 370);
    image(this.wtsCycleSelected, 1100, 370);
    
    if (this.eventOccur) {
      fill(0);
      rect(0, 720, 1280, -this.blackBar);
      rect(0, 0, 1280, this.blackBar);
      if (this.blackBar < 120){
        this.blackBar += 2;
      }

      image(WayToSchool.pCam, 249, 149);

      if (day == 1) {
        image(this.wtsStoreSelected, 445, 204.5);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text(this.displayedText, 640, 637);
          this.updateDisplayedText(); // 텍스트 한글자씩 나오는 함수
          
          if (this.textComplete) {
            if (frameCount % 60 < 30) {
              let textWidthValue = textWidth(this.displayedText);
              text('▼', 640 + textWidthValue / 2 + 24, 637); // 텍스트 끝에 '▼' 기호 추가
              this.textEnded = true;
            }
          }

          if (this.finishedText) {
            fill(0);
            rect(0, 600, 1280, 120);
            fill(255);
            rect(240, 615, 200, 90);
            rect(540, 615, 200, 90);
            rect(840, 615, 200, 90);
          }
        }

      } else if (day == 2) {
        image(this.wtsFlowerSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 65) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerRose;
            wtsFlower = 1;
          } else if (keyCode === 83) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerHydrangea;
            wtsFlower = 2;
          } else if (keyCode === 68) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerLily;
            wtsFlower = 3;
          } else if (keyCode === 27) {
            this.eventOccur = false;
            changePage(school, 'Loading...');
          }
        }
      } else if (day == 3) {
        image(this.wtsCatSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 65) {
            this.wtsCatSelected = WayToSchool.wtsCatCookie;
            wtsCat = 1;
          } else if (keyCode === 83) {
            this.wtsCatSelected = WayToSchool.wtsCatFish;
            wtsCat = 2;
          } else if (keyCode === 68) {
            this.wtsCatSelected = WayToSchool.wtsCatCheese;
            wtsCat = 3;
          } else if (keyCode === 27) {
            this.eventOccur = false;
            changePage(school, 'Loading...');
          }
        }
      } else if (day == 4) {
        image(this.wtsCycleSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 65) {
            this.wtsCycleSelected = WayToSchool.wtsCycleRed;
            wtsCycle = 1;
          } else if (keyCode === 83) {
            this.wtsCycleSelected = WayToSchool.wtsCycleChild;
            wtsCycle = 2;
          } else if (keyCode === 68) {
            this.wtsCycleSelected = WayToSchool.wtsCycleUni;
            wtsCycle = 3;
          } else if (keyCode === 27) {
            this.eventOccur = false;
            changePage(school, 'Loading...');
          }
        }
      } else if (day == 5) {
        image(this.wtsBGSelected, 281, 191, 720, 340, 0, 0, 1280, 720);
        image(WayToSchool.pCamClean, 249, 149);

        if (keyIsPressed) {
          if (keyCode === 65) {
            this.wtsBGSelected = WayToSchool.wtsBG;
            this.wtsBSSelected = WayToSchool.wtsBS;
          } else if (keyCode === 27) {
            this.eventOccur = false;
            changePage(school, 'Loading...');
          }
        }
      }
    }
  }

  handleClick() {

    if (this.over() == day) {
      this.eventOccur = true;
    }

    if (this.eventOccur){
      if (this.textEnded){
        this.finishedText = true;
      }
      if (this.proceed){
        this.eventOccur = false;
      }
    }

    if(this.over() == 'a' || this.over() =='b' || this.over() =='c'){
      this.finishedText = false;
      this.displayedText = "";
      this.textComplete = false;
      if(this.over() == 'a'){
        if (day == 1){
          this.currentTextIndex = 1;
          this.wtsStoreSelected = WayToSchool.wtsStoreBakery; 
        }
      } else if (this.over() == 'b'){
        if (day == 1){
          this.currentTextIndex = 2;
          this.wtsStoreSelected = WayToSchool.wtsStoreCafe;
        }
      } else if (this.over() == 'c'){
        if (day == 1){
          this.currentTextIndex = 3;
          this.wtsStoreSelected = WayToSchool.wtsStoreJuice;
        }
      }
      this.textEnded = false;
      this.proceed = true;
    }
    
  }

  over() {
    if (this.eventOccur){
      if (this.textEnded){
        if (240 < mouseX && mouseX < 440 && 615 < mouseY && mouseY < 705) return 'a';
        else if (540 < mouseX && mouseX < 740 && 615 < mouseY && mouseY < 705) return 'b';
        else if (840 < mouseX && mouseX < 1040 && 615 < mouseY && mouseY < 705) return 'c';
        else return 0;
      } else return 0;
    } else {
      if (day == 1) {
        if (650 < mouseX && mouseX < 1040 && 200 < mouseY && mouseY < 511) return 1;
        else return 0;
      } else if (day == 2) {
        if (200 < mouseX && mouseX < 322 && 380 < mouseY && mouseY < 503) return 2;
        else return 0;
      } else if (day == 3) {
        if (550 < mouseX && mouseX < 673 && 370 < mouseY && mouseY < 501) return 3;
        else return 0;
      } else if (day == 4) {
        if (1100 < mouseX && mouseX < 1273 && 370 < mouseY && mouseY < 496) return 4;
        else return 0;
      } else if (day == 5) {
        return 5;
      } else return 0;
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

  updateDisplayedText() {
    if (this.textAnimationCounter < this.textAnimationSpeed) {
      this.textAnimationCounter++;
    } else {
      if (this.displayedText.length < this.texts[this.currentTextIndex].length) {
        this.displayedText = this.texts[this.currentTextIndex].substring(0, this.displayedText.length + 1);
        this.textComplete = false; // 텍스트 출력 중
      } else {
        this.textComplete = true; // 텍스트 출력 완료
      }
      this.textAnimationCounter = 0;
    }
  }


}
