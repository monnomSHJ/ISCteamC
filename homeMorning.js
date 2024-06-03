class HomeMorning {
    constructor() {
      this.image = HomeMorning.image;
    }
    
    static preload() {
        HomeMorning.image = loadImage('assets/images/backgrounds/homeMorningFullMono.png');
      }

    display() {
        //여기에 디스플레이 설정하기
        //각 오브젝트 변수에 따라 다르게 디스플레이 할 것!
        image(this.image, 0, 0, width, height);
    }

    handleClick() {
        //클릭 시 이벤트 여기에다가!
    }

    /*
    createButton() {
        let button = createButton('학교가기');
        button.position(width - 100, height - 50);
        button.mousePressed(() => {
            //currentScene = wayToSchool;
        });
    }
    */


}

