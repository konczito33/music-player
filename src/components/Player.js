import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSonginfo,
  songs,
  setCurrentSong,
}) => {
  const buttonSize = '2x';
  //event handlers
  const playSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSonginfo({ ...songInfo, currentTime: e.target.value });
  };
  const stopWhileDragingHandler = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };
  const skipSongHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'back') {
      await setCurrentSong(
        songs[(currentIndex - 1 + songs.length) % songs.length],
      );
    }
    if (direction === 'forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.colors[0]}, ${currentSong.colors})`,
          }}
          className="track"
        >
          <input
            value={songInfo.currentTime}
            onInput={stopWhileDragingHandler}
            type="range"
            max={songInfo.duration || 0}
            min={0}
            onChange={dragHandler}
          />
          <div
            style={{
              transform: `translateX(${songInfo.animationPercentage}%)`,
            }}
            className="animate-track"
          ></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <button
          onClick={() => {
            skipSongHandler('back');
          }}
          className="control-button skip-back"
        >
          <FontAwesomeIcon
            className="skip-back-i"
            size={buttonSize}
            icon={faAngleLeft}
          />
        </button>
        <button onClick={playSong} className="control-button play">
          <FontAwesomeIcon
            className="play-i"
            size={buttonSize}
            icon={isPlaying ? faPause : faPlay}
          />
        </button>
        <button className="control-button skip-forward">
          <FontAwesomeIcon
            onClick={() => {
              skipSongHandler('forward');
            }}
            className="skip-forward-i"
            size={buttonSize}
            icon={faAngleRight}
          />
        </button>
      </div>
    </div>
  );
};

export default Player;
