import Player from '@vimeo/player';

const player = document.querySelector('#vimeo-player');

const iframePlayer = new Player(player);

iframePlayer.on('timeupdate', function (time) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(time.seconds)
  );
});

const serializedState = localStorage.getItem('videoplayer-current-time');
serializedState === null ? undefined : JSON.parse(serializedState);

iframePlayer.setCurrentTime(Nunmer(serializedState));
