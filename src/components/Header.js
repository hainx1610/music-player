import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header ">
      <span>{currentTrackName}</span>
    </div>
  );
}

export default Header;
