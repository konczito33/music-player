import LibrarySong from './LibrarySong';
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
  libraryStatus,
  setIsPlaying,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'library-active' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            songs={songs}
            song={song}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            currentSong={currentSong}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
