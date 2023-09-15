import Progress from './Progress.jsx';
import React from 'react';

function GameHeader({step, finishedItems, images}){
    return(
      <>
      <Progress finishedItems={finishedItems} images={images}/>
      <p className="progress-description">Открыто <span>{finishedItems.length / 2}</span> / <span>{images.length  / 2}</span></p>
      <div className="steps">{step} шаг</div>
      </>
    );
  }
export default GameHeader;