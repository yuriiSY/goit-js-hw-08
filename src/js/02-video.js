import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = document.querySelector('#vimeo-player');

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

let serializedState = localStorage.getItem('videoplayer-current-time');
try {
  serializedState =
    serializedState === null ? undefined : JSON.parse(serializedState);
} catch (err) {
  console.log(err);
}

iframePlayer.setCurrentTime(Number(currentTime));
