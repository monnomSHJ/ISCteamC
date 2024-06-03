class HomeNight {

    constructor() {
        this.image = HomeNight.image;
        //this.book= NightBook.image
        this.texts = [
            '오늘은 @@과 @@을 발견했다.',
            '오늘은 @@과 @@을 발견했다.',
            '오늘은 @@과 @@을 발견했다.',
            '오늘은 @@과 @@을 발견했다.',
            '오늘은 @@과 @@을 발견했다.',

        ];
        this.currentTextIndex = day - 1;
        this.displayedText = "";
        this.textAnimationSpeed = 5; // 애니메이션 속도
        this.textAnimationCounter = 0; // 애니메이션 카운터
    }

    static preload() {
        if (day==1){
            HomeNight.image = loadImage('assets/images/backgrounds/homeNightMono.png');
        } else {
            HomeNight.image = loadImage('assets/images/backgrounds/homeNightColor.png');

        }

       // NightBook.image = loadImage('assets/images/assets/homeNightBook.png');

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
            this.drawSleepButton(); // 모든 텍스트가 다 나오면 버튼을 그리기
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

    drawNightBook() {
        //this.image()
    }

    drawSleepButton() {
        fill(255);
        rect(width - 100, height - 50, 80, 30);
        textSize(16);
        fill(0)
        textAlign(CENTER, CENTER);
        text('잠자기', width - 60, height - 35);
        fill(255);
    }

    handleClick() {
        if (this.displayedText.length === this.texts[this.currentTextIndex].length &&
            mouseX > width - 100 && mouseX < width - 20 && mouseY > height - 50 && mouseY < height - 20) {
            changePage(homeMorning);
        }
    }
}

  

/*
let homeNightColor, homeNightMono, homeNightBook;
let fadeInAlpha = 0;
let showBookImage = false;
let homeMorning = 'homeMorning';
let endingScene = 'endingScene';

class HomeNight {
    static preload() {
        homeNightColor = loadImage('assets/images/backgrounds/homeNightColor.png');
        homeNightMono = loadImage('assets/images/backgrounds/homeNightMono.png');
        homeNightBook = loadImage('assets/images/backgrounds/homeNightBook.png');
    }

    display() {
        setTimeout(() => {
            showBookImage = true;
        }, 1000); // 1초 후 이미지 변경

        if (showBookImage) {
            tint(255, fadeInAlpha);
            image(homeNightBook, width / 2 - homeNightBook.width / 2, height / 2 - homeNightBook.height / 2);
            fadeInAlpha += 5; // 페이드 인 속도 조절
            if (fadeInAlpha > 255) {
                fadeInAlpha = 255;
            }
        }

        this.displayDayImage();
        this.drawSleepButton();
    }

    displayDayImage() {
        let selectedImage;
        if (day === 1) {
            selectedImage = wtsStore;
        } else if (day === 2) {
            selectedImage = wtsFlower;
        } else if (day === 3) {
            selectedImage = wtsCat;
        } else if (day === 4) {
            selectedImage = wtsCycle;
        }

        if (selectedImage) {
            image(selectedImage, width - selectedImage.width / 2 - 20, height / 2 - selectedImage.height / 2);
        }
    }

    drawSleepButton() {
        fill(255);
        rect(width - 100, height - 50, 80, 30);
        fill(0);
        textSize(16);
        textAlign(CENTER, CENTER);
        text('잠자기', width - 60, height - 35);
    }

    handleClick() {
        if (mouseX > width - 100 && mouseX < width - 20 && mouseY > height - 50 && mouseY < height - 20) {
            if (day < 5) {
                day++;
                //currentScene = homeMorning;
            } else {
                //currentScene = endingScene;
            }
        }
    }
}
*/