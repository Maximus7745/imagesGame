import React from 'react';

  function Card({image, isFinished = false, isVisible = true, onHardClick}){
    const className = `card ${isFinished ? 'card-finished' : ''}
    ${isVisible ? 'card-show' : ''}`;
    const content = <img src={image.url} width="204" height="144" alt={image.description}/>;
    const handleClick = () => {
      if(isFinished){
        return;
      }
      onHardClick(image.id);
    };
  
    return(
    <li onClick={handleClick} className={className}>
      {content}
    </li>
    );
  }
export default Card;