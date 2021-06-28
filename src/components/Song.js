const Song = ({ currentSong, currentRotate }) => {
  const { songImage, artist, songName } = currentSong;
  return (
    <div className="song-container">
      <img
        style={{
          transform: `rotate(${currentRotate})`,
        }}
        alt={currentSong.songName}
        src={songImage}
      ></img>
      <h1>{songName}</h1>
      <h3>{artist}</h3>
      <h4>Siemanko</h4>
    </div>
  );
};

export default Song;
