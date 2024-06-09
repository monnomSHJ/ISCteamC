class OpeningScene {
  constructor() {
    this.images = OpeningScene.images;
    this.texts = [
      "눈을 뜨면, 똑같은 하루가 또다시 시작된다.",
      "특별할 것 없는 길을 걸어, 학교에 간다.",
      "과제와 공부에 치여, 학교에서의 시간이 빠르게 흘러간다.",
      "피곤에 절어 터덜터덜, 집으로 향한다.",
      "집에 도착하면 벌써 늦은 밤. 생각할 여유 없이 잠에 든다.",
      "지루하게 반복되는 일상, 나의 행복은 어디에 있을까?"
    ];
    this.currentImageIndex = 0;
    this.currentTextIndex = 0;
    this.alpha = 0;
    this.fadeIn = true;
    this.displayedText = ""; // 현재 표시되는 텍스트
    this.textAnimationSpeed = 5; // 애니메이션 속도
    this.textAnimationCounter = 0; // 애니메이션 카운터
    this.textComplete = false;
  }

  static preload() {
    OpeningScene.images = [
      loadImage('assets/images/backgrounds/homeMorningFullMono.png'),
      loadImage('assets/images/backgrounds/SchoolFullMono.png'),
      loadImage('assets/images/backgrounds/wayToHomeMono.png'),
      loadImage('assets/images/backgrounds/homeNightMono.png'),
      loadImage('assets/images/backgrounds/mainImageMono.png')
    ];
    OpeningScene.bgm = loadSound('assets/sounds/openingSceneBgm.mp3');//수정
  }

  display() {
    if (!OpeningScene.bgm.isPlaying()) {
      OpeningScene.bgm.setVolume(0.3);
      OpeningScene.bgm.loop(); // 배경음악을 반복 재생 //수정
    }

    if (this.images.length > 0) {
      tint(255, this.alpha); // 이미지에 알파 값 적용
      image(this.images[this.currentImageIndex], 0, 0, 1280, 720);
      noTint();
      if (this.fadeIn) {
        this.alpha += 10;
        if (this.alpha >= 255) {
          this.alpha = 255;
          this.fadeIn = false; // 페이드인 효과
        }
      }
    }

    fill(0);
    rect(0, height - 120, 1280, 120);
    rect(0, 0, 1280, 120);

    textSize(24);
    textAlign(CENTER);
    fill(255);
    text(this.displayedText, 640, 637);
    this.updateDisplayedText(); // 텍스트 한글자씩 나오는 함수

    if (this.textComplete) {
      if (frameCount % 60 < 30) {
        let textWidthValue = textWidth(this.displayedText);
        text('▼', 640 + textWidthValue / 2 + 24, 637); // 텍스트 끝에 '▼' 기호 추가
      }
    }
  }

  updateDisplayedText() {
    if (this.textAnimationCounter < this.textAnimationSpeed) {
      this.textAnimationCounter++;
    } else {
      if (this.displayedText.length < this.texts[this.currentTextIndex].length) {
        this.displayedText = this.texts[this.currentTextIndex].substring(0, this.displayedText.length + 1);
        this.textComplete = false; // 텍스트 출력 중
      } else {
        this.textComplete = true; // 텍스트 출력 완료
      }
      this.textAnimationCounter = 0;
    }
  }
  handleClick() {
    if (this.textComplete) {
      if (this.currentImageIndex === this.images.length - 1 && this.currentTextIndex === this.texts.length - 1) {
        changePage(homeMorning, 'DAY' + day);
        OpeningScene.bgm.stop();
      } else if (this.currentImageIndex === this.images.length - 1) {
        if (this.currentTextIndex < this.texts.length - 1) {
          this.currentTextIndex++;
        }
      } else {
        this.currentImageIndex++;
        this.currentTextIndex = this.currentImageIndex;
      }
      this.alpha = 0;
      this.fadeIn = true;
      this.displayedText = "";
      this.textComplete = false; // 새로운 텍스트 출력 시작
    }
  }
}
