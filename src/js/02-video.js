import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = document.querySelector('#vimeo-player');
const serializedState = localStorage.getItem('videoplayer-current-time');
const iframePlayer = new Player(player);

iframePlayer.on(
  'timeupdate',
  throttle(function (time) {
    console.log(time);
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(time.seconds)
    );
  }, 1000)
);

checkParse(serializedState);
iframePlayer.setCurrentTime(Number(checkParse(serializedState)));

function checkParse(state) {
  try {
    return JSON.parse(state);
  } catch (err) {
    console.log(err);
  }
}
