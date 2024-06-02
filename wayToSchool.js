let wtsBG;
let wtsStore;
let wtsStoreBakery;
let wtsStoreCafe;
let wtsStoreJuice;

class WayToSchool {
    static preload() {
        wtsBG = loadImage('assets/images/backgrounds/WayToSchoolColor.png');
        wtsStore = loadImage('assets/images/objects/wayToSchoolStore0.png');
        wtsStoreBakery = loadImage('assets/images/objects/wayToSchoolStore1.png');
        wtsStoreCafe = loadImage('assets/images/objects/wayToSchoolStore2.png');
        wtsStoreJuice = loadImage('assets/images/objects/wayToSchoolStore3.png');
        //여기에 이미지 로드하기 ex. MainMenu.imageName = loadImage()
    }

    display() {
        wtsBG.filter(GRAY);
        image(wtsBG, 0, 0);
        image(wtsStore, 800, 240);
        //여기에 디스플레이 설정하기
        //각 오브젝트 변수에 따라 다르게 디스플레이 할 것!
    }

    handleClick() {
        //클릭 시 이벤트 여기에다가!
    }
}