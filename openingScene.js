class OpeningScene {
    static preload() {
        //여기에 이미지 로드하기 ex. MainMenu.imageName = loadImage()
        //아직 오브젝트 포함 흑백 이미지가 업로드되지 않아 이미지명은 추가 수정할 예정
            this.images = [
      loadImage('images/backgrounds/.png'),
      loadImage('images/image2.png'),
      loadImage('images/image3.png'),
      loadImage('images/image4.png')
    ];
  
        this.images = this.imageNames.map(img => loadImage(img));
    }

    display() {
        //여기에 디스플레이 설정하기
        //각 오브젝트 변수에 따라 다르게 디스플레이 할 것!
    }

    handleClick() {
        //클릭 시 이벤트 여기에다가!
    }
}
