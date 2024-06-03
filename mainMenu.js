class MainMenu {
    constructor() {
      this.image = MainMenu.image;
    }
  
    static preload() {
      MainMenu.image = loadImage('assets/images/backgrounds/mainMenuMono.png');
    }
  
    display() {
      image(this.image, 0, 0, width, height);
    }
  
    handleClick() {
      changePage(openingScene, 'Loading...');
    }
  }
  