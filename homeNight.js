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

