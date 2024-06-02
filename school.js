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

        
    }

    display() {
        
        tint(255, this.alpha); // 이미지에 알파 값 적용
        image(this.images[day-1],0,0,1280,720); //day값에 따라 인덱스 호출 (day 증가 함수는 전역변수로 넣을 것 같아서 이렇게 놔둠)
        noTint();
            if (this.fadeIn) {
             this.alpha += 10;
             if (this.alpha >= 255) {
               this.alpha = 255;
               this.fadeIn = false;
             }
           } //이미지 페이드인
         
        
        // day 변수의 값에 따라 이미지 표시
       
        setTimeout(() => {
            currentScene = wayToHome;
        }, 3000) //시간 3초 지나면 wayToHome으로 자동 전환 

    }

    handleClick(){

    }


 

}
