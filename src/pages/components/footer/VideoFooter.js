import React from "react";
import "./videoFooter.css";
import vinil from "./imagens/vinil.png"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export const VideoFooter = ({name, description, music}) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music"> 
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoFooterMusic__text">
          <p>{music}</p>
          </div>
        </div>
      </div>
      <img 
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src={vinil} 
        />
    </div>
  );
}

export default VideoFooter;
