class EndingScene {
    constructor() {
        this.images = EndingScene.images;
        /*
        this.texts = [
          "눈을 뜨면, 똑같은 하루가 또다시 시작된다.",
          "특별할 것 없는 길을 걸어, 학교에 간다.",
          "과제와 공부에 치여, 학교에서의 시간이 빠르게 흘러간다.",
          "피곤에 절어 터덜터덜, 집으로 향한다.",
          "집에 도착하면 벌써 늦은 밤. 생각할 여유 없이 잠에 든다.",
          "지루하게 반복되는 일상, 나의 행복은 어디에 있을까?"
        ];
        */
        this.currentImageIndex = 0;
        //this.currentTextIndex = 0;
        this.alpha = 0;
        this.fadeIn = true;
        //this.displayedText = ""; // 현재 표시되는 텍스트
        //this.textAnimationSpeed = 5; // 애니메이션 속도
        //this.textAnimationCounter = 0; // 애니메이션 카운터
        this.lastChangeTime = 0; // 마지막으로 이미지가 변경된 시간
        this.changeInterval = 3000;
      }

    static preload() {
        //여기에 이미지 로드하기 ex. MainMenu.imageName = loadImage()
        EndingScene.images = [
            loadImage('assets/images/backgrounds/homeMorningColor.png'),
            loadImage('assets/images/backgrounds/homeMorningColor.png'), 
            loadImage('assets/images/backgrounds/wayToSchoolColor.png'),
            loadImage('assets/images/backgrounds/SchoolColor.png'),
            loadImage('assets/images/backgrounds/wayToHomeColor.png'),
            loadImage('assets/images/backgrounds/homeNightColor.png',)
        ] ;


    }

    display() {
        background(0);
        //여기에 디스플레이 설정하기
        //각 오브젝트 변수에 따라 다르게 디스플레이 할 것!
        
         if (this.images.length > 0) {
                // 이미지 변경 타이밍 체크
                if (millis() - this.lastChangeTime > this.changeInterval) {
                    if (this.currentImageIndex < this.images.length - 1) {
                        this.currentImageIndex++;
                        this.lastChangeTime = millis();
                        this.alpha = 0; // 새 이미지로 변경 시 페이드 인 효과 초기화
                        this.fadeIn = true;
                    }
                }
                    this.images[this.currentImageIndex] ; 
                    tint(255, this.alpha); // 이미지에 알파 값 적용
                    image(this.images[this.currentImageIndex], 80, 200, 480, 270);
                    noTint();
                
                if (this.fadeIn) {
                    this.alpha += 10;
                    if (this.alpha >= 255) {
                         this.alpha = 255;
                         this.fadeIn = false; // 페이드인 효과
                     }
                    }
            }
    }


    handleClick() {
        //클릭 시 이벤트 여기에다가!
        
    }
}
//컬러로 다 바꾼 5개의 사진 차례대로 
