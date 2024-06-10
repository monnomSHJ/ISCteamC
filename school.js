class School {
    constructor() {
      this.images = School.images;
      this.alpha = 0;
      this.fadeIn = true;
    }
  
    static preload() {
      School.images = [
        loadImage('assets/images/backgrounds/School1.png'),
        loadImage('assets/images/backgrounds/School2.png'),
        loadImage('assets/images/backgrounds/School3.png'),
        loadImage('assets/images/backgrounds/School4.png'),
        loadImage('assets/images/backgrounds/SchoolColor.png')
      ];
    }
  
    setup() {
      this.alpha = 0; // 페이드인 효과 초기화
      this.fadeIn = true;
      setTimeout(() => {
        changePage(wayToHome, 'Loading...');
      }, 5000); // 5초 후에 wayToHome으로 전환
    }
  
    display() {
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
    }
  
    handleClick() {
      // 클릭 시 이벤트 처리 (필요할 경우 추가)
    }
  }
  