import "./App.css";
import React from "react";
import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import Header from "./components/Header";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
