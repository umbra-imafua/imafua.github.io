export default class AudioPlayer {
    constructor(selector = '.music-player', audio = [], title = '.music-title', desc = '.music-desc'){
        this.playerElem = document.querySelector(selector);
        
        this.titleElem = document.querySelector(title);
        this.descElem = document.querySelector(desc);

        this.titleDefault = this.titleElem.innerHTML
        this.descDefault = this.descElem.innerHTML

        this.descHeightDefault = this.descElem.offsetHeight;
        
        this.audio = audio;
        this.currentAudio = null;
        this.createPlayerElements();
        this.audioContext = null;
    }

    createVisualiser(){

        this.audioContext = new AudioContext();
        const src = this.audioContext.createMediaElementSource(this.audioElem);

        const analyser = this.audioContext.createAnalyser();
        const canvas = this.visualiserElem;

        const ctx = canvas.getContext('2d');
        src.connect(analyser);

        analyser.connect(this.audioContext.destination);
        analyser.fftSize = 64;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const barWidth = (canvas.width / bufferLength) * 2.5;

        function renderFrame(){

            canvas.width = canvas.parentElement.scrollWidth
            canvas.height = canvas.parentElement.scrollHeight
            
            requestAnimationFrame(renderFrame);

            let bar=0;
            analyser.getByteFrequencyData(dataArray);

            for (let i=0; i < bufferLength; i++){
                const barHeight = dataArray[i] - 75;
                const c = barHeight + (25 * (i/bufferLength));
                ctx.fillStyle = 'rgb('+c+', '+c+', '+c+')';
                ctx.fillRect(bar, canvas.height - barHeight, barWidth, barHeight);
                bar += barWidth * 1.2;
            }
        }

        renderFrame();
    }

    createPlayerElements() {
        this.audioElem = document.createElement('audio');
        const playListElem = document.createElement('div');
        playListElem.classList.add('playlist');

        this.visualiserElem = document.createElement('canvas');


        this.playerElem.appendChild(this.audioElem);

        this.playerElem.appendChild(this.visualiserElem);
        this.playerElem.appendChild(playListElem);

        this.createPlaylistElements(playListElem)
    }

    createPlaylistElements(playListElem){
        this.audio.forEach(audio =>{
            const audioItem = document.createElement('a');
            audioItem.id = 'is-pause';
            audioItem.href = audio.url;
            audioItem.innerHTML = audio.name;
            audioItem.title = audio.desc;

            this.setupEventListener(audioItem);

            playListElem.appendChild(audioItem);

        })

    }

    setupEventListener(audioItem){

        audioItem.addEventListener('mouseleave',(e)=>{
            this.titleElem.innerHTML = this.titleDefault;
            this.descElem.innerHTML = this.descDefault;
            
            this.descElem.innerHTML = this.descDefault;

            this.descElem.style.minHeight  = 0

            this.descHeightDefault =  this.descElem.offsetHeight;

            
        });

        audioItem.addEventListener('mouseover',(e)=>{
            
            this.titleElem.innerHTML = audioItem.innerHTML;                            
            this.descElem.innerHTML = audioItem.title;

            this.descElem.style.minHeight  = (this.descHeightDefault + 'px');

        });

        audioItem.addEventListener('click',(e)=>{
            e.preventDefault();

            if (!this.audioContext){
                this.createVisualiser();
            }

            const isCurrentAudio = audioItem.getAttribute('href') === (this.currentAudio && this.currentAudio.getAttribute('href'));
        
            if (isCurrentAudio && !this.audioElem.paused){
                this.setIsPause(this.currentAudio);
                this.audioElem.pause();
            }else if(isCurrentAudio && this.audioElem.paused){
                this.setIsPlay(this.currentAudio);
                this.audioElem.play();
            }else{
                if (this.currentAudio){
                    this.setIsPause(this.currentAudio);
                }
                this.currentAudio = audioItem;
                this.setIsPlay(this.currentAudio);
                this.audioElem.src = this.currentAudio.getAttribute('href');
                this.audioElem.play();
            }
        });
    }

    setIsPause(elem){
        elem.id = ('is-pause');
    }
    setIsPlay(elem){
        elem.id = ('is-play');
    }

}