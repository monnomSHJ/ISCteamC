class Transition {
    constructor(currentScene, nextScene, transitionText) {
      this.currentScene = currentScene;
      this.nextScene = nextScene;
      this.transitionText = transitionText;
      this.fadeDuration = 2000; // 페이드인/페이드아웃 시간 (밀리초)
      this.waitDuration = 5000; // 대기 시간 (밀리초)
      this.startTime = millis(); // 전환 시작 시간
      this.phase = 0; // 0: 페이드인, 1: 대기, 2: 페이드아웃
      this.alpha = 0; // 초기 알파 값
    }
  
    setup() {
      this.startTime = millis();
      this.phase = 0;
      this.alpha = 0;
    }
  
    display() {
      let elapsedTime = millis() - this.startTime;
  
      if (this.phase === 0) {
        // 페이드인 단계
        this.alpha = map(elapsedTime, 0, this.fadeDuration, 0, 255);
        if (elapsedTime >= this.fadeDuration) {
          this.phase = 1;
          this.startTime = millis();
          currentScene = this.nextScene; // 대기 화면 도중 다음 장면으로 전환
          if (currentScene.setup) {
            currentScene.setup();
          }
        }
      } else if (this.phase === 1) {
        // 대기 단계
        this.alpha = 255;
        if (elapsedTime >= this.waitDuration) {
          this.phase = 2;
          this.startTime = millis();
        }
      } else if (this.phase === 2) {
        // 페이드아웃 단계
        this.alpha = map(elapsedTime, 0, this.fadeDuration, 255, 0);
        if (elapsedTime >= this.fadeDuration * 2) {
          return; // 페이드아웃 완료 후 종료
        }
      }
  
      // 검은 사각형과 텍스트 표시
      fill(0, this.alpha);
      rect(0, 0, width, height);
      fill(255, this.alpha);
      textFont(fontNeo);
      textSize(48);
      textAlign(CENTER, CENTER);
      text(this.transitionText, width / 2, height / 2);
    }
  
    handleClick() {
      // 전환 중에는 클릭 이벤트 처리하지 않음
    }
  }
  