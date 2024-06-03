class HomeMorning {
    constructor() {
        this.image = HomeMorning.image;
        this.texts = [
            '오늘은 월요일이다. 너무 힘들군.',
            '오늘은 화요일이다. 학교에 가자.',
            '오늘은 수요일이다. 이틀만 버티면 된다!.',
            '오늘은 목요일이다. 내일은 불금이다!',
            '오늘은 금요일이다. 이번 주는 뭔가 평소랑 다른 것 같다.'
        ];
        this.currentTextIndex = day-1;
        this.displayedText = "";
        this.textAnimationSpeed = 5; // 애니메이션 속도
        this.textAnimationCounter = 0; // 애니메이션 카운터

        console.log(day);
    }

    static preload() {
        if (day==1){
            HomeMorning.image = loadImage('assets/images/backgrounds/homeMorningFullMono.png');
        } else {
            HomeMorning.image = loadImage('assets/images/backgrounds/homeMorningFullColor.png');

        }

    }

    display() { 
        if (day == 1){
            image(this.image, 0, 0, width, height);

        } else {
            let tintValue = day*51; // day 값에 따라 0에서 255로 매핑
            // 흑백 효과를 위해 RGB 값을 동일하게 설정
            tint(tintValue, tintValue, tintValue, 255);    
            image(this.image, 0, 0, width, height);
        }

        noTint(); // 다음 이미지에 영향을 주지 않도록 tint 해제

        fill(0);
        rect(0, height - 120, 1280, 120);
        rect(0, 0, 1280, 120);

        textSize(32);
        textAlign(CENTER, CENTER);
        fill(255);
        text(this.displayedText, 640, height - 70);
        this.updateDisplayedText(); // 텍스트 한글자씩 나오는 함수

        if (this.displayedText.length === this.texts[this.currentTextIndex].length) {
            this.drawSchoolButton(); // 모든 텍스트가 다 나오면 버튼을 그리기
        }
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
    }

    drawSchoolButton() {
        fill(255);
        rect(width - 100, height - 50, 80, 30);
        textSize(16);
        fill(0)
        textAlign(CENTER, CENTER);
        text('학교가기', width - 60, height - 35);
        fill(255);
    }

    handleClick() {
        if (this.displayedText.length === this.texts[this.currentTextIndex].length &&
            mouseX > width - 100 && mouseX < width - 20 && mouseY > height - 50 && mouseY < height - 20) {
            changePage(wayToSchool);
        }
    }
}
