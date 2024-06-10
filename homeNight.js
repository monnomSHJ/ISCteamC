class HomeNight {
    constructor() {
      this.images = HomeNight.images;
      this.bedImages = HomeNight.bedImages;
      this.book = HomeNight.book;
      this.texts = [
        '월요일, 오늘은 가게와 낙서를 발견했다.',
        '오늘은 꽃과 포스터를 발견했다.',
        '오늘은 고양이와 산을 발견했다.',
        '오늘은 자전거와 새를 발견했다.'
      ];
      this.endingmessages = [
        '금요일이라 그런가...피곤해서 눈이 감긴다.',
        '이번 주는 많은 일들이 있었던 것 같다.'
      ];
      console.log(wtsStore);
      if (wtsStore == 1) {
        this.selectedStore = loadImage('assets/images/objects/wayToSchoolStore1.png');
      } else if (wtsStore == 2) {
        this.selectedStore = loadImage('assets/images/objects/wayToSchoolStore2.png');
      } else if (wtsStore == 3) {
        this.selectedStore = loadImage('assets/images/objects/wayToSchoolStore3.png');
      }

      if (wthWall == 1) {
        this.selectedWall = loadImage('assets/images/objects/wayToHomeWall1.png');
      } else if (wthWall == 2) {
        this.selectedWall = loadImage('assets/images/objects/wayToHomeWall2.png');
      } else if (wthWall == 3) {
        this.selectedWall = loadImage('assets/images/objects/wayToHomeWall3.png');
      }

      if (wtsFlower == 1) {
        this.selectedFlower = loadImage('assets/images/objects/wayToSchoolFlower1.png');
      } else if (wtsStore == 2) {
        this.selectedFlower = loadImage('assets/images/objects/wayToSchoolFlower2.png');
      } else if (wtsStore == 3) {
        this.selectedFlower = loadImage('assets/images/objects/wayToSchoolFlower3.png');
      }

      if (wthPoster == 1) {
        this.selectedPoster = loadImage('assets/images/objects/wayToHomePoster1.png');
      } else if (wthPoster == 2) {
        this.selectedPoster = loadImage('assets/images/objects/wayToHomePoster2.png');
      } else if (wthPoster == 3) {
        this.selectedPoster = loadImage('assets/images/objects/wayToHomePoster3.png');
      }

    if (wtsCat == 1) {
        this.selectedCat = loadImage('assets/images/objects/wayToSchoolCat1.png');
      } else if (wtsCat == 2) {
        this.selectedCat = loadImage('assets/images/objects/wayToSchoolCat2.png');
      } else if (wtsCat == 3) {
        this.selectedCat = loadImage('assets/images/objects/wayToSchoolCat3.png');
      }

      if (wtsCycle == 1) {
        this.selectedCycle = loadImage('assets/images/objects/wayToSchoolCycle1.png');
      } else if (wtsCycle == 2) {
        this.selectedCycle = loadImage('assets/images/objects/wayToSchoolCycle2.png');
      } else if (wtsCycle == 3) {
        this.selectedCycle = loadImage('assets/images/objects/wayToSchoolCycle3.png');
      }
      if (wthBird == 1) {
        this.selectedBird = loadImage('assets/images/objects/wayToHomeBird1.png');
      } else if (wthBird == 2) {
        this.selectedBird = loadImage('assets/images/objects/wayToHomeBird2.png');
      } else if (wthBird == 3) {
        this.selectedBird = loadImage('assets/images/objects/wayToHomeBird3.png');
      }
      this.selectedMountain = loadImage('assets/images/objects/wayToHomeMountainColor.png');
      this.currentTextIndex = day - 1;
      this.displayedText = "";
      this.textAnimationSpeed = 5; // 애니메이션 속도
      this.textAnimationCounter = 0; // 애니메이션 카운터
      this.fadeInAlpha = 0; // 페이드 인 알파 값
      this.storeFadeInAlpha = 0; // 선택 이미지 페이드 인 알파 값
      this.fadeOutAlpha = 0; // 눈 감는 효과 페이드 아웃 알파 값
      this.endingMessageIndex = 0;
      this.endingMessageDisplayed = "";
      this.endingMessageAnimationCounter = 0;
      this.endingMessageComplete = false;
      this.displayEndingMessage = false;
      this.textComplete = false;
    }
  
    static preload() {
      HomeNight.book = loadImage('assets/images/objects/homeNightBook.png');
      HomeNight.images = [
        loadImage('assets/images/backgrounds/homeNightFullMono.png'),
        loadImage('assets/images/backgrounds/homeNightFullColor2.png'),
        loadImage('assets/images/backgrounds/homeNightFullColor3.png'),
        loadImage('assets/images/backgrounds/homeNightFullColor4.png'),
        loadImage('assets/images/backgrounds/homeNightFullColor.png')
      ]
      HomeNight.bedImages = [
        loadImage('assets/images/objects/bedMono.png'),
        loadImage('assets/images/objects/bedColor2.png'),
        loadImage('assets/images/objects/bedColor3.png'),
        loadImage('assets/images/objects/bedColor4.png')
      ]
    }
  
    display() {
      image(this.images[day-1], 0, 0, width, height);
      fill(0);
      rectMode(CORNER);
      rect(0, height - 120, 1280, 120);
      rect(0, 0, 1280, 120);
  
      textSize(24);
      textAlign(CENTER, CENTER);
      fill(255);
      text(this.displayedText, 640, 637);
      
      if (day < 5) {
        this.updateDisplayedText(); // 텍스트 한글자씩 나오는 함수
        if (this.displayedText.length === this.texts[this.currentTextIndex].length) {
          this.drawSleepButton(); // 모든 텍스트가 다 나오면 버튼을 그리기
          this.drawNightBook(); // 페이드 인 효과로 책 이미지 표시
          this.drawSelected();
        }
      } else if (day == 5) {
        this.drawPreEnding();
      }

      if (this.textComplete) {
        if (frameCount % 60 < 30) {
          textSize(24);
          textAlign(CENTER, CENTER);
          fill(255);
          let textWidthValue = textWidth(this.displayedText);
          text('▼', 640 + textWidthValue/2 + 40, 637); // 텍스트 끝에 '▼' 기호 추가
        }
      }
    }
  
    updateDisplayedText() {
      if (this.textAnimationCounter < this.textAnimationSpeed) {
        this.textAnimationCounter++;
      } else {
        if (this.displayedText.length < this.texts[this.currentTextIndex].length) {
          this.displayedText = this.texts[this.currentTextIndex].substring(0, this.displayedText.length + 1);
          this.textComplete = false;
        } else {
          this.textComplete = true;
        }
        this.textAnimationCounter = 0;
      }
    }
  
    drawNightBook() {
      if (this.fadeInAlpha < 255) {
        this.fadeInAlpha += 5; // 페이드 인 속도 조절
      }
      tint(255, this.fadeInAlpha); // 알파 값 적용
      image(this.book, width / 2 - this.book.width / 2, height / 2 - this.book.height / 2);
      noTint(); // 다음 이미지에 영향을 주지 않도록 tint 해제
    }

    drawSelected() {
      if (this.storeFadeInAlpha < 255) {
        this.storeFadeInAlpha += 3; // 페이드 인 속도 조절
      }
      if (day == 1) {
        let targetWidth = 300;
        let aspectRatio1 = this.selectedStore.width / this.selectedStore.height;
        let aspectRatio2 = this.selectedWall.width / this.selectedWall.height;

        let targetHeight1 = targetWidth / aspectRatio1;
        let targetHeight2 = targetWidth / aspectRatio2;

        tint(255, this.storeFadeInAlpha); // 알파 값 적용
        image(this.selectedStore, 660, 250, targetWidth, targetHeight1); // 이미지를 특정 위치와 크기로 표시
        image(this.selectedWall, 300, 220, targetWidth, targetHeight2); // 이미지를 특정 위치와 크기로 표시

        noTint(); // 다음 이미지에 영향을 주지 않도록 tint 해제
      } else if (day == 2) {
        let targetWidth = 300;
        let aspectRatio1 = this.selectedFlower.width / this.selectedFlower.height;
        let aspectRatio2 = this.selectedPoster.width / this.selectedPoster.height;

        let targetHeight1 = targetWidth / aspectRatio1;
        let targetHeight2 = targetWidth / aspectRatio2;

        tint(255, this.storeFadeInAlpha); // 알파 값 적용
        image(this.selectedFlower, 660, 250, targetWidth, targetHeight1); // 이미지를 특정 위치와 크기로 표시
        image(this.selectedPoster, 260, 250, targetWidth, targetHeight2); // 이미지를 특정 위치와 크기로 표시

        noTint(); // 다음 이미지에 영향을 주지 않도록 tint 해제
      } else if (day == 3) {
        let targetWidth = 300;
        let aspectRatio1 = this.selectedCat.width / this.selectedCat.height;
        let aspectRatio2 = this.selectedMountain.width / this.selectedMountain.height;

        let targetHeight1 = targetWidth / aspectRatio1;
        let targetHeight2 = targetWidth / aspectRatio2;

        tint(255, this.storeFadeInAlpha); // 알파 값 적용
        image(this.selectedCat, 660, 250, targetWidth, targetHeight1); // 이미지를 특정 위치와 크기로 표시
        image(this.selectedMountain, 260, 250, targetWidth, targetHeight2); // 이미지를 특정 위치와 크기로 표시

        noTint(); // 다음 이미지에 영향을 주지 않도록 tint 해제
      } else if (day == 4) {
        let targetWidth = 300;
        let aspectRatio1 = this.selectedCycle.width / this.selectedCycle.height;
        let aspectRatio2 = this.selectedBird.width / this.Bird.height;
        let targetHeight1 = targetWidth / aspectRatio1;
        let targetHeight2 = targetWidth / aspectRatio2;

        tint(255, this.storeFadeInAlpha); // 알파 값 적용
        image(this.selectedCycle, 660, 250, targetWidth, targetHeight1); // 이미지를 특정 위치와 크기로 표시
        image(this.selectedBird, 260, 250, targetWidth, targetHeight2); // 이미지를 특정 위치와 크기로 표시
        noTint(); // 다음 이미지에 영향을 주지 않도록 tint 해제
      }
    }
  
    drawPreEnding() {
      if (this.fadeOutAlpha < 255) {
        this.fadeOutAlpha += 3; // 페이드 아웃 속도 조절
      }
  
      let alphaValue = map(this.fadeOutAlpha, 0, 255, 0, 255); // 알파 값을 0에서 255로 매핑
      let rectHeight = map(this.fadeOutAlpha, 0, 255, 0, height / 2); // 사각형 높이를 0에서 절반 높이로 매핑
  
      fill(0, alphaValue);
      rect(0, 0, width, rectHeight);
      rect(0, height - rectHeight, width, rectHeight);
  
      if (this.fadeOutAlpha >= 255 && !this.displayEndingMessage) {
        this.displayEndingMessage = true;
      }
  
      if (this.displayEndingMessage) {
        this.updateEndingMessage();
      }
    }
  
    updateEndingMessage() {
      if (this.endingMessageAnimationCounter < this.textAnimationSpeed) {
        this.endingMessageAnimationCounter++;
      } else {
        if (this.endingMessageDisplayed.length < this.endingmessages[this.endingMessageIndex].length) {
          this.endingMessageDisplayed = this.endingmessages[this.endingMessageIndex].substring(0, this.endingMessageDisplayed.length + 1);
        } else {
          this.endingMessageComplete = true;
        }
        this.endingMessageAnimationCounter = 0;
      }
  
      fill(255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text(this.endingMessageDisplayed, width / 2, height / 2);
    }
  
    handleClick() {
        if (day < 5 && this.textComplete &&
          mouseX > width - 250 && mouseX < width -30 && mouseY > height - 300 && mouseY < height - 80) {
          day++;
          console.log(day);
          changePage(new HomeMorning(), 'DAY '+day); // HomeMorning의 새로운 인스턴스로 전환
          cameraSound.play();
        } else if (day == 5 && this.displayEndingMessage && this.endingMessageComplete) {
          if (this.endingMessageIndex < this.endingmessages.length - 1) {
            this.endingMessageIndex++;
            this.endingMessageDisplayed = "";
            this.endingMessageComplete = false;
          } else {
            changePage(endingScene, 'Ending...');
            cameraSound.play();
          }
        }
      }
    
    drawSleepButton() {
      if(mouseX > width - 250 && mouseX < width -30 && mouseY > height - 300 && mouseY < height - 80) {
        image(this.bedImages[day-1], width - 265, height - 315, 250, 250);
        rectMode(CENTER);
        fill(0, 100);
        noStroke();
        rect(width - 140, height - 190, 200, 40);

        fill(255);
        textSize(32);
        textFont(fontNeo);
        textAlign(CENTER, CENTER);
        text("잠자기", width - 140, height - 190);
      } else {
        image(this.bedImages[day-1], width - 250, height - 300, 220, 220);
      }
      
    }
  }
  