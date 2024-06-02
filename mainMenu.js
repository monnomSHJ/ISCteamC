class MainMenu {

    constructor() {
        this.image = MainMenu.image;
    }

    static preload() {
        //여기에 이미지 로드하기 ex. MainMenu.imageName = loadImage()
        MainMenu.image = loadImage('assets/images/backgrounds/mainMenuMono.png');
    }

    display() {
        //여기에 디스플레이 설정하기
        //각 오브젝트 변수에 따라 다르게 디스플레이 할 것!
        image(this.image, 0, 0, width, height);
    }

    handleClick() {
        changePage(openingScene);
    }
}