class School {
    constructor() {
      this.images = School.images;
      this.alpha = 0;
      this.fadeIn = true;
      this.textAnimations = null;
      this.textBlockIndex = 0;
      this.schoolText = [
        ["월요일이라 그런지 너무 졸리다...빨리 수업 끝나면 좋겠어."],
        ["어제보단 덜 졸리네... 오늘은 그래도 수업 들어봐야지."],
        ["왠지 강의실이 좀 더 환해보여. 공부할 마음이 드는걸?"],
        ["오늘 수업은 조금 흥미로운 것 같아. 이런 수업인 줄 몰랐었네."],
        ["오늘은 평소와 다르게 수업도 즐겁다. 시간이 금방 가."]
      ];
    }
  
    static preload() {
      School.images = [
        loadImage('./assets/images/backgrounds/School1.png'),
        loadImage('./assets/images/backgrounds/School2.png'),
        loadImage('./assets/images/backgrounds/School3.png'),
        loadImage('./assets/images/backgrounds/School4.png'),
        loadImage('./assets/images/backgrounds/SchoolColor.png')
      ];
    }
  
    setup() {
      this.alpha = 0; // 페이드인 효과 초기화
      this.fadeIn = true;
      schoolSound.setVolume(0.6);
      schoolSound.play();
      this.textAnimations = new TextAnimation(this.schoolText[day-1], width/2, 637, 50);
      
      setTimeout(() => {
        schoolSound.stop();
        changePage(wayToHome, 'Loading...');
      }, 5000); // 5초 후에 wayToHome으로 전환

    }
  
    display() {
      busSound.stop();

      tint(255, this.alpha); // 이미지에 알파 값 적용
      image(this.images[day - 1], 0, 0, 1280, 720); // day 값에 따라 인덱스 호출
      noTint();
      if (this.fadeIn) {
        this.alpha += 10;
        if (this.alpha >= 255) {
          this.alpha = 255;
          this.fadeIn = false;
        }
      } // 이미지 페이드인

      fill(0);
      rectMode(CORNER);
      rect(0, height - 120, 1280, 120);
      rect(0, 0, 1280, 120);
      fill(255);
      this.textAnimations.update();
      this.textAnimations.display();
    }
  
    handleClick() {
      // 클릭 시 이벤트 처리 (필요할 경우 추가)
    }
  }
  