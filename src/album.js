import { v4 as uuid } from 'uuid';

const album = () => {
  return [
    {
      artist: 'Ian Ewing',
      songName: 'Cambria',
      songImage:
        'https://chillhop.com/wp-content/uploads/2020/07/50758f405d2aba9cd6e8c4e6cfce44e4d9893714-1024x1024.jpg',
      id: uuid(),
      colors: ['#FA6563', '#22182B'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8785',
    },
    {
      artist: 'Ian Ewing',
      songName: 'Midnight',
      songImage:
        'https://chillhop.com/wp-content/uploads/2020/07/50758f405d2aba9cd6e8c4e6cfce44e4d9893714-1024x1024.jpg',
      id: uuid(),
      colors: ['#FA6563', '#22182B'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=2430',
    },
    {
      artist: 'Ian Ewing',
      songName: 'Like I Am',
      songImage:
        'https://chillhop.com/wp-content/uploads/2020/07/50758f405d2aba9cd6e8c4e6cfce44e4d9893714-1024x1024.jpg',
      id: uuid(),
      colors: ['#FA6563', '#22182B'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7964',
    },
    {
      artist: 'mommy, Sleepy Fish',
      songName: 'travelbag',
      songImage:
        'https://i.scdn.co/image/ab67616d0000b273e61a3d49a9256ceb24892f73',
      id: uuid(),
      colors: ['#5E91D3', '#FEFFFA'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19058',
    },
    {
      artist: 'mommy, Sleepy Fish',
      songName: 'sozu',
      songImage:
        'https://i.scdn.co/image/ab67616d0000b273e61a3d49a9256ceb24892f73',
      id: uuid(),
      colors: ['#5E91D3', '#FEFFFA'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19062',
    },
    {
      artist: 'mommy, Sleepy Fish',
      songName: 'exits',
      songImage:
        'https://i.scdn.co/image/ab67616d0000b273e61a3d49a9256ceb24892f73',
      id: uuid(),
      colors: ['#5E91D3', '#FEFFFA'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19066',
    },
    {
      artist: 'Middle School, Henry Gritton',
      songName: 'Solstice',
      songImage:
        'https://i.scdn.co/image/ab67616d0000b27382a863c04b0f7d55c8afed01',
      id: uuid(),
      colors: ['#176243', '#FBE3B3'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=16175',
    },
    {
      artist: 'xander., Blue Wednesday',
      songName: 'Evening Stroll',
      songImage:
        'https://i.scdn.co/image/ab67616d0000b27382a863c04b0f7d55c8afed01',
      id: uuid(),
      colors: ['#176243', '#FBE3B3'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=16178',
    },
    {
      artist: 'Misha',
      songName: 'Talk ',
      songImage:
        'https://i.scdn.co/image/ab67616d0000b27382a863c04b0f7d55c8afed01',
      id: uuid(),
      colors: ['#176243', '#FBE3B3'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=16226',
    },
  ];
};

export default album;
