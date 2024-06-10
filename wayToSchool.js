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
    WayToSchool.wtsCatFish = loadImage('assets/images/objects/wayToSchoolCat3.png');
    WayToSchool.wtsCatCheese = loadImage('assets/images/objects/wayToSchoolCat2.png');
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
    image(this.wtsCycleSelected, 1100, 390);
    
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
          text('새로 생긴 가게인가 보네… 뭐 하는 가게지?', 640, 637);
          this.Reading = true;
          
          if(this.finishRead){
            this.Reading = false;
            fill(0);
            rect(0, 600, 1280, 120);
            fill(255);
            rect(240, 615, 200, 90);
            rect(540, 615, 200, 90);
            rect(840, 615, 200, 90);
            fill(0);
            rect(245, 620, 190, 80);
            rect(545, 620, 190, 80);
            rect(845, 620, 190, 80);
            fill(255);
            text('빵집', 340, 660);
            text('카페', 640, 660);
            text('주스 가게', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen == 1){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('좋은 냄새가 난다.', 640, 637);
            } else if (this.chosen == 2){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('향긋한 냄새가 난다.', 640, 637);
            } else if (this.chosen == 3){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('달콤한 냄새가 난다.', 640, 637);
            }

            this.selected = true;
          }
        }

      } else if (day == 2) {
        image(this.wtsFlowerSelected, 550, 350);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('지금 보니, 골목에 꽃이 피었네.', 640, 637);
          this.Reading = true;
          
          if(this.finishRead){
            this.Reading = false;
            fill(0);
            rect(0, 600, 1280, 120);
            fill(255);
            rect(240, 615, 200, 90);
            rect(540, 615, 200, 90);
            rect(840, 615, 200, 90);
            fill(0);
            rect(245, 620, 190, 80);
            rect(545, 620, 190, 80);
            rect(845, 620, 190, 80);
            fill(255);
            text('붉은 장미', 340, 660);
            text('푸른 수국', 640, 660);
            text('하얀 백합', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen == 1){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('화려한 여름의 색이다.', 640, 637);
            } else if (this.chosen == 2){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('시원한 푸른 색이다.', 640, 637);
            } else if (this.chosen == 3){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('깨끗하고 예쁜 색이다.', 640, 637);
            }

            this.selected = true;
          }
        }

      } else if (day == 3) {
        image(this.wtsCatSelected, 550, 350);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('저기 저 털뭉치는…뭐지?', 640, 637);
          this.Reading = true;
          
          if(this.finishRead){
            this.Reading = false;
            fill(0);
            rect(0, 600, 1280, 120);
            fill(255);
            rect(240, 615, 200, 90);
            rect(540, 615, 200, 90);
            rect(840, 615, 200, 90);
            fill(0);
            rect(245, 620, 190, 80);
            rect(545, 620, 190, 80);
            rect(845, 620, 190, 80);
            fill(255);
            text('쿠앤크냥', 340, 660);
            text('고등어냥', 640, 660);
            text('치즈냥', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen == 1){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('...왠지 아이스크림이 먹고싶은걸.', 640, 637);
            } else if (this.chosen == 2){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('발은 하얀데 등은 까맣네. 양말 신은 것 같다.', 640, 637);
            } else if (this.chosen == 3){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('노란 고양이는 왠지... 더 귀엽단 말이지.', 640, 637);
            }

            this.selected = true;
          }
        }

      } else if (day == 4) {
        image(this.wtsCycleSelected, 550, 350);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('길가에 자전거 주차해 두면…누가 안 훔쳐가려나?', 640, 637);
          this.Reading = true;
          
          if(this.finishRead){
            this.Reading = false;
            fill(0);
            rect(0, 600, 1280, 120);
            fill(255);
            rect(240, 615, 200, 90);
            rect(540, 615, 200, 90);
            rect(840, 615, 200, 90);
            fill(0);
            rect(245, 620, 190, 80);
            rect(545, 620, 190, 80);
            rect(845, 620, 190, 80);
            fill(255);
            text('빨간 자전거', 340, 660);
            text('어린이용 자전거', 640, 660);
            text('외발 자전거', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen == 1){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('...훔쳐가기에는 눈에 좀 띄려나.', 640, 637);
            } else if (this.chosen == 2){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('귀엽네. 애기들 건가?', 640, 637);
            } else if (this.chosen == 3){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('...저런 건 훔쳐가도 못 타겠지?', 640, 637);
            }

            this.selected = true;
          }
        }
      } else if (day == 5) {
        image(this.wtsBGSelected, 281, 191, 720, 340, 0, 0, 1280, 720);
        image(WayToSchool.pCamClean, 249, 149);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('오늘은 날씨가 좋네. 하늘이 참...', 640, 637);
          this.Reading = true;
          
          if(this.finishRead){
            this.Reading = false;
            fill(0);
            rect(0, 600, 1280, 120);
            fill(255);
            rect(240, 615, 200, 90);
            rect(540, 615, 200, 90);
            rect(840, 615, 200, 90);
            fill(0);
            rect(245, 620, 190, 80);
            rect(545, 620, 190, 80);
            rect(845, 620, 190, 80);
            fill(255);
            text('파랗다', 340, 660);
            text('높다', 640, 660);
            text('아름답다', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen != 0){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('...고개 좀 들고 다녀야겠네.', 640, 637);
            }

            this.selected = true;
          }
        }
      }
    }
  }

  handleClick() {

    if (this.over() == day) {  /// 이벤트 발생 트리거: this.over = 날짜
      cameraSound.play();
      this.eventOccur = true;
    }

    if (this.eventOccur){ /// 이벤트 발생 시작 후
      if (this.Reading){ /// 읽기 중
        this.finishRead = true; // 마우스 클릭 시 읽기
        clickSound.play();
      }
    }

      if (this.selected){ /// 선택이 완료되었다면
        this.eventOccur = false; /// 이벤트 발생 스위치를 off
      }

    if(this.over() == 'a' || this.over() =='b' || this.over() =='c'){ ///만약 버튼을 눌렀다면
      clickSound.play();
      if(this.over() == 'a'){ /// 1번 선택지 누를 시
        this.chosen = 1;

        if (day == 1){
          this.wtsStoreSelected = WayToSchool.wtsStoreBakery;
          wtsStore = this.chosen
        } else if (day == 2){
          this.wtsFlowerSelected = WayToSchool.wtsFlowerRose
          wtsFlower = this.chosen
        } else if (day == 3){
          this.wtsCatSelected = WayToSchool.wtsCatCookie;
          wtsCat = this.chosen
        } else if (day == 4){
          this.wtsCycleSelected = WayToSchool.wtsCycleRed;
          wtsCycle = this.chosen;
        } else if (day == 5){
          this.wtsBGSelected = WayToSchool.wtsBG;
          this.wtsBSSelected = WayToSchool.wtsBS;
        }

      } else if (this.over() == 'b'){ /// 2번 선택지 누를 시
        this.chosen = 2;

        if (day == 1){
          this.wtsStoreSelected = WayToSchool.wtsStoreCafe;
          wtsStore = this.chosen
        } else if (day == 2){
          this.wtsFlowerSelected = WayToSchool.wtsFlowerHydrangea;
          wtsFlower = this.chosen
        } else if (day == 3){
          this.wtsCatSelected = WayToSchool.wtsCatFish;
          wtsCat = this.chosen
        } else if (day == 4){
          this.wtsCycleSelected = WayToSchool.wtsCycleChild;
          wtsCycle = this.chosen;
        } else if (day == 5){
          this.wtsBGSelected = WayToSchool.wtsBG;
          this.wtsBSSelected = WayToSchool.wtsBS;
        }

      } else if (this.over() == 'c'){ /// 3번 선택지 누를 시
        this.chosen = 3;

        if (day == 1){
          this.wtsStoreSelected = WayToSchool.wtsStoreJuice;
          wtsStore = this.chosen
        } else if (day == 2){
          this.wtsFlowerSelected = WayToSchool.wtsFlowerLily
          wtsFlower = this.chosen
        } else if (day == 3){
          this.wtsCatSelected = WayToSchool.wtsCatCheese;
          wtsCat = this.chosen
        } else if (day == 4){
          this.wtsCycleSelected = WayToSchool.wtsCycleUni;
          wtsCycle = this.chosen;
        } else if (day == 5){
          this.wtsBGSelected = WayToSchool.wtsBG;
          this.wtsBSSelected = WayToSchool.wtsBS;
        }
      }
      this.choosing = false;
    }

    if (this.over() == 'go'){
      this.selected = false;
      this.blackBar = 0;
      this.chosen = 0;
      this.finishRead = false;
      clickSound.play();
      changePage(school, 'Loading...');
    }
  }



  over() {

    if(this.selected){
      if(1040 < mouseX && mouseX < 1040+132 && 265 < mouseY && mouseY < 265+230){
        return 'go';
      } else return 0;
    } else {
      if (this.eventOccur){
        if (this.choosing){
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
