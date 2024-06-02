class OpeningScene {
  
    constructor(){
      this.images = OpeningScene.images;
      this.texts = ["눈을 뜨면, 똑같은 하루가 또다시 시작된다.", 
                    "특별할 것 없는 길을 걸어, 학교에 간다.",
                    "과제와 공부에 치여, 학교에서의 시간이 빠르게 흘러간다.", 
                    "피곤에 절어 터덜터덜, 집으로 향한다.", 
                    "집에 도착하면 벌써 늦은 밤. 생각할 여유 없이 잠에 든다.",
                    "지루하게 반복되는 일상, 나의 행복은 어디에 있을까?"]
      this.currentImageIndex = 0;
      this.currentTextIndex = 0;
      this.alpha =0;
      this.fadeIn= true;
      this.displayedText = ""; // 현재 표시되는 텍스트
      this.textAnimationSpeed = 10; // 애니메이션 속도
      this.textAnimationCounter = 0; // 애니메이션 카운터
    }
  
    static preload() {
        //여기에 이미지 로드하기 ex. MainMenu.imageName = loadImage()
        //아직 오브젝트 포함 흑백 이미지가 업로드되지 않아 이미지명은 추가 수정할 예정
            OpeningScene.images = [
      loadImage('assets/images/backgrounds/homeMorningFullMono.png'),
      loadImage('assets/images/backgrounds/wayToSchoolFullMono.png'),
      loadImage('assets/images/backgrounds/SchoolFullMono.png'),
      loadImage('assets/images/backgrounds/wayToHomeMono.png'),
      loadImage('assets/images/backgrounds/homeNightMono.png'),
      loadImage('assets/images/backgrounds/mainImageMono.png')
    ];
  
        
    }

    display() {
        //여기에 디스플레이 설정하기
        //각 오브젝트 변수에 따라 다르게 디스플레이 할 것!
      if (this.images.length > 0) {
       tint(255, this.alpha); // 이미지에 알파 값 적용
       image(this.images[this.currentImageIndex], 0,0, 1280, 720);
       noTint();
       if (this.fadeIn) {
        this.alpha += 10;
        if (this.alpha >= 255) {
          this.alpha = 255;
          this.fadeIn = false;
        }
      }
    }
      
      fill(0);
      rect(0,height-120,1280,120);
      
      textSize(32);
      textAlign(CENTER);
      fill(255);
      //text(this.texts[this.currentTextIndex],640,637);
      text(this.displayedText, 640, 637);
      
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
      } //텍스트 순차적으로 나타나기 

    handleClick() {
        //클릭 시 이벤트 여기에다가!
      if(this.currentImageIndex ===this.images.length-1){
        if(this.currentTextIndex < this.texts.length-1){
          //this.currentTextIndex= this.currentImageIndex;
          this.currentTextIndex ++;
        }
      } else{
        this.currentImageIndex++;
        this.currentTextIndex = this.currentImageIndex;
      }
      this.alpha = 0;
      this.fadeIn =true;
      this.displayedText = "";
    }
}
