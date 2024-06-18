class MainMenu {
    constructor() {
      this.image = MainMenu.image;
    }
  
    static preload() {
      MainMenu.image = loadImage('./assets/images/backgrounds/mainImageMono.png');
    }
  
    display() {
      image(this.image, 0, 0, width, height);

      //타이틀
      textFont(fontNeo);
      textSize(80);
      textAlign(LEFT, CENTER);
      fill(0, 200);
      stroke(255);
      strokeWeight(12);

      push();
      translate(width/10, height/7);
      text("Métro,", 0, 0);
      text("Boulot,", 0, 90);
      text("Dodo", 0, 180);
      pop();

      //시작하기
      textSize(32);
      textAlign(CENTER, CENTER);
      stroke(0);
      strokeWeight(6);
      fill(255);
      push();
      translate(width/2, height-100);
      if(frameCount % 80 < 60) {
        text("- Take a Photo to Continue -", 0, 0);
      }
      pop();
      noStroke();
    }
  
    handleClick() {
      cameraSound.play();
      openingScene = new OpeningScene();
      changePage(openingScene, 'Loading...');
    }
  }
  