class Transition {
  constructor(currentScene, nextScene, transitionText) {
    this.currentScene = currentScene;
    this.nextScene = nextScene;
    this.transitionText = transitionText;
    this.transitionDuration = 2000; // 전환 장면 표시 시간 (밀리초)
    this.startTime = millis(); // 전환 시작 시간
  }

  setup() {
    this.startTime = millis();
  }

  display() {
    // 현재 장면 표시
    this.currentScene.display();

    // 전환 장면 표시
    if (millis() - this.startTime < this.transitionDuration) {
      fill(0, (millis() - this.startTime) * 255 / this.transitionDuration); // 페이드 인 효과
      rect(0, 0, width, height);

      fill(255);
      textFont(fontNeo);
      textSize(32);
      textAlign(CENTER, CENTER);
      text(this.transitionText, width / 2, height / 2);
    } else {
      // 전환 시간 경과 후 다음 장면으로 전환
      currentScene = this.nextScene;
      if (currentScene.setup) {
        currentScene.setup();
      }
    }
  }

  handleClick() {
    // 전환 중에는 클릭 이벤트 처리하지 않음
  }
}
