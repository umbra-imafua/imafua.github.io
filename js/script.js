//on page load play intro
document.getElementById('bgvid').play();  
//if playing prevent scrolling
//window.onscroll = function () { if(!document.getElementById('bgvid').ended && !document.getElementById('bgvid').error){ window.scrollTo(0, 0); } };
//jump to top on refresh
window.onbeforeunload = function () {window.location.replace("#bgvid"); document.getElementById('return-to-top').click(); window.scrollTo(0, 0); window.scrollY(0);};


//animation timing
var frame = 0;
var t=setInterval(pageanimation,33);

function pageanimation() {
    titleanimation()


    frame = frame+1;
    if(frame>59){frame=0};
}

//title effects
const umbra_title = document.getElementById('umbra-title');
const imafua_title = document.getElementById('imafua-title');
const umbra_text = umbra_title.innerHTML;
const imafua_text = imafua_title.innerHTML;

var titleanimationtime = 0;

function titleanimation(){

    if(Math.random()>0.99){
        titleanimationtime += Math.floor(Math.random() * 11);
    }

    if(titleanimationtime > 0){
        var umbragliches = "        ___---☒▲░▀█UMBRA─🝗"
        titleanimationtime -= 1;
        umbra_title.innerHTML = "\n" + randstring(33,umbragliches) + "\n" + randstring(33,umbragliches) + "\n" + randstring(33,umbragliches);
        imafua_title.innerHTML = randstring(6,'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }else{
        umbra_title.innerHTML = umbra_text;
        imafua_title.innerHTML = imafua_text;
    }
}
function randstring(length,characters) {
    var result           = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//global music player
import AudioPlayer from './music.js';
const audioPlayer = new AudioPlayer('.music-player',[
    { url: 'media/music/blurremix.wav', name: 'girls and boys', desc: 'I made this remix of the blur song \'girls and boys\' during pride month 2019, I was still figuring myself out at the time.'},
    { url: 'media/music/CHANTINGMIDGETS.wav', name: 'flutes', desc: 'I really like the eastern sounding sakura plugin that comes with FL-studio.'},
    { url: 'media/music/CHILL LIKE A RAINY FOREST.wav', name: 'rainy forest', desc: 'Sitting on a mossy log underneath a thick foliage, watching the rain run off the leaves.'},
    { url: 'media/music/chillo.wav', name: 'chill game', desc: 'Probably a game soundtrack.'},
    { url: 'media/music/CryOutBothEyes.wav', name: 'both eyes', desc: 'you\'ll cry out of boh eyes now, your fight is over now.'},
    { url: 'media/music/devilmeme.wav', name: 'devilman', desc: 'I was unshamefully inspired by the \'devilman crybaby\' ost.'},
    { url: 'media/music/elecytonionox.wav', name: 'sing synth', desc: 'I like synths that sound like they\'re singing.'},
    { url: 'media/music/fixTheDrums.wav', name: 'bring', desc: 'The filename for this song was just \'fixTheDrums.wav\'.'},
    { url: 'media/music/funkmypottedplant.wav', name: 'gamesong', desc: 'I made this song for a videogame I was making with my freinds.'},
    { url: 'media/music/funky bit.wav', name: 'luci', desc: 'I was playing a lot of overwatch at the time.'},
    { url: 'media/music/gkitchthiung.wav', name: 'gkitch thing', desc: 'I remember being really pleased with this track when I made it but now I find it a tad annoying.'},
    { url: 'media/music/gunLancersBread.wav', name: 'gun lance', desc: 'At the time I was making a game about cyberpunk ww1 lancer in the occupied british countryside.'},
    { url: 'media/music/happy knights glich.wav', name: 'happy knight', desc: 'It was 2018 and I was having difficaulty making elements flow into each other, I\'m a bit better now.'},
    { url: 'media/music/highASfuckXD.wav', name: 'silent start', desc: 'There is a song, it just.. doesn\'t start for a bit.'},
    { url: 'media/music/IMagineIfMemes.wav', name: 'layering', desc: 'I was always being told to not be afraid of looping elements more.'},
    { url: 'media/music/KAYDOOP.wav', name: 'kaydoop', desc: 'Anime.'},
    { url: 'media/music/NOEGGSONRICE.wav', name: 'eggs on rice', desc: 'I like glichy noises. I was always trying to find new ways of making weird alien sounds.'},
    { url: 'media/music/Owls of aireas.wav', name: 'owls of aireas', desc: 'I think I made this song for a videogame about a gangster who has to look after a runaway princess.'},
    { url: 'media/music/PianoForMoments.wav', name: 'moments', desc: 'There were probably lyrics in my head when I made this, if only I could sing.'},
    { url: 'media/music/pIAnoIOs.wav', name: 'arpiano', desc: 'Harsh dubstep sounds with soft piano.'},
    { url: 'media/music/PIANOLOVEIT.wav', name: 'a digital freind', desc: 'As upbeat as it sounds, I made this song when I was very depressed. I remember one lyric was \'You\'ll be yourself, no one else, as you keep trying, you\'ll stay the same, what a shame\'.'},
    { url: 'media/music/PIANOTUNEOWRK ON IDK.wav', name: 'bristol', desc: 'I made this for a showreel for studying film.'},
    { url: 'media/music/Pranked.wav', name: 'pranked', desc: 'I guess I was listening to a lot of Porter Robison.'},
    { url: 'media/music/protectHisSmileWinstonWaaa.wav', name: 'protected smile', desc: 'Anime but without that trash shit.'},
    { url: 'media/music/SesameMochi.wav', name: 'sesame mochi', desc: 'I was living with my dear freind, who I love very much. This song is about them.'},
    { url: 'media/music/shityrandom but piano good.wav', name: 'random', desc: 'Things will get better, keep it togethor.'},
    { url: 'media/music/snailSNANS.wav', name: 'snail snans', desc: 'The artist \'Snail\'s house\' inspired me here.'},
    { url: 'media/music/SwingSetsAndSelfHate.wav', name: 'swing set self', desc: 'I wanna collab with a rapper.'},
    { url: 'media/music/trytoAnimation.wav', name: 'animation', desc: 'I here elements of the minecraft soundtrack coming through in this one.'},
    { url: 'media/music/ttrancedang.wav', name: 'dang', desc: 'A homage to the game \'dangan rompa\''},
    { url: 'media/music/wagoopdang.wav', name: 'wagoopdang', desc: 'None of my songs go anywhere really ;_)'},
    { url: 'media/music/zezoozle.wav', name: 'zezoozle', desc: 'This is the best one.'},
],'.music-title','.music-desc' ); 