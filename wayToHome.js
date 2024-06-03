class WayToHome {
  constructor() {
    this.wthBGSelected = WayToHome.wthBGM; // 기본 배경 이미지 설정
    this.wthBSSelected = WayToHome.wthBSM; // 기본 버스 정류장 이미지 설정
    this.wthStoreSelected = WayToSchool.wthStore; // 기본 낙서 이미지 설정
    this.wthFlowerSelected = WayToSchool.wthFlower; // 기본 가로수 이미지 설정
    this.wthCatSelected = WayToSchool.wthCat; // 기본 산 이미지 설정
    this.wthCycleSelected = WayToSchool.wthCycle; // 기본 새 이미지 설정
    this.eventOccur = false;
  }

  static preload() {
    // 이미지 로드
    WayToHome.wthBG = loadImage('assets/images/backgrounds/WayToHomeColor.png');
    WayToHome.wthBGM = loadImage('assets/images/backgrounds/wayToHomeMono.png');
    WayToHome.wthBS = loadImage('assets/images/objects/wayBusStopColor.png');
    WayToHome.wthBSM = loadImage('assets/images/objects/wayBusStopMono.png');
    WayToHome.wthStore = loadImage('assets/images/objects/wayToSchoolStore0.png');
    WayToHome.wthStoreBakery = loadImage('assets/images/objects/wayToSchoolStore1.png');
    WayToHome.wthStoreCafe = loadImage('assets/images/objects/wayToSchoolStore2.png');
    WayToHome.wthStoreJuice = loadImage('assets/images/objects/wayToSchoolStore3.png');
    WayToHome.wthFlower = loadImage('assets/images/objects/wayToSchoolFlower0.png');
    WayToHome.wthFlowerRose = loadImage('assets/images/objects/wayToSchoolFlower1.png');
    WayToHome.wthFlowerHydrangea = loadImage('assets/images/objects/wayToSchoolFlower2.png');
    WayToHome.wthFlowerLily = loadImage('assets/images/objects/wayToSchoolFlower3.png');
    WayToHome.wthCat = loadImage('assets/images/objects/wayToSchoolCat0.png');
    WayToHome.wthCatCookie = loadImage('assets/images/objects/wayToSchoolCat1.png');
    WayToHome.wthCatFish = loadImage('assets/images/objects/wayToSchoolCat2.png');
    WayToHome.wthCatCheese = loadImage('assets/images/objects/wayToSchoolCat3.png');
    WayToHome.wthCycle = loadImage('assets/images/objects/wayToSchoolCycle0.png');
    WayToHome.wthCycleRed = loadImage('assets/images/objects/wayToSchoolCycle1.png');
    WayToHome.wthCycleChild = loadImage('assets/images/objects/wayToSchoolCycle2.png');
    WayToHome.wthCycleUni = loadImage('assets/images/objects/wayToSchoolCycle3.png');
    WayToHome.pCam = loadImage('assets/images/objects/phoneCamerafilled.png');
    WayToHome.pCamClean = loadImage('assets/images/objects/phoneCamera.png');
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
          if (keyCode === 49) {
            this.wtsStoreSelected = WayToSchool.wtsStoreBakery;
          } else if (keyCode === 50) {
            this.wtsStoreSelected = WayToSchool.wtsStoreCafe;
          } else if (keyCode === 51) {
            this.wtsStoreSelected = WayToSchool.wtsStoreJuice;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
          }
        }
      } else if (day == 2) {
        image(this.wtsFlowerSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerRose;
          } else if (keyCode === 50) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerHydrangea;
          } else if (keyCode === 51) {
            this.wtsFlowerSelected = WayToSchool.wtsFlowerLily;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
          }
        }
      } else if (day == 3) {
        image(this.wtsCatSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wtsCatSelected = WayToSchool.wtsCatCookie;
          } else if (keyCode === 50) {
            this.wtsCatSelected = WayToSchool.wtsCatFish;
          } else if (keyCode === 51) {
            this.wtsCatSelected = WayToSchool.wtsCatCheese;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
          }
        }
      } else if (day == 4) {
        image(this.wtsCycleSelected, 550, 350);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wtsCycleSelected = WayToSchool.wtsCycleRed;
          } else if (keyCode === 50) {
            this.wtsCycleSelected = WayToSchool.wtsCycleChild;
          } else if (keyCode === 51) {
            this.wtsCycleSelected = WayToSchool.wtsCycleUni;
          } else if (keyCode === 27) {
            day += 1;
            this.eventOccur = false;
          }
        }
      } else if (day == 5) {
        image(this.wtsBGSelected, 251, 151, 780, 420, 0, 0, 1280, 720);
        image(WayToSchool.pCamClean, 249, 149);

        if (keyIsPressed) {
          if (keyCode === 49) {
            this.wtsBGSelected = WayToSchool.wtsBG;
            this.wtsBSSelected = WayToSchool.wtsBS;
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


/*
let wtsBG, wtsBGM, wtsBS, wtsBSM, wtsBGSelected, wtsBSSelected; // 배경과 버스정류장의 모노톤 + 컬러
let wtsStore, wtsStoreBakery, wtsStoreCafe, wtsStoreJuice, wtsStoreSelected; // 가게(1일)
let wtsFlower, wtsFlowerRose, wtsFlowerHydrangea, wtsFlowerLily, wtsFlowerSelected; // 꽃(2일)
let wtsCat, wtsCatCookie, wtsCatFish, wtsCatCheese, wtsCatSelected; // 고양이(3일)
let wtsCycle, wtsCycleRed, wtsCycleChild, wtsCycleUni, wtsCycleSelected; // 자전거 (4일)

let pCam, pCamClean; // 핸드폰 카메라 화면

let eventOccur = false; // 촬영 이벤트의 여부

let wtsDay = 1; // 날짜 카운팅

class WayToSchool {
  static preload() {
    wtsBG = loadImage('assets/images/backgrounds/WayToSchoolColor.png');
    wtsBGM = loadImage('assets/images/backgrounds/wayToSchoolMono.png');
    wtsBS = loadImage('assets/images/objects/wayBusStopColor.png');
    wtsBSM = loadImage('assets/images/objects/wayBusStopMono.png');
    wtsStore = loadImage('assets/images/objects/wayToSchoolStore0.png');
    wtsStoreBakery = loadImage('assets/images/objects/wayToSchoolStore1.png');
    wtsStoreCafe = loadImage('assets/images/objects/wayToSchoolStore2.png');
    wtsStoreJuice = loadImage('assets/images/objects/wayToSchoolStore3.png');
    wtsFlower = loadImage('assets/images/objects/wayToSchoolFlower0.png');
    wtsFlowerRose = loadImage('assets/images/objects/wayToSchoolFlower1.png');
    wtsFlowerHydrangea = loadImage('assets/images/objects/wayToSchoolFlower2.png');
    wtsFlowerLily = loadImage('assets/images/objects/wayToSchoolFlower3.png');
    wtsCat = loadImage('assets/images/objects/wayToSchoolCat0.png');
    wtsCatCookie = loadImage('assets/images/objects/wayToSchoolCat1.png');
    wtsCatFish = loadImage('assets/images/objects/wayToSchoolCat2.png');
    wtsCatCheese = loadImage('assets/images/objects/wayToSchoolCat3.png');
    wtsCycle = loadImage('assets/images/objects/wayToSchoolCycle0.png');
    wtsCycleRed = loadImage('assets/images/objects/wayToSchoolCycle1.png');
    wtsCycleChild = loadImage('assets/images/objects/wayToSchoolCycle2.png');
    wtsCycleUni = loadImage('assets/images/objects/wayToSchoolCycle3.png');


    pCam = loadImage('assets/images/objects/phoneCamerafilled.png'); // 카메라 사진파일의 안쪽이 투명해서, 안쪽이 채워진 파일을 따로 준비
    pCamClean = loadImage('assets/images/objects/phoneCamera.png') // 이미지파일 불러오기

    wtsStoreSelected = wtsStore;
    wtsFlowerSelected = wtsFlower;
    wtsCatSelected = wtsCat;
    wtsCycleSelected = wtsCycle;
    wtsBGSelected = wtsBGM;
    wtsBSSelected = wtsBSM; // 기본 설정된 + 선택하는 이미지를 저장해둘 변수

  } 
  

  
  display() {
    if (eventOccur){ // 만약 이벤트 발생 시
      image(wtsBGSelected, 0, 0); 
      image(wtsBSSelected, 1040, 265);
      image(wtsStoreSelected, 650, 200); 
      image(wtsFlowerSelected, 200, 380);
      image(wtsCatSelected, 550, 370);
      image(wtsCycleSelected, 1100, 370); // 기본 배경

      fill(0);
      rect(0,height-120,1280,120);
      rect(0,0,1280,120); // 검은 위아래 테두리 씌우기
  
      image(pCam, 249, 149); // 핸드폰 화면 띄우기(안쪽 흰색으로 채움)

      if(wtsDay == 1){ // 만약 day(날짜)가 1이라면
        image(wtsStoreSelected, 445, 204.5); // 1일차에 해당하는 가게를 핸드폰 화면 안에 배치

        if (keyIsPressed) { // 만약 키보드가 눌렸는데
          if (keyCode === 49) { // 그게 1번이면
            wtsStoreSelected = wtsStoreBakery; // 가게는 빵집으로 골라짐
          } else if (keyCode === 50) { // 만약 2번이면
            wtsStoreSelected = wtsStoreCafe; // 가게는 카페
          } else if (keyCode === 51) { // 만약 3번이면
            wtsStoreSelected = wtsStoreJuice; // 가게는 주스가게
          } else if (keyCode === 27) { // 만약 esc를 누르면
            wtsDay += 1; // 날짜를 하루 더하고
            eventOccur = false; // 핸드폰 화면에서 나가짐
            
          }
        }
      } else if (wtsDay == 2){ // 만약 day(날짜)가 2이라면
        image(wtsFlowerSelected, 550, 350); // 2일차에 해당하는 꽃을 핸드폰 화면 안에 배치
        if (keyIsPressed) { // 만약 키보드가 눌렸는데
          if (keyCode === 49) { // 그게 1번이면
            wtsFlowerSelected = wtsFlowerRose; // 꽃은 장미
          } else if (keyCode === 50) { // 만약 2번이면
            wtsFlowerSelected = wtsFlowerHydrangea; // 꽃은 수국
          } else if (keyCode === 51) { // 만약 3번이면
            wtsFlowerSelected = wtsFlowerLily; // 꽃은 백합
          } else if (keyCode === 27) { // 만약 esc를 누르면
            wtsDay += 1; // 날짜를 하루 더하고
            eventOccur = false; // 핸드폰 화면에서 나가짐
          }
        }
      } else if (wtsDay == 3){ // 만약 날짜가 3이면
        image(wtsCatSelected, 550, 350); // 3일차에 해당하는 고양이를 폰에 배치
        if (keyIsPressed) { // 만약 키보드가 눌렸는데
          if (keyCode === 49) { // 그게 1번이면
            wtsCatSelected = wtsCatCookie; // 고양이는 쿠앤크냥
          } else if (keyCode === 50) { // 만약 2번이면
            wtsCatSelected = wtsCatFish; // 고등어냥
          } else if (keyCode === 51) { // 만약 3번이면
            wtsCatSelected = wtsCatCheese; // 치즈냥
          } else if (keyCode === 27) { // 만약 esc를 누르면
            wtsDay += 1; // 날짜를 하루 더하고
            eventOccur = false; // 핸드폰 화면에서 나가짐
          }
        }
      } else if (wtsDay == 4){ // 만약 날짜가 4
        image(wtsCycleSelected, 550, 350); // 4일차 자전거 폰에 배치
        if (keyIsPressed) { // 만약 키보드가 눌렸는데
          if (keyCode === 49) { // 그게 1번이면
            wtsCycleSelected = wtsCycleRed; // 자전거는 빨강
          } else if (keyCode === 50) { // 만약 2번이면
            wtsCycleSelected = wtsCycleChild; // 어린이자전거
          } else if (keyCode === 51) { // 만약 3번이면
            wtsCycleSelected = wtsCycleUni; // 외발자전거
          } else if (keyCode === 27) { // 만약 esc를 누르면
            wtsDay += 1; // 날짜를 하루 더하고
            eventOccur = false; // 핸드폰 화면에서 나가짐
          }
        }
      } else if (wtsDay == 5){ // 만약 날짜가 5
        image(wtsBGSelected, 251, 151, 780, 420, 0, 0, 1280, 720 ); // 5일차 배경 가져오기
        image(pCamClean, 249, 149); // 배경 위에 핸드폰 올려 핸드폰 속에 그림이 있는 것처럼
        if (keyIsPressed) { // 만약 키보드가 눌렸는데
          if (keyCode === 49) { // 그게 1번이면
            wtsBGSelected = wtsBG;
            wtsBSSelected = wtsBS;
          } else if (keyCode === 27) { // 만약 esc를 누르면
            wtsDay += 1; // 날짜를 하루 더하고
            eventOccur = false; // 핸드폰 화면에서 나가짐
          }
        }
      }
    } else {
      image(wtsBGSelected, 0, 0);
      image(wtsBSSelected, 1040, 265);
      image(wtsStoreSelected, 650, 200);
      image(wtsFlowerSelected, 200, 380);
      image(wtsCatSelected, 550, 370);
      image(wtsCycleSelected, 1100, 370); // 기본 배경

    }

  }

  handleClick() {
    if (this.over() == wtsDay){ // 만약 over의 결과값이 날짜 카운팅과 같다면? -> 정해진 오브젝트에만 상호작용하도록
      if(mouseIsPressed){ // 만약 마우스를 눌렀다면
        eventOccur = true; // 이벤트 스위치 ON
      }
    }
  }
  
  over() { // 상호작용 가능한 오브젝트 위에 마우스커서가 올라갔는지를 판별
    if (wtsDay == 1) { 
      if (650 < mouseX && mouseX < 650 + 390 && 200 < mouseY && mouseY < 200 + 311) return 1;
      else return 0;
    } else if (wtsDay == 2) { 
      if (200 < mouseX && mouseX < 200 + 122 && 380 < mouseY && mouseY < 380 + 123) return 2;
      else return 0;
    } else if (wtsDay == 3) { 
      if (550 < mouseX && mouseX < 550 + 123 && 370 < mouseY && mouseY < 370 + 131) return 3;
      else return 0;
    } else if (wtsDay == 4) { 
      if (1100 < mouseX && mouseX < 1100 + 173 && 370 < mouseY && mouseY < 370 + 126) return 4;
      else return 0;
    } else if (wtsDay == 5) { // 5일차(하늘)은 전체 배경 중 어디를 찍어도 가능하게 설정
      return 5;
    } else return 0;
  } 

  changeCursor() { // (선택) 상호작용 가능한 오브젝트 위에 마우스 커서를 올려놓을 때 카메라 이펙트를 빨갛게 변화시키기 위한 설정
    if (this.over() != 0) return 2;
    else return 1;
  }
  
}
*/
