class ChoosingButton {

    constructor(num, buttonText, overText) {
        this.isHovering = 0;
        this.number = num;
        this.buttonText = buttonText;
        this.overText = overText;
        this.x = [width*2/7 - 150, width/2 - 150, width*5/7 - 150];
        this.y = height - 70 - 30;
        this.buttonWidth = 300;
        this.buttonHeight = 60;
    }

    static preload() {
        ChoosingButton.images = [
          loadImage('assets/images/objects/choosingButton.png'),
          loadImage('assets/images/objects/choosingButtonOver.png')
        ];
      }

      display() {
        image(ChoosingButton.images[this.isHovering], this.x[this.number], this.y, this.buttonWidth, this.buttonHeight);
        fill(0);
        textFont(fontNeo);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(this.buttonText, this.x[this.number] + this.buttonWidth / 2, this.y + this.buttonHeight / 2 - 2);
      }

    isMouseOver() {
        return mouseX > this.x[this.number] && mouseX < this.x[this.number] + this.buttonWidth && mouseY > this.y && mouseY < this.y + this.buttonHeight;
      }

    update() {
        if (this.isMouseOver()) {
            this.isHovering = 1;
        } else {
            this.isHovering = 0;
        }
    }       
}