import React from 'react';

function Progress({finishedItems, images}){
    return(
      <div className="progress-wrapper">
         <div className="progress" style={{width: `${finishedItems.length /  images.length * 100}%`}}></div>
      </div>
    );
  }
export default Progress;