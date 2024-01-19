console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Salaam-E-Ishq", filePath: "JavaScript/1.mp3" , coverPath: "JavaScript/cover1.jpg"},
    {songName: "Ishq Jaisa Kuch", filePath: "JavaScript/2.mp3" , coverPath: "JavaScript/cover2.jpg"},
    {songName: "Chaleya", filePath: "JavaScript/3.mp3" , coverPath: "JavaScript/cover3.jpg"},
    {songName: "O Maahi", filePath: "JavaScript/4.mp3" , coverPath: "JavaScript/cover4.jpg"},
    {songName: "Lutt Putt Gyae", filePath: "JavaScript/5.mp3" , coverPath: "JavaScript/cover5.jpg"},
    {songName: "Sher Khul Gaye", filePath: "JavaScript/6.mp3" , coverPath: "JavaScript/cover6.jpg"},   
]
songItems.forEach((element , i)=>{
     element.getElementsByTagName("img")[0],src= songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText= songs[i].songName;

})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
       }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;


    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
          //update Seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
        myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllPlay();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = `songs/${songIndex +1}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex >= 5){
    songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex <= 0){
    songIndex = 0;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
})