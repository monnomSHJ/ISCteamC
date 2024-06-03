class HomeMorning {
    constructor() {
        this.image = HomeMorning.image;
        this.texts = [
            '오늘은 월요일이다. 학교에 가자.',
            '오늘은 화요일이다. 학교에 가자.',
        ];
        this.currentTextIndex = 1;
        this.displayedText = this.texts[this.currentTextIndex];
    }

    static preload() {
        HomeMorning.image = loadImage('assets/images/backgrounds/homeMorningFullMono.png');
    }

    display() {
        image(this.image, 0, 0, width, height);
        fill(0);
        rect(0, height - 120, 1280, 120);
        rect(0, 0, 1280, 120);

        textSize(32);
        textAlign(CENTER);
        fill(255);
        text(this.displayedText, 640, height - 60);
    }

    handleClick() {
        changePage(wayToSchool);
    }
}

