class HomeMorning {
    constructor() {
        this.image = HomeMorning.image;
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

        console.log("현재 day 값:", day);
        console.log("currentTextIndex 값:", this.currentTextIndex);
                console.log("currentTextIndex 값:", this.currentTextIndex);

    }
  
    static preload() {
      HomeMorning.image = loadImage('assets/images/backgrounds/homeMorningFullMono.png');
    }
  
    display() {
      image(this.image, 0, 0, width, height);
      fill(0);
      rect(0, height - 120, 1280, 120);
      rect(0, 0, 1280, 120);
  
      textSize(24);
      textAlign(CENTER);
      fill(255);
      text(this.displayedText, 640, 637);
      this.updateDisplayedText(); // 텍스트 한글자씩 나오는 함수
    }
  
    updateDisplayedText() {
      if (this.textAnimationCounter < this.textAnimationSpeed) {
        this.textAnimationCounter++;
      } else {
        if (this.displayedText.length < this.texts[this.currentTextIndex].length) {
          this.displayedText = this.texts[this.currentTextIndex].substring(0, this.displayedText.length + 1);
        }
        this.textAnimationCounter = 0;
      }
      console.log("현재 displayedText:", this.displayedText); // 현재 표시된 텍스트 로그

    }
  
    handleClick() {
      changePage(wayToSchool, 'Loading...');
    }
  }
  