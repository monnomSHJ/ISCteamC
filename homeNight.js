let homeNightColor, homeNightMono, homeNightBook;
let fadeInAlpha = 0;
let showBookImage = false;
let timer = 0;

class HomeNight {
    static preload() {
        //여기에 이미지 로드하기 ex. MainMenu.imageName = loadImage()
        HomeNight.homeNightColor = loadImage()
        HomeNight.homeNightMono = loadImage()
        HomeNight.homeNightBook = loadImage()

    }

    display() {
        setTimeout(() => {
            showBookImage = true;
        }, 1000); // 1초 후 이미지 변경
        if (showBookImage) {
            tint(255, fadeInAlpha);
            image(homeNightBook, width/2 - homeNightBook.width/2, height/2 - homeNightBook.height/2);
            fadeInAlpha += 5; // 페이드 인 속도 조절
            if (fadeInAlpha > 255) {
                fadeInAlpha = 255;
            }
        }
        drawSleepButton();

    }

    drawSleepButton() {
        fill(255);
        rect(width - 100, height - 50, 80, 30);
        fill(0);
        textSize(16);
        textAlign(CENTER, CENTER);
        text('잠자기', width - 60, height - 35);
    }

    mousePressed() {
        // 우측 하단 버튼 클릭 시 day 증가
        if (mouseX > width - 100 && mouseX < width - 20 && mouseY > height - 50 && mouseY < height - 20) {
            if (day < 5) {
                day++;
                console.log('Day:', day);
            }
        }
    }

    handleClick() {
        //클릭 시 이벤트 여기에다가!
    }
}