class OpeningScene {
  
    constructor(){
      this.images = [];
      this.texts = ["눈을 뜨면, 똑같은 하루가 또다시 시작된다.", "특별할 것 없는 길을 걸어, 학교에 간다.", "과제와 공부에 치여, 학교에서의 시간이 빠르게 흘러간다.",
                    "피곤에 절어 터덜터덜, 집으로 향한다.", "집에 도착하면 벌써 늦은 밤. 생각할 여유 없이 잠에 든다.", 
                    "과연 일상 속 나의 행복은", "어디에서 찾을 수 있을까?"]
      this.currentImageIndex = 0;
      this.currentTextIndex = 0;
      this.alpha =0;
      thsi.fadeIn= True;
    }
  
    static preload() {
        //여기에 이미지 로드하기 ex. MainMenu.imageName = loadImage()
        //아직 오브젝트 포함 흑백 이미지가 업로드되지 않아 이미지명은 추가 수정할 예정
            this.images = [
      loadImage('assets/images/backgrounds/homeMorningMono.png'),
      loadImage('assets/images/backgrounds/wayToSchoolMono.png'),
      loadImage('assets/images/backgrounds/SchoolMono.png'),
      loadImage('assets/images/backgrounds/wayToHomeMono.png'),
      loadImage('assets/images/backgrounds/homeNightMono.png').
      loadImage('assets/images/backgrounds/mainImageMono.png')
    ];
  
        
    }

    display() {
        //여기에 디스플레이 설정하기
        //각 오브젝트 변수에 따라 다르게 디스플레이 할 것!
      if (this.images.length > 0) {
       tint(255, this.alpha); // 이미지에 알파 값 적용
       image(this.images[this.currentImageIndex], 1280, 720);
       noTint();
       if (this.fadeIn) {
        this.alpha += 10;
        if (this.alpha >= 255) {
          this.alpha = 255;
          this.fadeIn = false;
        }
      }
    }
      
      fill(255);
      rect(0,height-120,1280,120);
      
      textSize(32);
      textAlign(CENTER);
      fill(0);
      text(this.texts[this.currentTextIndex],640,637);
      
    }

    handleClick() {
        //클릭 시 이벤트 여기에다가!
      if(this.currentImageIndex ===this.images.length-1){
        if(this.currentTextIndex < this.texts.length-1){
          this.currentTextIndex++;
        }
      } else{
        this.currentImageIndex++;
        this.currentImageIndex= this.currentImageIndex;
      }
      this.alpha = 0;
      this.fadeIn =true;
    }
}
