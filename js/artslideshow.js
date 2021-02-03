export default class SlideShow {

    constructor(selector = '.music-player', audio = [], title = '.music-title', desc = '.music-desc'){
        this.slideElem = document.querySelector(selector);
        
        this.titleElem = document.querySelector(title);
        this.descElem = document.querySelector(desc);

        this.titleDefault = this.titleElem.innerHTML
        this.descDefault = this.descElem.innerHTML

        this.descHeightDefault = this.descElem.offsetHeight;
        
        this.images = images;
        this.currentImage = null;
        this.createSlideElements();
    }

}