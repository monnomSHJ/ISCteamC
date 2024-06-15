class OpeningScene {
  constructor() {
    this.images = OpeningScene.images;
    this.texts = [
      //scene 1
      ["아침이 밝아 눈을 뜨면, 어제와 다를 바 없는 하루가 또 다시 나를 기다리고 있다.",
      "특별할 것 없는 길을 지나, 늘 타던 버스를 타고,",
      "학교에 도착할 때까지 사람들 사이에 끼어서 멍하니 음악만 듣다가,",
      "우르르 내리는 사람들 속에 몸을 맡기다보면 어느새 강의실 앞이다.",
      ],

      //scene 2
      ["쏟아지는 잠을 억지로 참으며 수업을 듣다 보면 어느새 수업은 끝나 있고,",
      "집에 가서 조금 쉬어 볼까 잠시 고민하다가",
      "여태껏 무시하려 애썼던 밀린 과제들을 하기 시작한다."
      ],

      //scene 3
      ["...",
        "재미가 없다.",
      "내가 붙들고 있는 과제 때문만은 아닌 것 같다.",
      "다람쥐 쳇바퀴 돌 듯 살아가는 나의 하루하루.",
      "이렇게 살면 미래의 나는 행복할까, 가끔 의문이 든다.",
      "머리가 복잡해져 노트북을 덮고 다시 집으로 돌아가기로 했다.",

      // "재미가 없다.",
      // "내가 붙들고 있는 과제 때문이 아니다.",
      // "삶 자체에 대한 회의감이다.",
      // "이렇게 다람쥐 쳇바퀴 돌 듯 살아가는 게 무슨 의미가 있지?",
      // "이렇게 살면 미래에는 행복해질 수 있는 걸까?",
      // "머리가 복잡해져 노트북을 덮고 다시 집으로 돌아가기로 했다.",
      ],
      
      //scene 4
      ["대학만 오면 마냥 행복할 줄 알았는데,",
      "지금 나의 현실은 조금 다른 것 같다.",
      "언젠가는 열정에 타올라 이것저것 시도해보기도 했고,",
      "오늘이 마지막인 것처럼 세상 모든 일들에 최선을 다하기도 했다.",
      "그런데 언젠가부터, 코앞의 급한 일만 바라보며 살아가다보니...", 
      "나의 삶의 색이 조금씩, 조금씩 바래기 시작했다.",
      "어느 순간, 나는 텅 빈 껍데기가 되어버린 듯했다.",
        //"대학만 오면 마냥 행복할 줄 알았던 고등학생 시절,",
      // "그때의 헛된 상상은 이미 현실 앞에 무너진 지 오래이다.",
      // "언젠가는 열정에 타올라 이것저것 시도해보기도 했고,",
      // "오늘이 마지막인 것처럼 세상 모든 일들에 최선을 다하기도 했다.",
      // "그런데 언제부턴가 나의 삶의 색이 바래기 시작했다.",
      // "미래에 대한 불안과 걱정...",
      // "아니, 그 이전에 지금 당장 코앞에 있는 문제들을 해결하려 애쓰며 살아가다보니...",
      // "어느 순간 나는 텅 빈 껍데기가 되어버린 것 같다는 생각이 들었다."

      ],

      //scene 5
      ["프랑스어 교양 시간에 배운 표현이 있다.",
        "'Métro-Boulot-Dodo'",
        "직역하면 '지하철-일-잠'이라는 뜻인데, 괜히 내 얘기 같다.",
        "매일같이 반복되는 삶...",
        "...",
        "내일부터는 다이어리 좀 써볼까."
      ]
    ];

    this.textAnimations = null;
    this.textBlockIndex = 0;

    this.currentImageIndex = 0;
    this.currentImageSubIndex = 0;

    this.alpha = 0;
    this.fadeIn = true;
  }

  static preload() {
    OpeningScene.images = [
      loadImage('assets/images/backgrounds/homeMorningFullMono.png'),
      loadImage('assets/images/backgrounds/SchoolFullMono.png'),
      loadImage('assets/images/backgrounds/wayToHomeMono.png'),
      loadImage('assets/images/backgrounds/homeNightFullMono.png'),
      loadImage('assets/images/backgrounds/mainImageMono.png')
    ];
    OpeningScene.bgm = loadSound('assets/sounds/openingSceneBgm.mp3');//수정
  }

  setup() {
    this.textBlockIndex = 0;
    this.textAnimations = new TextAnimation(this.texts[this.textBlockIndex], width/2, 637, 50);
  }

  display() {
    if (!OpeningScene.bgm.isPlaying()) {
      OpeningScene.bgm.setVolume(0.1);
      OpeningScene.bgm.loop(); // 배경음악을 반복 재생 //수정
    }

    tint(255, this.alpha);
    image(this.images[this.textBlockIndex], 0, 0, 1280, 720);
    noTint();
    if (this.fadeIn) {
      this.alpha += 10;
      if (this.alpha >= 255) {
        this.alpha = 255;
        this.fadeIn = false;
      }
    }

    fill(0);
    rect(0, height - 120, 1280, 120);
    rect(0, 0, 1280, 120);

    this.textAnimations.update();
    this.textAnimations.display();
  }
  
  handleClick() {

    if (!this.textAnimations.isComplete()) {
      clickSound.setVolume(0.3);
      clickSound.play();
      this.textAnimations.nextLine();
    } else {
      if(this.textBlockIndex < 4) {
        clickSound.setVolume(0.3);
        clickSound.play();
        this.textBlockIndex++;
        this.textAnimations = new TextAnimation(this.texts[this.textBlockIndex], width/2, 637, 50);
        this.alpha = 0;
        this.fadeIn = true;
      } else {
        cameraSound.play();
        changePage(homeMorning, 'DAY' + day);
        OpeningScene.bgm.stop();
      }
    }
  }
}
