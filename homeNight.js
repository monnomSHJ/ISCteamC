class HomeNight {
  constructor() {
    this.images = HomeNight.images;
    this.bedImages = HomeNight.bedImages;

    this.bedMouseOver = false;

    this.texts = [
      ["오늘은 가게와 낙서를 발견했다.",
        "다이어리에 사진을 붙여넣어보자."
      ],
      ["오늘은 꽃과 포스터를 발견했다.",
        "다이어리에 사진을 붙여넣어보자."
      ],
      ["오늘은 고양이와 산을 발견했다.",
        "다이어리에 사진을 붙여넣어보자."
      ],
      ["오늘은 자전거와 새를 발견했다.",
        "다이어리에 사진을 붙여넣어보자."
      ],
      ["오늘은 많은 것을 발견했다.",
        "다이어리에 사진을 붙여넣어보자."
      ]
    ]

    this.afterTexts = [
      "오늘 찍은 사진들을 보며 하루를 돌아보았다.",
      "피곤하니까 이제 슬슬 자볼까."
    ]

    this.day5afterTexts = [
      "금요일이라 그런가, 피곤해서 눈이 감긴다.",
      "이번 주는 뭔가 많은 일이 있었던 것 같다."
    ]

    this.preEndingMessage = [
      "",
      "평소와 크게 다를 바 없는 일주일이었지만,",
      "주위를 둘러보며 일상 속 순간들을 포착하다보니...",
      "숨어있던 소소한 행복들을 다시금 발견할 수 있었다.",
      "...",
      "만일 당신도 나와 같은 고민을 하고 있다면,",
      "하루에 하나씩만이라도, 일상 속에 숨어있는 자그마한 행복들을 찾아",
      "당신의 하루하루를 색칠해보길 바란다.",
      "우리 모두 조금만 힘내 보자.",
      "...지금의 나를 너무 밀어 붙이지는 말고.",
      "조금 더 여유롭게, 천천히...",
      "'나'인 그대로."
    ]

    this.textAnimations = null;
    this.preEndingTextAni = null;

    this.status = 0; //0: 대사 출력, 1: 대사 완독, 2: 다이어리, 3: 잠자기, 4: 5일차, 5: preEnding

    this.fadeOutAlpha = 0;
  }

  static preload() {
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

  setup() {
    this.textAnimations = new TextAnimation(this.texts[day-1], width/2, 637, 50);
    this.preEndingTextAni = new TextAnimation(this.preEndingMessage, width/2, height/2, 50);
  }

  display() {
    busSound.stop();

    imageMode(CORNER);
    image(this.images[day-1], 0, 0, width, height);
    
    fill(0);
    rectMode(CORNER);
    rect(0, height - 120, 1280, 120);
    rect(0, 0, 1280, 120);

    this.textAnimations.update();
    this.textAnimations.display();

    if (this.status === 0 && this.textAnimations.isComplete()) {
      this.status = 1;
    }

    if (this.status === 2) {
      diary.display();

    } else if (this.status === 3) {
      if (this.textAnimations.isComplete()) {
        this.drawSleepButton();
      }

    } else if (this.status === 4) {
      if (this.textAnimations.isComplete()) {
        this.status = 5;
      }

    } else if (this.status === 6) {
      this.drawPreEnding();
    }
  }

  handleClick() {
    if (!this.textAnimations.isComplete()) {
      clickSound.play();
      this.textAnimations.nextLine();
    }

    if (this.status === 1) {
        this.status = 2;

      } else if (this.status === 2 && !diary.isFilled) {
        diary.handleClick();

      } else if (this.status === 2 && diary.isFilled && diary.saveMouseOver) {
        clickSound.play();

        if (day !== 5) {
          this.textAnimations = new TextAnimation(this.afterTexts, width/2, 637, 50);
          this.status = 3;

        } else {
          this.textAnimations = new TextAnimation(this.day5afterTexts, width/2, 637, 50);
          this.status = 4;
          bgmDay[4].stop();
        }

      } else if (this.status === 3) {
        if (this.bedMouseOver) {
          bgmDay[day-1].stop();
          day++;
          changePage(new HomeMorning(), 'DAY '+day);
          clickSound.play();
        }
      } else if (this.status === 5) {
        this.status = 6;

      } else if (this.status === 6) {
        if (!this.preEndingTextAni.isComplete()) {
          clickSound.play();
          this.preEndingTextAni.nextLine();

        } else {
          cameraSound.play();
          changePage(new EndingScene, 'Ending...');
        }
      }
    }

  drawSleepButton() {

    if(mouseX > width/2 - 110 && mouseX < width/2 + 110 && mouseY > height/2 - 110 && mouseY < height/2 + 110) {
      this.bedMouseOver = true;
    } else {
      this.bedMouseOver = false;
    }

    if(this.bedMouseOver) {
      imageMode(CENTER);
      image(this.bedImages[day-1], width/2, height/2, 250, 250);
      imageMode(CORNER);
      rectMode(CENTER);
      fill(0, 100);
      noStroke();
      rect(width/2, height/2, 200, 40);

      fill(255);
      textSize(32);
      textFont(fontNeo);
      textAlign(CENTER, CENTER);
      text("잠자기", width/2, height/2);
    } else {
      imageMode(CENTER);
      image(this.bedImages[day-1], width/2, height/2, 220, 220);
      imageMode(CORNER);
    }
  }

  drawPreEnding() {
    if (this.fadeOutAlpha < 255) {
      this.fadeOutAlpha += 3;
    }

    let alphaValue = map(this.fadeOutAlpha, 0, 255, 0, 255);
    let rectHeight = map(this.fadeOutAlpha, 0, 255, 0, height / 2);

    fill(0, alphaValue);
    rect(0, 0, width, rectHeight);
    rect(0, height - rectHeight, width, rectHeight);

    if (this.fadeOutAlpha >= 255) {
      this.preEndingTextAni.update();
      this.preEndingTextAni.display();
    }
  }
}