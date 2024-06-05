class WayToHome {
  constructor() {
    this.wthBGSelected = WayToHome.wthBGM; // 기본 배경 이미지 설정
    this.wthBSSelected = WayToHome.wthBSM; // 기본 버스 정류장 이미지 설정
    this.wthWallSelected = WayToHome.wthWall; // 기본 낙서 이미지 설정
    this.wthPosterSelected = WayToHome.wthPoster; // 기본 포스터 이미지 설정
    this.wthMountainSelected = WayToHome.wthMountainM; // 기본 산 이미지 설정
    this.wthBirdSelected = WayToHome.wthBird; // 기본 새 이미지 설정
    this.wthBusStopSelected = WayToHome.wthBusStopM; // 기본 버정(요소) 이미지 설정
    this.wthWallBGSelected = WayToHome.wthWallBG;
    this.eventOccur = false;
  }

  static preload() {
    // 이미지 로드
    WayToHome.wthBG = loadImage('assets/images/backgrounds/wayToHomeColor.png');
    WayToHome.wthBGM = loadImage('assets/images/backgrounds/wayToHomeMono.png');
    WayToHome.wthBS = loadImage('assets/images/objects/wayBusStopColor.png');
    WayToHome.wthBSM = loadImage('assets/images/objects/wayBusStopMono.png');
    WayToHome.wthWallBG = loadImage('assets/images/objects/wayToHomeBGWall.png');

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

    WayToHome.pCam = loadImage('assets/images/objects/phoneCamerafilled.png');
    WayToHome.pCamClean = loadImage('assets/images/objects/phoneCamera.png');
  }

  display() {
    image(this.wthBGSelected, 0, 0);
    //image(this.wthMountainSelected, 0, 0);
    //image(this.wthWallBGSelected, 880, -250);
    //image(this.wthBSSelected, 30, 260);
    //image(this.wthWallSelected, 650, 200);
    //image(this.wthPosterSelected, 200, 380);
    
    //image(this.wthBirdSelected, 1100, 370);
    //image(this.wthBusStopSelected, 1100, 370);

    if (this.eventOccur) {
      fill(0);
      rect(0, height - 120, 1280, 120);
      rect(0, 0, 1280, 120);

      image(WayToHome.pCam, 249, 149);

      if (day == 1) {
        image(this.wthWallSelected, 445, 204.5);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wthWallSelected = WayToHome.wthWallFun;
          } else if (keyCode === 50) {
            this.wthWallSelected = WayToHome.wthWallLove;
          } else if (keyCode === 51) {
            this.wthWallSelected = WayToHome.wthWallSeize;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
          }
        }
      } else if (day == 2) {
        image(this.wthPosterSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wthPosterSelected = WayToHome.wthPosterDance;
          } else if (keyCode === 50) {
            this.wthPosterSelected = WayToHome.wthPosterSong;
          } else if (keyCode === 51) {
            this.wthPosterSelected = WayToHome.wthPosterCook;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
          }
        }
      } else if (day == 3) {
        image(this.wthMountainSelected, 251, 151, 780, 420, 0, 0, 1280, 720);
        image(WayToHome.pCamClean, 249, 149);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wthMountainSelected = WayToHome.wthMountain;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
          }
        }
      } else if (day == 4) {
        image(this.wthBirdSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wthBirdSelected = WayToHome.wthBirdDove;
          } else if (keyCode === 50) {
            this.wthBirdSelected = WayToHome.wthBirdSmall;
          } else if (keyCode === 51) {
            this.wthBirdSelected = WayToHome.wthBirdBlack;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
          }
        }
      } else if (day == 5) {
        this.wthBGSelected = WayToHome.wthBG
        this.wthBSSelected = WayToHome.wthBS

        image(this.wthBusStopSelected, 445, 204.5);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wthBusStopSelected = WayToHome.wthBusStop;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
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
}
  
}
*/
