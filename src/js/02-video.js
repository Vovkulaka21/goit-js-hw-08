import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const vimeoPlayer = document.querySelector('iframe');
const player = new Player(vimeoPlayer);

function catchTimeWatch(data) {
  const saveTime = JSON.stringify(data);
  localStorage.setItem('videoplayer-current-time', saveTime);
}

player.on('timeupdate', throttle(catchTimeWatch, 1000));

const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(currentTime.seconds);
