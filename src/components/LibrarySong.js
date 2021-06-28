const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
  setIsPlaying,
}) => {
  const { songImage, artist, songName } = song;
  const selectSongHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div
      onClick={selectSongHandler}
      className={`library-song ${song.id === currentSong.id ? 'selected' : ''}`}
    >
      <img alt={songName} src={songImage}></img>
      <div className="library-song-desc">
        <h3>{songName}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
