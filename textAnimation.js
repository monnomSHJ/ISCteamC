class TextAnimation {
  constructor(textArray, x, y, delay) {
    this.textArray = textArray;
    this.x = x;
    this.y = y;
    this.delay = delay;
    this.currentIndex = 0;
    this.currentTextIndex = 0;
    this.lastTime = 0;
    this.complete = false;
    this.fullTextDisplayed = false;
  }

  update() {
    if (millis() - this.lastTime > this.delay && !this.complete && !this.fullTextDisplayed) {
      this.currentIndex++;
      this.lastTime = millis();

      if (this.currentIndex >= this.textArray[this.currentTextIndex].length) {
        this.currentIndex = this.textArray[this.currentTextIndex].length;
        this.fullTextDisplayed = true;

        // 마지막 텍스트 라인이 모두 출력되었을 경우 complete를 true로 설정
        if (this.currentTextIndex >= this.textArray.length - 1) {
          this.complete = true;
        }
      }
    }
  }

  display() {
    if (this.textArray[this.currentTextIndex]) { // 배열 요소가 존재하는지 확인
      let currentText;
      if (this.complete) {
        currentText = this.textArray[this.currentTextIndex];
      } else {
        currentText = this.textArray[this.currentTextIndex].substring(0, this.currentIndex);
      }
      fill(255);
      textSize(24);
      textAlign(CENTER, CENTER);
      text(currentText, this.x, this.y);
    }
  }

  isComplete() {
    return this.complete;
  }

  nextLine() {
    if (this.fullTextDisplayed && !this.complete) {
      this.currentIndex = 0;
      this.fullTextDisplayed = false;
      this.currentTextIndex++;
      if (this.currentTextIndex >= this.textArray.length) {
        this.complete = true;
      }
    } else if (!this.complete) {
      this.currentIndex = this.textArray[this.currentTextIndex].length;
      this.fullTextDisplayed = true;
      // 마지막 텍스트 라인이 모두 출력되었을 경우 complete를 true로 설정
      if (this.currentTextIndex >= this.textArray.length - 1) {
        this.complete = true;
      }
    }
  }

  reset() {
    this.currentIndex = 0;
    this.currentTextIndex = 0;
    this.lastTime = 0;
    this.complete = false;
    this.fullTextDisplayed = false;
  }
}
