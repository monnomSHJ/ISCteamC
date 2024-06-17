class Diary {
    constructor() {
      this.bookImages = Diary.bookImages;

      this.rectW = 130;
      this.rectH = 85;

      this.rects = [
        { x: 351, y: 328, index: 0, status: 0 },
        { x: 496, y: 328, index: 1, status: 0 },
        { x: 351, y: 454, index: 2, status: 0 },
        { x: 496, y: 454, index: 3, status: 0 },
        { x: 654, y: 202, index: 4, status: 0 },
        { x: 799, y: 202, index: 5, status: 0 },
        { x: 654, y: 328, index: 6, status: 0 },
        { x: 799, y: 328, index: 7, status: 0 },
        { x: 654, y: 454, index: 8, status: 0 },
        { x: 799, y: 454, index: 9, status: 0 }
      ]

      this.isFilled = false;

      this.saveMouseOver = false;
    }
  
    static preload() {
      Diary.bookImages = [
        loadImage('assets/images/objects/diaryBookDay1.png'),
        loadImage('assets/images/objects/diaryBookDay2.png'),
        loadImage('assets/images/objects/diaryBookDay3.png'),
        loadImage('assets/images/objects/diaryBookDay4.png'),
        loadImage('assets/images/objects/diaryBookDay4.png')
      ]

      Diary.saveButtonImage = loadImage('assets/images/objects/diarySaveButton.png');
    }
  
    display() {
      console.log(this.isFilled);

      imageMode(CENTER);
      image(this.bookImages[day-1], width/2, height/2, 710, 480);

      for (let rect of this.rects) {
        if (diaryPictures[rect.index]) {
          if (rect.status === 0) {
            if (mouseX > rect.x && mouseX < rect.x + this.rectW && mouseY > rect.y && mouseY < rect.y + this.rectH) {
              stroke(255, 0, 0, 100);
              strokeWeight(2);
              fill(0, 200);
            } else {
              noStroke();
              fill(0, 100);
            }
            rectMode(CORNER);
            window.rect(rect.x, rect.y, this.rectW, this.rectH);

          } else {
            imageMode(CORNER);
            image(diaryPictures[rect.index], rect.x, rect.y, this.rectW, this.rectH);
          }
        }
      }

      imageMode(CORNER);

      this.isFilled = true;
      for (let i = 0; i <= day * 2 - 1; i++) {
        if (this.rects[i].status !== 1) {
          this.isFilled = false;
          break;
        }
      }

      if (this.isFilled) {
        this.saveButton();
      }
    }

    handleClick() {
      for (let rect of this.rects) {
        if (mouseX > rect.x && mouseX < rect.x + this.rectW && mouseY > rect.y && mouseY < rect.y + this.rectH) {
          if (diaryPictures[rect.index] && rect.status === 0) {
            rect.status = 1;
            clickSound.play();
          }
        }
      }
    }

    saveButton() {
      if (mouseX > 930 - 32.5 && mouseX < 930 + 32.5 && mouseY > 530 - 32.5 && mouseY < 530 + 32.5) {
        this.saveMouseOver = true;
      } else {
        this.saveMouseOver = false;
      }

      if (this.saveMouseOver) {
        imageMode(CENTER);
        image(Diary.saveButtonImage, 930, 530, 80, 80);
      } else {
        imageMode(CENTER);
        image(Diary.saveButtonImage, 930, 530, 65, 65);
      }

      imageMode(CORNER);
    }
  }