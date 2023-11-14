const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:`Chaiyya Chaiyya<br>
        <div class="subtitle">Sukhwindar Singh,Sapna Awasthi</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Morani banake<br>
        <div class="subtitle">Guru Randhawa,Neha kakkar,Tanishk Bagchi,Punjabi MC</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Tum Hi Ho Bandhu <br>
        <div class="subtitle"> Neeraj Shridhar,Kavita Seth</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Afghan Jalebi<br>
        <div class="subtitle">Pritam,Akhtar Criminal</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Tumase Hi<br>
        <div class="subtitle">Pritam,Mohit Chauhan</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Kabhi Kabhi Aaditi<br>
        <div class="subtitle">Rashid Ali</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Humma Song<br>
        <div class="subtitle">A.R.Rahaman,Badshah,Tanishk Bagchi,Shashaa Tirupati,Jubin Nautiyal</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Senorita<br>
        <div class="subtitle">Farhan Akhtar,Hritik Roshan,Abhay Deol,Mariya Del Mar Fernandez</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Masti Ki Pathshala<br>
        <div class="subtitle">A.R.Rahman,Naresh Iyer,Mohammed Aslam</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Pani Da Rang<br>
        <div class="subtitle">Ayushman Khurrana</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Masakali<br>
        <div class="subtitle">Mohit Chauhan</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Dildaara<br>
        <div class="subtitle">Shafqat Amanat Ali</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Give Me Some Sunshine<br>
        <div class="subtitle">Suraj Jagan,Sharman Joshi</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Ye Ishk Hai<br>
        <div class="subtitle">Pritam,Shreya Ghoshal</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Mitawa<br>
        <div class="subtitle">Shankar-Ehsaan-Loy,Shankar mahadevan,Caralisa Monteiro,Shafqat Amanat Ali</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `Key Sera Sera<br>
        <div class="subtitle">Shankar Mahadevan,Kavita Krishnamurthy</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Dhoom Tana <br>
        <div class="subtitle">Shreya Ghoshal,Abhijit</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `Jay Jay Shivshankar<br>
        <div class="subtitle">Vishal Dadlani,Benny Dayal</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `Sooraj Ki Bahon Mein<br>
        <div class="subtitle">Dominique Cerejo,Clinton Cerejo,Loy Mendonsa</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `Dance Ka Bhoot<br>
        <div class="subtitle">Pritam,Arijit Singh,Amitabh Bhattacharya</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Rangisari<br>
        <div class="subtitle">Kanishk Seth,Kavita Seth</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `Cutiepie<br>
        <div class="subtitle">Pritam,Pardeep Singh Sran,Nakash Aziz</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Kesariya(dance mix)<br>
        <div class="subtitle">Pritam,Shashwat Singh,Antara Mitra,Arijit Singh</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `Deva Deva<br>
        <div class="subtitle">Pritam,Arijit singh,Amitabh Bhattacharya</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `Hosana<br>
        <div class="subtitle">A.R.Rahman,Leon D'souza,Suzanne D'Mello</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Matargashti<br>
        <div class="subtitle">Mohit Chauhan</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `Love You Zindagi<br>
        <div class="subtitle">Amit Trivedi,Jasleen Royal</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Patola<br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Ghungaroo<br>
        <div class="subtitle">Vishal-Shekhar,Arijit Singh,Shilpa Rao,Kumaar</div>`,
        poster: "img/29.jpg",
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
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
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