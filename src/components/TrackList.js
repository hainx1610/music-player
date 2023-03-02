import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <div className="track-list">
      {trackList.map((track, index) => (
        <button
          className="strack-btn"
          key={index}
          onClick={() => {
            playTrack(index);
          }}
        >
          <p>{track.name}</p>
        </button>
      ))}
    </div>
  );
};

export default TrackList;
