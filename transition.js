class Transition {
  constructor(currentScene, nextScene, transitionText) {
    this.currentScene = currentScene;
    this.nextScene = nextScene;
    this.transitionText = transitionText;
    this.fadeDuration = 1000; // 페이드인 시간 (밀리초)
    this.waitDuration = 3000; // 대기 시간 (밀리초)
    this.startTime = millis(); // 전환 시작 시간
    this.alpha = 0; // 초기 알파 값
  }

  setup() {
    this.startTime = millis();
    this.alpha = 0;
  }

  display() {
    let elapsedTime = millis() - this.startTime;

    if (elapsedTime <= this.fadeDuration) {
      // 페이드인 단계
      this.alpha = map(elapsedTime, 0, this.fadeDuration, 0, 255);
    } else {
      // 대기 단계
      this.alpha = 255;
    }

    // 일정 시간 후 다음 장면으로 전환
    if (elapsedTime > this.fadeDuration + this.waitDuration) {
      currentScene = this.nextScene;
      if (currentScene.setup) {
        currentScene.setup();
      }
      return; // 다음 장면으로 전환 후 종료
    }

    // 검은 사각형과 텍스트 표시
    fill(0, this.alpha);
    rect(0, 0, width, height);
    fill(255, this.alpha);
    textFont(fontNeo);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(this.transitionText, width / 2, height / 2);
  }

  handleClick() {
    // 전환 중에는 클릭 이벤트 처리하지 않음
  }
}