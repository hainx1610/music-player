import React, { useState, createContext } from "react";
import Track1 from "../mp3/track1.mp3";
import Track2 from "../mp3/track2.mp3";
import Track3 from "../mp3/track3.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "A Small Miracle",
      file: Track1,
    },
    {
      name: "Dark Mystery",
      file: Track2,
    },
    {
      name: "Risk",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
