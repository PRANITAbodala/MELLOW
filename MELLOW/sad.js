const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:`Kabira<br>
        <div class="subtitle">Pritam,Tochi Raina,Rekha Bharadwaj</div>`,
        poster: "img1/1.jpg"
    },
    {
        id:'2',
        songName:`Musafir<br>
        <div class="subtitle">Palash Muchhal,Atif Aslam,Palak Muchhal</div>`,
        poster: "img1/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Tera Zikr<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "img1/3.jpg",
    },
    {
        id:"4",
        songName: `phir Le Aaya Dil<br>
        <div class="subtitle">Pritam,Arijit Singh</div>`,
        poster: "img1/4.jpg",
    },
    {
        id:"5",
        songName: `Le Ja Jakhma Tere<br>
        <div class="subtitle">Armaan Malik</div>`,
        poster: "img1/5.jpg",
    },
    {
        id:"6",
        songName: `Kaise Mujhe<br>
        <div class="subtitle">Benny Dayal,Shreya Ghoshal</div>`,
        poster: "img1/6.jpg",
    },
    {
        id:"7",
        songName: `Abhi Mujh Mein kahin<br>
        <div class="subtitle">Ajay-Atul,Sonu Nigam</div>`,
        poster: "img1/7.jpg",
    },
    {
        id:"8",
        songName: `Dil De Diya Hai<br>
        <div class="subtitle">Anand Raj Anand</div>`,
        poster: "img1/8.jpg",
    },
    {
        id:"9",
        songName: `Tujhe Bhula Diya<br>
        <div class="subtitle">Mohit Chauhan,Shekhar Ravjiani,Shruti Pathak</div>`,
        poster: "img1/9.jpg",
    },
    {
        id:"10",
        songName: `Jag Soona Soona Lage<br>
        <div class="subtitle">Rahat fateh Ali Khan,Richa Sharma</div>`,
        poster: "img1/10.jpg",
    },
    {
        id:"11",
        songName: `Main Dhoondne ko Zamaane Mein<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img1/11.jpg",
    },
    {
        id:"12",
        songName: `Baaton Ko Teri<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img1/12.jpg",
    },
    {
        id:"13",
        songName: `Channa Mereya-(sad version)<br>
        <div class="subtitle">Pritam,Arijit Singh</div>`,
        poster: "img1/13.jpg",
    },
    {
        id:"14",
        songName: `Daayre<br>
        <div class="subtitle">Pritam,Arijit Singh</div>`,
        poster: "img1/14.jpg",
    },
    {
        id:"15",
        songName: `Jaise Savan<br>
        <div class="subtitle">Tanishk Bagchi,Zahrah S Khan</div>`,
        poster: "img1/15.jpg",
    },
    {
        id:"16",
        songName: `Jeena Jeena<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img1/16.jpg",
    },
    {
        id:"17",
        songName: `Mann Bharryaa 2.0<br>
        <div class="subtitle">B Praak</div>`,
        poster: "img1/17.jpg",
    },
    {
        id:"18",
        songName: `Main Rahoon Ya Na Rahoon<br>
        <div class="subtitle">Amaal Malik,Armaan Malik,Rashmi Virag</div>`,
        poster: "img1/18.jpg",
    },
    {
        id:"19",
        songName: `Tujhe Kitna Chahein Aur<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img1/19.jpg",
    },
    {
        id:"20",
        songName: `Bekhayali<br>
        <div class="subtitle">Sachet Tandon,Sachet-Parampara</div>`,
        poster: "img1//20.jpg",
    },
    {
        id:"21",
        songName: `Channa Mereya<br>
        <div class="subtitle">Pritam,Arijit Singh</div>`,
        poster: "img1/21.jpg",
    },
    {
        id:"22",
        songName: `Duaa<br>
        <div class="subtitle">Nandini Srikar,Arijt Singh</div>`,
        poster: "img1/22.jpg",
    },
    {
        id:"23",
        songName: `Pachtaoge<br>
        <div class="subtitle">Arijit Singh,B Praak</div>`,
        poster: "img1/23.jpg",
    },
    {
        id:"24",
        songName: `Roke Na Ruke Naina<br>
        <div class="subtitle">Arijit singh</div>`,
        poster: "img1/24.jpg",
    },
    {
        id:"25",
        songName: `Kalank Title Track<br>
        <div class="subtitle">Pritam,Arijit Singh</div>`,
        poster: "img1/25.jpg",
    },
    {
        id:"26",
        songName: `Kal Ho Na Ho<br>
        <div class="subtitle">Shankar-Ehsaan-Loy,Sonu Nigam</div>`,
        poster: "img1/26.jpg",
    },
    {
        id:"27",
        songName: `Agar Tum Sath Ho<br>
        <div class="subtitle">Alka Yagnik,Arijit Singh</div>`,
        poster: "img1/27.jpg",
    },
    {
        id:"28",
        songName: `Ae Dil Hai Mushkil Title Track<br>
        <div class="subtitle">Pritam,Arijit Singh</div>`,
        poster: "img1/28.jpg",
    },
    {
        id:"29",
        songName: `Hamari Adhuri Kahani Title Track<br>
        <div class="subtitle">Jeet Ganguli,Arijit Singh</div>`,
        poster: "img1/29.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio1/${index}.mp3`;
        poster_master_play.src =`img1/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio1/${index}.mp3`;
    poster_master_play.src =`img1/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio1/${index}.mp3`;
    poster_master_play.src =`img1/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})