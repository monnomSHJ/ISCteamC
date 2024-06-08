class WayToSchool {
  constructor() {
    this.wtsBGSelected = WayToSchool.wtsBGM; // 기본 배경 이미지 설정
    this.wtsBSSelected = WayToSchool.wtsBSM; // 기본 버스 정류장 이미지 설정
    this.wtsStoreSelected = WayToSchool.wtsStore; // 기본 가게 이미지 설정
    this.wtsFlowerSelected = WayToSchool.wtsFlower; // 기본 꽃 이미지 설정
    this.wtsCatSelected = WayToSchool.wtsCat; // 기본 고양이 이미지 설정
    this.wtsCycleSelected = WayToSchool.wtsCycle; // 기본 자전거 이미지 설정
    this.eventOccur = false;
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
      rect(0, height - 120, 1280, 120);
      rect(0, 0, 1280, 120);

      image(WayToSchool.pCam, 249, 149);

      if (day == 1) {
        image(this.wtsStoreSelected, 445, 204.5);

        if (keyIsPressed) {
          if (keyCode === 65) {
            this.wtsStoreSelected = WayToSchool.wtsStoreBakery;
          } else if (keyCode === 83) {
            this.wtsStoreSelected = WayToSchool.wtsStoreCafe;
          } else if (keyCode === 68) {
            this.wtsStoreSelected = WayToSchool.wtsStoreJuice;
          } else if (keyCode === 27) {
            this.eventOccur = false;
            changePage(school, 'Loading...');
          }
        }
      } else if (day == 2) {
        image(this.wtsFlowerSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 65) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerRose;
          } else if (keyCode === 83) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerHydrangea;
          } else if (keyCode === 68) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerLily;
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
          } else if (keyCode === 83) {
            this.wtsCatSelected = WayToSchool.wtsCatFish;
          } else if (keyCode === 68) {
            this.wtsCatSelected = WayToSchool.wtsCatCheese;
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
          } else if (keyCode === 83) {
            this.wtsCycleSelected = WayToSchool.wtsCycleChild;
          } else if (keyCode === 68) {
            this.wtsCycleSelected = WayToSchool.wtsCycleUni;
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
  }

  over() {
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


  