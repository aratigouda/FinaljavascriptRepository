 const myPlay = document.querySelector("#play")
 const myAudio = document.querySelector("audio")
 const forward = document.querySelector("#forward")
 const myImg = document.querySelector("img")
 const mySong = document.querySelector("#song")
 const mySinger = document.querySelector("#singer")
 let isAudioPlaying = false

 function playAudio() {
    isAudioPlaying = true
    myAudio.play()
    myPlay.classList.replace("fa-play", "fa-pause")
 }

 function pauseAudio()  {
    isAudioPlaying = false
    myAudio.pause()
    myPlay.classList.replace("fa-pause", "fa-play")
 }
 myPlay.addEventListener("click", function()
{
    if(isAudioPlaying){
        pauseAudio()
    }else{
        playAudio()
    }
})

const songsData = [
    {
        image: "image2.jpg",
        singer: "second singer",
        song: "second song",
        audio: "audio2.mp3"
    },
    {
        image: "image3.jpg",
        singer: "third singer",
        song: "third song",
        audio: "audio3.mp3"
    },
    {
        image: "image4.jpg",
        singer: "fourth singer",
        song: "fourth song",
        audio: "audio4.mp3"
    },

]
let songIndex = 0
forwardIcons.addEventListener("click", function()
    {
        if(songIndex > songsData.length - 1)
        {
            songIndex = 0 
        }
        myImg.src = songsData[songIndex].image
        mySong.textContent = songsData[songIndex].song
        mySinger.textContent = songsData[songIndex].singer
        myAudio.src = songsData[songIndex].audio
        songIndex++
    }
)