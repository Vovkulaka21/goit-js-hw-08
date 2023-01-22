import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const vimeoPlayer = document.querySelector('iframe');
const player = new Player(vimeoPlayer);

function catchTime({ seconds }) {

  localStorage.setItem('videoplayer-current-time', seconds);

};


player.on('timeupdate', throttle(catchTime, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};
