const musicContainer = document.getElementById('music_container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress_container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

//Song titles
const songs = ['Crank_it_Up', 'Beep_Beep_Song'];

//Keep track of songs
let songIndex = 1;

//Initially load song details into DOM

loadSong(songs[songIndex]);

//Update song details

function loadSong(song) {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpg`;
}
