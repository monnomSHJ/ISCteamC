class School {
    constructor() {
        this.images = School.images;
        this.alpha =0;
        this.fadeIn= true;
    }

    static preload() {
        // 이미지 미리 로드
        School.images = [
            loadImage('assets/images/backgrounds/School1.png'),
            loadImage('assets/images/backgrounds/School2.png'),
            loadImage('assets/images/backgrounds/School3.png'),
            loadImage('assets/images/backgrounds/School4.png'),
            loadImage('assets/images/backgrounds/SchoolColor.png'),

          ];

       // for (let i = 1; i <= 5; i++) {
            //this.images.push(loadImage(`images/image${i}.jpg`));
        
    }

    display() {
        
        tint(255, this.alpha); // 이미지에 알파 값 적용
        image(this.images[day-1],0,0,1280,720);
        noTint();
            if (this.fadeIn) {
             this.alpha += 10;
             if (this.alpha >= 255) {
               this.alpha = 255;
               this.fadeIn = false;
             }
           }
         
        
        // day 변수의 값에 따라 이미지 표시
       
        setTimeout(() => {
            currentScene = wayToHome;
        }, 3000)

    }

    handleClick(){

    }


 

}
