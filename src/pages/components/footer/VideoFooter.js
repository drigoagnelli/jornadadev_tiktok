import React from "react";
import "./videoFooter.css";
import vinil from "./imagens/vinil.png"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@drigoagnelli Ebac</h3>
        <p>Descrição do Vídeo</p>
        <div className="videoFooter__music"> 
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoFooterMusic__text">
          <p>Titulo da musica</p>
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
};
