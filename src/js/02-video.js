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

iframePlayer.setCurrentTime(Number(serializedState));

// import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('timeupdate', onPlay);

// function onPlay(data) {
//   const name = 'videoplayer-current-time';
//   const time = data.seconds;
//   saveTolS(name, time);
// }
// const newTime = Number(getFromLS('videoplayer-current-time'));
// player.setCurrentTime(newTime);

// function saveTolS(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// function getFromLS(key) {
//   const data = localStorage.getItem(key);
//   try {
//     return JSON.parse(data);
//   } catch {
//     return data;
//   }
// }
