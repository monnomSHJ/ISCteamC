class WayToHome {
  constructor() {
    this.wthBGSelected = WayToHome.wthBGM; // 기본 배경 이미지 설정
    this.wthBSSelected = WayToHome.wthBSM; // 기본 버스 정류장 이미지 설정
    this.wthWallSelected = WayToHome.wthWall; // 기본 낙서 이미지 설정
    this.wthPosterSelected = WayToHome.wthPoster; // 기본 포스터 이미지 설정
    this.wthMountainSelected = WayToHome.wthMountainM; // 기본 산 이미지 설정
    this.wthBirdSelected = WayToHome.wthBird; // 기본 새 이미지 설정
    this.wthBusStopSelected = WayToHome.wthBusStopM; // 기본 버정(요소) 이미지 설정
    this.wthWallBGSelected = WayToHome.wthWallBGM; //기본 벽(배경) 이미지 설정
    this.wthRoadSelected = WayToHome.wthBGRM; //기본 길(배경) 이미지 설정
    this.eventOccur = false; // 이벤트 발생 스위치
    this.blackBar = 0; // 상하단 흑색 바 애니메이션
    this.Reading = false; // 출력된 텍스트를 읽고 있는가
    this.finishRead = false; // 출력된 텍스트를 다 읽었는가
    this.choosing = false; // 선택지를 고르고 있는가
    this.chosen = 0; // 선택지에서 몇 번을 선택했는가. 전역변수로 값이 나갈 예정
    this.selected = false; // 선택을 했는가.

    this.flashAlpha = 0; // 플래시의 투명도
    this.isFlashing = false; // 플래시 켜져있나?
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

    WayToHome.pCam = loadImage('assets/images/objects/phoneCamerafilled.png');
    WayToHome.pCamClean = loadImage('assets/images/objects/phoneCamera.png');

    WayToHome.blurImage = loadImage('assets/images/backgrounds/blurImage.png');
  }

  display() {
    image(this.wthBGSelected, 0, 0);
    image(this.wthMountainSelected, 0, 0);
    image(this.wthRoadSelected, 0, 0);
    image(this.wthWallBGSelected, 880, -230);
    image(this.wthBSSelected, 30, 260);
    image(this.wthWallSelected, 880, 20);
    image(this.wthPosterSelected, 1050, 210); 
    image(this.wthBirdSelected, 1000, 520);
    image(this.wthBusStopSelected, 300, 140);
    
    if (day == 5) {
      this.wthBGSelected = WayToHome.wthBG;
      this.wthBSSelected = WayToHome.wthBS;
      this.wthRoadSelected = WayToHome.wthBGR;
      this.wthWallBGSelected = WayToHome.wthWallBG;
    }

    if (this.eventOccur) {
      fill(0);
      rect(0, 720, 1280, -this.blackBar);
      rect(0, 0, 1280, this.blackBar);
      if (this.blackBar < 120){
        this.blackBar += 3;
      }

      image(WayToHome.blurImage, 0, 0, 1280, 720);

      rectMode(CENTER);
      fill(0, 220);
      rect(width/2, height/2, 730, 340);
      rectMode(CORNER);
      
      image(WayToHome.pCamClean, width/2 - 370, height/2 - 174, 740, 348);

      if (day == 1) {
        image(this.wthWallSelected, 510, 240);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('누가 이런 곳에 낙서를 해 놨네..', 640, 637);
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
            text('웃는 낙서', 340, 660);
            text('연인의 낙서', 640, 660);
            text('명언', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen == 1){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('유쾌한 사람이었나 보네.', 640, 637);
            } else if (this.chosen == 2){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('좋아 보이네...', 640, 637);
            } else if (this.chosen == 3){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('멋진 말인걸.', 640, 637);
            }

            this.selected = true;
          }
        }

      } else if (day == 2) {
        image(this.wthPosterSelected, 500, 225);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('동아리 홍보 포스터다. 구경이나 해 볼까..', 640, 637);
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
            text('춤 동아리', 340, 660);
            text('노래 동아리', 640, 660);
            text('요리 동아리', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen == 1){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('춤은 정말 못 추겠더라, 나는.', 640, 637);
            } else if (this.chosen == 2){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('노래 잘 부르는 사람들이 부럽단 말이지.', 640, 637);
            } else if (this.chosen == 3){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('요리는 가끔 하긴 하는데...', 640, 637);
            }

            this.selected = true;
          }
        }

      } else if (day == 3) {
        image(this.wthMountainSelected, 265, 140, 740, 380, 0, 0, 1280, 720);
        image(WayToHome.pCamClean, 249, 149);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('누가 학교를 산에다 지어서...', 640, 637);
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
            text('정말 푸르다.', 340, 660);
            text('운동이 되는걸.', 640, 660);
            text('자연친화적이네.', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen == 1){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('여름이라 그런가?', 640, 637);
            } else if (this.chosen == 2){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('주말엔 등산이라도 가 볼까.', 640, 637);
            } else if (this.chosen == 3){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('공기는 참 좋네.', 640, 637);
            }

            this.selected = true;
          }
        }
      } else if (day == 4) {
        image(this.wthBirdSelected, 550, 350);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('차도에 저거...새인가? 위험하지 않으려나..', 640, 637);
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
            text('비둘기', 340, 660);
            text('참새', 640, 660);
            text('까치', 940, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            fill(0)
            rect(0, 600, 1280, 120);
            if (this.chosen == 1){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('...알아서 날아가겠지..?', 640, 637);
            } else if (this.chosen == 2){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('귀엽긴 하네.', 640, 637);
            } else if (this.chosen == 3){
              textSize(24);
              textAlign(CENTER);
              fill(255);
              text('내일은 운수가 좋을 지도.', 640, 637);
            }

            this.selected = true;
          }
        }
      } else if (day == 5) {
        

        image(this.wthBusStopSelected, 380, 240, 500, 260, 0, 0);

        if(this.blackBar > 118){
          textSize(24);
          textAlign(CENTER);
          fill(255);
          text('정류장 유리창에 어렴풋이 얼굴이 비친다.', 640, 637);
          this.Reading = true;
          
          if(this.finishRead){
            this.Reading = false;
            fill(0);
            rect(0, 600, 1280, 120);
            fill(255);
            rect(540, 615, 200, 90);
            fill(0);
            rect(545, 620, 190, 80);
            fill(255);
            text('...오랜만이야.', 640, 660);
            this.choosing = true;
          }

          if (this.chosen != 0){
            this.selected = true;
            this.selected = false;
            this.blackBar = 0;
            this.chosen = 0;
            this.finishRead = false;
            changePage(homeNight, 'Loading...');
          }
        }
      }
    }

    this.cameraFlash();
  }

  handleClick() {

    if (this.over() == day) {  /// 이벤트 발생 트리거: this.over = 날짜
      this.eventOccur = true;
      this.cameraFlashTrigger();
      cameraSound.play();
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
          this.wthWallSelected = WayToHome.wthWallFun;
          wthWall = this.chosen
        } else if (day == 2){
          this.wthPosterSelected = WayToHome.wthPosterDance;
          wthPoster = this.chosen
        } else if (day == 3){
          this.wthMountainSelected = WayToHome.wthMountain;
        } else if (day == 4){
          this.wthBirdSelected = WayToHome.wthBirdDove;
          wthBird = this.chosen
        } else if (day == 5){
          this.wthBusStopSelected = WayToHome.wthBusStop;
        }

      } else if (this.over() == 'b'){ /// 2번 선택지 누를 시
        this.chosen = 2;

        if (day == 1){
          this.wthWallSelected = WayToHome.wthWallLove;
          wthWall = this.chosen
        } else if (day == 2){
          this.wthPosterSelected = WayToHome.wthPosterSong;
          wthPoster = this.chosen
        } else if (day == 3){
          this.wthMountainSelected = WayToHome.wthMountain;
        } else if (day == 4){
          this.wthBirdSelected = WayToHome.wthBirdSmall;
          wthBird = this.chosen
        } else if (day == 5){
          this.wthBusStopSelected = WayToHome.wthBusStop;
        }

      } else if (this.over() == 'c'){ /// 3번 선택지 누를 시
        this.chosen = 3;

        if (day == 1){
          this.wthWallSelected = WayToHome.wthWallSeize;
          wthWall = this.chosen
        } else if (day == 2){
          this.wthPosterSelected = WayToHome.wthPosterCook;
          wthPoster = this.chosen
        } else if (day == 3){
          this.wthMountainSelected = WayToHome.wthMountain;
        } else if (day == 4){
          this.wthBirdSelected = WayToHome.wthBirdBlack;
          wthBird = this.chosen
        } else if (day == 5){
          this.wthBusStopSelected = WayToHome.wthBusStop;
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
      busSound.setVolume(0.5);
      busSound.play();
      changePage(homeNight, 'Loading...');
    }
  }

  cameraFlashTrigger() {
    this.flashAlpha = 255;
    this.isFlashing = true;
  }

  cameraFlash() {
    if(this.isFlashing) {
      this.flashAlpha -= 5;
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

  over() {

    if(this.selected){
      if(30 < mouseX && mouseX < 30+132 && 260 < mouseY && mouseY < 260+230){
        return 'go';
      } else return 0;
    } else {
      if (this.eventOccur){
        if (this.choosing){
          if (day == 5){
            if (540 < mouseX && mouseX < 740 && 615 < mouseY && mouseY < 705) return 'a';
            else return 0;
          } else {
            if (240 < mouseX && mouseX < 440 && 615 < mouseY && mouseY < 705) return 'a';
            else if (540 < mouseX && mouseX < 740 && 615 < mouseY && mouseY < 705) return 'b';
            else if (840 < mouseX && mouseX < 1040 && 615 < mouseY && mouseY < 705) return 'c';
            else return 0;
          }
        } else return 0;
      } else {
        if (day == 1) {
          if (880 < mouseX && mouseX < 880+194 && 20 < mouseY && mouseY < 20+194) return 1;
          else return 0;
        } else if (day == 2) {
          if (1050 < mouseX && mouseX < 1050+218 && 210 < mouseY && mouseY < 210+254) return 2;
          else return 0;
        } else if (day == 3) {
          if (0 < mouseX && mouseX < 880 && 150 < mouseY && mouseY < 480) return 3;
          else return 0;
        } else if (day == 4) {
          if (1000 < mouseX && mouseX < 1000+164 && 520 < mouseY && mouseY < 520+147) return 4;
          else return 0;
        } else if (day == 5) {
          if (300 < mouseX && mouseX < 300 + 679 && 140 < mouseY && mouseY < 140+385) return 5;
          else return 0;
        } else return 0;
      }
    }
  }

  changeCursor() {
    if (this.over() != 0) return 2;
    else return 1;
  }

  
}
