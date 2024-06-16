class HomeMorning {
    constructor() {
      this.images = HomeMorning.images;
      this.backPackImages = HomeMorning.backPackImages;
      this.backPackMouseOver = false;

      this.texts =
      //day1
      [["또 다시 찾아온 평일 아침...",
        "참, 오늘부터 다이어리를 쓰기로 했으니까.",
        "오고 가는 길에 사진 좀 찍어볼까.",
        "내가 여태껏 놓치고 있던 것들을 찾게 될 수도 있을 것 같다.",
        "더도 말고 덜도 말고, 학교 갈 때 한 장, 집에 올 때 한 장씩만 찍어보자.",
        "이제 가방 메고 나가볼까."
      ],

      //day2
      ["... 또 아침이다.",
        "오늘도 다이어리에 붙일 사진들을 찍어보자.",
        "학교에 갈 준비를 하자."
      ],

      //day3
      ["상쾌한 수요일 아침이다.",
        "오늘따라 방이 유난히 밝아보이네.",
        "해가 빨리 떠서 그런가?"
      ],

      //day4
      ["내일이 금요일이라 그런지 어제보다 몸이 가볍다.",
        "오늘도 힘내보자."
      ],

      //day5
      ["벌써 일주일이 다 갔네.",
        "이번주가 유난히 짧게 느껴지기도 하고...",
        "금요일인데, 저녁에는 오랜만에 친구 만나서 놀아야겠다.",
        "...",
        "나가볼까?"
      ]
      ];

      this.textAnimations = null;
  }

  setup() {
    this.textAnimations = new TextAnimation(this.texts[day-1], width/2, 637, 50);
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
    noStroke();

    this.textAnimations.update();
    this.textAnimations.display();

    if(this.textAnimations.isComplete()) {
      this.drawSchoolButton();
    }
  }

  handleClick() {
    if (!this.textAnimations.isComplete()) {
      clickSound.setVolume(0.3);
      clickSound.play();
      this.textAnimations.nextLine();
    } else {
      if(this.backPackMouseOver === true) {
        changePage(wayToSchool, 'Loading...');
        clickSound.play();
    }
  }
}

  drawSchoolButton() {
    if(mouseX > width/2 - 150 && mouseX < width/2 + 150 && mouseY > height/2 - 150 && mouseY < height/2 + 150) {
      this.backPackMouseOver = true;
    } else {
      this.backPackMouseOver = false;
    }

    if(this.backPackMouseOver === true) {
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
}
  