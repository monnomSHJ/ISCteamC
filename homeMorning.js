class HomeMorning {
    constructor() {
        this.images = HomeMorning.images;
        this.backPackImages = HomeMorning.backPackImages;
        this.texts = [
            '오늘은 월요일이다. 너무 힘들군.',
            '오늘은 화요일이다. 학교에 가자.',
            '오늘은 수요일이다. 이틀만 버티면 된다!.',
            '오늘은 목요일이다. 내일은 불금이다!',
            '오늘은 금요일이다. 이번 주는 뭔가 평소랑 다른 것 같다.'
        ];
        this.currentTextIndex = day-1;
        this.displayedText = "";
        this.textAnimationSpeed = 5; // 애니메이션 속도
        this.textAnimationCounter = 0; // 애니메이션 카운터
        this.textComplete = false;

        console.log("현재 day 값:", day);
        console.log("currentTextIndex 값:", this.currentTextIndex);
                console.log("currentTextIndex 값:", this.currentTextIndex);

    }
  
    static preload() {
      HomeMorning.images = [
        loadImage('assets/images/backgrounds/homeMorningFullMono.png'),
        loadImage('assets/images/backgrounds/homeMorningFullColor2.png'),
        loadImage('assets/images/backgrounds/homeMorningFullColor3.png'),
        loadImage('assets/images/backgrounds/homeMorningFullColor4.png'),
        loadImage('assets/images/backgrounds/homeMorningFullColor.png')
      ]
      HomeMorning.backPackImages = [
        loadImage('assets/images/objects/backPackMono.png'),
        loadImage('assets/images/objects/backPackColor2.png'),
        loadImage('assets/images/objects/backPackColor3.png'),
        loadImage('assets/images/objects/backPackColor4.png'),
        loadImage('assets/images/objects/backPackColor5.png')
      ];
    }
  
    display() {
      noStroke();
      image(this.images[day - 1], 0, 0, width, height);
      fill(0);
      rectMode(CORNER);
      rect(0, height - 120, 1280, 120);
      rect(0, 0, 1280, 120);
      textSize(24);
      textAlign(CENTER);
      fill(255);
      text(this.displayedText, 640, 637);
      this.updateDisplayedText(); // 텍스트 한글자씩 나오는 함수
      if (this.textComplete) {
        this.drawSchoolButton(); // 모든 텍스트가 다 나오면 버튼을 그리기
      }
      noStroke();

      fill(255);
      if (this.textComplete) {
        if (frameCount % 60 < 30) {
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

    drawSchoolButton() {
      if(mouseX > width/2 - 150 && mouseX < width/2 + 150 && mouseY > height/2 - 150 && mouseY < height/2 + 150) {
        image(this.backPackImages[day - 1], width/2 - 165, height/2 - 165, 330, 330);
        rectMode(CENTER);
        fill(0, 100);
        noStroke();
        rect(width/2, height/2, 200, 40);

        fill(255);
        textSize(32);
        textFont(fontNeo);
        textAlign(CENTER, CENTER);
        text("등교하기", width/2, height/2);
      } else {
        image(this.backPackImages[day - 1], width/2 - 150, height/2 - 150, 300, 300);
      }
      
    }
  
    handleClick() {
      if (this.textComplete &&
        mouseX > width/2 - 150 && mouseX < width/2 + 150 && mouseY > height/2 - 150 && mouseY < height/2 + 150) {
            changePage(wayToSchool, 'Loading...');
            clickSound.play();
      }
    }
  }
  