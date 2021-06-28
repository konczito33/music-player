import Song from './components/Song';
import Player from './components/Player';
import album from './album';
import Library from './components/Library';
import Nav from './components/Nav';
import './styles/app.scss';
import { useState, useRef } from 'react';

function App() {
  //refs
  const audioRef = useRef(null);

  //state
  const [songs, setSongs] = useState(album());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSonginfo] = useState({
    currentTime: 0,
    duration: null,
    animationPercentage: 0,
  });
  let [currentRotate, setCurrentRotate] = useState(0);
  const [actualIndex, setActualIndex] = useState(0);
  const [libraryStatus, setLibraryStatus] = useState(false);
  //handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate percantege
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100,
    );
    setSonginfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
    rotateHandler();
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  const rotateHandler = () => {
    setInterval(() => {
      setCurrentRotate((currentRotate += 1));
      console.log('working', currentRotate);
    }, 1000);
  };
  return (
    <div className={`App ${libraryStatus ? 'library-transition' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} currentRotate={currentRotate} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSonginfo={setSonginfo}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        currentSong={currentSong}
        libraryStatus={libraryStatus}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
