class Transition {
  constructor(currentScene, nextScene, transitionText) {
    this.currentScene = currentScene;
    this.nextScene = nextScene;
    this.transitionText = transitionText;
    this.fadeDuration = 2000; // 페이드아웃 시간 (밀리초)
    this.waitDuration = 3000; // 대기 시간 (밀리초)
    this.startTime = millis(); // 전환 시작 시간
    this.phase = 0; // 0: 대기, 1: 페이드아웃
    this.alpha = 255; // 초기 알파 값
  }

  setup() {
    this.startTime = millis();
    this.phase = 0;
    this.alpha = 255;
  }

  display() {
    let elapsedTime = millis() - this.startTime;

    if (this.phase === 0) {
      // 대기 단계
      if (elapsedTime >= this.waitDuration) {
        this.phase = 1;
        this.startTime = millis();
      }
    } else if (this.phase === 1) {
      // 페이드아웃 단계
      this.alpha = map(elapsedTime, 0, this.fadeDuration, 0, 255);
      if (elapsedTime >= this.fadeDuration) {
        currentScene = this.nextScene;
        if (currentScene.setup) {
          currentScene.setup();
        }
        return; // 페이드아웃 완료 후 종료
      }
    }

    // 현재 장면 표시
    this.currentScene.display();

    // 검은 사각형과 텍스트 표시
    fill(0, 255 - this.alpha);
    rect(0, 0, width, height);
    fill(255, 255 - this.alpha);
    textFont(fontNeo);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(this.transitionText, width / 2, height / 2);
  }

  handleClick() {
    // 전환 중에는 클릭 이벤트 처리하지 않음
  }
}
